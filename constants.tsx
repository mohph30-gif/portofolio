import { Project, Education, Service, ExperienceItem } from './types';
import { Smartphone, Database, Globe, Rocket, Layers, MessageCircle } from 'lucide-react';
import React from 'react';

export const SOCIAL_LINKS = {
  email: "salahdevmobile@gmail.com",
  phone: "+213656375516",
  whatsapp: "https://wa.me/213656375516",
  linkedin: "https://www.linkedin.com/in/mohammed-salah-tighezza-743462142/",
  website: "https://medsalah.netlify.app/",
  facebook: "https://www.facebook.com/share/1HFRvNvGW6/?mibextid=wwXIfr"
};

export const PROJECTS: Project[] = [
  {
    title: "WEBMANIAC / E-Umma Islamia",
    role: "Fullstack Mobile Developer",
    duration: "Nov 2024 - Apr 2025",
    description: "Development and publication of the E-Umma Islamia mobile application using Flutter and Firebase. Features prayer times, qibla direction, and community features.",
    tags: ["Flutter", "Firebase", "Publication"],
    color: "bg-blue-300",
    image: "/assets/projects/e-umma-islamic.png",
    links: {
      android: "https://play.google.com/store/apps/details?id=com.eummahislamia.eummahislamiaapp",
      ios: "https://apps.apple.com/fr/app/e-umma-islamia/id6503656498"
    }
  },
  {
    title: "PORTOFOLI",
    role: "Mobile Developer",
    duration: "Dec 2023 - Jun 2024",
    description: "Development of a crypto wallet & messenger application for a UK fintech startup. Secure transactions and real-time messaging.",
    tags: ["Flutter", "Fintech", "Crypto"],
    color: "bg-yellow-300",
    image: "/assets/projects/portofoli-crypto.png",
    links: {
      android: "https://play.google.com/store/apps/details?id=com.tectone23.portofoli.ltd"
    }
  },
  {
    title: "APPSEGEMACHT",
    role: "Contributor",
    duration: "Jan 2025 - Mar 2025",
    description: "Contribution to a coaching application, implementing real-time chat features and UI enhancements for a German client.",
    tags: ["Flutter", "Real-time Chat", "Germany"],
    color: "bg-green-300",
    image: "/assets/projects/coi-coaching.png",
    links: {
      web: "https://app.the-coi.com/coaching-app"
    }
  },
  {
    title: "TANEFLIT",
    role: "Lead Developer",
    duration: "2020 - Present",
    description: "Long-term development of scalable Android/iOS apps using Firebase/Supabase with REST APIs for various clients in Paris.",
    tags: ["Flutter", "Supabase", "Architecture"],
    color: "bg-purple-300",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800", // Mobile dev theme
    links: {}
  },
  {
    title: "BlackSkill",
    role: "Developer",
    duration: "Published App",
    description: "Mobile application available on the App Store focused on skill development.",
    tags: ["iOS", "Flutter", "Education"],
    color: "bg-red-300",
    image: "/assets/projects/blackskill-african-football.png",
    links: {
      ios: "https://apps.apple.com/dz/app/blackskill/id6757500081"
    }
  },
  {
    title: "MacroPlanr",
    role: "Developer",
    duration: "Published App",
    description: "Productivity and planning tool available on the App Store to help users manage their daily tasks.",
    tags: ["Productivity", "iOS", "Planning"],
    color: "bg-orange-300",
    image: "/assets/projects/macroplanr-diet.png",
    links: {
      ios: "https://apps.apple.com/dz/app/macroplanr/id6754331460"
    }
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "WEBMANIAC",
    role: "Fullstack Mobile Developer",
    location: "France",
    duration: "Nov 2024 - Apr 2025",
    description: "Development and publication of the e-Umma Islamia mobile application (Flutter, Firebase) on Google Play and the App Store."
  },
  {
    company: "APPSEGEMACHT",
    role: "Contributor",
    location: "Germany",
    duration: "Jan 2025 - Mar 2025",
    description: "Contribution to the development of a coaching application, implementing a real-time chat feature in Flutter."
  },
  {
    company: "PORTOFOLI",
    role: "Mobile Developer",
    location: "United Kingdom",
    duration: "Dec 2023 - Jun 2024",
    description: "Participation in the development of a crypto wallet & messenger application built with Flutter for a fintech startup."
  },
  {
    company: "TANEFLIT",
    role: "Mobile Developer",
    location: "Paris (Île-de-France, France)",
    duration: "2020 - Present",
    description: "Development of Flutter mobile applications (Android/iOS) using Firebase and Supabase, with scalable architectures, REST APIs, and real-time features."
  }
];

export const SERVICES: Service[] = [
  {
    title: "Cross-Platform Dev",
    description: "High-performance apps for Android & iOS using a single Flutter codebase.",
    icon: <Smartphone className="w-8 h-8" />
  },
  {
    title: "Backend Integration",
    description: "Robust integration with Firebase, Supabase, and custom REST APIs.",
    icon: <Database className="w-8 h-8" />
  },
  {
    title: "Real-Time Features",
    description: "Instant messaging, live notifications, and real-time data synchronization.",
    icon: <MessageCircle className="w-8 h-8" />
  },
  {
    title: "App Publication",
    description: "Handling the complete submission process for Google Play & Apple App Store.",
    icon: <Rocket className="w-8 h-8" />
  },
  {
    title: "Scalable Architecture",
    description: "Designing clean, maintainable codebases built to grow with your business.",
    icon: <Layers className="w-8 h-8" />
  },
  {
    title: "Remote Collab",
    description: "Experienced in international environments and agile remote workflows.",
    icon: <Globe className="w-8 h-8" />
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Master's in Networks & Telecoms",
    institution: "University of Tlemcen",
    year: "2020"
  },
  {
    degree: "Bachelor's in Telecommunications",
    institution: "University of Tlemcen",
    year: "2018"
  },
  {
    degree: "Mathematics Baccalaureate",
    institution: "High School",
    year: "2015"
  }
];

export const CERTIFICATIONS = [
  "Android / Mobile Development (Infotech Training School, 2018)",
  "Java — Professional Training (Infotech Training School, 2017)",
  "TCF French Certification (Level B2)"
];

export const SKILLS = [
  "Flutter & Dart", "Android (Java/Kotlin)", "iOS (Swift)", 
  "Firebase", "Supabase", "REST APIs", 
  "Clean Architecture", "Git/GitHub", "Provider/Bloc/Riverpod"
];
