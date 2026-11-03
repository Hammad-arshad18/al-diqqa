import { useEffect, useRef } from 'react';

/** Adds `.revealed` when the element enters the viewport (once). */
export function useReveal<T extends HTMLElement = HTMLElement>(rootMargin = '0px 0px -8% 0px') {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('revealed');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        el.classList.add('revealed');
        observer.disconnect();
      },
      { rootMargin, threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return ref;
}
