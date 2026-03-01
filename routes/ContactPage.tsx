import React from 'react';
import Seo from '../components/Seo';
import Contact from '../components/Contact';
import { SITE_URL } from '../content/site';
import { buildPersonSchema, createSeoMeta } from '../lib/seo/seo';

const meta = createSeoMeta({
  title: 'Contact | Tighezza M. Salah',
  description:
    'Contact Tighezza M. Salah for Flutter development, Android/iOS app delivery, Firebase, Supabase, and freelance mobile app work.',
  canonical: `${SITE_URL}/contact`,
  keywords: ['contact flutter developer', 'hire mobile app developer', 'flutter freelancer contact'],
  structuredData: buildPersonSchema(),
});

export default function ContactPage() {
  return (
    <>
      <Seo meta={meta} />
      <section className="px-4 pb-8 pt-14 md:px-6">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Contact</p>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight text-slate-950">Let’s talk about your next mobile product.</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Use WhatsApp for the fastest response, or send a structured brief through the form if you already know the scope.
          </p>
        </div>
      </section>
      <Contact pageType="contact" />
    </>
  );
}
