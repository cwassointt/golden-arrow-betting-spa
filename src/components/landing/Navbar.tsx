import { Button } from "@/components/ui/button";
import { CrownSolidIcon } from "@/components/icons/CrownIcon";
import { TelegramIcon } from "@/components/icons/TelegramIcon";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TELEGRAM_DOMAIN = "ninhoviejomundial";

const links = [
	{ label: "Inicio", href: "#inicio", active: true },
	{ label: "Resultados", href: "#resultados" },
	{ label: "Sobre Mí", href: "#sobre-mi" },
	{ label: "FAQ", href: "#faq" },
];

export const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState<string | null>("inicio");

	useEffect(() => {
		const onScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: "-120px 0px 0px 0px",
			threshold: 0.1,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id);
				}
			});
		}, options);

		links.forEach((l) => {
			const id = l.href.replace("#", "");
			const element = document.getElementById(id);
			if (element) observer.observe(element);
		});

		return () => observer.disconnect();
	}, []);

	const handleScroll = () => {
		setOpen(false);
	};

	const handleTelegramClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();

		const appLink = `tg://resolve?domain=${TELEGRAM_DOMAIN}`;
		const webLink = `https://t.me/${TELEGRAM_DOMAIN}`;

		const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

		if (isMobile) {
			window.location.href = appLink;
			setTimeout(() => {
				window.location.href = webLink;
			}, 1200);
		} else {
			window.location.href = webLink;
		}
	};

	return (
		<>
			<style>{`
				html {
					scroll-behavior: smooth !important;
					scroll-padding-top: 120px !important; 
				}
			`}</style>
			
			<motion.header 
				initial={{ y: -100, opacity: 0 }} 
				animate={{ y: 0, opacity: 1 }} 
				transition={{ duration: 0.6, ease: "easeOut" }}
				className={`fixed top-[40px] left-0 right-0 mx-auto z-[60] max-w-5xl rounded-full shadow-xl flex justify-between items-center px-6 transition-colors duration-500 ease-in-out ${
					isScrolled 
						? "bg-white/95 backdrop-blur-md mt-2 py-2" 
						: "bg-white/90 backdrop-blur mt-4 py-3"
				}`}
			>
				<a href="#inicio" onClick={handleScroll} className="flex items-center gap-2 transition-transform hover:scale-105">
					<CrownSolidIcon className="h-7 w-7 text-[#D4AF37]" />
					<span className="font-display font-black text-xl text-[#000000] tracking-tight">
						NINHOVIEJO
					</span>
				</a>

				<ul className="hidden lg:flex items-center gap-8">
					{links.map((l) => (
						<li key={l.label}>
							<a
								href={l.href}
								onClick={handleScroll}
								className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 relative pb-1 ${
									activeSection === l.href.replace("#", "") 
										? "text-[#ED6A8E] scale-105 drop-shadow-sm" 
										: "text-gray-700 hover:text-[#ED6A8E]"
								}`}
							>
								{l.label}
							</a>
						</li>
					))}
				</ul>

				<div className="hidden md:block">
					<Button
						className="rounded-full bg-black hover:bg-gray-800 text-white font-bold px-6 border-2 border-transparent transition-colors"
						asChild
					>
						<a
							href={`tg://resolve?domain=${TELEGRAM_DOMAIN}`}
							onClick={handleTelegramClick}
						>
							<TelegramIcon className="!size-5 mr-2" />
							Unirme al Telegram
						</a>
					</Button>
				</div>

				<button
					aria-label="Menú"
					className="lg:hidden text-primary"
					onClick={() => setOpen((v) => !v)}
				>
					{open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
				</button>

				<AnimatePresence>
					{open && (
						<motion.div 
							initial={{ opacity: 0, y: -20, scale: 0.95 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: -20, scale: 0.95 }}
							transition={{ duration: 0.2, ease: "easeInOut" }}
							className="lg:hidden absolute top-[100%] left-0 w-full mt-2 rounded-2xl shadow-xl border border-border bg-white p-6 space-y-5"
						>
							{links.map((l) => (
								<a
									key={l.label}
									href={l.href}
									onClick={handleScroll}
									className={`block text-sm font-bold tracking-widest transition-colors duration-300 ${
										activeSection === l.href.replace("#", "")
											? "text-[#ED6A8E]"
											: "text-foreground hover:text-primary"
									}`}
								>
									{l.label}
								</a>
							))}
							<Button variant="cta" size="pill" className="w-full bg-black hover:bg-gray-800 text-white font-bold" asChild>
								<a
									href={`tg://resolve?domain=${TELEGRAM_DOMAIN}`}
									onClick={handleTelegramClick}
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
