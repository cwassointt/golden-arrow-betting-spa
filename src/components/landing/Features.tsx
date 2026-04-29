import { BarChart3, Target, DollarSign, LucideIcon } from "lucide-react";
import { CrownSolidIcon } from "@/components/icons/CrownIcon";

type Feature = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const features: Feature[] = [
  { icon: BarChart3, title: "ANÁLISIS REAL", text: "Estudio cada partido a fondo para encontrar el valor." },
  { icon: Target, title: "PICKS CLAROS", text: "Directos, simples y con estrategia ganadora." },
  { icon: DollarSign, title: "CANAL GRATIS", text: "Todo el contenido totalmente gratis en Telegram." },
];

export const Features = () => {
  return (
    <section id="sobre-mi" className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl text-primary">¿POR QUÉ SEGUIRME?</h2>
          <CrownSolidIcon className="h-7 w-7 text-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
          {features.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="bg-card rounded-2xl p-8 text-center shadow-card-soft hover:-translate-y-1 hover:shadow-pill transition-all duration-300 group"
            >
              <div className="mx-auto h-20 w-20 rounded-full bg-gradient-pink flex items-center justify-center shadow-pill group-hover:scale-110 transition-transform">
                <Icon className="h-9 w-9 text-primary-foreground" strokeWidth={2.5} />
              </div>
              <h3 className="font-display text-xl mt-6 text-primary tracking-wide">{title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
