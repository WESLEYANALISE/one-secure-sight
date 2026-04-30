## Site One Security — Landing page premium

Landing page única, responsiva, com estética escura e premium inspirada no logo (preto + amarelo/dourado), apresentando os 5 serviços da empresa e captando leads via WhatsApp e formulário.

### Identidade visual

- Paleta: preto profundo de fundo, branco para textos, **amarelo/dourado** (~`hsl(45 90% 55%)`) como cor de destaque (botões, ícones, linhas decorativas).
- Tipografia: sans-serif moderna e robusta (Inter/Montserrat), títulos em peso bold com palavra-chave em amarelo (espelhando "ONE **SECURITY**").
- Logo da empresa no header e footer.
- Detalhes: linhas finas douradas como divisores (igual ao logo), leves brilhos/glow nos CTAs, micro-animações ao rolar.

### Estrutura da página (one-page)

1. **Header fixo** — logo à esquerda, menu âncora (Serviços, Sobre, Diferenciais, Contato) e botão "Solicitar Orçamento" em amarelo. Menu hambúrguer no mobile.
2. **Hero** — título impactante ("Segurança eletrônica que protege o que importa"), subtítulo, dois CTAs (WhatsApp / Solicitar orçamento) e selo de confiança (anos de experiência, clientes atendidos). Fundo escuro com imagem/overlay de câmera ou ambiente monitorado.
3. **Serviços** — 5 cards com ícone dourado, título e descrição curta:
   - CFTV (monitoramento por câmeras)
   - Alarme (centrais e sensores)
   - Cerca elétrica (perímetro)
   - Interfonia (porteiro eletrônico/vídeo)
   - Controle de acesso (biometria, tags, fechaduras)
4. **Sobre a empresa** — breve história fictícia profissional, missão e foto/ilustração.
5. **Diferenciais** — grid com 4–6 itens (atendimento 24h, técnicos certificados, garantia, projeto sob medida, suporte rápido, equipamentos de ponta).
6. **Como trabalhamos** — passo a passo em 4 etapas (Contato → Visita técnica → Projeto e instalação → Suporte contínuo).
7. **Depoimentos** — 3 cards de clientes fictícios com nome, segmento e avaliação.
8. **FAQ** — accordion com 5–6 perguntas comuns (atendimento residencial/comercial, manutenção, prazo, etc.).
9. **CTA + Formulário de contato** — campos: nome, telefone/WhatsApp, e-mail, serviço de interesse (select), mensagem. Envio dispara confirmação via toast (integração de e-mail pode ser adicionada depois).
10. **Footer** — logo, resumo, serviços, contato, redes sociais, copyright.
11. **Botão flutuante de WhatsApp** — fixo no canto inferior direito, sempre visível, com leve animação de pulso.

### Responsividade

- Mobile-first: hero empilhado, cards em coluna única, menu hambúrguer, formulário em largura total.
- Tablet: grid 2 colunas para serviços/diferenciais.
- Desktop: grid 3 colunas, hero em duas colunas (texto + visual).

### Detalhes técnicos

- Tokens HSL no `index.css` com novo tema dark premium (preto + dourado) e tailwind atualizado.
- Componentes shadcn já disponíveis: Button, Card, Accordion, Input, Textarea, Select, Toast.
- Ícones via `lucide-react` (Camera, Bell, Zap, Phone, Fingerprint, Shield, etc.).
- Imagens geradas (hero e sobre) salvas em `src/assets` e importadas como módulos.
- Scroll suave entre seções via âncoras.
- Número do WhatsApp e e-mail ficam em constantes fáceis de editar (placeholders até você fornecer os reais).
- Formulário valida campos com `react-hook-form` + `zod` e mostra confirmação via toast (sem backend nesta etapa).

### Placeholders a substituir depois

- Telefone/WhatsApp, e-mail, endereço e cidade de atuação.
- Nome dos clientes reais nos depoimentos.
- Eventuais fotos próprias da equipe/serviços.