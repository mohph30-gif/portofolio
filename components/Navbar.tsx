import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Safety check for empty href
    if (!href || !href.startsWith('#')) return;

    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL hash using replaceState to avoid history stack issues
      window.history.replaceState(null, '', href);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b-4 border-black h-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold text-xl border-2 border-transparent">
              TS
            </div>
            <span className="font-bold text-xl hidden sm:block">Tighezza Salah</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-4 items-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-bold text-base hover:underline decoration-4 decoration-yellow-400 underline-offset-4 cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            <a 
              href={SOCIAL_LINKS.whatsapp}
              className="bg-green-400 px-4 py-2 border-2 border-black font-bold text-sm brutal-shadow-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 border-2 border-black hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden border-t-4 border-black bg-white absolute w-full left-0 top-20 animate-in slide-in-from-top-2 shadow-xl">
          <div className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-center py-3 font-bold text-xl border-2 border-black hover:bg-yellow-300 brutal-shadow-sm active:translate-y-1 active:shadow-none transition-all cursor-pointer"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;