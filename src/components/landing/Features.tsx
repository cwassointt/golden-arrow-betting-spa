import { Target, Zap, Clock3, Smile } from "lucide-react";
import { motion } from "framer-motion";
import featuresImage from "@/images/featuresninho.webp";

const leftFeatures = [
	{
		icon: Zap,
		title: "Resultados Diarios Reales",
		description:
			"Diseñado para que veas efectividad desde el primer día. Sin esperas largas, solo análisis directos para tu crecimiento.",
	},
	{
		icon: Target,
		title: "Comunidad de Acceso Libre",
		description:
			"Olvida las suscripciones o barreras de entrada. Aquí entras sin cuotas, sigues mi metodología y aprovechas el 100% de los resultados.",
	},
];

const rightFeatures = [
	{
		icon: Clock3,
		title: "Grupo de Análisis Estratégico",
		description:
			"Únete a miles de personas que ya están operando con éxito. Una comunidad activa donde el análisis se traduce en beneficios.",
	},
	{
		icon: Smile,
		title: "Metodología Simplificada",
		description:
			"Te doy las indicaciones exactas para que no pierdas tiempo. Tú solo replicas mi análisis y dejas que la estrategia hable por sí sola.",
	},
];

export const Features = () => {
	return (
		<section
			id="sobre-mi"
			className="relative w-full min-h-[850px] py-24 bg-[#FEF2F4] flex flex-col overflow-hidden"
		>
			{/* 1. Imagen de fondo - Mantiene tamaño original y posición central */}
			<div
				className="absolute inset-0 z-0 bg-no-repeat bg-center pointer-events-none"
				style={{
					backgroundImage: `url(${featuresImage})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundColor: "#FEF2F4",
				}}
			></div>

			{/* 2. Degradados laterales sutiles (Color original de fondo) */}
			<div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#FEF2F4]/80 to-transparent z-[5]"></div>
			<div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#FEF2F4]/80 to-transparent z-[5]"></div>

			<div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex flex-col">
				{/* Título arriba a la izquierda - Estilo original restaurado */}
				<div className="max-w-2xl mb-12 text-left">
					<motion.h2
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.95] italic uppercase mb-6"
					>
						NUESTRO MÉTODO <br /> ES{" "}
						<span className="text-[#ED6A8E]">DIFERENTE</span>
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="text-xl md:text-2xl text-white font-bold max-w-xl"
					>
						No dependemos de la suerte. Nuestro sistema se basa en datos,
						análisis y disciplina.
					</motion.p>
				</div>

				{/* Grid de 3 columnas - Cards con textos optimizados */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-auto">
					{/* Lado Izquierdo */}
					<div className="flex flex-col gap-6">
						{leftFeatures.map((feature, index) => (
							<motion.article
								key={feature.title}
								initial={{ opacity: 0, x: -50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.1 * index }}
								className="bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/50 flex flex-col gap-4 group hover:bg-white transition-all hover:shadow-2xl hover:-translate-y-1"
							>
								<div className="bg-[#ED6A8E] p-3 rounded-xl w-fit group-hover:scale-110 transition-transform">
									<feature.icon className="size-6 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-black uppercase mb-2 tracking-tight text-gray-950">
										{feature.title}
									</h3>
									<p className="text-gray-600 leading-relaxed font-bold text-sm">
										{feature.description}
									</p>
								</div>
							</motion.article>
						))}
					</div>

					{/* Columna Central Vacía para ver la imagen */}
					<div className="hidden md:block h-20"></div>

					{/* Lado Derecho */}
					<div className="flex flex-col gap-6">
						{rightFeatures.map((feature, index) => (
							<motion.article
								key={feature.title}
								initial={{ opacity: 0, x: 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.1 * index }}
								className="bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/50 flex flex-col gap-4 group hover:bg-white transition-all hover:shadow-2xl hover:-translate-y-1"
							>
								<div className="bg-[#ED6A8E] p-3 rounded-xl w-fit group-hover:scale-110 transition-transform">
									<feature.icon className="size-6 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-black uppercase mb-2 tracking-tight text-gray-950">
										{feature.title}
									</h3>
									<p className="text-gray-600 leading-relaxed font-bold text-sm">
										{feature.description}
									</p>
								</div>
							</motion.article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

