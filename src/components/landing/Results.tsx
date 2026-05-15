import { CheckCircle2, XCircle, Trophy, BarChart3, TrendingUp, DollarSign } from "lucide-react";

const RESULTS_SECTION_ID = "resultados";

const stats = [
	{
		label: "APUESTAS TOTALES",
		value: "150",
		icon: CheckCircle2,
		color: "text-gray-400",
	},
	{
		label: "APUESTAS GANADAS",
		value: "135",
		icon: CheckCircle2,
		color: "text-green-400",
	},
	{
		label: "APUESTAS PERDIDAS",
		value: "15",
		icon: XCircle,
		color: "text-red-400",
	},
	{
		label: "PORCENTAJE DE ACIERTO",
		value: "90%",
		icon: BarChart3,
		color: "text-green-400",
	},
	{
		label: "UNIDADES GANADAS",
		value: "+82.35",
		icon: TrendingUp,
		color: "text-green-400",
	},
	{
		label: "ROI (RETORNO)",
		value: "+82.35%",
		icon: DollarSign,
		color: "text-green-400",
	},
];

const picks = [
	{
		period: "Hace un día",
		event: "Real Madrid vs Betis",
		bet: "Real Madrid - Gana",
		odds: "1.60",
		stake: "1",
		result: "GANADA",
		units: "+0.60",
	},
	{
		period: "Hace dos días",
		event: "Flamengo vs Palmeiras",
		bet: "Flamengo - Gana",
		odds: "1.75",
		stake: "1",
		result: "GANADA",
		units: "+0.75",
	},
	{
		period: "Hace tres días",
		event: "Man City vs Fulham",
		bet: "Man City - Gana",
		odds: "1.55",
		stake: "1",
		result: "GANADA",
		units: "+0.55",
	},
	{
		period: "Hace cuatro días",
		event: "Boca Juniors vs Racing",
		bet: "Boca Juniors - Gana",
		odds: "1.70",
		stake: "1",
		result: "GANADA",
		units: "+0.70",
	},
	{
		period: "Hace cinco días",
		event: "PSG vs Lyon",
		bet: "PSG - Gana",
		odds: "1.60",
		stake: "1",
		result: "GANADA",
		units: "+0.60",
	},
	{
		period: "Hace seis días",
		event: "Inter vs Atalanta",
		bet: "Más de 2.5 goles",
		odds: "1.80",
		stake: "1",
		result: "GANADA",
		units: "+0.80",
	},
	{
		period: "Hace siete días",
		event: "Barcelona vs Sevilla",
		bet: "Barcelona - Gana",
		odds: "1.50",
		stake: "1",
		result: "GANADA",
		units: "+0.50",
	},
	{
		period: "Hace ocho días",
		event: "Liverpool vs Wolves",
		bet: "Liverpool - Gana",
		odds: "1.65",
		stake: "1",
		result: "GANADA",
		units: "+0.65",
	},
	{
		period: "Hace nueve días",
		event: "River Plate vs Talleres",
		bet: "River Plate - Gana",
		odds: "1.70",
		stake: "1",
		result: "GANADA",
		units: "+0.70",
	},
	{
		period: "Hace diez días",
		event: "Napoli vs Fiorentina",
		bet: "Napoli - Gana",
		odds: "1.55",
		stake: "1",
		result: "GANADA",
		units: "+0.55",
	},
	{
		period: "Hace once días",
		event: "Sporting vs Porto",
		bet: "Sporting - Gana",
		odds: "1.60",
		stake: "1",
		result: "GANADA",
		units: "+0.60",
	},
	{
		period: "Hace doce días",
		event: "Chelsea vs Bournemouth",
		bet: "Chelsea - Gana",
		odds: "1.70",
		stake: "1",
		result: "PERDIDA",
		units: "-1.00",
	},
	{
		period: "Hace trece días",
		event: "Atlético MG vs Cruzeiro",
		bet: "Atlético MG - Gana",
		odds: "1.75",
		stake: "1",
		result: "GANADA",
		units: "+0.75",
	},
	{
		period: "Hace catorce días",
		event: "Arsenal vs Everton",
		bet: "Arsenal - Gana",
		odds: "1.60",
		stake: "1",
		result: "GANADA",
		units: "+0.60",
	},
	{
		period: "Hace quince días",
		event: "Corinthians vs São Paulo",
		bet: "Corinthians - Gana",
		odds: "1.80",
		stake: "1",
		result: "GANADA",
		units: "+0.80",
	},
	{
		period: "Hace dieciséis días",
		event: "México vs Bolivia",
		bet: "México - Gana",
		odds: "1.50",
		stake: "1",
		result: "GANADA",
		units: "+0.50",
	},
	{
		period: "Hace diecisiete días",
		event: "Estados Unidos vs Jamaica",
		bet: "Estados Unidos - Gana",
		odds: "1.65",
		stake: "1",
		result: "GANADA",
		units: "+0.65",
	},
	{
		period: "Hace treinta días",
		event: "Al Hilal vs Al Nassr",
		bet: "Al Hilal - Gana",
		odds: "1.70",
		stake: "1",
		result: "GANADA",
		units: "+0.70",
	},
];

