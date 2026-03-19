import AdBanner from "../template/AdBanner";

export default function HeroSection() {
  return (
    <section className="bg-linear-to-br from-neon-pink/10 via-background to-neon-cyan/10 py-12">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Grupos de Ofertas{" "}
            <span className="bg-linear-to-r from-neon-orange via-neon-pink to-neon-cyan bg-clip-text text-transparent">
              Confiáveis
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Encontre os melhores grupos de ofertas com fornecedores verificados.
            Economize com segurança!
          </p>
        </div>

        <AdBanner position="top" className="max-w-4xl mx-auto" />
      </div>
    </section>
  );
}
