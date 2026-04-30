const steps = [
  { n: "01", title: "Contato", desc: "Você nos chama pelo WhatsApp ou formulário e conta o que precisa." },
  { n: "02", title: "Visita Técnica", desc: "Avaliamos o local sem custo e dimensionamos o projeto ideal." },
  { n: "03", title: "Instalação", desc: "Equipe especializada executa o projeto com agilidade e organização." },
  { n: "04", title: "Suporte", desc: "Acompanhamento pós-venda e manutenção sempre que precisar." },
];

const Process = () => {
  return (
    <section id="processo" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Como Trabalhamos</span>
          <div className="gold-divider mx-auto my-4" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Um processo <span className="text-gradient-gold">simples e transparente</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="relative p-8 rounded-2xl bg-card border border-border">
              <div className="font-display text-5xl font-extrabold text-primary/30 mb-4">{s.n}</div>
              <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
