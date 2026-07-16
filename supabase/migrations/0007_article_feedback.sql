-- WH Guide Australia - article helpfulness votes
-- Apply in the Supabase SQL editor AFTER 0006_comment_replies_edited.sql.
--
-- Stores 👍/👎 votes from the "この記事は役に立ちましたか？" widget at the end
-- of each guide article. Free-text requests still go to feedback_requests.

create table if not exists article_feedback (
  id uuid primary key default gen_random_uuid(),
  slug text not null,
  helpful boolean not null,
  user_id uuid references profiles(id),
  created_at timestamp with time zone default now()
);

create index if not exists article_feedback_slug_idx on article_feedback (slug);

alter table article_feedback enable row level security;

-- Anyone (including anonymous visitors) may submit a vote.
drop policy if exists "Anyone can vote on articles" on article_feedback;
create policy "Anyone can vote on articles" on article_feedback
  for insert
  with check (user_id is null or auth.uid() = user_id);

-- Only moderators can read the aggregated votes.
drop policy if exists "Moderators read article feedback" on article_feedback;
create policy "Moderators read article feedback" on article_feedback
  for select
  using (public.is_moderator());
