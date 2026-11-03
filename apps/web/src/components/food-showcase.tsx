import { useEffect, useRef } from 'react';

export type FoodShowcaseItem = { name: string; image: string; alt: string };

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Large, interactive product showcase. Cards reveal with a staggered fade-up as
 * they scroll into view, images zoom gently on hover, and a bronze rule + CTA
 * animate in over a darkened gradient. Reduced-motion visitors see everything
 * static and immediately visible.
 */
export function FoodShowcase({
  items,
  ctaLabel,
}: {
  items: FoodShowcaseItem[];
  ctaLabel: string;
}) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll<HTMLElement>('.food-card'));
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce || !('IntersectionObserver' in window)) {
      cards.forEach((c) => c.classList.add('revealed'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <div className="food-showcase-grid" ref={gridRef}>
      {items.map((product, i) => (
        <article
          className="food-card"
          key={product.name}
          style={{ transitionDelay: `${(i % 3) * 90}ms` }}
        >
          <img
            src={product.image}
            srcSet={`${product.image}?width=480 480w, ${product.image}?width=900 900w`}
            sizes="(min-width: 1100px) 33vw, (min-width: 700px) 50vw, 100vw"
            alt={product.alt}
            loading="lazy"
          />
          <span className="food-card-shade" aria-hidden="true" />
          <div className="food-card-body">
            <span className="food-card-index">{String(i + 1).padStart(2, '0')}</span>
            <h3>{product.name}</h3>
            <span className="food-card-rule" aria-hidden="true" />
            <span className="food-card-cta">
              {ctaLabel}
              <ArrowIcon />
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
