import { ContactMethod, NavItem, StatItem } from '../types';

export const SITE_URL = 'https://appgeni.netlify.app';
export const GA_MEASUREMENT_ID = 'G-X52RPY6WQ5';

export const SOCIAL_LINKS = {
  email: 'salahdevmobile@gmail.com',
  phone: '+213656375516',
  whatsapp: 'https://wa.me/213656375516',
  linkedin: 'https://www.linkedin.com/in/mohammed-salah-tighezza-743462142/',
  website: 'https://appgeni.netlify.app/',
  facebook: 'https://www.facebook.com/share/1HFRvNvGW6/?mibextid=wwXIfr',
} as const;

export const PRIMARY_NAV: NavItem[] = [
  { label: 'Projects', href: '/#projects' },
  { label: 'Services', href: '/#services' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const HERO_STATS: StatItem[] = [
  { value: '5+ years', label: 'shipping mobile products' },
  { value: 'Android + iOS', label: 'published apps' },
  { value: 'France, Germany, UK', label: 'remote client footprint' },
];

export const TRUST_POINTS = [
  'Remote-ready Flutter delivery for startups',
  'Firebase and Supabase architecture experience',
  'App Store and Google Play publishing support',
];

export const CONTACT_METHODS: ContactMethod[] = [
  {
    label: 'WhatsApp',
    value: '+213 656 375 516',
    href: SOCIAL_LINKS.whatsapp,
    description: 'Best for a fast mobile-first conversation.',
  },
  {
    label: 'Email',
    value: SOCIAL_LINKS.email,
    href: `mailto:${SOCIAL_LINKS.email}`,
    description: 'Best for briefs, requirements, and formal outreach.',
  },
  {
    label: 'LinkedIn',
    value: 'View profile',
    href: SOCIAL_LINKS.linkedin,
    description: 'Professional profile and background.',
  },
];

export const CORE_SKILLS = [
  'Flutter',
  'Dart',
  'Firebase',
  'Supabase',
  'REST APIs',
  'Clean Architecture',
  'App Store delivery',
  'Play Store delivery',
  'Realtime features',
  'Mobile UX systems',
];
