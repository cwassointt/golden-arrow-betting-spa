import { CrownSolidIcon } from "@/components/icons/CrownIcon";
import { TelegramIcon, InstagramIcon } from "@/components/icons/TelegramIcon";

const quickLinks = ["Inicio", "Resultados", "Sobre mí", "FAQ"];

export const Footer = () => {
  return (
    <footer className="bg-gray-950 pt-16 pb-8 border-t border-gray-900 relative z-0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <CrownSolidIcon className="h-7 w-7 text-[#D4AF37]" />
              <span className="font-display font-black text-xl text-white tracking-tight">NINHOVIEJO</span>
            </div>
            <p className="mt-4 text-xs font-bold tracking-widest text-[#D4AF37] uppercase leading-relaxed">
              Picks deportivos con resultados reales.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-sm text-white tracking-widest uppercase">ACCESOS RÁPIDOS</h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(/\s|í/g, (c) => (c === "í" ? "i" : "-"))}`}
                    className="text-sm text-gray-400 hover:text-[#ED6A8E] transition-colors font-medium"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-bold text-sm text-white tracking-widest uppercase">CONECTA CONMIGO</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#ED6A8E] transition-colors font-medium">
                  <TelegramIcon className="h-5 w-5" />
                  Telegram
                </a>
              </li>
              <li>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#ED6A8E] transition-colors font-medium">
                  <InstagramIcon className="h-5 w-5" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* CTA del Footer */}
          <div className="flex md:justify-end">
            <a 
              href="https://t.me/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#ED6A8E] text-[#ED6A8E] rounded-full text-sm font-bold hover:bg-[#ED6A8E] hover:text-white transition-colors w-full md:w-auto h-fit"
            >
              <TelegramIcon className="!size-5" />
              UNIRME AL TELEGRAM
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-xs tracking-widest text-gray-500 font-medium">
            © 2026 NINHOVIEJO — TODOS LOS DERECHOS RESERVADOS
          </p>
        </div>
      </div>
    </footer>
  );
};
