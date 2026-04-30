import { Clock, Award, ShieldCheck, Wrench, Headphones, Cpu } from "lucide-react";
import Reveal from "./Reveal";

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
    <section id="diferenciais" className="py-16 sm:py-24 bg-background">
      <div className="container">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Diferenciais</span>
            <div className="gold-divider mx-auto my-4" />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
              Por que escolher a <span className="text-gradient-gold">One Security</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80}>
              <div className="group flex gap-4 p-6 rounded-xl border border-border bg-card hover:border-primary/60 hover:shadow-gold transition-smooth h-full">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-gold text-primary-foreground flex items-center justify-center shadow-gold group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <it.icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-1">{it.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
