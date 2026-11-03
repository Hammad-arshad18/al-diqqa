import type { Route } from './+types/ar';
import { seo } from '@/lib/seo';
import { heroImage } from '@/data/company';
import { ArabicHero } from '@/components/ar/hero';
import { ArabicAbout } from '@/components/ar/about';
import { ArabicSupply } from '@/components/ar/supply';
import { ArabicFoodProducts } from '@/components/ar/food-products';
import { ArabicApproach } from '@/components/ar/approach';
import { ArabicContact } from '@/components/ar/contact';
import { ArabicNewsletter } from '@/components/ar/newsletter';

export function meta({ matches, location }: Route.MetaArgs) {
  return seo({ matches, location }, { title: 'شركة الدقة المستدامة لاستيراد المواد الغذائية', description: 'شركة الدقة المستدامة لاستيراد المواد الغذائية هي شركة متخصصة في استيراد وتوفير المواد الغذائية، وتهدف إلى تلبية احتياجات السوق الليبي من المنتجات الغذائية المتنوعة، من خلال بناء علاقات تجارية موثوقة مع الموردين والمصنعين، والحرص على توفير منتجات ذات جودة عالية وفق معايير السلامة والجودة.', image: heroImage, jsonLd: [{ '@context': 'https://schema.org', '@type': 'Organization', name: 'شركة الدقة المستدامة لاستيراد المواد الغذائية' }, { '@context': 'https://schema.org', '@type': 'WebSite', name: 'شركة الدقة المستدامة لاستيراد المواد الغذائية' }] });
}
export default function ArabicPage() {
  return <main><ArabicHero/><ArabicAbout/><ArabicSupply/><ArabicFoodProducts/><ArabicApproach/><ArabicContact/><ArabicNewsletter/></main>;
}
