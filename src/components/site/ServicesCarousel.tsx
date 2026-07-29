import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Camera, Bell, Zap, PhoneCall, Fingerprint, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import QuoteDialog from "./QuoteDialog";
import cftv from "@/assets/services/cftv.webp";
import alarme from "@/assets/services/alarme.webp";
import cerca from "@/assets/services/cerca-eletrica.webp";
import interfonia from "@/assets/services/interfonia.webp";
import controle from "@/assets/services/controle-acesso.webp";

const slides = [
  {
    icon: Camera,
    title: "CFTV",
    subtitle: "Monitoramento por câmeras",
    image: cftv,
    desc: "Câmeras IP e analógicas com gravação em nuvem e visualização remota pelo celular, 24h por dia.",
    bullets: ["Resolução até 4K Ultra HD", "Visão noturna profissional", "Acesso remoto pelo app"],
  },
  {
    icon: Bell,
    title: "Alarme Monitorado",
    subtitle: "Centrais e sensores",
    image: alarme,
    desc: "Centrais inteligentes com sensores de presença, abertura e quebra de vidro, com notificação em tempo real.",
    bullets: ["Notificação instantânea", "Sensores sem fio", "Integração com câmeras"],
  },
  {
    icon: Zap,
    title: "Cerca Elétrica",
    subtitle: "Proteção perimetral",
    image: cerca,
    desc: "Proteção perimetral de alta voltagem com choque pulsativo, alarme integrado e instalação dentro das normas.",
    bullets: ["Choque pulsativo seguro", "Alarme sonoro integrado", "Instalação NBR conforme"],
  },
  {
    icon: PhoneCall,
    title: "Interfonia",
    subtitle: "Vídeo porteiro inteligente",
    image: interfonia,
    desc: "Porteiros eletrônicos e vídeo porteiros com acesso pelo aplicativo, ideais para residências e condomínios.",
    bullets: ["Atende pelo celular", "Vídeo em alta definição", "Abertura remota da porta"],
  },
  {
    icon: Fingerprint,
    title: "Controle de Acesso",
    subtitle: "Biometria e fechaduras",
    image: controle,
    desc: "Biometria, cartões RFID, fechaduras digitais e catracas para gerenciar quem entra e sai do seu ambiente.",
    bullets: ["Biometria digital", "Cartões e tags RFID", "Relatórios de acesso"],
  },
];

const ServicesCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })],
  );
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollTo = (i: number) => emblaApi?.scrollTo(i);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-border shadow-elegant" ref={emblaRef}>
        <div className="flex items-stretch">
          {slides.map((s, i) => (
            <div key={s.title} className="flex-[0_0_100%] min-w-0">
              <article className="bg-card flex flex-col lg:grid lg:grid-cols-2 lg:items-stretch h-full">
                {/* Imagem: em cima no mobile, à esquerda no desktop */}
                <div className="relative aspect-[16/10] sm:aspect-[21/9] lg:aspect-auto lg:h-full lg:min-h-[380px] lg:max-h-[440px] overflow-hidden">
                  <img
                    src={s.image}
                    alt={`${s.title} — ${s.subtitle}`}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={i === 0 ? "high" : "auto"}
                    width={1280}
                    height={720}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-card/10 lg:to-card" />
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-primary/40 bg-background/70 backdrop-blur text-primary text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider">
                      <s.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      {s.subtitle}
                    </div>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6 sm:p-8 lg:p-10 flex flex-col flex-1 min-h-[340px] sm:min-h-[300px] lg:min-h-0 lg:justify-center">
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 leading-tight">
                    <span className="text-gradient-gold">{s.title}</span>
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                    {s.desc}
                  </p>
                  <ul className="space-y-1.5 sm:space-y-2 mb-6">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-xs sm:text-sm text-foreground/90">
                        <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto lg:mt-2">
                    <QuoteDialog>
                      <Button className="btn-shine relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary-glow shadow-gold font-semibold w-full sm:w-auto">
                        <span className="relative z-10 inline-flex items-center gap-2">
                          Solicitar orçamento
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </Button>
                    </QuoteDialog>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Ir para slide ${i + 1}`}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              selected === i ? "w-10 bg-primary" : "w-4 bg-border hover:bg-primary/50",
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesCarousel;
