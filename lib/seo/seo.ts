import { SITE_URL } from '../../content/site';
import { SeoMeta } from '../../types';

export function absoluteUrl(pathname: string) {
  return pathname.startsWith('http') ? pathname : `${SITE_URL}${pathname}`;
}

export function buildPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Tighezza M. Salah',
    jobTitle: 'Flutter developer',
    url: SITE_URL,
    sameAs: [
      'https://www.linkedin.com/in/mohammed-salah-tighezza-743462142/',
      'https://www.facebook.com/share/1HFRvNvGW6/?mibextid=wwXIfr',
    ],
    knowsAbout: ['Flutter', 'Firebase', 'Supabase', 'Android', 'iOS', 'mobile app development'],
  };
}

export function createSeoMeta(meta: Partial<SeoMeta> & Pick<SeoMeta, 'title' | 'description' | 'canonical'>): SeoMeta {
  return {
    ogTitle: meta.ogTitle ?? meta.title,
    ogDescription: meta.ogDescription ?? meta.description,
    ogImage: meta.ogImage ?? `${SITE_URL}/assets/profile.jpg`,
    keywords: meta.keywords ?? [],
    structuredData: meta.structuredData ?? [],
    ...meta,
  };
}
