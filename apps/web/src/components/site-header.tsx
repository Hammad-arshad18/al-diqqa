import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useLocation } from 'react-router';
import { useDisclosure } from '@/hooks/use-disclosure';

const logo = 'https://horizons-cdn.hostinger.com/ad12bfcd-97ee-4eca-861a-0c24dcd8d2c9/a237a4a1c81c2a8846423fe4e0395c95.png';

export function SiteHeader() {
  const menu = useDisclosure();
  const arabic = useLocation().pathname === '/ar';
  const base = arabic ? '/ar' : '/';
  const links = arabic ? [['الرئيسية', `${base}#`], ['من نحن', `${base}#about`], ['مجالات التوريد', `${base}#supply`], ['تواصل معنا', `${base}#contact`]] : [['Home', '/#'], ['About us', '/#about'], ['Our supply areas', '/#supply'], ['Contact', '/#contact']];
  return <header className="site-header">
    <a className="brand brand-logo" href={base} aria-label={arabic ? 'شركة الدقة المستدامة لاستيراد المواد الغذائية، الصفحة الرئيسية' : 'Al Daqa Al Mustadama for Foodstuff Importation home'}><img src={logo} alt={arabic ? 'شعار شركة الدقة المستدامة لاستيراد المواد الغذائية' : 'Al Daqa Al Mustadama for Foodstuff Importation logo'}/></a>
    <nav className="desktop-nav" aria-label={arabic ? 'التنقل الرئيسي' : 'Main navigation'}>{links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
    <div className="header-actions"><a className="language-link" href={arabic ? '/' : '/ar'} lang={arabic ? 'en' : 'ar'}>{arabic ? 'English' : 'العربية'}</a><a className="header-enquiry" href={`${base}#contact`}>{arabic ? 'أرسل استفساراً' : 'Make an enquiry'} <ArrowUpRight size={17}/></a></div>
    <button className="mobile-toggle" {...menu.triggerProps} aria-label={menu.isOpen ? (arabic ? 'إغلاق القائمة' : 'Close navigation') : (arabic ? 'فتح القائمة' : 'Open navigation')}>{menu.isOpen ? <X/> : <Menu/>}</button>
    {menu.isOpen && <nav className="mobile-nav" {...menu.panelProps} aria-label={arabic ? 'قائمة الجوال' : 'Mobile navigation'}>{links.map(([label,href]) => <a key={label} href={href} onClick={menu.close}>{label}<ArrowUpRight size={18}/></a>)}</nav>}
  </header>;
}
