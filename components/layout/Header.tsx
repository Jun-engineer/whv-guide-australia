import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { HeaderActions } from "@/components/layout/HeaderActions";
import { PrimaryNav } from "@/components/layout/PrimaryNav";
import { primaryNavGroups } from "@/lib/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-sky-100 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo size={36} />
        <PrimaryNav groups={primaryNavGroups} />
        <HeaderActions groups={primaryNavGroups} />
      </Container>
    </header>
  );
}
