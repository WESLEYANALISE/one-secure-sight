import { Clock, Award, ShieldCheck, Wrench, Headphones, Cpu } from "lucide-react";

const items = [
  { icon: Clock, title: "Atendimento 24h", desc: "Suporte de emergência todos os dias do ano." },
  { icon: Award, title: "Técnicos Certificados", desc: "Profissionais treinados pelos principais fabricantes." },
  { icon: ShieldCheck, title: "Garantia Total", desc: "Equipamentos e mão de obra com garantia." },
  { icon: Wrench, title: "Projeto Sob Medida", desc: "Visita técnica gratuita para dimensionar a solução ideal." },
  { icon: Headphones, title: "Suporte Humano", desc: "Você fala com pessoas, não com robôs." },
  { icon: Cpu, title: "Tecnologia de Ponta", desc: "Câmeras IP 4K, IA, reconhecimento facial e nuvem." },
];

const Differentials = () => {
  return (
    <section id="diferenciais" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Diferenciais</span>
          <div className="gold-divider mx-auto my-4" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Por que escolher a <span className="text-gradient-gold">One Security</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="flex gap-4 p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-smooth"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center shadow-gold">
                  <it.icon className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-1">{it.title}</h3>
                <p className="text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
