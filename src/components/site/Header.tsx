import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";
import QuoteDialog from "./QuoteDialog";

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
          <div className="flex flex-col leading-tight">
            <span className="font-display font-bold text-base sm:text-lg">
              ONE <span className="text-primary">SECURITY</span>
            </span>
            <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-[0.18em]">
              Segurança Eletrônica
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="story-link text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <QuoteDialog>
            <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary-glow shadow-gold font-semibold">
              Solicitar Orçamento
            </Button>
          </QuoteDialog>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="lg:hidden p-2 text-foreground"
              aria-label="Abrir menu"
            >
              <Menu />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[85vw] sm:w-[380px] bg-background border-l border-border p-0 flex flex-col"
          >
            <SheetHeader className="p-6 border-b border-border text-left">
              <SheetTitle className="flex items-center gap-3">
                <img src={logo} alt="One Security logo" className="h-10 w-10 rounded-full object-cover" width={40} height={40} />
                <span className="flex flex-col leading-tight">
                  <span className="font-display font-bold text-base">
                    ONE <span className="text-primary">SECURITY</span>
                  </span>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-[0.18em]">
                    Segurança Eletrônica
                  </span>
                </span>
              </SheetTitle>
            </SheetHeader>

            <nav className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-foreground/90 hover:text-primary hover:bg-primary/10 py-3 px-3 rounded-lg border-b border-border/40 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="p-6 border-t border-border">
              <QuoteDialog>
                <Button
                  onClick={() => setOpen(false)}
                  className="bg-primary text-primary-foreground hover:bg-primary-glow shadow-gold font-semibold w-full h-12"
                >
                  Solicitar Orçamento
                </Button>
              </QuoteDialog>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