export const Results = () => {
	return (
		<section
			id={RESULTS_SECTION_ID}
			className="py-24 bg-gray-950 text-white relative overflow-hidden"
		>
			{/* Resplandor de fondo */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,rgba(237,106,142,0.05)_0%,transparent_50%)] pointer-events-none"></div>

			<div className="container mx-auto px-4 md:px-6 relative z-10">
				{/* Cabecera del Panel */}
				<div className="bg-black/50 backdrop-blur-xl rounded-t-3xl p-8 mb-1 flex flex-col md:flex-row items-center justify-between gap-6 border-x border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
					<div className="flex items-center gap-4">
						<div className="bg-gradient-to-br from-[#D4AF37] to-[#AA8418] p-3 rounded-2xl shadow-[0_0_20px_rgba(212,175,55,0.3)]">
							<Trophy className="h-8 w-8 text-black" />
						</div>
						<div>
							<h2 className="text-white font-black text-2xl md:text-4xl tracking-tighter uppercase italic leading-none">
								ESTADÍSTICAS DEL CANAL
							</h2>
							<p className="text-green-400 font-black text-lg md:text-xl uppercase tracking-widest mt-1">
								Historial Verificado
							</p>
						</div>
					</div>
					<div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-5 shadow-inner">
						<div className="text-right">
							<p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">
								Efectividad
							</p>
							<p className="text-green-400 text-5xl font-black italic leading-none">
								90%
							</p>
						</div>
						<CheckCircle2 className="h-12 w-12 text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
					</div>
				</div>

				{/* Resumen de Métricas */}
				<div className="grid grid-cols-2 lg:grid-cols-6 gap-1 mb-8">
					{stats.map((stat) => (
						<div
							key={stat.label}
							className="bg-white/5 backdrop-blur-sm p-6 text-center border border-white/10 hover:bg-white/10 transition-colors"
						>
							<stat.icon
								className={`mx-auto h-6 w-6 ${stat.color} mb-3`}
							/>
							<p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">
								{stat.label}
							</p>
							<p className={`text-2xl font-black ${stat.color}`}>
								{stat.value}
							</p>
						</div>
					))}
				</div>

				{/* Tabla con Scroll */}
				<div className="rounded-xl border border-white/10 shadow-2xl bg-black/40 backdrop-blur-md overflow-hidden">
					<div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
						<table className="w-full text-left border-collapse">
							<thead className="sticky top-0 z-20 bg-gray-900 shadow-xl">
								<tr className="text-gray-400 uppercase text-[10px] font-black tracking-widest border-b border-white/10">
									<th className="p-5">Período</th>
									<th className="p-5">Evento</th>
									<th className="p-5">Apuesta</th>
									<th className="p-5 text-center">Cuota</th>
									<th className="p-5 text-center">Stake</th>
									<th className="p-5 text-center text-white">Resultado</th>
									<th className="p-5 text-center text-white">Unidades</th>
								</tr>
							</thead>
							<tbody className="text-sm font-bold">
								{picks.map((pick, i) => (
									<tr
										key={i}
										className="border-b border-white/5 hover:bg-white/5 transition-all group"
									>
										<td className="p-5 text-gray-500 font-medium whitespace-nowrap">
											{pick.period}
										</td>
										<td className="p-5 text-white group-hover:text-green-400 transition-colors uppercase tracking-tight">
											{pick.event}
										</td>
										<td className="p-5 text-gray-300">{pick.bet}</td>
										<td className="p-5 text-center text-[#D4AF37] font-black text-lg">
											{pick.odds}
										</td>
										<td className="p-5 text-center text-gray-400">
											{pick.stake}
										</td>
										<td className="p-5 text-center">
											<span
												className={`inline-block px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-tighter ${
													pick.result === "GANADA"
														? "bg-green-500/20 text-green-400 border border-green-500/30"
														: "bg-red-500/20 text-red-400 border border-red-500/30"
												}`}
											>
												{pick.result}
											</span>
										</td>
										<td
											className={`p-5 text-center font-black text-lg ${
												pick.units.startsWith("+")
													? "text-green-400"
													: "text-red-400"
											}`}
										>
											{pick.units}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

					{/* Footer de Totales */}
					<div className="bg-green-500/10 text-white font-black uppercase border-t-2 border-green-500/50 flex flex-col md:flex-row justify-between items-center p-6 gap-4">
						<span className="text-xl tracking-tighter italic">
							RENDIMIENTO TOTAL ACUMULADO
						</span>
						<div className="flex gap-8 text-center">
							<div>
								<p className="text-[10px] text-gray-400">GANADAS</p>
								<p className="text-xl">135</p>
							</div>
							<div>
								<p className="text-[10px] text-gray-400">EFECTIVIDAD</p>
								<p className="text-xl text-green-400">90%</p>
							</div>
							<div>
								<p className="text-[10px] text-gray-400">PROFIT NETO</p>
								<p className="text-3xl text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.3)]">
									+82.35
								</p>
							</div>
						</div>
					</div>
				</div>

				<p className="mt-8 text-center text-gray-500 text-[10px] font-bold tracking-[0.2em] uppercase">
					Verificación de Terceros — Auditoría Interna — Historial de Telegram
					2026
				</p>
			</div>
		</section>
	);
};

