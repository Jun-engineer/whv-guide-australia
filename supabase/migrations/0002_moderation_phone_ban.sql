-- WH Guide Australia - moderation & phone-ban support
-- Apply in the Supabase SQL editor AFTER 0001_init.sql.

-- =========================================================
-- 1. profiles: store phone (copied from auth metadata) for moderation
-- =========================================================
alter table profiles add column if not exists phone text;

-- =========================================================
-- 2. Auto-create a profile row when a new auth user signs up.
--    Copies display_name / phone from the sign-up metadata.
-- =========================================================
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, display_name, phone, role, status)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'display_name', split_part(new.email, '@', 1), 'User'),
    coalesce(new.phone, new.raw_user_meta_data ->> 'phone'),
    'user',
    'active'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Keep profiles.phone in sync when a user verifies/changes their phone.
create or replace function public.handle_user_phone_update()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.phone is distinct from old.phone then
    update public.profiles set phone = new.phone, updated_at = now() where id = new.id;
  end if;
  return new;
end;
$$;

drop trigger if exists on_auth_user_phone_updated on auth.users;
create trigger on_auth_user_phone_updated
  after update of phone on auth.users
  for each row execute function public.handle_user_phone_update();

-- =========================================================
-- 3. banned_phones: phone numbers blocked from re-registering
-- =========================================================
create table if not exists banned_phones (
  phone text primary key,
  reason text,
  banned_by uuid references profiles(id),
  created_at timestamp with time zone default now()
);

alter table banned_phones enable row level security;

-- Only moderators can read / manage the ban list.
create policy "Moderators read banned phones" on banned_phones
  for select using (public.is_moderator());

create policy "Moderators manage banned phones" on banned_phones
  for all using (public.is_moderator()) with check (public.is_moderator());

-- =========================================================
-- 4. When a profile is set to 'banned', add its phone to the block list.
-- =========================================================
create or replace function public.handle_profile_ban()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.status = 'banned' and (old.status is distinct from 'banned') and new.phone is not null then
    insert into banned_phones (phone, reason, banned_by)
    values (new.phone, 'profile banned', auth.uid())
    on conflict (phone) do nothing;
  end if;
  return new;
end;
$$;

drop trigger if exists on_profile_banned on profiles;
create trigger on_profile_banned
  after update of status on profiles
  for each row execute function public.handle_profile_ban();

-- =========================================================
-- 5. Public RPC so the sign-up form can check a phone BEFORE registering.
--    SECURITY DEFINER + returns only a boolean (no data leak).
-- =========================================================
create or replace function public.is_phone_banned(check_phone text)
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (select 1 from banned_phones where phone = check_phone);
$$;

grant execute on function public.is_phone_banned(text) to anon, authenticated;
