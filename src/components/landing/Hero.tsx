import { TelegramIcon } from "@/components/icons/TelegramIcon";
import { motion, type Variants } from "framer-motion";
import heroImage from "@/images/ninhoviejo.webp";
import { ArrowRight } from "lucide-react";
import { TELEGRAM_LINK } from "@/config/constants";

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
    hidden: {
        opacity: 0,
        y: 20,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export const Hero = () => {
    return (
        <section
            id="inicio"
            className="relative w-full min-h-[100dvh] bg-gray-900 bg-no-repeat bg-cover bg-[center_top] md:bg-[60%_20%] lg:bg-[80%_55%] flex items-center pt-32 md:pt-48 pb-20 overflow-hidden"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            {/* Integración rosa con la fotografía */}
            <div
                className="
                    absolute inset-0 z-10
                    bg-gradient-to-r
                    from-[#ED6A8E]
                    from-10%
                    via-[#ED6A8E]/90
                    via-45%
                    to-transparent
                    to-90%
                "
            />

            <div className="container mx-auto px-6 relative z-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="max-w-4xl"
                >
                    {/* Título principal */}
                    <motion.h1
                        variants={itemVariants}
                        className="
                            text-5xl
                            md:text-7xl
                            lg:text-8xl
                            font-black
                            text-white
                            leading-[0.9]
                            tracking-tighter
                            italic
                            uppercase
                            mb-6
                        "
                    >
                        <span className="block text-white">
                            COMUNIDAD DE NIÑO VIEJO
                        </span>

                        <span className="block text-gray-900 font-black">
                            ACCEDE SIN COSTO
                        </span>
                    </motion.h1>

                    {/* Texto secundario */}
                    <motion.h2
                        variants={itemVariants}
                        className="text-lg md:text-3xl text-white font-extrabold mb-2"
                    >
                        Únete a la comunidad oficial de Niño Viejo.
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="
                            text-sm
                            md:text-xl
                            text-white/90
                            max-w-xl
                            mb-12
                            font-medium
                            leading-tight
                            md:leading-normal
                        "
                    >
                        Acceso libre, directo y totalmente{" "}
                        <strong className="text-gray-900 font-black">
                            sin costo.
                        </strong>
                    </motion.p>

                    {/* CTA principal */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col items-start gap-6"
                    >
                        <motion.a
                            href={TELEGRAM_LINK}
                            aria-label="Unirme al canal gratuito de Niño Viejo en Telegram"
                            animate={{
                                scale: [1, 1.03, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            whileHover={{
                                y: -2,
                            }}
                            className="
                                group
                                relative
                                inline-flex
                                flex-col
                                md:flex-row
                                items-center
                                justify-center
                                bg-[#D4AF37]
                                hover:bg-[#b8952e]
                                text-black
                                px-10
                                py-8
                                md:px-16
                                md:py-10
                                rounded-2xl
                                shadow-[0_0_50px_rgba(212,175,55,0.4)]
                                transition-all
                                active:scale-95
                                gap-4
                                overflow-hidden
                                border-b-8
                                border-[#9a7d21]
                            "
                        >
                            {/* Brillo sutil */}
                            <motion.div
                                aria-hidden="true"
                                animate={{
                                    x: ["-100%", "200%"],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                    repeatDelay: 1,
                                }}
                                className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-r
                                    from-transparent
                                    via-white/40
                                    to-transparent
                                    skew-x-12
                                    z-0
                                    pointer-events-none
                                "
                            />

                            <div className="relative z-10 flex items-center gap-4">
                                <TelegramIcon className="!size-10 md:!size-14 shrink-0 drop-shadow-md" />

                                <div className="flex flex-col items-start text-left">
                                    <span className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none">
                                        UNIRME AL CANAL
                                    </span>

                                    <span className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                                        GRATUITO AHORA
                                    </span>
                                </div>

                                <ArrowRight
                                    className="
                                        hidden
                                        md:block
                                        size-10
                                        group-hover:translate-x-2
                                        transition-transform
                                        duration-300
                                    "
                                />
                            </div>
                        </motion.a>

                        {/* Mensaje simple, sin urgencia artificial */}
                        <span className="text-sm md:text-base text-white/90 font-bold uppercase tracking-widest">
                            Acceso libre y totalmente sin costo
                        </span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};