import { Star, Quote } from "lucide-react";

const items = [
  {
    name: "Carlos Mendes",
    role: "Síndico • Condomínio Residencial",
    text: "Trocamos todo o sistema de CFTV e portaria com a One Security. Resultado impecável e suporte ágil sempre que precisamos.",
  },
  {
    name: "Juliana Ramos",
    role: "Proprietária • Loja de Varejo",
    text: "Equipe muito profissional, instalação limpa e o acesso pelo celular funciona perfeitamente. Recomendo de olhos fechados.",
  },
  {
    name: "Rodrigo Alves",
    role: "Gerente • Indústria",
    text: "Projeto de controle de acesso completo entregue no prazo. A integração com nosso sistema de ponto foi um diferencial.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Depoimentos</span>
          <div className="gold-divider mx-auto my-4" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Quem confia, <span className="text-gradient-gold">recomenda</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <article
              key={t.name}
              className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-smooth"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6">"{t.text}"</p>
              <div className="pt-4 border-t border-border">
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
