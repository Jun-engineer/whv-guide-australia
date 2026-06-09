import { Container } from "@/components/layout/Container";

export default function Loading() {
  return (
    <Container className="py-20">
      <div className="mx-auto max-w-md animate-pulse space-y-4">
        <div className="h-8 w-2/3 rounded bg-slate-200" />
        <div className="h-4 w-full rounded bg-slate-200" />
        <div className="h-4 w-5/6 rounded bg-slate-200" />
        <div className="h-40 w-full rounded-2xl bg-slate-200" />
      </div>
    </Container>
  );
}
