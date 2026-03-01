export type NavItem = {
  label: string;
  href: string;
};

export type StatItem = {
  label: string;
  value: string;
  note?: string;
};

export type SocialLinkKey = 'email' | 'phone' | 'whatsapp' | 'linkedin' | 'website' | 'facebook';

export type ProjectLinkSet = {
  android?: string;
  ios?: string;
  web?: string;
};

export type ProjectCaseStudy = {
  slug: string;
  title: string;
  shortTitle: string;
  role: string;
  duration: string;
  location?: string;
  summary: string;
  description: string;
  problem: string;
  solution: string;
  impact: string[];
  responsibilities: string[];
  techStack: string[];
  image: string;
  links: ProjectLinkSet;
  seo: {
    title: string;
    description: string;
  };
};

export type ServicePage = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  targetKeywords: string[];
  intro: string;
  deliverables: string[];
  proofPoints: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
  seo: {
    title: string;
    description: string;
  };
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  body: string[];
  seo: {
    title: string;
    description: string;
  };
};

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
  description: string;
};

export type SeoMeta = {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  keywords?: string[];
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
};

export type HomeSection = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
};
