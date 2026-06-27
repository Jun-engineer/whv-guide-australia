-- WH Guide Australia - fix feedback RLS, backfill profiles, add "Other" category
-- Apply in the Supabase SQL editor AFTER 0003_display_name_no_email.sql.

-- =========================================================
-- 1. Backfill profiles for any auth user that has no profile row.
--    Forum/comment inserts are gated by public.is_active_user(), which checks
--    for an existing profiles row with status='active'. Users created before
--    the handle_new_user trigger existed (e.g. early Google sign-ups) have no
--    profile row, so their inserts fail RLS with
--    "new row violates row-level security policy".
-- =========================================================
insert into public.profiles (id, display_name, phone, role, status)
select
  u.id,
  coalesce(
    nullif(u.raw_user_meta_data ->> 'display_name', ''),
    nullif(u.raw_user_meta_data ->> 'full_name', ''),
    nullif(u.raw_user_meta_data ->> 'name', ''),
    'ユーザー' || substr(replace(u.id::text, '-', ''), 1, 6)
  ),
  coalesce(u.phone, u.raw_user_meta_data ->> 'phone'),
  'user',
  'active'
from auth.users u
left join public.profiles p on p.id = u.id
where p.id is null;

-- =========================================================
-- 2. Allow feedback/requests to be submitted by anonymous visitors too.
--    The request page is public, but the previous policy required
--    auth.uid() = user_id, which blocks inserts when user_id is NULL.
--    New rule: allow when user_id is NULL (anonymous) OR matches the caller.
-- =========================================================
drop policy if exists "Authenticated users create feedback" on feedback_requests;

create policy "Anyone can create feedback" on feedback_requests
  for insert
  with check (user_id is null or auth.uid() = user_id);

-- =========================================================
-- 3. Add an "Other / その他" forum category (idempotent by slug).
-- =========================================================
insert into public.forum_categories (name, slug, description, sort_order)
select 'その他', 'other', 'どのジャンルにも当てはまらない投稿', 999
where not exists (
  select 1 from public.forum_categories where slug = 'other'
);
