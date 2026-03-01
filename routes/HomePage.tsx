import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import FeaturedProjects from '../components/FeaturedProjects';
import Seo from '../components/Seo';
import { buildPersonSchema, createSeoMeta } from '../lib/seo/seo';
import { CORE_SKILLS, SITE_URL } from '../content/site';
import { SERVICE_PAGES } from '../content/services';
import { trackContactButtonClick } from '../lib/analytics/events';

const homeMeta = createSeoMeta({
  title: 'Flutter Developer Algeria | Tighezza M. Salah',
  description:
    'Flutter developer in Algeria building high-quality Android and iOS apps for startups and businesses. Firebase, Supabase, app publishing, and full-stack mobile delivery.',
  canonical: SITE_URL,
  keywords: [
    'flutter developer algeria',
    'flutter freelancer algeria',
    'freelance mobile app developer',
    'firebase flutter developer',
    'supabase flutter developer',
    'android ios developer algeria',
  ],
  structuredData: buildPersonSchema(),
});

const serviceCards = [
  {
    title: 'Cross-platform app delivery',
    description: 'Build one polished mobile product for Android and iOS without splitting scope across two codebases.',
  },
  {
    title: 'Backend and realtime integration',
    description: 'Connect product flows to Firebase, Supabase, notifications, storage, auth, and realtime features.',
  },
  {
    title: 'Launch and iteration support',
    description: 'Ship to stores, instrument analytics, and improve conversion after launch instead of stopping at design.',
  },
];

export default function HomePage() {
  return (
    <>
      <Seo meta={homeMeta} />
      <Hero />
      <TrustBar />
      <FeaturedProjects />

      <section id="services" className="px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Services</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Mobile app delivery built around product momentum and clean execution.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {serviceCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_24px_60px_-45px_rgba(15,23,42,0.45)]"
              >
                <h3 className="text-2xl font-semibold text-slate-950">{card.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{card.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {SERVICE_PAGES.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:border-slate-300"
              >
                {service.title}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-4 py-20 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Skills</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">A stack built for shipping, scaling, and store-ready releases.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {CORE_SKILLS.map((skill) => (
              <span
                key={skill}
                className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_16px_30px_-22px_rgba(15,23,42,0.45)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-slate-950 px-8 py-10 text-white md:px-12 md:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Need a Flutter developer?</p>
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Start with a fast WhatsApp conversation, then move into specs, timeline, and delivery.</h2>
              <p className="mt-3 text-base leading-7 text-slate-300">
                This site now prioritizes fast mobile contact because that is where most traffic and intent currently live.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white"
              onClick={() =>
                trackContactButtonClick({
                  cta_location: 'contact_strip',
                  cta_label: 'open_contact_page',
                  page_type: 'home',
                  page_path: '/',
                  section_id: 'contact',
                })
              }
            >
              Go to contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
