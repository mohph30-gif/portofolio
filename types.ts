import React from 'react';

export interface Project {
  title: string;
  role: string;
  duration: string;
  description: string;
  tags: string[];
  links: {
    android?: string;
    ios?: string;
    web?: string;
  };
  color: string;
  image: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  duration: string;
  description: string;
}
