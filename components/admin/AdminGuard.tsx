import { Container } from "@/components/layout/Container";

export function AdminGuard({ message }: { message: string }) {
  return (
    <Container className="py-16">
      <div className="mx-auto max-w-md rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center">
        <h1 className="text-xl font-bold text-amber-900">アクセス制限</h1>
        <p className="mt-2 text-sm text-amber-800">{message}</p>
      </div>
    </Container>
  );
}
