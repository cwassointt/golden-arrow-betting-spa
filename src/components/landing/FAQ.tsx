export const FAQ = () => {
    const faqs = [
        {
            q: "¿Es el canal de Telegram realmente gratis?",
            a: "Sí, 100% gratis. No cobramos mensualidades ni hay suscripciones VIP de pago. Mi objetivo es crecer la comunidad y que todos ganemos juntos."
        },
        {
            q: "¿Necesito experiencia previa para seguir los picks?",
            a: "No, en el canal explico paso a paso cómo leer las cuotas y dónde colocar los pronósticos. Es ideal tanto para principiantes que buscan aprender, como para veteranos."
        },
        {
            q: "¿Con qué bank (capital) mínimo debo empezar?",
            a: "No hay un mínimo estricto. Lo más importante es la gestión de capital (Stake) que te enseñaré en el canal. Puedes empezar con el monto que te sientas cómodo invirtiendo."
        },
        {
            q: "¿En qué casas de apuestas operan?",
            a: "Los picks están diseñados para encontrarse en las casas de apuestas más populares y accesibles internacionalmente y en Perú, para que no tengas problemas al seguir la jugada."
        },
        {
            q: "¿Cuántos pronósticos envías al día?",
            a: "Priorizo estrictamente la calidad sobre la cantidad. Dependiendo de las oportunidades de valor en el mercado, envío entre 1 a 3 picks diarios respaldados por un análisis profundo."
        }
    ];

    return (
        <section id="faq" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">

                {/* Título estilo PrizePicks: Grueso, oscuro y centrado/alineado */}
                <div className="mb-12 text-center md:text-left">
                    <h2 className="font-display font-black text-4xl md:text-5xl text-gray-900 tracking-tight">
                        Preguntas Frecuentes
                    </h2>
                </div>

                {/* Contenedor de las preguntas con línea superior */}
                <div className="border-t border-gray-200">
                    {faqs.map((faq, index) => (
                        <details
                            key={index}
                            className="group border-b border-gray-200 [&_summary::-webkit-details-marker]:hidden"
                        >
                            {/* Pregunta */}
                            <summary className="flex cursor-pointer items-center justify-between py-6 text-gray-900 outline-none hover:text-[#ED6A8E] transition-colors">
                                <h3 className="font-display font-bold text-lg md:text-xl pr-4 leading-snug">
                                    {faq.q}
                                </h3>

                                {/* Ícono de Chevron minimalista que rota al abrir */}
                                <span className="relative size-5 shrink-0 transition-transform duration-300 group-open:rotate-180">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 text-gray-400 group-hover:text-[#ED6A8E] transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                            </summary>

                            {/* Respuesta */}
                            <div className="pb-6 text-gray-600 leading-relaxed text-sm md:text-base pr-8">
                                <p>{faq.a}</p>
                            </div>
                        </details>
                    ))}
                </div>

            </div>
        </section>
    );
};