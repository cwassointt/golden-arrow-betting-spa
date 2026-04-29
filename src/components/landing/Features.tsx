import { LineChart, ShieldCheck, BadgeCheck, LucideIcon } from "lucide-react";
import { CrownSolidIcon } from "@/components/icons/CrownIcon";

type Feature = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const features: Feature[] = [
  {
    icon: LineChart,
    title: "ANÁLISIS MATEMÁTICO",
    text: "No opero por corazonadas. Cada pick es el resultado de modelos estadísticos y un análisis profundo de variables técnicas, asegurando valor real en cada cuota.",
  },
  {
    icon: ShieldCheck,
    title: "GESTIÓN DE CAPITAL",
    text: "Mi prioridad es proteger tu banca. Te enseño a gestionar tu Stake de forma profesional para asegurar la rentabilidad a largo plazo, no solo ganancias momentáneas.",
  },
  {
    icon: BadgeCheck,
    title: "HISTORIAL VERIFICABLE",
    text: "La confianza se gana con hechos. Todos mis resultados son públicos y auditables, mostrando tanto las victorias como las derrotas con total honestidad.",
  },
];

export const Features = () => {
  return (
    <section id="sobre-mi" className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl text-pink-deep leading-tight">
            POR QUÉ MI MÉTODO ES DIFERENTE
          </h2>
          <CrownSolidIcon className="h-7 w-7 text-gold mx-auto mt-4" />
          <p className="mt-5 text-muted-foreground text-base md:text-lg">
            Estrategia, disciplina y transparencia. Así trabajo cada pick.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
          {features.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="bg-card rounded-2xl p-8 text-center shadow-card-soft hover:-translate-y-1 hover:shadow-pill transition-all duration-300 group border border-border/40"
            >
              <div className="mx-auto h-20 w-20 rounded-full bg-gradient-pink flex items-center justify-center shadow-pill group-hover:scale-110 transition-transform">
                <Icon className="h-9 w-9 text-primary-foreground" strokeWidth={2.2} />
              </div>
              <h3 className="font-display text-lg md:text-xl mt-6 text-primary tracking-wide">
                {title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed text-sm md:text-base">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
