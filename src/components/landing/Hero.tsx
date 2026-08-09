import { TelegramIcon } from "@/components/icons/TelegramIcon";
import { TELEGRAM_LINK } from "@/config/constants";
import heroImage from "@/images/ninhoviejo.webp";

export const Hero = () => {
  return (
    <section className="landing-hero" aria-labelledby="community-title">
      <header className="site-header" aria-label="Identidad">
        <a className="brand-mark" href="/" aria-label="NINHOVIEJO, inicio">
          NINHOVIEJO
        </a>
      </header>

      <figure className="hero-media" aria-label="Fotografía de Niño Viejo">
        <img
          className="hero-image"
          src={heroImage}
          alt="Niño Viejo sentado sobre su automóvil dorado."
          width="1600"
          height="1066"
          fetchPriority="high"
        />
      </figure>

      <div className="hero-copy">
        <h1 id="community-title" className="hero-title">
          <span className="hero-title__line">COMUNIDAD DE</span>
          <span className="hero-title__name">NIÑO VIEJO</span>
        </h1>
        <p className="hero-subcopy">
          Accede a la comunidad oficial.
          <span>Totalmente sin costo.</span>
        </p>
        <a
          className="community-cta"
          href={TELEGRAM_LINK}
          aria-label="Acceder a la comunidad oficial de Niño Viejo"
        >
          <TelegramIcon className="community-cta__icon" aria-hidden="true" />
          <span>ACCEDER A LA COMUNIDAD</span>
        </a>
      </div>
    </section>
  );
};
