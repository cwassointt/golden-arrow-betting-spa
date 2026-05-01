import { CheckCircle2 } from "lucide-react";

type Pick = { match: string; odds: string; units: string };

const picks: Pick[] = [
  { match: "REAL MADRID GANA", odds: "1.75", units: "+1.75" },
  { match: "OVER 2.5 GOLES", odds: "1.80", units: "+1.80" },
  { match: "MANCHESTER CITY GANA", odds: "1.60", units: "+1.60" },
];

export const Results = () => {
  return (
      <section id="resultados" className="relative w-full py-16 md:py-24 bg-gray-300 flex items-center overflow-hidden">
        {/* CAPA BASE: IMAGEN 2 COMO FONDO COMPLETO */}
        <div className="absolute inset-0 flex items-center justify-end pr-10 md:pr-32 z-0">
        <span className="text-gray-500 font-bold text-2xl md:text-4xl opacity-50 tracking-widest uppercase">
          IMAGEN 2 (Fondo Resultados)
        </span>
        </div>

        {/* CAPA MEDIA: DEGRADADO IGUAL AL HERO */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#ED6A8E] via-[#ED6A8E]/95 to-transparent z-10"></div>

        {/* CAPA SUPERIOR: CONTENIDO (Tarjetas a la izquierda) */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="font-display font-black text-4xl md:text-5xl text-white uppercase drop-shadow-md mb-8">
              RESULTADOS RECIENTES
            </h2>

            <div className="flex flex-col gap-5">
              {picks.map((p) => (
                  <article
                      key={p.match}
                      className="bg-white/95 backdrop-blur rounded-xl p-5 shadow-xl border-l-8 border-[#34D399] hover:shadow-2xl transition-all hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between flex-wrap gap-3 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-[#059669] text-xs font-black uppercase tracking-wider bg-green-50 px-2.5 py-1 rounded-sm">
                    <CheckCircle2 className="h-4 w-4" />
                    GANADO
                  </span>
                      <span className="text-[#ED6A8E] font-bold text-sm tracking-wide">
                    {p.units} UNIDADES
                  </span>
                    </div>

                    <div className="flex items-end justify-between flex-wrap gap-3">
                      <h3 className="font-display font-black text-xl text-gray-900 uppercase tracking-tight">
                        {p.match}
                      </h3>
                      <div className="flex items-baseline gap-2">
                    <span className="font-display font-black text-3xl text-[#D4AF37]">
                      {p.odds}
                    </span>
                      </div>
                    </div>
                  </article>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};