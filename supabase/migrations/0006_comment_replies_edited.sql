-- WH Guide Australia - threaded comment replies + edited markers
-- Apply in the Supabase SQL editor AFTER 0005_seed_forum_categories.sql.

-- =========================================================
-- 1. Threaded replies: allow a comment to reference a parent comment.
--    NULL parent = top-level comment. Deleting a parent cascades to replies.
-- =========================================================
alter table public.forum_comments
  add column if not exists parent_comment_id uuid
  references public.forum_comments(id) on delete cascade;

create index if not exists forum_comments_parent_idx
  on public.forum_comments (parent_comment_id);

-- =========================================================
-- 2. Edited markers: record when a post/comment was edited.
--    NULL = never edited. The UI shows "編集済み" when this is set.
-- =========================================================
alter table public.forum_posts
  add column if not exists edited_at timestamp with time zone;

alter table public.forum_comments
  add column if not exists edited_at timestamp with time zone;
