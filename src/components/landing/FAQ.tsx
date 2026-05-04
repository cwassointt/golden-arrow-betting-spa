export const FAQ = () => {
    const faqs = [
        {
            q: "¿Es realmente gratis o hay algún truco?",
            a: "Es 100% gratis. No cobramos mensualidades ni suscripciones ocultas. Entras, copias mis resultados y ganas dinero. Así de sencillo."
        },
        {
            q: "¿Necesito saber de deportes para ganar dinero?",
            a: "Para nada. Tú no necesitas analizar absolutamente nada, de eso me encargo yo. Solo tienes que copiar mis indicaciones exactas y cobrar tus ganancias."
        },
        {
            q: "¿Cuánto dinero necesito para empezar a ganar?",
            a: "Puedes empezar con lo que tengas disponible. Te enseñaré a gestionar cualquier cantidad para que comiences a multiplicar tu dinero desde el día 1, sin presiones."
        },
        {
            q: "¿Cómo empiezo a copiar tus resultados?",
            a: "Cero complicaciones. Solo tienes que unirte al canal de Telegram haciendo clic en cualquiera de los botones de esta página. El acceso es inmediato y gratuito."
        }
    ];

    return (
        <section id="faq" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">

                <div className="mb-12 text-center md:text-left">
                    <h2 className="font-display font-black text-4xl md:text-5xl text-gray-900 tracking-tight">
                        Preguntas Frecuentes
                    </h2>
                </div>

                <div className="border-t border-gray-200">
                    {faqs.map((faq, index) => (
                        <details
                            key={index}
                            className="group border-b border-gray-200 [&_summary::-webkit-details-marker]:hidden"
                        >
                            <summary className="flex cursor-pointer items-center justify-between py-6 text-gray-900 outline-none hover:text-[#ED6A8E] transition-colors">
                                <h3 className="font-display font-bold text-lg md:text-xl pr-4 leading-snug">
                                    {faq.q}
                                </h3>

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