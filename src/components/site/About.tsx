import about from "@/assets/about.jpg";
import { Check } from "lucide-react";

const points = [
  "Equipe técnica certificada e uniformizada",
  "Projetos personalizados para cada ambiente",
  "Equipamentos de marcas líderes do mercado",
  "Garantia em todos os serviços executados",
];

const About = () => {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-2xl rounded-3xl" />
          <img
            src={about}
            alt="Técnico da One Security instalando câmera de segurança"
            loading="lazy"
            width={1024}
            height={1024}
            className="relative rounded-2xl shadow-elegant w-full h-auto object-cover"
          />
        </div>

        <div>
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Quem Somos</span>
          <div className="gold-divider my-4" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Mais de <span className="text-gradient-gold">10 anos</span> protegendo pessoas, lares e empresas
          </h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            A One Security nasceu com o propósito de oferecer soluções completas em segurança eletrônica,
            unindo tecnologia de ponta a um atendimento próximo e consultivo. Atendemos residências,
            condomínios, comércios e indústrias com projetos sob medida.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Nossa missão é simples: trazer tranquilidade através de sistemas confiáveis, instalados por
            quem entende, com suporte humano sempre que você precisar.
          </p>

          <ul className="space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 w-6 h-6 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </span>
                <span className="text-foreground/90">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
