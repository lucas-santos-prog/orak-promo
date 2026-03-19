const logo = "/assets/logo.jpeg";
export default function Footer() {
  return (
    <footer className="px-4 lg:px-24 border-t border-border bg-muted/30">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Orak Promo"
              className="h-8 w-8 rounded-lg object-cover"
            />
            <span className="font-semibold bg-linear-to-r from-neon-orange to-neon-cyan bg-clip-text text-transparent">
              Orak Promo
            </span>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Conectando você aos melhores grupos de ofertas com fornecedores
            confiáveis.
          </p>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Orak Promo. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
