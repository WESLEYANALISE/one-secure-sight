import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Vocês atendem residências e empresas?",
    a: "Sim! Atendemos residências, condomínios, comércios e indústrias, com projetos dimensionados para cada perfil.",
  },
  {
    q: "A visita técnica tem custo?",
    a: "Não. A visita para avaliação e elaboração do orçamento é totalmente gratuita e sem compromisso.",
  },
  {
    q: "Qual é o prazo de instalação?",
    a: "Depende do tamanho do projeto, mas a maioria das instalações residenciais é finalizada em 1 a 3 dias úteis após aprovação.",
  },
  {
    q: "Vocês oferecem manutenção preventiva?",
    a: "Sim. Temos planos de manutenção preventiva mensais, trimestrais e anuais para manter seu sistema sempre 100%.",
  },
  {
    q: "Posso acessar as câmeras pelo celular?",
    a: "Com certeza. Todos os nossos sistemas de CFTV permitem acesso remoto via aplicativo, com gravação em nuvem opcional.",
  },
  {
    q: "Quais formas de pagamento aceitam?",
    a: "Aceitamos PIX, dinheiro, transferência e cartão de crédito em até 12x. Consulte condições para projetos maiores.",
  },
];

const Faq = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Dúvidas Frequentes</span>
          <div className="gold-divider mx-auto my-4" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Perguntas <span className="text-gradient-gold">frequentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
