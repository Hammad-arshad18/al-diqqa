import { ArrowUpRight } from 'lucide-react';
import { contentEn } from '@/data/company';
import { useReveal } from '@/hooks/use-reveal';

export function Approach() {
  const reveal = useReveal<HTMLElement>();

  return (
    <section id="approach" className="approach reveal" ref={reveal}>
      <div className="approach-inner">
        <p className="eyebrow">VISION · MISSION · VALUES</p>
        <div className="approach-title">
          <h2>
            {contentEn.visionTitle.toUpperCase()}.
            <br />
            <span>
              {contentEn.missionTitle.toUpperCase()}. {contentEn.valuesTitle.toUpperCase()}.
            </span>
          </h2>
          <a href="#contact" className="round-link" aria-label="Start a supply enquiry">
            <ArrowUpRight size={35} strokeWidth={1.4} />
          </a>
        </div>
        <div className="approach-steps approach-pillars">
          <div>
            <span>01 — {contentEn.visionTitle.toUpperCase()}</span>
            <p>{contentEn.vision}</p>
          </div>
          <div>
            <span>02 — {contentEn.missionTitle.toUpperCase()}</span>
            <p>{contentEn.mission}</p>
          </div>
          <div>
            <span>03 — {contentEn.valuesTitle.toUpperCase()}</span>
            <ul className="values-list">
              {contentEn.values.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
