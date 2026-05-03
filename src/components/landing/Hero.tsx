import { TelegramIcon } from "@/components/icons/TelegramIcon";

export const Hero = () => {
  return (
      <>
        <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-shimmer {
          animation: shimmer 4s linear infinite;
          background: linear-gradient(
            to right,
            #ffffff 20%,
            #D4AF37 40%,
            #D4AF37 60%,
            #ffffff 80%
          );
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
        }
      `}</style>

        {/* Se eliminó justify-center para que vuelva a la izquierda */}
        <section className="relative w-full min-h-[650px] bg-gray-300 flex items-center pt-32 pb-16 overflow-hidden">

          {/* CAPA BASE: IMAGEN 1 (Alineada a la derecha) */}
          <div className="absolute inset-0 flex items-center justify-end pr-10 md:pr-32 z-0">
          <span className="text-gray-500 font-bold text-3xl md:text-5xl opacity-40 tracking-widest uppercase text-right">
            IMAGEN 1 <br/> (Fondo Hero)
          </span>
          </div>

          {/* CAPA MEDIA: DEGRADADO (Rosa a la izquierda, transparente a la derecha) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#ED6A8E] via-[#ED6A8E]/95 to-transparent z-10"></div>

          {/* CAPA SUPERIOR: CONTENIDO ALINEADO A LA IZQUIERDA */}
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl flex flex-col items-start text-left">

              {/* Nombre con efecto Shimmer */}
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest animate-shimmer mb-4 drop-shadow-md">
                NINHOVIEJO
              </h2>

              {/* Título Masivo */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.85] italic mb-8 uppercase drop-shadow-2xl">
                HAZ TUS <br /> PICKS DEPORTIVOS <br /> AQUI
              </h1>

              {/* Caja CTA (Más compacta y en una sola línea) */}
              <div className="inline-flex items-center bg-white rounded-full p-1.5 pr-2 shadow-2xl gap-3 border border-white/50 transition-all hover:shadow-[0_20px_50px_rgba(237,106,142,0.5)]">

                <div className="pl-4 py-1 flex flex-col justify-center">
                  {/* whitespace-nowrap evita que el texto salte a otra línea */}
                  <p className="text-[#ED6A8E] font-black text-sm md:text-base leading-tight uppercase tracking-tight whitespace-nowrap">
                    Peru #1 Picks deportivos GRATIS
                  </p>
                  <p className="text-gray-500 text-xs font-bold mt-0.5 whitespace-nowrap">
                    Con resultados Reales.
                  </p>
                </div>

                {/* Botón más pequeño para encajar perfecto */}
                <a
                    href="https://t.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#ED6A8E] hover:bg-pink-600 text-white font-black uppercase tracking-wider text-xs md:text-sm py-2.5 px-6 rounded-full shadow-md flex items-center justify-center gap-2 transition-transform hover:scale-105 whitespace-nowrap animate-pulse hover:animate-none ml-2"
                >
                  <TelegramIcon className="!size-4" />
                  UNIRME
                </a>
              </div>

            </div>
          </div>
        </section>
      </>
  );
};