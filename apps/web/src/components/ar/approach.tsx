import { ArrowUpRight } from 'lucide-react';
import { contentAr } from '@/data/company';
import { useReveal } from '@/hooks/use-reveal';

export function ArabicApproach() {
  const reveal = useReveal<HTMLElement>();

  return (
    <section id="approach" className="approach reveal" ref={reveal}>
      <div className="approach-inner">
        <p className="eyebrow">الرؤية · الرسالة · القيم</p>
        <div className="approach-title">
          <h2>
            {contentAr.visionTitle}.
            <br />
            <span>
              {contentAr.missionTitle}. {contentAr.valuesTitle}.
            </span>
          </h2>
          <a href="#contact" className="round-link" aria-label="ابدأ استفساراً عن التوريد">
            <ArrowUpRight size={35} strokeWidth={1.4} />
          </a>
        </div>
        <div className="approach-steps approach-pillars">
          <div>
            <span>٠١ — {contentAr.visionTitle}</span>
            <p>{contentAr.vision}</p>
          </div>
          <div>
            <span>٠٢ — {contentAr.missionTitle}</span>
            <p>{contentAr.mission}</p>
          </div>
          <div>
            <span>٠٣ — {contentAr.valuesTitle}</span>
            <ul className="values-list">
              {contentAr.values.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
