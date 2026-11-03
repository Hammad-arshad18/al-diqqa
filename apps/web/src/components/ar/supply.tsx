import { ArrowUpRight } from 'lucide-react';
import { supplyAreas } from '@/data/company';
import { useReveal } from '@/hooks/use-reveal';

const text = [
  { name: 'المواد الغذائية', description: 'استيراد وتوريد المواد الغذائية للعملاء والمؤسسات. شاركونا المواصفات لنناقش احتياجاتكم.' },
  { name: 'المواشي', description: 'استفسارات استيراد وتوريد المواشي، مع التركيز على فهم النوع والكمية والتوقيت الذي تحتاجه أعمالكم.' },
  { name: 'اللحوم', description: 'استيراد وتوريد اللحوم لتلبية متطلبات الأعمال. تواصلوا معنا لمناقشة المواصفات والكميات وترتيبات التوريد.' },
];

export function ArabicSupply() {
  const reveal = useReveal<HTMLElement>();

  return (
    <section id="supply" className="supply-section">
      <div className="section-rail">
        <div className="section-heading reveal" ref={reveal}>
          <div>
            <p className="eyebrow dark-eyebrow">٠٢ / مجالات التوريد</p>
            <h2>
              ثلاثة مجالات.
              <br />
              <span>تركيز واحد واضح.</span>
            </h2>
          </div>
          <p>
            شركة الدقة المستدامة لاستيراد المواد الغذائية هي شركة متخصصة في استيراد وتوفير المواد الغذائية، وتهدف إلى تلبية احتياجات السوق الليبي من المنتجات الغذائية المتنوعة، من خلال بناء علاقات تجارية موثوقة مع الموردين والمصنعين، والحرص على توفير منتجات ذات جودة عالية وفق معايير السلامة والجودة.
          </p>
        </div>
        <div className="supply-grid">
          {supplyAreas.map((area, i) => (
            <article className="supply-card" key={area.name} style={{ animationDelay: `${i * 90}ms` }}>
              <div className="supply-image-wrap">
                <img src={area.image} alt={`صورة توضيحية لمجال ${text[i].name}`} loading="lazy" />
                <span className="category-number">{area.number}</span>
              </div>
              <div className="supply-card-copy">
                <h3>{text[i].name}</h3>
                <p>{text[i].description}</p>
                <a
                  className="text-link"
                  href="#contact"
                  onClick={() => {
                    const input = document.getElementById('interest') as HTMLSelectElement | null;
                    if (input) input.value = area.name;
                  }}
                >
                  استفسر عن {text[i].name} <ArrowUpRight size={20} />
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="image-caption">الصور توضيحية لمجالات التوريد. تُناقش تفاصيل التوفر والترتيبات عند الاستفسار.</p>
      </div>
    </section>
  );
}
