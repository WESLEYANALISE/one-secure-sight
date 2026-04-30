import { Button } from "@/components/ui/button";
import { ShieldCheck, MessageCircle } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { COMPANY, whatsappLink } from "@/config/company";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Câmera de segurança CFTV em ambiente noturno"
          className="w-full h-full object-cover"
          width={1536}
          height={1024}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="container relative z-10 pt-28 pb-20">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            <ShieldCheck className="w-4 h-4" />
            {COMPANY.tagline}
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-6">
            Segurança eletrônica que <span className="text-gradient-gold">protege o que importa</span>.
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mb-8">
            CFTV, alarmes, cerca elétrica, interfonia e controle de acesso. Projetos sob medida
            para residências, comércios e indústrias com tecnologia de ponta e suporte 24h.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary-glow shadow-gold font-semibold text-base h-14 px-8"
            >
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary hover:text-primary-foreground font-semibold text-base h-14 px-8"
            >
              <a href="#contato">Solicitar orçamento</a>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-12 max-w-lg">
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-primary">{COMPANY.experience}</div>
              <div className="text-xs text-muted-foreground mt-1">de experiência</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-primary">{COMPANY.clients}</div>
              <div className="text-xs text-muted-foreground mt-1">atendidos</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-primary">24h</div>
              <div className="text-xs text-muted-foreground mt-1">suporte técnico</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
