import logo from "@/assets/logo.png";
import { COMPANY } from "@/config/company";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/40 border-t border-border pt-16 pb-8">
      <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="One Security" className="h-12 w-12 rounded-full" width={48} height={48} />
            <span className="font-display font-bold">
              ONE <span className="text-primary">SECURITY</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Soluções completas em segurança eletrônica para residências, condomínios, comércios e indústrias.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-lg border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-smooth">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-lg border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-smooth">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4">Serviços</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#servicos" className="hover:text-primary">CFTV</a></li>
            <li><a href="#servicos" className="hover:text-primary">Alarme</a></li>
            <li><a href="#servicos" className="hover:text-primary">Cerca Elétrica</a></li>
            <li><a href="#servicos" className="hover:text-primary">Interfonia</a></li>
            <li><a href="#servicos" className="hover:text-primary">Controle de Acesso</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4">Empresa</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#sobre" className="hover:text-primary">Sobre nós</a></li>
            <li><a href="#diferenciais" className="hover:text-primary">Diferenciais</a></li>
            <li><a href="#processo" className="hover:text-primary">Como trabalhamos</a></li>
            <li><a href="#contato" className="hover:text-primary">Contato</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4">Contato</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-primary" /> {COMPANY.phone}</li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-primary" /> {COMPANY.email}</li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary" /> {COMPANY.address}</li>
          </ul>
        </div>
      </div>

      <div className="container mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} One Security. Todos os direitos reservados.</span>
        <span>CNPJ 57.823.422/0001-84</span>
      </div>
    </footer>
  );
};

export default Footer;
