import ServicesCarousel from "./ServicesCarousel";
import Reveal from "./Reveal";

const Services = () => {
  return (
    <section id="servicos" className="py-16 sm:py-24 bg-background">
      <div className="container">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Nossos Serviços</span>
            <div className="gold-divider mx-auto my-4" />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
              Soluções completas em <span className="text-gradient-gold">segurança eletrônica</span>
            </h2>
            <p className="text-muted-foreground mt-4">
              Trabalhamos com as principais marcas do mercado para entregar o sistema ideal para o seu projeto.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ServicesCarousel />
        </Reveal>
      </div>
    </section>
  );
};

export default Services;
