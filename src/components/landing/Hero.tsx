import { Button } from "@/components/ui/button";
import { CrownIcon } from "@/components/icons/CrownIcon";
import { TelegramIcon } from "@/components/icons/TelegramIcon";
import heroCar from "@/assets/hero-car.jpg";

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[600px] md:min-h-[680px] lg:min-h-[760px] overflow-hidden"
    >
      {/* Background image */}
      <img
        src={heroCar}
        alt="Tipster deportivo NINHOVIEJO con auto de lujo dorado"
        width={1536}
        height={1024}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Pink gradient overlay (left half) */}
      <div className="absolute inset-0 bg-gradient-hero md:bg-[linear-gradient(90deg,hsl(var(--primary)/0.9)_0%,hsl(var(--primary)/0.7)_45%,hsl(var(--primary)/0.1)_85%,transparent_100%)]" />

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-6 py-20 md:py-28 lg:py-32 flex items-center min-h-[600px] md:min-h-[680px] lg:min-h-[760px]">
        <div className="max-w-2xl text-primary-foreground">
          <CrownIcon className="h-16 w-16 md:h-20 md:w-20 text-gold animate-float drop-shadow-[0_4px_12px_hsl(var(--gold)/0.5)]" />

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-6 leading-[0.95]">
            NINHOVIEJO
          </h1>

          <p className="font-display text-2xl md:text-3xl lg:text-4xl mt-5 tracking-wide">
            PICKS DEPORTIVOS
          </p>
          <p className="font-display text-2xl md:text-3xl lg:text-4xl mt-1 text-gold-shine animate-shine bg-[length:200%_100%]">
            CON RESULTADOS REALES
          </p>

          <p className="mt-6 text-base md:text-lg max-w-md text-primary-foreground/95 leading-relaxed font-medium">
            Análisis, estrategia y los mejores picks para que ganes tú también.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4">
            <Button variant="cta" size="pill-lg" asChild>
              <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
                <TelegramIcon className="!size-5" />
                ENTRAR AL TELEGRAM
              </a>
            </Button>

            <a
              href="#resultados"
              className="text-sm text-primary-foreground underline underline-offset-4 hover:text-gold transition-colors"
            >
              Ver resultados ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
