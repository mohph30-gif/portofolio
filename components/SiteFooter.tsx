import React from 'react';
import { Link } from 'react-router-dom';
import { PRIMARY_NAV } from '../content/site';

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 px-4 py-10 md:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-slate-950">Tighezza M. Salah</p>
          <p className="mt-1 text-sm text-slate-500">
            Flutter developer focused on conversion-ready mobile products for startups and businesses.
          </p>
        </div>

        <nav className="flex flex-wrap gap-4 text-sm text-slate-500">
          {PRIMARY_NAV.map((item) => (
            <Link key={item.href} to={item.href} className="hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
