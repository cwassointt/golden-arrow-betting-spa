import { TelegramIcon } from "@/components/icons/TelegramIcon";
import { motion, Variants } from "framer-motion";
import heroImage from "@/images/ninhoviejo.webp";

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
        {/* Se eliminó justify-center para que vuelva a la izquierda */}
        <section 
            id="inicio" 
              className="relative w-full min-h-[800px] lg:min-h-[90vh] bg-gray-900 bg-no-repeat bg-cover bg-[center_top] md:bg-[60%_20%] lg:bg-[80%_-15%] flex items-center pt-40 md:pt-48 pb-20 overflow-hidden"
            style={{ backgroundImage: `url(${heroImage})` }}
        >

          {/* CAPA MEDIA: DEGRADADO INTELIGENTE (Rosa sólido a la izquierda, transparente a la derecha) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#ED6A8E] from-10% via-[#ED6A8E]/90 via-45% to-transparent to-70% z-10"></div>

          {/* CAPA SUPERIOR: CONTENIDO ALINEADO A LA IZQUIERDA */}
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div 
                className="max-w-3xl flex flex-col items-start text-left"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >

              {/* Nombre con alto contraste (Eyebrow) */}
              <motion.p variants={itemVariants} className="text-sm font-bold tracking-widest text-white/90 uppercase mb-4 drop-shadow-sm">
                NINHOVIEJO
              </motion.p>

              {/* Título Masivo - Restaurando tipografía anterior */}
              <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] italic mb-8 uppercase drop-shadow-2xl">
                <span className="text-white block">GANA DINERO RÁPIDO, FÁCIL</span>
                <span className="text-gray-900 block">Y TOTALMENTE GRATIS</span>
              </motion.h1>

              {/* Subtítulo y Párrafo */}
              <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-white font-extrabold mb-3">
                Descubre el método exacto para facturar a diario.
              </motion.h2>
              <motion.p variants={itemVariants} className="text-white/90 text-lg max-w-xl mb-8 font-medium">
                Únete a mi comunidad privada y empieza a ganar dinero hoy mismo <strong className="text-gray-900 font-black">sin pagar un solo centavo.</strong>
              </motion.p>

              {/* Botón y Micro-copy */}
              <motion.div variants={itemVariants}>
                <a
                    href="https://t.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-auto inline-flex items-center px-10 py-4 rounded-full bg-gray-900 hover:bg-black text-white font-extrabold tracking-wide shadow-xl transition-transform hover:scale-105 mb-3 gap-2"
                >
                  <TelegramIcon className="!size-6 shrink-0" />
                  UNIRME AL CANAL VIP AHORA
                </a>
                <span className="text-xs text-white/80 block font-medium">
                  🔒 Acceso inmediato y 100% seguro. Cancela cuando quieras.
                </span>
              </motion.div>

            </motion.div>
          </div>
        </section>
      </>
  );
};