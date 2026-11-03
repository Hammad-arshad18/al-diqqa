import { ArrowUpRight } from 'lucide-react';
import { companyNameAr, contentAr } from '@/data/company';
import { useReveal } from '@/hooks/use-reveal';

export function ArabicAbout() {
  const reveal = useReveal<HTMLElement>();

  return (
    <section id="about" className="about section-rail reveal" ref={reveal}>
      <div className="about-intro">
        <p className="eyebrow dark-eyebrow">٠١ / عن الشركة</p>
        <h2>
          شركة الدقة
          <br />
          <span>
            المستدامة لاستيراد
            <br />
            المواد الغذائية
          </span>
        </h2>
        <p className="about-slogan">{companyNameAr}</p>
        <a className="text-link" href="#contact">
          تواصل معنا <ArrowUpRight size={20} />
        </a>
      </div>
      <div className="about-copy">
        {contentAr.intro.map((paragraph) => (
          <p key={paragraph} className={paragraph === contentAr.intro[0] ? 'serif-lead' : undefined}>
            {paragraph}
          </p>
        ))}
        <div className="about-bottom">
          <span className="three">٠٣</span>
          <span>
            {companyNameAr}
            <br />
            <em>{contentAr.valuesTitle}</em>
          </span>
          <span className="corner-graphic" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
