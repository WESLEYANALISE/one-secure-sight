import { Camera, Bell, Zap, PhoneCall, Fingerprint } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "CFTV",
    desc: "Sistemas de monitoramento por câmeras IP e analógicas com gravação em nuvem e visualização remota pelo celular.",
  },
  {
    icon: Bell,
    title: "Alarme",
    desc: "Centrais com sensores de presença, abertura e quebra de vidro, com monitoramento e notificação em tempo real.",
  },
  {
    icon: Zap,
    title: "Cerca Elétrica",
    desc: "Proteção perimetral de alta voltagem com choque pulsativo, alarme integrado e instalação conforme normas.",
  },
  {
    icon: PhoneCall,
    title: "Interfonia",
    desc: "Porteiros eletrônicos e vídeo porteiros com acesso remoto pelo aplicativo, ideal para condomínios e empresas.",
  },
  {
    icon: Fingerprint,
    title: "Controle de Acesso",
    desc: "Biometria, cartões RFID, fechaduras digitais e catracas para gerenciar quem entra e sai do seu ambiente.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Nossos Serviços</span>
          <div className="gold-divider mx-auto my-4" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Soluções completas em <span className="text-gradient-gold">segurança eletrônica</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Trabalhamos com as principais marcas do mercado para entregar o sistema ideal para o seu projeto.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/60 transition-smooth shadow-elegant hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
