Site OneSecurity — versão profissional com imagens realistas por serviço, carrossel automático, animações ao rolar e auditoria visual completa inspirada em sites premium do setor.

## 1. Imagens realistas por serviço (IA)
Gerar 5 imagens fotorrealistas cinematográficas (dark, dourado sutil) em `src/assets/services/`:
- cftv.jpg, alarme.jpg, cerca-eletrica.jpg, interfonia.jpg, controle-acesso.jpg

## 2. Carrossel automático
Novo `ServicesCarousel.tsx` com Embla + `embla-carousel-autoplay`:
- Autoplay ~5s, loop, pausa no hover
- Slides com imagem de fundo, overlay, título, 3 benefícios e CTA orçamento
- Dots dourados, transição suave, responsivo

## 3. Cards de serviço refinados
Grid mantido abaixo do carrossel, com imagem real no topo, zoom no hover e overlay dourado.

## 4. Animações ao rolar
- Hook `useInView` (IntersectionObserver) + classes `fade-up`, `fade-in`, `scale-in`
- Stagger em grids
- Parallax sutil no Hero
- Count-up nas estatísticas (15+ anos, 500+ clientes)
- Glow dourado nos CTAs, underline animado nos links

## 5. Auditoria profissional (ref: ADT, Verisure)
- Hero: badge "Empresa certificada" + trust bar com marcas
- Tipografia/espaçamento (sistema 8pt) refinados
- Diferenciais com ícones em círculos com gradiente dourado
- Processo com linha conectora animada
- Depoimentos em carrossel com avatar e estrelas
- FAQ com +/− animado
- Footer 4 colunas + selos
- SEO: JSON-LD LocalBusiness, alt descritivos, lazy loading

## 6. Técnico
- Instalar `embla-carousel-autoplay`
- Criar: `useInView`, `ServicesCarousel`, `AnimatedCounter`
- Editar: Hero, Services, Testimonials, Process, Differentials, index.css (novas keyframes)
- JSON-LD em index.html

Mantém identidade preto + dourado.