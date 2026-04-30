Imagens novas, mais realistas, já geradas com Nano Banana Pro (Gemini 3 Pro Image):
- `src/assets/hero.jpg` — nova hero desktop cinematográfica (16:9)
- `src/assets/hero-mobile.jpg` — nova hero vertical 9:16 otimizada para mobile
- `src/assets/services/interfonia.jpg` — regenerada, sem cara de IA

Ajuste no Hero (`src/components/site/Hero.tsx`) para servir a imagem certa por viewport usando `<picture>`:

```tsx
import hero from "@/assets/hero.jpg";
import heroMobile from "@/assets/hero-mobile.jpg";
...
<picture>
  <source media="(max-width: 768px)" srcSet={heroMobile} />
  <img
    src={hero}
    alt="Câmera de segurança CFTV em ambiente noturno"
    className="w-full h-full object-cover scale-105"
    fetchPriority="high"
  />
</picture>
```

Resultado: no mobile carrega imagem vertical realista enquadrada certinho; no desktop a versão wide. Performance melhor (mobile não baixa imagem 1820px) e menos "cara de IA".