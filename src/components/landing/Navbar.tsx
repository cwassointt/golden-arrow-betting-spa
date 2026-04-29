import { Button } from "@/components/ui/button";
import { CrownSolidIcon } from "@/components/icons/CrownIcon";
import { TelegramIcon } from "@/components/icons/TelegramIcon";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "INICIO", href: "#inicio", active: true },
  { label: "RESULTADOS", href: "#resultados" },
  { label: "SOBRE MÍ", href: "#sobre-mi" },
  { label: "FAQ", href: "#faq" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-soft">
      <nav className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <CrownSolidIcon className="h-7 w-7 text-gold" />
          <span className="font-display text-xl text-primary tracking-tight">NINHOVIEJO</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className={`text-xs font-bold tracking-widest text-foreground hover:text-primary transition-colors relative pb-1 ${
                  l.active ? "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-primary" : ""
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button variant="outline-pink" size="pill" asChild>
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
              <TelegramIcon className="!size-5" />
              UNIRME AL TELEGRAM
            </a>
          </Button>
        </div>

        <button
          aria-label="Menú"
          className="lg:hidden text-primary"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-white px-6 py-6 space-y-5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-bold tracking-widest text-foreground hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <Button variant="cta" size="pill" className="w-full" asChild>
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
              <TelegramIcon className="!size-5" />
              UNIRME AL TELEGRAM
            </a>
          </Button>
        </div>
      )}
    </header>
  );
};
