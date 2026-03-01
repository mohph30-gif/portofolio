import React from 'react';
import { ArrowRight, Download, Mail, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import { HERO_STATS, SOCIAL_LINKS } from '../content/site';
import { trackContactButtonClick, trackCvDownload, trackEmailClick, trackWhatsappClick } from '../lib/analytics/events';

const PROFILE_IMAGE = '/assets/profile.jpg';

export default function Hero() {
  const location = useLocation();
  const pagePath = location.pathname;

  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-10 md:px-6 md:pb-24 md:pt-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="group inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/50 px-4 py-2 text-sm font-semibold text-emerald-700 backdrop-blur-sm transition-all hover:bg-emerald-100/50 hover:shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Flutter developer in Algeria
          </div>

          <h1 className="mt-8 max-w-3xl text-balance text-5xl font-extrabold tracking-tight md:text-7xl">
            <span className="text-slate-900">I build mobile apps that </span>
            <span className="text-gradient">ship fast and feel premium.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl font-medium">
            Full-stack Flutter developer for startups and product teams. I design, build, publish, and scale Android
            and iOS apps with Firebase and Supabase.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                trackWhatsappClick({
                  cta_location: 'hero',
                  cta_label: 'chat_on_whatsapp',
                  page_type: 'home',
                  page_path: pagePath,
                  link_url: SOCIAL_LINKS.whatsapp,
                })
              }
            >
              <Button variant="secondary" icon={<MessageCircle className="h-4 w-4" />}>
                Chat on WhatsApp
              </Button>
            </a>
            <Link
              to="/#projects"
              onClick={() =>
                trackContactButtonClick({
                  cta_location: 'hero',
                  cta_label: 'view_projects',
                  page_type: 'home',
                  page_path: pagePath,
                  section_id: 'projects',
                  method: 'internal_navigation',
                })
              }
            >
              <Button variant="primary" icon={<ArrowRight className="h-4 w-4" />}>
                View Projects
              </Button>
            </Link>
            <a
              href="/assets/CV-English.pdf"
              download="CV-English.pdf"
              onClick={() =>
                trackCvDownload({
                  cta_location: 'hero',
                  cta_label: 'download_cv',
                  page_type: 'home',
                  page_path: pagePath,
                  link_url: '/assets/CV-English.pdf',
                })
              }
            >
              <Button variant="outline" icon={<Download className="h-4 w-4" />}>
                Download CV
              </Button>
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 font-medium text-slate-700 hover:border-slate-300"
              onClick={() =>
                trackEmailClick({
                  cta_location: 'hero',
                  cta_label: 'email_chip',
                  page_type: 'home',
                  page_path: pagePath,
                  link_url: `mailto:${SOCIAL_LINKS.email}`,
                })
              }
            >
              <Mail className="h-4 w-4" />
              Email me
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 font-medium text-slate-700 hover:border-slate-300"
              onClick={() =>
                trackContactButtonClick({
                  cta_location: 'hero',
                  cta_label: 'contact_page',
                  page_type: 'home',
                  page_path: pagePath,
                  section_id: 'contact',
                })
              }
            >
              Contact page
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {HERO_STATS.map((item, index) => (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-[1.5rem] glass p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="text-sm font-bold uppercase tracking-wider text-slate-500">{item.label}</div>
                  <div className="mt-3 text-3xl font-extrabold text-slate-900">{item.value}</div>
                  {item.note ? <div className="mt-1 text-sm font-medium text-slate-500">{item.note}</div> : null}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:ml-auto animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          {/* Decorative Elements */}
          <div className="absolute -inset-4 z-0 rounded-[3rem] bg-gradient-to-br from-emerald-400/20 via-sky-400/20 to-purple-400/20 blur-2xl" />

          <div className="group relative z-10 overflow-hidden rounded-[2rem] glass p-3 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-900 p-5 text-white">
              <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-20 mix-blend-overlay" />

              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-400">Trusted Partner</p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight">Tighezza M. Salah</h2>
                </div>
                <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available
                </span>
              </div>
              <div className="relative mt-6 overflow-hidden rounded-[1.25rem]">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10" />
                <img
                  src={PROFILE_IMAGE}
                  alt="Tighezza M. Salah portrait"
                  className="h-[24rem] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.25rem] bg-white/50 p-4 backdrop-blur-md border border-white/60 transition-colors hover:bg-white/80">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Tech Stack</div>
                <div className="mt-1 text-sm font-extrabold text-slate-900">Flutter, Firebase, Supabase</div>
              </div>
              <div className="rounded-[1.25rem] bg-white/50 p-4 backdrop-blur-md border border-white/60 transition-colors hover:bg-white/80">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Execution</div>
                <div className="mt-1 text-sm font-extrabold text-slate-900">Fast iteration, release-ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
