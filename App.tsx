import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import StickyMobileCta from './components/StickyMobileCta';
import SiteFooter from './components/SiteFooter';
import HomePage from './routes/HomePage';
import ContactPage from './routes/ContactPage';
import ServicePage from './routes/ServicePage';
import ProjectCaseStudyPage from './routes/ProjectCaseStudyPage';
import BlogIndexPage from './routes/BlogIndexPage';
import BlogPostPage from './routes/BlogPostPage';
import { usePageView } from './lib/analytics/usePageView';
import { useScrollDepth } from './lib/analytics/scrollDepth';

function AppShell() {
  const location = useLocation();
  const pageType = location.pathname.startsWith('/projects/')
    ? 'project_case_study'
    : location.pathname.startsWith('/services/')
      ? 'service'
      : location.pathname.startsWith('/blog/')
        ? 'blog_post'
        : location.pathname === '/blog'
          ? 'blog_index'
          : location.pathname === '/contact'
            ? 'contact'
            : 'home';

  usePageView();
  useScrollDepth(pageType);

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0 });
      return;
    }

    const id = location.hash.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      window.setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    }
  }, [location]);

  return (
    <div className="relative min-h-screen text-slate-950 overflow-hidden">
      {/* Animated Background Layers */}
      <div className="fixed inset-0 z-[-1] bg-[#f8fafc]" />
      <div className="fixed inset-0 z-[-1] opacity-40 mix-blend-multiply">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-200/50 blur-[120px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-sky-200/50 blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[50%] rounded-full bg-indigo-100/50 blur-[120px] animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-0 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="/projects/:slug" element={<ProjectCaseStudyPage />} />
            <Route path="/blog" element={<BlogIndexPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <SiteFooter />
        <StickyMobileCta />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
