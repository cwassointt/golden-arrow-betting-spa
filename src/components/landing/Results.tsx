import { CrownSolidIcon } from "@/components/icons/CrownIcon";
import { CheckCircle2 } from "lucide-react";
import { ImagePlaceholder } from "./ImagePlaceholder";

type Pick = { match: string; odds: string; units: string };

const picks: Pick[] = [
  { match: "REAL MADRID GANA", odds: "1.75", units: "+1.75" },
  { match: "OVER 2.5 GOLES", odds: "1.80", units: "+1.80" },
  { match: "MANCHESTER CITY GANA", odds: "1.60", units: "+1.60" },
];

export const Results = () => {
  return (
    <section id="resultados" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left: 60% */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-3xl md:text-5xl text-pink-deep">RESULTADOS RECIENTES</h2>
            <CrownSolidIcon className="h-7 w-7 text-gold mt-4" />

            <div className="mt-10 flex flex-col gap-5">
              {picks.map((p) => (
                <article
                  key={p.match}
                  className="bg-card rounded-2xl p-6 shadow-card-soft hover:shadow-pill transition-all duration-300 border border-border/50"
                >
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1.5 bg-success-soft text-success text-xs font-bold px-3 py-1.5 rounded-full">
                      <CheckCircle2 className="h-4 w-4" />
                      GANADO
                    </span>
                    <span className="text-pink-deep font-bold text-sm tracking-wide">
                      {p.units} UNIDADES
                    </span>
                  </div>

                  <div className="mt-4 flex items-end justify-between flex-wrap gap-3">
                    <h3 className="font-display text-lg md:text-xl text-foreground">{p.match}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-3xl md:text-4xl text-gold-shine bg-[length:200%_100%]">
                        {p.odds}
                      </span>
                      <span className="text-muted-foreground text-xs font-semibold tracking-widest">CUOTA</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right: 40% */}
          <div className="lg:col-span-2">
            <ImagePlaceholder
              label="IMAGEN 2 (Creador/Branding)"
              className="rounded-3xl shadow-card-soft aspect-[4/5] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
