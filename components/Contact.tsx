import React, { useMemo, useState } from 'react';
import { Download, Linkedin, Mail, MessageCircle, Phone } from 'lucide-react';
import Button from './Button';
import { CONTACT_METHODS, SOCIAL_LINKS } from '../content/site';
import { trackCvDownload, trackEmailClick, trackWhatsappClick } from '../lib/analytics/events';
import { trackEvent } from '../lib/analytics/ga';
import { useFormStart } from '../lib/analytics/useFormStart';

type ContactProps = {
  pageType: string;
  compact?: boolean;
};

export default function Contact({ pageType, compact = false }: ContactProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [submitState, setSubmitState] = useState<'idle' | 'success' | 'pending' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const formId = useMemo(() => `${pageType}_contact_form`, [pageType]);
  const markStarted = useFormStart({ formId, pageType, ctaLocation: 'contact_form' });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setSubmitState('idle');
    setSubmitMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(SOCIAL_LINKS.email)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _url: window.location.href,
          _subject: 'New message from appgeni.netlify.app',
          _template: 'table',
        }),
      });

      const result = await response.json().catch(() => null);
      const apiMessage = typeof result?.message === 'string' ? result.message : '';
      const hasApiSuccess = typeof result?.success === 'boolean' ? result.success : response.ok;
      const requiresActivation = /activate|confirm/i.test(apiMessage);

      if (!response.ok || !hasApiSuccess) {
        throw new Error('Failed to submit form');
      }

      setFormData({ name: '', email: '', message: '' });
      if (requiresActivation) {
        setSubmitState('pending');
        setSubmitMessage(apiMessage || 'FormSubmit still needs activation. Please activate it from your email inbox.');
      } else {
        setSubmitState('success');
        setSubmitMessage('Message sent successfully. I will get back to you soon.');
      }

      trackEvent('form_submit', {
        form_id: formId,
        page_type: pageType,
        cta_location: 'contact_form',
        page_path: window.location.pathname,
        method: 'formsubmit',
      });
    } catch {
      setSubmitState('error');
      setSubmitMessage('Could not send the message. Please try WhatsApp or email instead.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className={compact ? 'px-4 py-16 md:px-6' : 'px-4 py-20 md:px-6'}>
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.45)] md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Contact</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">
              Let’s turn your idea into a mobile product users trust.
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
              WhatsApp is the fastest way to start. If you prefer a brief or project summary first, email and the
              contact form are both ready.
            </p>

            <div className="mt-8 space-y-4">
              {CONTACT_METHODS.map((method) => {
                const Icon = method.label === 'WhatsApp' ? Phone : method.label === 'Email' ? Mail : Linkedin;

                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="flex items-start gap-4 rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-4 transition hover:border-slate-300 hover:bg-white"
                    onClick={() => {
                      if (method.label === 'WhatsApp') {
                        trackWhatsappClick({
                          cta_location: 'contact_section',
                          cta_label: 'whatsapp_card',
                          page_type: pageType,
                          page_path: window.location.pathname,
                          link_url: method.href,
                        });
                      } else if (method.label === 'Email') {
                        trackEmailClick({
                          cta_location: 'contact_section',
                          cta_label: 'email_card',
                          page_type: pageType,
                          page_path: window.location.pathname,
                          link_url: method.href,
                        });
                      }
                    }}
                  >
                    <span className="mt-1 rounded-full bg-white p-3 text-slate-900 shadow-sm">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-slate-900">{method.label}</span>
                      <span className="mt-1 block text-base text-slate-700">{method.value}</span>
                      <span className="mt-1 block text-sm text-slate-500">{method.description}</span>
                    </span>
                  </a>
                );
              })}

              <a
                href="/assets/CV-English.pdf"
                download="CV-English.pdf"
                className="flex items-start gap-4 rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-4 transition hover:border-slate-300 hover:bg-white"
                onClick={() =>
                  trackCvDownload({
                    cta_location: 'contact_section',
                    cta_label: 'download_cv',
                    page_type: pageType,
                    page_path: window.location.pathname,
                    link_url: '/assets/CV-English.pdf',
                  })
                }
              >
                <span className="mt-1 rounded-full bg-white p-3 text-slate-900 shadow-sm">
                  <Download className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-slate-900">Download CV</span>
                  <span className="mt-1 block text-base text-slate-700">Get the resume as a PDF</span>
                  <span className="mt-1 block text-sm text-slate-500">Useful if you want to share my profile internally.</span>
                </span>
              </a>
            </div>
          </div>

          <form className="rounded-[1.75rem] bg-slate-950 p-6 text-white md:p-8" onSubmit={handleSubmit}>
            <div className="grid gap-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor={`${formId}_name`}>
                  Name
                </label>
                <input
                  id={`${formId}_name`}
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={markStarted}
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-emerald-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor={`${formId}_email`}>
                  Email
                </label>
                <input
                  id={`${formId}_email`}
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={markStarted}
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-emerald-400"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor={`${formId}_message`}>
                  Message
                </label>
                <textarea
                  id={`${formId}_message`}
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={markStarted}
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-emerald-400"
                  placeholder="Tell me about the product, timeline, and what you need help with."
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button type="submit" variant="secondary" disabled={isSending} className="sm:flex-1">
                  {isSending ? 'Sending…' : 'Send message'}
                </Button>
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-white hover:border-slate-500"
                  onClick={() =>
                    trackWhatsappClick({
                      cta_location: 'contact_form',
                      cta_label: 'fallback_whatsapp',
                      page_type: pageType,
                      page_path: window.location.pathname,
                      link_url: SOCIAL_LINKS.whatsapp,
                    })
                  }
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Prefer WhatsApp
                </a>
              </div>

              {submitState !== 'idle' ? (
                <p
                  className={`rounded-2xl px-4 py-3 text-sm ${
                    submitState === 'success'
                      ? 'bg-emerald-500/15 text-emerald-200'
                      : submitState === 'pending'
                        ? 'bg-amber-500/15 text-amber-200'
                        : 'bg-rose-500/15 text-rose-200'
                  }`}
                >
                  {submitMessage}
                </p>
              ) : null}

              <p className="text-sm text-slate-400">
                If FormSubmit has not been activated yet, use the activation email it sends once and the form will work
                normally after that.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
