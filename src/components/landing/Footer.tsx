import { Button } from "@/components/ui/button";
import { CrownSolidIcon } from "@/components/icons/CrownIcon";
import { TelegramIcon, InstagramIcon } from "@/components/icons/TelegramIcon";

const quickLinks = ["Inicio", "Resultados", "Sobre mí", "FAQ"];

export const Footer = () => {
  return (
    <footer className="bg-background pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <CrownSolidIcon className="h-7 w-7 text-gold" />
              <span className="font-display text-xl text-primary tracking-tight">NINHOVIEJO</span>
            </div>
            <p className="mt-4 text-xs font-bold tracking-widest text-gold uppercase leading-relaxed">
              Picks deportivos con resultados reales.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm text-primary tracking-widest">ACCESOS RÁPIDOS</h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(/\s|í/g, (c) => (c === "í" ? "i" : "-"))}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display text-sm text-primary tracking-widest">CONECTA CONMIGO</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <TelegramIcon className="h-5 w-5 text-primary" />
                  Telegram
                </a>
              </li>
              <li>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <InstagramIcon className="h-5 w-5 text-primary" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="flex md:justify-end">
            <Button variant="outline-pink" size="pill" asChild className="w-full md:w-auto">
              <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
                <TelegramIcon className="!size-5" />
                UNIRME AL TELEGRAM
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/60 text-center">
          <p className="text-xs tracking-widest text-pink-deep/70">
            © 2024 NINHOVIEJO — TODOS LOS DERECHOS RESERVADOS
          </p>
        </div>
      </div>
    </footer>
  );
};
