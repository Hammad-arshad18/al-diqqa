import type { Route } from './+types/home';
import { seo } from '@/lib/seo';
import { Hero } from '@/components/home/hero';
import { About } from '@/components/home/about';
import { SupplyAreas } from '@/components/home/supply-areas';
import { FoodProducts } from '@/components/home/food-products';
import { Approach } from '@/components/home/approach';
import { Contact } from '@/components/home/contact';
import { Newsletter } from '@/components/home/newsletter';
import { companyName, heroImage } from '@/data/company';

export function meta({ matches, location }: Route.MetaArgs) {
  return seo({ matches, location }, {
    title: 'Al Daqa Al Mustadama for Foodstuff Importation',
    description: 'Al Daqa Al Mustadama for Foodstuff Importation is a company specializing in the import and supply of food products and livestock . Our goal is to meet the needs of the Libyan market by providing a diverse range of food products through reliable partnerships with international suppliers and manufacturers, while maintaining high standards of quality and food safety.',
    image: heroImage,
    jsonLd: [ { '@context': 'https://schema.org', '@type': 'Organization', name: companyName, description: 'Al Daqa Al Mustadama for Foodstuff Importation is a company specializing in the import and supply of food products and livestock .' }, { '@context': 'https://schema.org', '@type': 'WebSite', name: companyName } ],
  });
}
export default function HomePage() {
  return <main><Hero/><About/><SupplyAreas/><FoodProducts/><Approach/><Contact/><Newsletter/></main>;
}
