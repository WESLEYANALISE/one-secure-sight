import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { COMPANY, whatsappLink } from "@/config/company";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  phone: z.string().trim().min(8, "Informe um telefone válido").max(20),
  email: z.string().trim().email("E-mail inválido").max(255),
  service: z.string().min(1, "Selecione um serviço"),
  message: z.string().trim().max(1000).optional(),
});

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      service,
      message: String(fd.get("message") || ""),
    };

    const result = schema.safeParse(data);
    if (!result.success) {
      toast({
        title: "Verifique os campos",
        description: result.error.issues[0]?.message ?? "Dados inválidos",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    const msg = `Olá! Meu nome é ${data.name}.%0AServiço: ${data.service}%0ATelefone: ${data.phone}%0AE-mail: ${data.email}%0A%0A${data.message || "Gostaria de um orçamento."}`;
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${msg}`, "_blank", "noopener,noreferrer");
    toast({
      title: "Pedido enviado!",
      description: "Continuamos pelo WhatsApp. Em instantes responderemos.",
    });
    (e.target as HTMLFormElement).reset();
    setService("");
    setLoading(false);
  };

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Fale Conosco</span>
          <div className="gold-divider mx-auto my-4" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Solicite seu <span className="text-gradient-gold">orçamento gratuito</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Preencha o formulário ou fale direto pelo WhatsApp. Respondemos rápido!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Phone, title: "Telefone", value: COMPANY.phone },
              { icon: MessageCircle, title: "WhatsApp", value: COMPANY.whatsappDisplay },
              { icon: Mail, title: "E-mail", value: COMPANY.email },
              { icon: MapPin, title: "Localização", value: COMPANY.address },
              { icon: Clock, title: "Horário", value: COMPANY.hours },
            ].map((c) => (
              <div key={c.title} className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border">
                <div className="w-11 h-11 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{c.title}</div>
                  <div className="font-medium mt-0.5">{c.value}</div>
                </div>
              </div>
            ))}

            <Button
              asChild
              size="lg"
              className="w-full bg-[hsl(142_76%_36%)] hover:bg-[hsl(142_76%_42%)] text-white shadow-gold font-semibold h-14"
            >
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Chamar no WhatsApp agora
              </a>
            </Button>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 p-8 rounded-2xl bg-card border border-border space-y-5 shadow-elegant">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name">Nome completo *</Label>
                <Input id="name" name="name" placeholder="Seu nome" required maxLength={100} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone / WhatsApp *</Label>
                <Input id="phone" name="phone" placeholder="(00) 00000-0000" required maxLength={20} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail *</Label>
              <Input id="email" name="email" type="email" placeholder="voce@email.com" required maxLength={255} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">Serviço de interesse *</Label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger id="service">
                  <SelectValue placeholder="Selecione um serviço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CFTV">CFTV / Câmeras</SelectItem>
                  <SelectItem value="Alarme">Alarme</SelectItem>
                  <SelectItem value="Cerca Elétrica">Cerca Elétrica</SelectItem>
                  <SelectItem value="Interfonia">Interfonia</SelectItem>
                  <SelectItem value="Controle de Acesso">Controle de Acesso</SelectItem>
                  <SelectItem value="Outro">Outro / Não sei</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea id="message" name="message" rows={4} maxLength={1000} placeholder="Conte um pouco sobre o que você precisa..." />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground hover:bg-primary-glow font-semibold h-14 shadow-gold"
            >
              {loading ? "Enviando..." : "Enviar pedido de orçamento"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
