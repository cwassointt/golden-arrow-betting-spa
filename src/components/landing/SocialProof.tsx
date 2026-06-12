import { TelegramIcon } from "@/components/icons/TelegramIcon";
import { TELEGRAM_LINK } from "@/config/constants";

export const SocialProof = () => {
  const handleTelegramClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = TELEGRAM_LINK;
  };

  return (
      <section className="bg-gray-950 py-24 md:py-32 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden border-t-4 border-[#D4AF37]">

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#ED6A8E]/10 via-gray-950/20 to-gray-950 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">

          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            OPERACIONES EN VIVO SIN SUSCRIPCIONES
          </div>

          <h2 className="font-display font-black tracking-tighter text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.9] text-white italic drop-shadow-2xl">
          <span className="block mb-2">
            MÁS DE <span className="text-[#D4AF37] underline decoration-[#ED6A8E] decoration-4 underline-offset-8">100,000</span> MIEMBROS,
          </span>
            <span className="block text-[#ED6A8E]">
            SIN CUOTAS DE ENTRADA.
          </span>
          </h2>

          <p className="mt-10 text-xl md:text-2xl text-gray-400 font-medium max-w-2xl leading-relaxed">
            Únete a más de 100,000 personas que ya están transformando sus resultados. Yo te doy la hoja de ruta, tú solo sigues el plan.{" "}
            <strong className="text-white ml-2">Cero mensualidades, acceso libre.</strong>
          </p>

           <div className="mt-12">
             <a
                 href={TELEGRAM_LINK}
                 onClick={handleTelegramClick}
                 className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-gray-950 rounded-full text-lg font-black hover:bg-[#D4AF37] hover:text-white transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.3)] uppercase tracking-wide"
             >
              <TelegramIcon className="!size-6" />
              VER CANAL AHORA
            </a>
          </div>

        </div>
      </section>
  );
};