import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { whatsappLink } from "@/config/company";
import { cn } from "@/lib/utils";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-elegant"
          : "bg-transparent",
      )}
    >
      <div className="container flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="One Security logo" className="h-12 w-12 rounded-full object-cover" width={48} height={48} />
          <span className="font-display font-bold text-lg hidden sm:inline">
            ONE <span className="text-primary">SECURITY</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="default" className="bg-primary text-primary-foreground hover:bg-primary-glow shadow-gold font-semibold">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              Solicitar Orçamento
            </a>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground/90 hover:text-primary py-2 border-b border-border/50"
              >
                {l.label}
              </a>
            ))}
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary-glow font-semibold mt-2">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                Solicitar Orçamento
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
