import { Button } from "@/components/ui/button";
import { CrownSolidIcon } from "@/components/icons/CrownIcon";
import { TelegramIcon } from "@/components/icons/TelegramIcon";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
	{ label: "Inicio", href: "#inicio", active: true },
	{ label: "Resultados", href: "#resultados" },
	{ label: "Sobre Mí", href: "#sobre-mi" },
	{ label: "FAQ", href: "#faq" },
];

export const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className="fixed top-[40px] left-0 right-0 mx-auto z-[60] max-w-5xl bg-white/90 backdrop-blur rounded-full shadow-xl flex justify-between items-center px-6 py-3 mt-4 transition-all duration-300">
			{/* Logo */}
			<a href="#inicio" className="flex items-center gap-2">
				<CrownSolidIcon className="h-7 w-7 text-[#D4AF37]" />
				<span className="font-display font-black text-xl text-[#000000] tracking-tight">
					NINHOVIEJO
				</span>
			</a>

			{/* Desktop links */}
			<ul className="hidden lg:flex items-center gap-8">
				{links.map((l) => (
					<li key={l.label}>
						<a
							href={l.href}
							className="text-sm font-bold uppercase tracking-widest text-gray-700 hover:text-[#ED6A8E] transition-colors relative pb-1"
						>
							{l.label}
						</a>
					</li>
				))}
			</ul>

			<div className="hidden md:block">
				<Button
					className="rounded-full bg-[#ED6A8E] hover:bg-[#d8567a] text-white font-bold"
					asChild
				>
					<a
						href="https://t.me/"
						target="_blank"
						rel="noopener noreferrer"
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

			{open && (
				<div className="lg:hidden border-t border-border bg-white px-6 py-6 space-y-5">
					{links.map((l) => (
						<a
							key={l.label}
							href={l.href}
							onClick={() => setOpen(false)}
							className="block text-sm font-bold tracking-widest text-foreground hover:text-primary"
						>
							{l.label}
						</a>
					))}
					<Button variant="cta" size="pill" className="w-full" asChild>
						<a
							href="https://t.me/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<TelegramIcon className="!size-5" />
							UNIRME AL TELEGRAM
						</a>
					</Button>
				</div>
			)}
		</header>
	);
};
