import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../content/site';
import { trackContactButtonClick, trackWhatsappClick } from '../lib/analytics/events';

export default function StickyMobileCta() {
  const location = useLocation();
  const pageType = location.pathname === '/' ? 'home' : 'site';

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 px-4 lg:hidden">
      <div className="mx-auto flex max-w-md items-center gap-3 rounded-full border border-slate-200 bg-white/95 p-2 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.55)] backdrop-blur">
        <a
          href={SOCIAL_LINKS.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white"
          onClick={() =>
            trackWhatsappClick({
              cta_location: 'sticky_mobile',
              cta_label: 'whatsapp_primary',
              page_type: pageType,
              page_path: location.pathname,
              link_url: SOCIAL_LINKS.whatsapp,
            })
          }
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <Link
          to="/contact"
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700"
          onClick={() =>
            trackContactButtonClick({
              cta_location: 'sticky_mobile',
              cta_label: 'contact_page',
              page_type: pageType,
              page_path: location.pathname,
              method: 'contact_page',
            })
          }
        >
          <Mail className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
