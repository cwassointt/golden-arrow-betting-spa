import { CrownIcon, TrophyOutlineIcon } from "@/components/icons/CrownIcon";
import { TelegramIcon } from "@/components/icons/TelegramIcon";

const TELEGRAM_LINK = "https://t.me/+lPPu8EXRBjEyOGU5";

export const FinalCTA = () => {
  const handleTelegramClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = TELEGRAM_LINK;
  };

  return (
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-[#ED6A8E] via-[#e64c77] to-[#d43361] overflow-hidden shadow-[0_-10px_40px_rgba(237,106,142,0.2)] z-10">

        <CrownIcon className="hidden md:block absolute left-4 lg:left-16 top-1/2 -translate-y-1/2 h-40 w-40 text-white/10 rotate-[-15deg] transition-transform hover:scale-110 duration-500" />
        <TrophyOutlineIcon className="hidden md:block absolute right-4 lg:right-16 top-1/2 -translate-y-1/2 h-40 w-40 text-white/10 rotate-[15deg] transition-transform hover:scale-110 duration-500" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)]"></div>

        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl relative z-20">
          <h2 className="font-display font-black uppercase text-5xl md:text-6xl text-white leading-tight drop-shadow-lg tracking-tighter italic">
            ESTÁS A UN CLICK DE EMPEZAR
          </h2>
          <p className="mt-6 text-lg md:text-xl text-white/90 font-medium">
            Entra a mi canal gratuito y empieza a ganar hoy mismo. Únete a miles de personas que ya están rentabilizando su pasión.
          </p>

           <div className="mt-12">
             <a
                 href={TELEGRAM_LINK}
                 onClick={handleTelegramClick}
                 className="inline-flex items-center justify-center bg-white text-[#ED6A8E] px-12 py-6 rounded-full text-xl md:text-2xl font-black hover:bg-gray-50 shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition-all hover:scale-105 hover:-translate-y-1 w-full md:w-auto uppercase tracking-wider animate-pulse hover:animate-none"
             >
              <TelegramIcon className="!size-8 mr-3" />
              UNIRME AL TELEGRAM
            </a>
          </div>

          <p className="mt-8 text-sm text-white/80 font-black tracking-widest uppercase bg-black/10 inline-block px-6 py-2 rounded-full backdrop-blur-sm border border-white/20">
            Sin pagos. Sin compromiso.
          </p>
        </div>
      </section>
  );
};