import { useState, type ReactNode } from "react";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { COMPANY } from "@/config/company";
import { MessageCircle } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  phone: z.string().trim().min(8, "Informe um telefone válido").max(20),
  email: z.string().trim().email("E-mail inválido").max(255).optional().or(z.literal("")),
  service: z.string().min(1, "Selecione um serviço"),
  property: z.string().min(1, "Selecione o tipo de imóvel"),
  city: z.string().trim().max(100).optional(),
  message: z.string().trim().max(1000).optional(),
});

interface QuoteDialogProps {
  children: ReactNode;
}

const QuoteDialog = ({ children }: QuoteDialogProps) => {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState("");
  const [property, setProperty] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      service,
      property,
      city: String(fd.get("city") || ""),
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

    const lines = [
      `Olá, *One Security*! Quero solicitar um orçamento.`,
      ``,
      `*Nome:* ${data.name}`,
      `*Telefone:* ${data.phone}`,
      data.email ? `*E-mail:* ${data.email}` : null,
      `*Serviço:* ${data.service}`,
      `*Tipo de imóvel:* ${data.property}`,
      data.city ? `*Cidade:* ${data.city}` : null,
      data.message ? `\n*Detalhes:* ${data.message}` : null,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");

    toast({
      title: "Pedido enviado!",
      description: "Abrimos o WhatsApp com sua solicitação. Em instantes responderemos.",
    });

    (e.target as HTMLFormElement).reset();
    setService("");
    setProperty("");
    setLoading(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            Solicitar <span className="text-gradient-gold">orçamento</span>
          </DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo e envie. Continuamos pelo WhatsApp para um atendimento ágil.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="q-name">Nome completo *</Label>
            <Input id="q-name" name="name" placeholder="Seu nome" required maxLength={100} />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="q-phone">Telefone / WhatsApp *</Label>
              <Input id="q-phone" name="phone" placeholder="(11) 90000-0000" required maxLength={20} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="q-email">E-mail</Label>
              <Input id="q-email" name="email" type="email" placeholder="voce@email.com" maxLength={255} />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="q-service">Serviço de interesse *</Label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger id="q-service">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CFTV / Câmeras">CFTV / Câmeras</SelectItem>
                  <SelectItem value="Alarme">Alarme</SelectItem>
                  <SelectItem value="Cerca Elétrica">Cerca Elétrica</SelectItem>
                  <SelectItem value="Interfonia">Interfonia</SelectItem>
                  <SelectItem value="Controle de Acesso">Controle de Acesso</SelectItem>
                  <SelectItem value="Mais de um serviço">Mais de um serviço</SelectItem>
                  <SelectItem value="Outro / Não sei">Outro / Não sei</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="q-property">Tipo de imóvel *</Label>
              <Select value={property} onValueChange={setProperty}>
                <SelectTrigger id="q-property">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Residência">Residência</SelectItem>
                  <SelectItem value="Condomínio">Condomínio</SelectItem>
                  <SelectItem value="Comércio">Comércio</SelectItem>
                  <SelectItem value="Indústria">Indústria</SelectItem>
                  <SelectItem value="Outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="q-city">Cidade / Bairro</Label>
            <Input id="q-city" name="city" placeholder="Ex: São Paulo - Tatuapé" maxLength={100} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="q-message">Detalhes do projeto</Label>
            <Textarea
              id="q-message"
              name="message"
              rows={4}
              maxLength={1000}
              placeholder="Quantas câmeras, área a proteger, prazo desejado..."
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground hover:bg-primary-glow font-semibold h-12 shadow-gold"
          >
            <MessageCircle className="w-5 h-5" />
            {loading ? "Enviando..." : "Enviar pelo WhatsApp"}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Ao enviar, você será direcionado ao WhatsApp com a mensagem pré-preenchida.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteDialog;
