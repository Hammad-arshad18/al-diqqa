import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { companyNameAr, contentAr, heroImage } from '@/data/company';

export function ArabicHero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <img
        className="hero-image"
        src={heroImage}
        alt="سلسلة التوريد من المزرعة إلى التصدير: مواشي ومحاصيل، ميناء شحن، ومنتجات غذائية جاهزة للتجارة"
        fetchPriority="high"
      />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-content">
        <p className="eyebrow">
          <span className="small-line" /> استيراد المواد الغذائية
        </p>
        <h1 id="hero-heading">
          شركة الدقة
          <br />
          المستدامة
          <br />
          <span>لاستيراد المواد الغذائية</span>
        </h1>
        <p className="hero-description">{contentAr.intro[0]}</p>
        <a className="button button-bronze" href="#supply">
          اكتشف مجالات التوريد <ArrowUpRight size={20} />
        </a>
      </div>
      <div className="hero-bottom">
        <span>{companyNameAr}</span>
        <a href="#about">
          تعرّف على الشركة <ArrowDown size={17} />
        </a>
      </div>
    </section>
  );
}
