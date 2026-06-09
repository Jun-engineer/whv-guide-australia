-- WH Guide Australia - initial schema and RLS policies
-- Apply in the Supabase SQL editor or via the Supabase CLI.

-- =========================================================
-- Tables
-- =========================================================

create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null,
  avatar_url text,
  bio text,
  role text not null default 'user',
  status text not null default 'active',
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create table if not exists articles (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  category text not null,
  description text,
  content text not null,
  thumbnail_url text,
  published boolean default false,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create table if not exists forum_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text,
  sort_order integer default 0,
  created_at timestamp with time zone default now()
);

create table if not exists forum_posts (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references forum_categories(id),
  user_id uuid references profiles(id),
  title text not null,
  body text not null,
  is_hidden boolean default false,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create table if not exists forum_comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid references forum_posts(id) on delete cascade,
  user_id uuid references profiles(id),
  body text not null,
  is_hidden boolean default false,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create table if not exists reports (
  id uuid primary key default gen_random_uuid(),
  reporter_id uuid references profiles(id),
  target_type text not null,
  target_id uuid not null,
  reason text not null,
  status text not null default 'pending',
  created_at timestamp with time zone default now(),
  resolved_at timestamp with time zone
);

create table if not exists feedback_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  type text not null,
  page_url text,
  title text not null,
  body text not null,
  status text not null default 'pending',
  admin_note text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create table if not exists likes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  post_id uuid references forum_posts(id) on delete cascade,
  created_at timestamp with time zone default now(),
  unique (user_id, post_id)
);

-- =========================================================
-- Helper functions
-- =========================================================

create or replace function public.is_moderator()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from profiles
    where id = auth.uid() and role in ('moderator', 'admin')
  );
$$;

create or replace function public.is_active_user()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from profiles
    where id = auth.uid() and status = 'active'
  );
$$;

-- =========================================================
-- Enable RLS
-- =========================================================

alter table profiles enable row level security;
alter table articles enable row level security;
alter table forum_categories enable row level security;
alter table forum_posts enable row level security;
alter table forum_comments enable row level security;
alter table reports enable row level security;
alter table feedback_requests enable row level security;
alter table likes enable row level security;

-- =========================================================
-- profiles
-- =========================================================

create policy "Profiles are public" on profiles
  for select using (true);

create policy "Users update own profile" on profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);

create policy "Moderators manage profiles" on profiles
  for update using (public.is_moderator());

-- =========================================================
-- articles (public read, moderator write)
-- =========================================================

create policy "Published articles are public" on articles
  for select using (published or public.is_moderator());

create policy "Moderators manage articles" on articles
  for all using (public.is_moderator()) with check (public.is_moderator());

-- =========================================================
-- forum_categories (public read)
-- =========================================================

create policy "Forum categories are public" on forum_categories
  for select using (true);

create policy "Moderators manage categories" on forum_categories
  for all using (public.is_moderator()) with check (public.is_moderator());

-- =========================================================
-- forum_posts
-- =========================================================

create policy "Posts are public" on forum_posts
  for select using (not is_hidden or public.is_moderator());

create policy "Active users create posts" on forum_posts
  for insert with check (auth.uid() = user_id and public.is_active_user());

create policy "Authors update own posts" on forum_posts
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Moderators manage posts" on forum_posts
  for update using (public.is_moderator());

create policy "Authors delete own posts" on forum_posts
  for delete using (auth.uid() = user_id or public.is_moderator());

-- =========================================================
-- forum_comments
-- =========================================================

create policy "Comments are public" on forum_comments
  for select using (not is_hidden or public.is_moderator());

create policy "Active users create comments" on forum_comments
  for insert with check (auth.uid() = user_id and public.is_active_user());

create policy "Authors update own comments" on forum_comments
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Moderators manage comments" on forum_comments
  for update using (public.is_moderator());

create policy "Authors delete own comments" on forum_comments
  for delete using (auth.uid() = user_id or public.is_moderator());

-- =========================================================
-- reports
-- =========================================================

create policy "Authenticated users create reports" on reports
  for insert with check (auth.uid() = reporter_id);

create policy "Moderators read reports" on reports
  for select using (public.is_moderator());

create policy "Moderators update reports" on reports
  for update using (public.is_moderator());

-- =========================================================
-- feedback_requests
-- =========================================================

create policy "Authenticated users create feedback" on feedback_requests
  for insert with check (auth.uid() = user_id);

create policy "Moderators read feedback" on feedback_requests
  for select using (public.is_moderator());

create policy "Moderators update feedback" on feedback_requests
  for update using (public.is_moderator());

-- =========================================================
-- likes
-- =========================================================

create policy "Likes are public" on likes
  for select using (true);

create policy "Active users like" on likes
  for insert with check (auth.uid() = user_id and public.is_active_user());

create policy "Users remove own likes" on likes
  for delete using (auth.uid() = user_id);
