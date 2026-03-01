import { useEffect } from 'react';
import { SeoMeta } from '../types';

function ensureMeta(selector: string, attrs: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    Object.entries(attrs).forEach(([key, value]) => element?.setAttribute(key, value));
    document.head.appendChild(element);
  }
  return element;
}

type SeoProps = {
  meta: SeoMeta;
};

export default function Seo({ meta }: SeoProps) {
  useEffect(() => {
    document.title = meta.title;

    const description = ensureMeta('meta[name="description"]', { name: 'description' });
    description.setAttribute('content', meta.description);

    const keywords = ensureMeta('meta[name="keywords"]', { name: 'keywords' });
    keywords.setAttribute('content', (meta.keywords ?? []).join(', '));

    const ogTitle = ensureMeta('meta[property="og:title"]', { property: 'og:title' });
    ogTitle.setAttribute('content', meta.ogTitle ?? meta.title);

    const ogDescription = ensureMeta('meta[property="og:description"]', { property: 'og:description' });
    ogDescription.setAttribute('content', meta.ogDescription ?? meta.description);

    const ogType = ensureMeta('meta[property="og:type"]', { property: 'og:type' });
    ogType.setAttribute('content', 'website');

    const ogUrl = ensureMeta('meta[property="og:url"]', { property: 'og:url' });
    ogUrl.setAttribute('content', meta.canonical);

    const ogImage = ensureMeta('meta[property="og:image"]', { property: 'og:image' });
    ogImage.setAttribute('content', meta.ogImage ?? '');

    const twitterCard = ensureMeta('meta[name="twitter:card"]', { name: 'twitter:card' });
    twitterCard.setAttribute('content', 'summary_large_image');

    const twitterTitle = ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title' });
    twitterTitle.setAttribute('content', meta.ogTitle ?? meta.title);

    const twitterDescription = ensureMeta('meta[name="twitter:description"]', { name: 'twitter:description' });
    twitterDescription.setAttribute('content', meta.ogDescription ?? meta.description);

    const twitterImage = ensureMeta('meta[name="twitter:image"]', { name: 'twitter:image' });
    twitterImage.setAttribute('content', meta.ogImage ?? '');

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', meta.canonical);

    const oldSchema = document.head.querySelectorAll('script[data-seo-schema="true"]');
    oldSchema.forEach((node) => node.remove());
    const payloads = Array.isArray(meta.structuredData) ? meta.structuredData : meta.structuredData ? [meta.structuredData] : [];
    payloads.forEach((payload) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seoSchema = 'true';
      script.textContent = JSON.stringify(payload);
      document.head.appendChild(script);
    });
  }, [meta]);

  return null;
}
