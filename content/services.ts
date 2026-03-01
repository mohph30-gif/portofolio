import { ServicePage } from '../types';

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: 'flutter-developer-algeria',
    title: 'Flutter Developer Algeria',
    h1: 'Flutter Developer in Algeria',
    description:
      'Remote Flutter development for startups and businesses that need Android and iOS apps delivered quickly with production-ready quality.',
    targetKeywords: [
      'flutter developer algeria',
      'flutter freelancer algeria',
      'android ios developer algeria',
      'firebase flutter developer',
    ],
    intro:
      'I work with startups and businesses that need a strong mobile product without the overhead of building separate Android and iOS teams. My focus is Flutter delivery with clean architecture, modern mobile UX, and dependable release support.',
    deliverables: [
      'Cross-platform Flutter apps for Android and iOS',
      'Firebase and Supabase integration',
      'App launch and store submission support',
      'Feature delivery for MVPs and production products',
    ],
    proofPoints: [
      'Published apps on both major mobile stores',
      'Experience with clients in Algeria, France, Germany, and the UK',
      'Delivery across fintech, coaching, productivity, and community products',
    ],
    faq: [
      {
        question: 'Do you work remotely with clients outside Algeria?',
        answer:
          'Yes. I regularly work remotely with international clients and teams, especially on mobile app design, development, and release support.',
      },
      {
        question: 'Do you only work on Flutter front ends?',
        answer:
          'No. I also handle backend integration, Firebase and Supabase work, API integration, and the technical delivery steps needed to ship the product.',
      },
    ],
    seo: {
      title: 'Flutter Developer Algeria | Tighezza M. Salah',
      description:
        'Flutter developer in Algeria building Android and iOS apps for startups and businesses with Firebase, Supabase, and full delivery support.',
    },
  },
  {
    slug: 'mobile-app-developer-freelance',
    title: 'Freelance Mobile App Developer',
    h1: 'Freelance Mobile App Developer',
    description:
      'End-to-end freelance mobile app development for startups that need one developer to design, build, launch, and improve a product.',
    targetKeywords: [
      'freelance mobile app developer',
      'mobile app developer freelance',
      'flutter app developer for startups',
      'supabase flutter developer',
    ],
    intro:
      'I help founders and product teams move from idea to launch with a practical delivery setup: one codebase, direct communication, and a build process focused on getting the app in users’ hands.',
    deliverables: [
      'Discovery and feature shaping',
      'Flutter application implementation',
      'Backend integration and realtime features',
      'Store launch, QA support, and iteration',
    ],
    proofPoints: [
      'Strong mobile-first product delivery background',
      'Comfortable working as an embedded remote freelance partner',
      'Capable of moving from brief to store-ready build',
    ],
    faq: [
      {
        question: 'Can you help validate an MVP before a full build?',
        answer:
          'Yes. I can scope the smallest viable release, reduce unnecessary complexity, and focus the app on the actions that matter first.',
      },
      {
        question: 'Do you support maintenance after launch?',
        answer:
          'Yes. I can continue on a freelance or retainer basis for bug fixes, feature expansion, and release follow-up after launch.',
      },
    ],
    seo: {
      title: 'Freelance Mobile App Developer | Flutter, Firebase, Supabase',
      description:
        'Freelance mobile app developer for startups and businesses needing Flutter, Firebase, Supabase, and launch-ready Android/iOS delivery.',
    },
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICE_PAGES.find((service) => service.slug === slug);
}
