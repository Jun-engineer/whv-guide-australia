-- WH Guide Australia - avoid leaking email in default display name
-- Apply in the Supabase SQL editor AFTER 0002_moderation_phone_ban.sql.
--
-- Problem: handle_new_user() fell back to the email local-part
-- (split_part(new.email, '@', 1)) when no display_name metadata was present.
-- For Google/OAuth sign-ups this exposed part of the user's email address as
-- their public display name. This migration prefers the OAuth-provided name and
-- otherwise generates a neutral, non-identifying default.

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  resolved_name text;
begin
  resolved_name := coalesce(
    nullif(new.raw_user_meta_data ->> 'display_name', ''),
    nullif(new.raw_user_meta_data ->> 'full_name', ''),
    nullif(new.raw_user_meta_data ->> 'name', ''),
    'ユーザー' || substr(replace(new.id::text, '-', ''), 1, 6)
  );

  insert into public.profiles (id, display_name, phone, role, status)
  values (
    new.id,
    resolved_name,
    coalesce(new.phone, new.raw_user_meta_data ->> 'phone'),
    'user',
    'active'
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

-- Repair existing profiles whose display_name currently equals their email
-- local-part (i.e. leaked from the previous default). Replace with the
-- OAuth-provided name when available, otherwise a neutral generated name.
update public.profiles p
set display_name = coalesce(
      nullif(u.raw_user_meta_data ->> 'full_name', ''),
      nullif(u.raw_user_meta_data ->> 'name', ''),
      'ユーザー' || substr(replace(p.id::text, '-', ''), 1, 6)
    ),
    updated_at = now()
from auth.users u
where u.id = p.id
  and u.email is not null
  and p.display_name = split_part(u.email, '@', 1);
