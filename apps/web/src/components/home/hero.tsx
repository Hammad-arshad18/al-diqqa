import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { contentEn, heroImage, slogan } from '@/data/company';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <img
        className="hero-image"
        src={heroImage}
        sizes="100vw"
        alt="Farm-to-export supply chain: livestock and crops, a cargo port, and food products ready for trade"
        fetchPriority="high"
      />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-content">
        <p className="eyebrow">
          <span className="small-line" /> FOODSTUFF IMPORTATION
        </p>
        <h1 id="hero-heading">
          PRECISION IN
          <br />
          SELECTION.
          <br />
          <span>
            SUSTAINABILITY
            <br className="mobile-break" /> IN TRUST.
          </span>
        </h1>
        <p className="hero-description">{contentEn.intro[0]}</p>
        <a className="button button-bronze" href="#supply">
          Explore our supply areas <ArrowUpRight size={20} />
        </a>
      </div>
      <div className="hero-bottom">
        <span>{slogan}</span>
        <a href="#about">
          Discover the company <ArrowDown size={17} />
        </a>
      </div>
    </section>
  );
}
