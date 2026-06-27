-- WH Guide Australia - seed all forum categories
-- Apply in the Supabase SQL editor AFTER 0004_fix_feedback_and_profiles.sql.
--
-- Background: the community pages now read categories from the DB. Only
-- "その他" had been inserted (0004), so the other genres disappeared from the
-- UI. This seeds the full category list. Idempotent by slug, and updates the
-- name/description/sort_order for existing rows so ordering stays consistent.

insert into public.forum_categories (name, slug, description, sort_order) values
  ('家探し', 'housing', 'シェアハウスや内見情報を共有', 10),
  ('仕事探し', 'jobs', '求人、面接、履歴書の相談', 20),
  ('ファームジョブ', 'farm', '地域や時給、体験談', 30),
  ('車・レンタカー', 'cars', '車購入・売買・トラブル相談', 40),
  ('ビザ', 'visa', 'ビザ申請や条件の質問', 50),
  ('セカンドビザ', 'second-visa', 'Specified Workや申請の情報', 60),
  ('ギグワーク', 'gig', 'Uber Eats・DoorDashの相談', 70),
  ('税金', 'tax', 'TFN・ABN・確定申告の相談', 80),
  ('生活相談', 'life', '現地生活の困りごと', 90),
  ('売ります・買います', 'buy-sell', '不用品の売買', 100),
  ('旅行', 'travel', '国内旅行や観光情報', 110),
  ('英語学習', 'english', '語学学校・勉強法・英語の悩み', 120),
  ('健康・医療', 'health', '病院・保険・メンタルヘルスの相談', 130),
  ('恋愛・出会い', 'relationships', '友達作り・恋愛・コミュニティ', 140),
  ('雑談', 'general', '自由な雑談スペース', 150),
  ('その他', 'other', 'どのジャンルにも当てはまらない投稿', 999)
on conflict (slug) do update
  set name = excluded.name,
      description = excluded.description,
      sort_order = excluded.sort_order;
