export const TopBanner = () => {
    const Phrase = () => (
        <>
            <span>
                Únete al grupo:{" "}
                <span className="font-black">
                    Acceso Libre
                </span>
            </span>

            <span
                className="mx-4"
                aria-hidden="true"
            >
                •
            </span>

            <span>
                Comunidad oficial:{" "}
                <span className="font-black">
                    Sin Costo
                </span>
            </span>

            <span
                className="mx-4"
                aria-hidden="true"
            >
                •
            </span>

            <span>
                Accede ahora:{" "}
                <span className="font-black">
                    Sin Registro
                </span>
            </span>

            <span
                className="mx-4"
                aria-hidden="true"
            >
                •
            </span>
        </>
    );

    return (
        <div
            className="
                fixed
                top-0
                left-0
                w-full
                h-[40px]
                bg-[#ED6A8E]
                z-[9999]
                flex
                items-center
                overflow-hidden
                shadow-md
            "
        >
            <style>{`
                @keyframes marquee-scroll {
                    0% {
                        transform: translateX(0);
                    }

                    100% {
                        transform: translateX(-100%);
                    }
                }

                .animate-marquee {
                    display: flex;
                    animation: marquee-scroll 120s linear infinite;
                    will-change: transform;
                }

                @media (prefers-reduced-motion: reduce) {
                    .animate-marquee {
                        animation: none;
                        transform: none;
                    }
                }
            `}</style>

            <div className="flex w-full">
                <div
                    className="
                        animate-marquee
                        shrink-0
                        flex
                        items-center
                        whitespace-nowrap
                        text-white
                        text-sm
                        font-medium
                    "
                >
                    <Phrase />
                    <Phrase />
                    <Phrase />
                </div>

                <div
                    className="
                        animate-marquee
                        shrink-0
                        flex
                        items-center
                        whitespace-nowrap
                        text-white
                        text-sm
                        font-medium
                    "
                    aria-hidden="true"
                >
                    <Phrase />
                    <Phrase />
                    <Phrase />
                </div>
            </div>
        </div>
    );
};