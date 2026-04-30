import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Camera, Bell, Zap, PhoneCall, Fingerprint, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import QuoteDialog from "./QuoteDialog";
import cftv from "@/assets/services/cftv.jpg";
import alarme from "@/assets/services/alarme.jpg";
import cerca from "@/assets/services/cerca-eletrica.jpg";
import interfonia from "@/assets/services/interfonia.jpg";
import controle from "@/assets/services/controle-acesso.jpg";

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
        <div className="flex">
          {slides.map((s, i) => (
            <div key={s.title} className="flex-[0_0_100%] min-w-0 relative">
              <div className="relative aspect-[16/10] sm:aspect-[16/8] lg:aspect-[16/7]">
                <img
                  src={s.image}
                  alt={`${s.title} — ${s.subtitle}`}
                  loading={i === 0 ? "eager" : "lazy"}
                  width={1280}
                  height={720}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

                <div className="relative z-10 h-full flex items-end sm:items-center p-6 sm:p-10 lg:p-16">
                  <div className="max-w-xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-[11px] font-semibold uppercase tracking-wider mb-4">
                      <s.icon className="w-3.5 h-3.5" />
                      {s.subtitle}
                    </div>
                    <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight">
                      <span className="text-gradient-gold">{s.title}</span>
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-5 max-w-md leading-relaxed">
                      {s.desc}
                    </p>
                    <ul className="space-y-2 mb-6 hidden sm:block">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-sm text-foreground/90">
                          <span className="w-5 h-5 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center">
                            <Check className="w-3 h-3 text-primary" />
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <QuoteDialog>
                      <Button className="bg-primary text-primary-foreground hover:bg-primary-glow shadow-gold font-semibold">
                        Solicitar orçamento
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </QuoteDialog>
                  </div>
                </div>
              </div>
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
              "h-1.5 rounded-full transition-all duration-300",
              selected === i ? "w-8 bg-primary" : "w-3 bg-border hover:bg-primary/50",
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesCarousel;
