import { foodProducts } from '@/data/company';
import { FoodShowcase } from '@/components/food-showcase';

const names = ['الشوكولاتة', 'الدقيق', 'زيت الطهي', 'التونة', 'الزيتون'];

export function ArabicFoodProducts() {
  const items = foodProducts.map((product, i) => ({
    name: names[i],
    image: product.image,
    alt: `صورة منتج ${names[i]}`,
  }));
  return (
    <section id="foodstuffs" className="food-products-section">
      <div className="section-rail">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark-eyebrow">المواد الغذائية / منتجاتنا</p>
            <h2>
              خمس مواد أساسية.
              <br />
              <span>مصدرها منتقى بعناية.</span>
            </h2>
          </div>
          <p>
            مجموعة من المنتجات الغذائية التي نستوردها ونوردها.
            <br />
            يُؤكد التوفر والمواصفات عند الاستفسار.
          </p>
        </div>
        <FoodShowcase items={items} ctaLabel="استفسر عن التوريد" />
      </div>
    </section>
  );
}
