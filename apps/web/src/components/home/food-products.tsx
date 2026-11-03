import { foodProducts } from '@/data/company';
import { FoodShowcase } from '@/components/food-showcase';

export function FoodProducts() {
  return (
    <section id="foodstuffs" className="food-products-section">
      <div className="section-rail">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark-eyebrow">FOODSTUFFS / OUR PRODUCTS</p>
            <h2>
              FIVE STAPLES.
              <br />
              <span>SOURCED WITH CARE.</span>
            </h2>
          </div>
          <p>
            A selection of the foodstuff products we import and supply.
            <br />
            Availability and specifications are confirmed on enquiry.
          </p>
        </div>
        <FoodShowcase items={foodProducts} ctaLabel="Enquire about supply" />
      </div>
    </section>
  );
}
