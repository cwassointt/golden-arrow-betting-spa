  import { LineChart, ShieldCheck, CheckCircle2, LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const features: Feature[] = [
  { icon: LineChart, title: "ANÁLISIS MATEMÁTICO", text: "No opero por corazonadas. Cada pick es resultado de modelos estadísticos y estudio profundo del mercado." },
  { icon: ShieldCheck, title: "GESTIÓN DE CAPITAL", text: "Protegemos tu banca y te enseñamos a gestionar tu Stake deportivo inteligentemente a largo plazo." },
  { icon: CheckCircle2, title: "HISTORIAL VERIFICABLE", text: "Resultados públicos y auditables. Nada de humo, solo rentabilidad pura." },
];

export const Features = () => {
  return (
    <section id="sobre-mi" className="py-20 md:py-28 bg-[#FEF2F4]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-3xl md:text-5xl text-[#ED6A8E] uppercase tracking-wide">
            POR QUÉ MI MÉTODO ES DIFERENTE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
          {features.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="bg-white rounded-2xl p-8 text-center shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="mx-auto h-16 w-16 rounded-full bg-[#FEF2F4] text-[#ED6A8E] flex items-center justify-center mb-6">
                <Icon className="h-8 w-8" strokeWidth={2.5} />
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 tracking-wide">{title}</h3>
              <p className="mt-3 text-gray-600 leading-relaxed font-sans">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
