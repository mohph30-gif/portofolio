import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { PRIMARY_NAV, SOCIAL_LINKS } from '../content/site';
import { trackContactButtonClick, trackWhatsappClick } from '../lib/analytics/events';

const PROFILE_IMAGE = '/assets/profile.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleClose = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 glass bg-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link className="group flex items-center gap-3" to="/" onClick={handleClose}>
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 opacity-0 blur transition duration-500 group-hover:opacity-100" />
            <img
              src={PROFILE_IMAGE}
              alt="Tighezza Salah"
              className="relative h-11 w-11 rounded-full border-2 border-white object-cover shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900 transition-colors group-hover:text-emerald-600">
              Tighezza M. Salah
            </p>
            <p className="text-xs font-medium text-slate-500">Flutter developer in Algeria</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {PRIMARY_NAV.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `relative text-sm font-semibold transition-all duration-300 ${isActive
                  ? 'text-emerald-600'
                  : 'text-slate-600 hover:text-emerald-500'
                } after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-emerald-500 after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive ? 'after:scale-x-100' : ''
                }`
              }
              onClick={() => {
                if (item.href.includes('contact')) {
                  trackContactButtonClick({
                    cta_location: 'navbar',
                    cta_label: 'contact_nav',
                    page_type: location.pathname === '/' ? 'home' : 'site',
                    page_path: location.pathname,
                    section_id: 'contact',
                  });
                }
              }}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex min-h-11 items-center gap-2 overflow-hidden rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-[0_8px_20px_-6px_rgba(16,185,129,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-8px_rgba(16,185,129,0.7)]"
            onClick={() =>
              trackWhatsappClick({
                cta_location: 'navbar',
                cta_label: 'whatsapp_primary',
                page_type: location.pathname === '/' ? 'home' : 'site',
                page_path: location.pathname,
                link_url: SOCIAL_LINKS.whatsapp,
              })
            }
          >
            <span className="absolute inset-0 w-full translate-x-[-100%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-[100%]" />
            <MessageCircle className="h-4 w-4 relative z-10 animate-[pulse_2s_ease-in-out_infinite]" />
            <span className="relative z-10">Chat on WhatsApp</span>
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {PRIMARY_NAV.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
                onClick={() => {
                  handleClose();
                  if (item.href.includes('contact')) {
                    trackContactButtonClick({
                      cta_location: 'mobile_nav',
                      cta_label: 'contact_nav',
                      page_type: location.pathname === '/' ? 'home' : 'site',
                      page_path: location.pathname,
                      section_id: 'contact',
                    });
                  }
                }}
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white"
              onClick={() => {
                handleClose();
                trackWhatsappClick({
                  cta_location: 'mobile_nav',
                  cta_label: 'whatsapp_primary',
                  page_type: location.pathname === '/' ? 'home' : 'site',
                  page_path: location.pathname,
                  link_url: SOCIAL_LINKS.whatsapp,
                });
              }}
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
