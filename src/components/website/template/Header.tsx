import Image from "next/image";
import Link from "next/link";
const logo = "/assets/logo.jpeg";
export default function Header() {
  return (
    <header className="px-4 lg:px-24 sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Orak Promo"
            className="rounded-lg object-cover"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold bg-linear-to-r from-neon-orange via-neon-pink to-neon-cyan bg-clip-text text-transparent">
            Orak Promo
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Grupos
          </Link>
          <span className="text-xs text-muted-foreground border border-border rounded-full px-3 py-1">
            ✓ Fornecedores Confiáveis
          </span>
        </nav>
      </div>
    </header>
  );
}
