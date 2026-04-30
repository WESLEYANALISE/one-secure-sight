import Reveal from "./Reveal";

const steps = [
  { n: "01", title: "Contato", desc: "Você nos chama pelo WhatsApp ou formulário e conta o que precisa." },
  { n: "02", title: "Visita Técnica", desc: "Avaliamos o local sem custo e dimensionamos o projeto ideal." },
  { n: "03", title: "Instalação", desc: "Equipe especializada executa o projeto com agilidade e organização." },
  { n: "04", title: "Suporte", desc: "Acompanhamento pós-venda e manutenção sempre que precisar." },
];

const Process = () => {
  return (
    <section id="processo" className="py-16 sm:py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(45_95%_55%/0.05),transparent_60%)]" />
      <div className="container relative">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Como Trabalhamos</span>
            <div className="gold-divider mx-auto my-4" />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
              Um processo <span className="text-gradient-gold">simples e transparente</span>
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          {/* connector line desktop */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/60 transition-smooth hover-lift h-full">
                  <div className="absolute -top-4 left-8 w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center font-display font-extrabold text-primary-foreground shadow-gold">
                    {s.n}
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2 mt-6">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
