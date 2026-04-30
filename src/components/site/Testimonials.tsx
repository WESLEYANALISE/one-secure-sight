import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

const items = [
  {
    name: "Carlos Mendes",
    role: "Síndico • Condomínio Residencial",
    initials: "CM",
    text: "Trocamos todo o sistema de CFTV e portaria com a One Security. Resultado impecável e suporte ágil sempre que precisamos.",
  },
  {
    name: "Juliana Ramos",
    role: "Proprietária • Loja de Varejo",
    initials: "JR",
    text: "Equipe muito profissional, instalação limpa e o acesso pelo celular funciona perfeitamente. Recomendo de olhos fechados.",
  },
  {
    name: "Rodrigo Alves",
    role: "Gerente • Indústria",
    initials: "RA",
    text: "Projeto de controle de acesso completo entregue no prazo. A integração com nosso sistema de ponto foi um diferencial.",
  },
  {
    name: "Patrícia Lima",
    role: "Diretora • Escola Particular",
    initials: "PL",
    text: "Sentimos muito mais segurança no dia a dia. Câmeras de altíssima qualidade e atendimento humano de verdade.",
  },
  {
    name: "Eduardo Souza",
    role: "Proprietário • Residencial",
    initials: "ES",
    text: "Cerca elétrica e alarme instalados em um dia. Trabalho limpo, organizado e com garantia. Vale cada centavo.",
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })],
  );
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Depoimentos</span>
            <div className="gold-divider mx-auto my-4" />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
              Quem confia, <span className="text-gradient-gold">recomenda</span>
            </h2>
          </div>
        </Reveal>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {items.map((t) => (
              <div key={t.name} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 first:pl-0">
                <article className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-smooth h-full">
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/15" />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/90 leading-relaxed mb-6 text-sm">"{t.text}"</p>
                  <div className="pt-4 border-t border-border flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-gold flex items-center justify-center font-display font-bold text-primary-foreground">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t.name}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {snaps.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Depoimento ${i + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                selected === i ? "w-8 bg-primary" : "w-3 bg-border hover:bg-primary/50",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
