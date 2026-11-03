import { ArrowUpRight } from 'lucide-react';
import { companyName, contentEn, slogan } from '@/data/company';
import { useReveal } from '@/hooks/use-reveal';

export function About() {
  const reveal = useReveal<HTMLElement>();

  return (
    <section id="about" className="about section-rail reveal" ref={reveal}>
      <div className="about-intro">
        <p className="eyebrow dark-eyebrow">01 / ABOUT THE COMPANY</p>
        <h2>
          AL DAQA AL MUSTADAMA
          <br />
          <span>
            FOR FOODSTUFF
            <br />
            IMPORTATION.
          </span>
        </h2>
        <p className="about-slogan">
          <strong>{contentEn.sloganTitle}</strong>
          <br />
          {slogan}
        </p>
        <a className="text-link" href="#contact">
          Get to know us <ArrowUpRight size={20} />
        </a>
      </div>
      <div className="about-copy">
        {contentEn.intro.map((paragraph) => (
          <p key={paragraph} className={paragraph === contentEn.intro[0] ? 'serif-lead' : undefined}>
            {paragraph}
          </p>
        ))}
        <div className="about-bottom">
          <span className="three">03</span>
          <span>
            {companyName}
            <br />
            <em>{slogan}</em>
          </span>
          <span className="corner-graphic" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
