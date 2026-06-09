import Link from "next/link";
import type { ForumCategory } from "@/types/forum";

type CategoryCardProps = {
  category: ForumCategory;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/community/categories/${category.slug}`}
      className="block rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-sky-200"
    >
      <h3 className="font-semibold text-slate-900">{category.name}</h3>
      <p className="mt-1 text-sm text-slate-600">{category.description}</p>
    </Link>
  );
}
