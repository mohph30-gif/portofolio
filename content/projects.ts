import { ProjectCaseStudy } from '../types';

export const PROJECTS: ProjectCaseStudy[] = [
  {
    slug: 'webmaniac-e-umma-islamia',
    title: 'WEBMANIAC / E-Umma Islamia',
    shortTitle: 'E-Umma Islamia',
    role: 'Full-stack mobile developer',
    duration: 'Nov 2024 - Apr 2025',
    location: 'France',
    summary: 'A faith-focused mobile app covering prayer times, qibla, and community utilities for daily use.',
    description:
      'I developed and helped publish the E-Umma Islamia mobile application using Flutter and Firebase, focusing on a reliable daily experience, clean UI, and release-readiness across stores.',
    problem:
      'The product needed a single mobile codebase that could ship quickly, handle daily engagement scenarios, and support a broad feature set without fragmenting the user experience.',
    solution:
      'I delivered the app in Flutter with Firebase-backed capabilities, structured the mobile experience around fast access to essential features, and prepared the product for both Google Play and App Store release.',
    impact: [
      'Shipped on both Google Play and the App Store.',
      'Brought prayer-time, qibla, and community utilities into one mobile experience.',
      'Reduced delivery complexity through one cross-platform codebase.',
    ],
    responsibilities: [
      'Flutter front-end implementation',
      'Firebase integration',
      'Mobile UX refinement',
      'Release preparation and store publication',
    ],
    techStack: ['Flutter', 'Firebase', 'Android', 'iOS'],
    image: '/assets/projects/e-umma-islamic.png',
    links: {
      android: 'https://play.google.com/store/apps/details?id=com.eummahislamia.eummahislamiaapp',
      ios: 'https://apps.apple.com/fr/app/e-umma-islamia/id6503656498',
    },
    seo: {
      title: 'E-Umma Islamia Case Study | Flutter Mobile Developer',
      description:
        'Case study for E-Umma Islamia, a Flutter and Firebase mobile app delivered for a French client and published on Android and iOS.',
    },
  },
  {
    slug: 'portofoli-crypto-wallet',
    title: 'PORTOFOLI',
    shortTitle: 'PORTOFOLI',
    role: 'Mobile developer',
    duration: 'Dec 2023 - Jun 2024',
    location: 'United Kingdom',
    summary: 'A crypto wallet and messaging product for a fintech startup that needed secure mobile delivery.',
    description:
      'I contributed to a fintech mobile app combining secure wallet functions with real-time communication, built in Flutter for a UK startup.',
    problem:
      'The startup needed a mobile product that felt modern and responsive while balancing messaging flows and finance-oriented interactions.',
    solution:
      'I focused on the Flutter implementation of the product experience, helping deliver a mobile client capable of secure flows and responsive messaging behavior.',
    impact: [
      'Supported a fintech MVP with both wallet and messaging functionality.',
      'Delivered through a Flutter codebase for mobile velocity.',
      'Helped shape a product that could move from concept toward real-world distribution.',
    ],
    responsibilities: [
      'Flutter app implementation',
      'Feature delivery for mobile flows',
      'Realtime interaction work',
      'UI support for product polish',
    ],
    techStack: ['Flutter', 'Fintech UX', 'Realtime messaging'],
    image: '/assets/projects/portofoli-crypto.png',
    links: {
      android: 'https://play.google.com/store/apps/details?id=com.tectone23.portofoli.ltd',
    },
    seo: {
      title: 'PORTOFOLI Case Study | Flutter Fintech App Developer',
      description:
        'Case study for PORTOFOLI, a Flutter fintech mobile product combining crypto wallet workflows and real-time messaging.',
    },
  },
  {
    slug: 'appsegemacht-coaching-app',
    title: 'APPSEGEMACHT',
    shortTitle: 'Coaching App',
    role: 'Flutter contributor',
    duration: 'Jan 2025 - Mar 2025',
    location: 'Germany',
    summary: 'A coaching platform where I improved mobile UX and implemented real-time chat-oriented capabilities.',
    description:
      'I contributed to a German coaching application, with a strong emphasis on real-time communication and user interface refinement for a production-quality mobile experience.',
    problem:
      'The app needed communication-driven interactions to feel smooth and dependable while still fitting inside a broader coaching product.',
    solution:
      'I implemented chat-focused improvements and interface enhancements in Flutter, helping the coaching experience feel more responsive and easier to use.',
    impact: [
      'Improved chat-centric user flows.',
      'Raised UI quality for a coaching use case.',
      'Supported an international product delivery process.',
    ],
    responsibilities: [
      'Flutter contribution',
      'Realtime chat feature work',
      'Interface enhancement',
      'Collaborative delivery in a remote setup',
    ],
    techStack: ['Flutter', 'Realtime chat', 'Mobile UX'],
    image: '/assets/projects/coi-coaching.png',
    links: {
      web: 'https://app.the-coi.com/coaching-app',
    },
    seo: {
      title: 'Coaching App Case Study | Flutter Real-time Chat Work',
      description:
        'Case study for a coaching application where Flutter-based real-time chat and mobile UX improvements were delivered for a German client.',
    },
  },
  {
    slug: 'taneflit-mobile-delivery',
    title: 'TANEFLIT',
    shortTitle: 'TANEFLIT',
    role: 'Lead mobile developer',
    duration: '2020 - Present',
    location: 'Paris, France',
    summary: 'Long-term mobile delivery across Android and iOS apps using Flutter, Firebase, and Supabase.',
    description:
      'TANEFLIT represents sustained client delivery work across multiple mobile products, with a focus on scalable codebases, backend integration, and maintainable app architecture.',
    problem:
      'Clients needed apps that could evolve over time without codebase drift, fragile architecture, or duplicated platform effort.',
    solution:
      'I used Flutter with Firebase and Supabase-backed patterns to build maintainable mobile applications that could scale in feature scope and delivery cadence.',
    impact: [
      'Established a repeatable delivery model for mobile products.',
      'Reduced maintenance burden through architecture discipline.',
      'Supported long-term client relationships around app delivery.',
    ],
    responsibilities: [
      'Architecture decisions',
      'Backend integration',
      'Cross-platform implementation',
      'Release and maintenance support',
    ],
    techStack: ['Flutter', 'Supabase', 'Firebase', 'REST APIs'],
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1200',
    links: {},
    seo: {
      title: 'TANEFLIT Case Study | Flutter and Supabase Delivery',
      description:
        'Case study for long-term Flutter delivery using Firebase, Supabase, and scalable mobile architecture for international clients.',
    },
  },
  {
    slug: 'blackskill-ios-app',
    title: 'BlackSkill',
    shortTitle: 'BlackSkill',
    role: 'Developer',
    duration: 'Published app',
    location: 'App Store',
    summary: 'An iOS-published skill development application delivered with Flutter.',
    description:
      'BlackSkill is a published mobile app centered on skill development, with delivery emphasis on a polished product and release-readiness.',
    problem:
      'The app needed to be usable, clear, and launchable within the constraints of a focused mobile product.',
    solution:
      'I delivered the application using Flutter and supported the path to App Store publication.',
    impact: [
      'Published on the App Store.',
      'Strengthened portfolio proof around release execution.',
      'Added category-specific experience in education/skills products.',
    ],
    responsibilities: [
      'Flutter implementation',
      'Product polish',
      'iOS release support',
    ],
    techStack: ['Flutter', 'iOS', 'Education'],
    image: '/assets/projects/blackskill-african-football.png',
    links: {
      ios: 'https://apps.apple.com/dz/app/blackskill/id6757500081',
    },
    seo: {
      title: 'BlackSkill Case Study | Flutter iOS App Delivery',
      description:
        'Case study for BlackSkill, a published Flutter-based iOS application focused on skill development.',
    },
  },
  {
    slug: 'macroplanr-productivity-app',
    title: 'MacroPlanr',
    shortTitle: 'MacroPlanr',
    role: 'Developer',
    duration: 'Published app',
    location: 'App Store',
    summary: 'A productivity and planning app published to the App Store.',
    description:
      'MacroPlanr is a planning-focused mobile product where I contributed to the implementation and release of a productivity experience for end users.',
    problem:
      'The product needed a clean experience for task and planning workflows while keeping development lean enough for release.',
    solution:
      'I built and supported the app in Flutter, focusing on a clear planning-oriented interface and App Store readiness.',
    impact: [
      'Published on the App Store.',
      'Expanded proof in productivity-focused app delivery.',
      'Added another shipped product to the portfolio.',
    ],
    responsibilities: [
      'Flutter implementation',
      'App delivery support',
      'UI execution',
    ],
    techStack: ['Flutter', 'Productivity UX', 'iOS'],
    image: '/assets/projects/macroplanr-diet.png',
    links: {
      ios: 'https://apps.apple.com/dz/app/macroplanr/id6754331460',
    },
    seo: {
      title: 'MacroPlanr Case Study | Flutter Productivity App',
      description:
        'Case study for MacroPlanr, a Flutter-based productivity mobile app published to the App Store.',
    },
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}
