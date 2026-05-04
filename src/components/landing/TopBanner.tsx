export const TopBanner = () => {
    const Phrase = () => (
        <>
            <span>Únete al canal VIP: <span className="font-black">Totalmente Gratis</span></span>
            <span className="mx-4">•</span>
            <span>Comunidad de apuestas: <span className="font-black">Cero Pagos</span></span>
            <span className="mx-4">•</span>
            <span>Acceso inmediato: <span className="font-black">Sin Compromisos</span></span>
            <span className="mx-4">•</span>
        </>
    );

    return (
        <div className="fixed top-0 left-0 w-full h-[40px] bg-[#ED6A8E] z-[9999] flex items-center overflow-hidden shadow-md">
            <style>{`
                @keyframes marquee-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-100%); }
                }
                .animate-marquee {
                    display: flex;
                    animation: marquee-scroll 120s linear infinite;
                }
            `}</style>

            <div className="flex w-full">

                <div className="animate-marquee shrink-0 flex items-center text-white text-sm font-medium">
                    <Phrase />
                    <Phrase />
                    <Phrase />
                </div>

                <div className="animate-marquee shrink-0 flex items-center text-white text-sm font-medium" aria-hidden="true">
                    <Phrase />
                    <Phrase />
                    <Phrase />
                </div>

            </div>
        </div>
    );
};