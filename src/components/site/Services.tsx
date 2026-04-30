import { Camera, Bell, Zap, PhoneCall, Fingerprint } from "lucide-react";
import ServicesCarousel from "./ServicesCarousel";
import Reveal from "./Reveal";
import cftv from "@/assets/services/cftv.jpg";
import alarme from "@/assets/services/alarme.jpg";
import cerca from "@/assets/services/cerca-eletrica.jpg";
import interfonia from "@/assets/services/interfonia.jpg";
import controle from "@/assets/services/controle-acesso.jpg";

const services = [
  { icon: Camera, title: "CFTV", image: cftv, desc: "Câmeras IP e analógicas com gravação em nuvem e visualização remota pelo celular." },
  { icon: Bell, title: "Alarme", image: alarme, desc: "Centrais com sensores de presença, abertura e quebra de vidro com notificação em tempo real." },
  { icon: Zap, title: "Cerca Elétrica", image: cerca, desc: "Proteção perimetral com choque pulsativo, alarme integrado e instalação dentro das normas." },
  { icon: PhoneCall, title: "Interfonia", image: interfonia, desc: "Vídeo porteiros com acesso pelo aplicativo, ideal para condomínios e empresas." },
  { icon: Fingerprint, title: "Controle de Acesso", image: controle, desc: "Biometria, cartões RFID, fechaduras digitais e catracas para gerenciar entradas e saídas." },
];

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/60 transition-smooth shadow-elegant hover-lift h-full">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-primary/95 backdrop-blur flex items-center justify-center shadow-gold">
                    <s.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
