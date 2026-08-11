import { Button } from "@/components/ui/button";
import { CrownSolidIcon } from "@/components/icons/CrownIcon";
import {
    TelegramIcon,
    InstagramIcon,
} from "@/components/icons/TelegramIcon";

import {
    useState,
    type MouseEvent,
} from "react";

import {
    Menu,
    X,
    Gamepad2,
    Music2,
} from "lucide-react";

import {
    motion,
    AnimatePresence,
} from "framer-motion";

import { TELEGRAM_LINK } from "@/config/constants";

const socialLinks = [
    {
        label: "TikTok",
        href: "https://www.tiktok.com/@ninhoviejo_oficial",
        icon: Music2,
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/ninhoviejo/",
        icon: InstagramIcon,
    },
    {
        label: "Kick",
        href: "https://kick.com/ninhoviejo",
        icon: Gamepad2,
    },
];

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleCloseMenu = () => {
        setOpen(false);
    };

    /**
     * Vuelve al Hero sin agregar #inicio a la URL.
     *
     * La URL siempre se mantiene como:
     * https://ninhoviejo.com/
     */
    const handleHomeClick = (
        e: MouseEvent<HTMLAnchorElement>
    ) => {
        e.preventDefault();

        setOpen(false);

        const inicio = document.getElementById("inicio");

        if (inicio) {
            inicio.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }

        // Elimina cualquier hash que pudiera existir.
        window.history.replaceState(
            null,
            "",
            window.location.pathname + window.location.search
        );
    };

    return (
        <>
            <motion.header
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut",
                }}
                className="
                    fixed
                    top-[40px]
                    left-0
                    right-0
                    mx-auto
                    z-[60]
                    max-w-5xl
                    mt-4
                    rounded-full
                    shadow-xl
                    flex
                    justify-between
                    items-center
                    px-6
                    py-3
                    bg-white/90
                    backdrop-blur
                    transition-colors
                    duration-500
                    ease-in-out
                "
            >
                {/* LOGO / INICIO */}
                <a
                    href="/"
                    onClick={handleHomeClick}
                    aria-label="Ir al inicio"
                    className="
                        flex
                        items-center
                        gap-2
                        transition-transform
                        hover:scale-105
                    "
                >
                    <CrownSolidIcon className="h-7 w-7 text-[#D4AF37]" />

                    <span className="font-display font-black text-xl text-black tracking-tight">
                        NINHOVIEJO
                    </span>
                </a>

                {/* REDES SOCIALES DESKTOP */}
                <ul className="hidden lg:flex items-center gap-6">
                    {socialLinks.map((link) => {
                        const Icon = link.icon;

                        return (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`NINHOVIEJO en ${link.label}`}
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        text-sm
                                        font-bold
                                        uppercase
                                        tracking-widest
                                        text-gray-700
                                        hover:text-[#ED6A8E]
                                        transition-colors
                                    "
                                >
                                    <Icon className="h-5 w-5" />

                                    {link.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                {/* CTA TELEGRAM DESKTOP */}
                <div className="hidden md:block">
                    <Button
                        className="
                            rounded-full
                            bg-black
                            hover:bg-gray-800
                            text-white
                            font-bold
                            px-6
                            border-2
                            border-transparent
                            transition-colors
                        "
                        asChild
                    >
                        <a
                            href={TELEGRAM_LINK}
                            aria-label="Unirme a la comunidad de Niño Viejo en Telegram"
                        >
                            <TelegramIcon className="!size-5 mr-2" />

                            Unirme al Telegram
                        </a>
                    </Button>
                </div>

                {/* MENÚ MOBILE */}
                <button
                    type="button"
                    aria-label={
                        open
                            ? "Cerrar menú"
                            : "Abrir menú"
                    }
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    className="lg:hidden text-black"
                    onClick={() =>
                        setOpen((current) => !current)
                    }
                >
                    {open ? (
                        <X className="h-7 w-7" />
                    ) : (
                        <Menu className="h-7 w-7" />
                    )}
                </button>

                <AnimatePresence>
                    {open && (
                        <motion.div
                            id="mobile-menu"
                            initial={{
                                opacity: 0,
                                y: -20,
                                scale: 0.95,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                y: -20,
                                scale: 0.95,
                            }}
                            transition={{
                                duration: 0.2,
                                ease: "easeInOut",
                            }}
                            className="
                                lg:hidden
                                absolute
                                top-full
                                left-0
                                w-full
                                mt-2
                                rounded-2xl
                                shadow-xl
                                border
                                border-gray-200
                                bg-white
                                p-6
                                space-y-5
                            "
                        >
                            {socialLinks.map((link) => {
                                const Icon = link.icon;

                                return (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={handleCloseMenu}
                                        className="
                                            flex
                                            items-center
                                            gap-3
                                            text-sm
                                            font-bold
                                            tracking-widest
                                            text-gray-800
                                            hover:text-[#ED6A8E]
                                            transition-colors
                                            duration-300
                                        "
                                    >
                                        <Icon className="h-5 w-5" />

                                        {link.label}
                                    </a>
                                );
                            })}

                            <Button
                                variant="cta"
                                size="pill"
                                className="
                                    w-full
                                    bg-black
                                    hover:bg-gray-800
                                    text-white
                                    font-bold
                                "
                                asChild
                            >
                                <a
                                    href={TELEGRAM_LINK}
                                    onClick={handleCloseMenu}
                                >
                                    <TelegramIcon className="!size-5" />

                                    UNIRME AL TELEGRAM
                                </a>
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>
        </>
    );
};