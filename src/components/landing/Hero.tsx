import { TelegramIcon } from "@/components/icons/TelegramIcon";
import { motion, Variants } from "framer-motion";
import heroImage from "@/images/ninhoviejo.webp";
import { ArrowRight } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const Hero = () => {
  return (
      <>
        <section
            id="inicio"
            className="relative w-full min-h-[850px] lg:min-h-[95vh] bg-gray-900 bg-no-repeat bg-cover bg-[center_top] md:bg-[60%_20%] lg:bg-[80%_55%] flex items-center pt-32 md:pt-48 pb-20 overflow-hidden"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#ED6A8E] from-10% via-[#ED6A8E]/90 via-45% to-transparent to-90% z-10"></div>

          <div className="container mx-auto px-6 relative z-20">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="max-w-4xl"
            >
              {/* TÍTULO ACTUALIZADO: RÁPIDO, FÁCIL AHORA EN BLANCO */}
              <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter italic uppercase mb-6">
                <span className="block">TRABAJA CONMIGO</span>
                <span className="block font-black">ESTE MUNDIAL</span>
                <span className="text-gray-900 block font-black">ACCESO LIBRE HOY</span>
              </motion.h1>

              {/* Jerarquía en móvil */}
              <motion.h2 variants={itemVariants} className="text-lg md:text-3xl text-white font-extrabold mb-2 opacity-90">
                Domina el análisis deportivo con mi metodología probada.
              </motion.h2>
              <motion.p variants={itemVariants} className="text-sm md:text-xl text-white/80 max-w-xl mb-12 font-medium leading-tight md:leading-normal">
                Únete a mi comunidad estratégica y empieza a ver resultados hoy mismo <strong className="text-gray-900 font-black">sin costos de inscripción.</strong>
              </motion.p>

              {/* Botón Dorado Macizo */}
              <motion.div variants={itemVariants} className="flex flex-col items-start gap-6">
                <motion.a
                    href="https://t.me/ninhoviejomundial"
                    target="_blank"
                    rel="noopener noreferrer"
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="group relative inline-flex flex-col md:flex-row items-center justify-center bg-[#D4AF37] hover:bg-[#b8952e] text-black px-10 py-8 md:px-16 md:py-10 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.4)] transition-all active:scale-95 gap-4 overflow-hidden border-b-8 border-[#9a7d21]"
                >
                  <motion.div
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 z-0"
                  />

                  <div className="relative z-10 flex items-center gap-4">
                    <TelegramIcon className="!size-10 md:!size-14 shrink-0 drop-shadow-md" />
                    <div className="flex flex-col items-start">
                        <span className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none">
                            UNIRME AL CANAL
                        </span>
                      <span className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                            GRATUITO AHORA
                        </span>
                    </div>
                    <ArrowRight className="hidden md:block size-10 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </motion.a>

                <div className="flex items-center gap-2 pl-2">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                  <span className="text-sm md:text-base text-white font-bold uppercase tracking-widest drop-shadow-sm">
                        Últimos cupos disponibles hoy
                    </span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
        </section>
      </>
  );
};