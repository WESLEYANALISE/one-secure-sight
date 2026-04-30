import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight, Wrench, Camera, Bell, Zap, PhoneCall, Fingerprint } from "lucide-react";
import hero from "@/assets/hero.jpg";
import heroMobile from "@/assets/hero-mobile.jpg";
import { COMPANY } from "@/config/company";
import QuoteDialog from "./QuoteDialog";
import AnimatedCounter from "./AnimatedCounter";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <picture>
          <source media="(max-width: 768px)" srcSet={heroMobile} />
          <img
            src={hero}
            alt="Câmera de segurança CFTV em ambiente noturno"
            className="w-full h-full object-cover scale-105"
            width={1820}
            height={1024}
            fetchPriority="high"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(45_95%_55%/0.15),transparent_60%)]" />
      </div>

      <div className="container relative z-10 pt-32 pb-20 sm:pt-36 sm:pb-28">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 max-w-full px-2.5 py-1 sm:px-4 sm:py-2 rounded-full border border-primary/40 bg-primary/10 backdrop-blur text-primary text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-5 sm:mb-6 animate-glow">
            <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="truncate">Empresa certificada</span>
          </div>

          <h1 className="font-display text-[2rem] sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] mb-5 sm:mb-6">
            Segurança eletrônica que <span className="shimmer-text">protege o que importa</span>.
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mb-7 sm:mb-8 leading-relaxed">
            CFTV, alarmes, cerca elétrica, interfonia e controle de acesso. Projetos sob medida
            para residências, comércios e indústrias com tecnologia de ponta e suporte 24h.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <QuoteDialog>
              <Button
                size="lg"
                className="btn-shine relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary-glow shadow-gold font-semibold text-base h-14 px-8 group"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  Solicitar orçamento
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Button>
            </QuoteDialog>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary hover:text-primary-foreground font-semibold text-base h-14 px-8"
            >
              <a href="#servicos">
                <Wrench className="w-5 h-5" />
                Nossos serviços
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-2 mt-6 text-xs sm:text-sm text-muted-foreground">
            <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" />
            <span>Atendimento rápido, instalação profissional e garantia em todos os serviços.</span>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12 max-w-lg pt-8 border-t border-border/50">
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-primary leading-none">
                +<AnimatedCounter end={10} />
              </div>
              <div className="text-[11px] sm:text-xs text-muted-foreground mt-2">anos de experiência</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-primary leading-none">
                +<AnimatedCounter end={1500} />
              </div>
              <div className="text-[11px] sm:text-xs text-muted-foreground mt-2">clientes atendidos</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-primary leading-none">24h</div>
              <div className="text-[11px] sm:text-xs text-muted-foreground mt-2">suporte técnico</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services marquee */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-border/50 bg-background/60 backdrop-blur">
        <div className="container py-4 overflow-hidden mask-fade-x">
          <div className="flex gap-10 animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, k) => (
              <div key={k} className="flex gap-10 items-center">
                {[
                  { icon: Camera, label: "CFTV / Câmeras de Segurança" },
                  { icon: Bell, label: "Alarme Monitorado" },
                  { icon: Zap, label: "Cerca Elétrica" },
                  { icon: PhoneCall, label: "Interfonia / Vídeo Porteiro" },
                  { icon: Fingerprint, label: "Controle de Acesso" },
                  { icon: Wrench, label: "Manutenção e Suporte 24h" },
                ].map(({ icon: Icon, label }) => (
                  <span
                    key={label + k}
                    className="inline-flex items-center gap-2 font-display font-bold text-sm tracking-[0.15em] uppercase text-muted-foreground/80"
                  >
                    <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                    {label}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
