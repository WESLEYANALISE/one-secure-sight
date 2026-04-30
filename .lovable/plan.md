3 ajustes:

**1. Hero — botão "Falar no WhatsApp" → "Nossos serviços"** (`src/components/site/Hero.tsx`)
- Trocar import `MessageCircle` por `Camera`, remover `whatsappLink`
- Botão secundário vira `<a href="#servicos">` com ícone Camera e texto "Nossos serviços" (scroll suave já está ativo via `html { scroll-behavior: smooth }`)

**2. Reforçar animação de reflexo no botão "Solicitar orçamento"**
- O CSS `.btn-shine::after` já existe mas o brilho pode estar sutil. Aumentar opacidade do gradiente para `hsl(0 0% 100% / 0.75)` e largura do reflexo para 40%, e reduzir o intervalo para 2.5s ease-in-out infinite. Aplicar também no botão do carrossel.

**3. Carrossel de serviços responsivo no mobile** (`src/components/site/ServicesCarousel.tsx`)
- Trocar `aspect-[16/10]` (que fica muito largo/alto e corta) por **altura fixa adaptativa**: `min-h-[460px] sm:min-h-[420px] lg:min-h-[460px]` sem aspect-ratio no mobile, mantendo aspect no desktop
- No mobile: gradiente vertical mais forte (de baixo) garantindo legibilidade do texto sobreposto
- Aumentar padding interno mobile (p-5 → conteúdo bem espaçado), título menor no mobile (`text-xl`), bullets mostrados também no mobile (sem `hidden sm:block`)
- Indicadores (dots) maiores no mobile (touch target)
- Reduzir tamanho do botão no mobile e garantir que caiba

Mantém autoplay 5s, loop e pausa no hover.