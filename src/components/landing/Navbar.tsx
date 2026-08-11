import { Button } from "@/components/ui/button";
import { CrownSolidIcon } from "@/components/icons/CrownIcon";
import { TelegramIcon, InstagramIcon } from "@/components/icons/TelegramIcon";
import { useState } from "react";
import { Menu, X, Gamepad2, Music2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TELEGRAM_LINK } from "@/config/constants";

const socialLinks = [
	{ label: "TikTok", href: "https://www.tiktok.com/@ninhoviejo_oficial", icon: Music2 },
	{ label: "Instagram", href: "https://www.instagram.com/ninhoviejo/", icon: InstagramIcon },
	{ label: "Kick", href: "https://kick.com/ninhoviejo", icon: Gamepad2 },
];

export const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleScroll = () => {
		setOpen(false);
	};

	const handleTelegramClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		window.location.href = TELEGRAM_LINK;
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
					"bg-white/90 backdrop-blur mt-4 py-3"
				}`}
			>
				<a href="#inicio" onClick={handleScroll} className="flex items-center gap-2 transition-transform hover:scale-105">
					<CrownSolidIcon className="h-7 w-7 text-[#D4AF37]" />
					<span className="font-display font-black text-xl text-[#000000] tracking-tight">
						NINHOVIEJO
					</span>
				</a>

				<ul className="hidden lg:flex items-center gap-6">
					{socialLinks.map((link) => {
						const Icon = link.icon;
						return (
							<li key={link.label}>
								<a
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-700 hover:text-[#ED6A8E] transition-colors"
								>
									<Icon className="h-5 w-5" />
									{link.label}
								</a>
							</li>
						);
					})}
				</ul>

				<div className="hidden md:block">
					<Button
						className="rounded-full bg-black hover:bg-gray-800 text-white font-bold px-6 border-2 border-transparent transition-colors"
						asChild
					>
						<a
							href={TELEGRAM_LINK}
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
							{socialLinks.map((link) => {
								const Icon = link.icon;
								return (
									<a
										key={link.label}
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
										onClick={handleScroll}
										className="flex items-center gap-3 text-sm font-bold tracking-widest text-foreground hover:text-primary transition-colors duration-300"
									>
										<Icon className="h-5 w-5" />
										{link.label}
									</a>
								);
							})}
							<Button variant="cta" size="pill" className="w-full bg-black hover:bg-gray-800 text-white font-bold" asChild>
								<a
									href={TELEGRAM_LINK}
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
