import { Button } from "@/components/ui/button";
import { CrownIcon, TrophyOutlineIcon } from "@/components/icons/CrownIcon";
import { TelegramIcon } from "@/components/icons/TelegramIcon";

export const FinalCTA = () => {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-marble overflow-hidden">
      {/* Decorative icons */}
      <CrownIcon className="hidden md:block absolute left-6 lg:left-20 top-1/2 -translate-y-1/2 h-32 w-32 lg:h-44 lg:w-44 text-gold/40" />
      <TrophyOutlineIcon className="hidden md:block absolute right-6 lg:right-20 top-1/2 -translate-y-1/2 h-32 w-32 lg:h-44 lg:w-44 text-gold/40" />

      <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl relative">
        <h2 className="font-display text-3xl md:text-5xl text-pink-deep leading-tight">
          ESTÁS A UN CLICK DE PROFESIONALIZAR TUS APUESTAS
        </h2>
        <p className="mt-5 text-base md:text-lg text-foreground">
          Únete a una comunidad que prioriza la estrategia sobre la suerte.
        </p>

        <div className="mt-10">
          <Button variant="cta" size="pill-lg" asChild>
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
              <TelegramIcon className="!size-5" />
              UNIRME GRATIS AL TELEGRAM
            </a>
          </Button>
        </div>

        <p className="mt-5 text-sm text-muted-foreground">
          Sin suscripciones ocultas. Transparencia total.
        </p>
      </div>
    </section>
  );
};
