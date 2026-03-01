import React from 'react';
import { Navigate, Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import { getServiceBySlug } from '../content/services';
import { SITE_URL } from '../content/site';
import { createSeoMeta } from '../lib/seo/seo';

export default function ServicePage() {
  const { slug = '' } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const meta = createSeoMeta({
    title: service.seo.title,
    description: service.seo.description,
    canonical: `${SITE_URL}/services/${service.slug}`,
    keywords: service.targetKeywords,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      description: service.description,
      provider: {
        '@type': 'Person',
        name: 'Tighezza M. Salah',
      },
    },
  });

  return (
    <>
      <Seo meta={meta} />
      <section className="px-4 py-16 md:px-6">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">{service.title}</p>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight text-slate-950">{service.h1}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{service.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {service.targetKeywords.map((keyword) => (
              <span key={keyword} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-slate-200 bg-white p-8">
            <h2 className="text-3xl font-semibold text-slate-950">What I build</h2>
            <ul className="mt-6 space-y-4 text-base leading-7 text-slate-600">
              {service.deliverables.map((deliverable) => (
                <li key={deliverable}>• {deliverable}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-[1.75rem] border border-slate-200 bg-white p-8">
            <h2 className="text-3xl font-semibold text-slate-950">Why work with me</h2>
            <ul className="mt-6 space-y-4 text-base leading-7 text-slate-600">
              {service.proofPoints.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <Portfolio />

      <section className="px-4 py-10 md:px-6">
        <div className="mx-auto max-w-5xl rounded-[1.75rem] border border-slate-200 bg-white p-8">
          <h2 className="text-3xl font-semibold text-slate-950">FAQ</h2>
          <div className="mt-8 space-y-6">
            {service.faq.map((item) => (
              <article key={item.question}>
                <h3 className="text-xl font-semibold text-slate-900">{item.question}</h3>
                <p className="mt-2 text-base leading-7 text-slate-600">{item.answer}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/contact" className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">
              Start your project →
            </Link>
          </div>
        </div>
      </section>

      <Contact pageType="service" />
    </>
  );
}
