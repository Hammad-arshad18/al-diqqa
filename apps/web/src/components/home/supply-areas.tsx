import { ArrowUpRight } from 'lucide-react';
import { supplyAreas } from '@/data/company';
import { useReveal } from '@/hooks/use-reveal';

export function SupplyAreas() {
  const reveal = useReveal<HTMLElement>();

  return (
    <section id="supply" className="supply-section">
      <div className="section-rail">
        <div className="section-heading reveal" ref={reveal}>
          <div>
            <p className="eyebrow dark-eyebrow">02 / OUR SUPPLY AREAS</p>
            <h2>
              THREE AREAS.
              <br />
              <span>ONE CLEAR FOCUS.</span>
            </h2>
          </div>
          <p>
            Our goal is to meet the needs of the Libyan market by providing a diverse range of food products through reliable partnerships with international suppliers and manufacturers, while maintaining high standards of quality and food safety.
          </p>
        </div>
        <div className="supply-grid">
          {supplyAreas.map((area, index) => (
            <article className="supply-card" key={area.name} style={{ animationDelay: `${index * 90}ms` }}>
              <div className="supply-image-wrap">
                <img
                  src={area.image}
                  srcSet={`${area.image}?width=375 375w, ${area.image}?width=768 768w, ${area.image} 1216w`}
                  sizes="(min-width: 900px) 30vw, (min-width: 600px) 48vw, 100vw"
                  alt={area.alt}
                  loading="lazy"
                />
                <span className="category-number">{area.number}</span>
              </div>
              <div className="supply-card-copy">
                <h3>{area.name}</h3>
                <p>{area.description}</p>
                <a
                  className="text-link"
                  href="#contact"
                  onClick={() => {
                    const input = document.getElementById('interest') as HTMLSelectElement | null;
                    if (input) input.value = area.name;
                  }}
                >
                  Enquire about {area.name.toLowerCase()} <ArrowUpRight size={20} />
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="image-caption">
          Images illustrate our supply categories. Specific availability and arrangements are discussed on enquiry.
        </p>
      </div>
    </section>
  );
}
