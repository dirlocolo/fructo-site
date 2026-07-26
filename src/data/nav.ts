export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services/' },
  { label: 'Outils', href: '/outils/' },
  { label: 'Contact', href: '/contact/' },
];

export const servicesNav: NavLink[] = [
  { label: 'Contacts Intéressés', href: '/services/contacts-interesses/' },
  { label: 'SaaS Operator', href: '/services/saas-operator/' },
  { label: 'SaaS Power', href: '/services/saas-power/' },
];

export const footerNav: NavLink[] = [
  { label: 'Mentions légales', href: '/mentions-legales/' },
];
