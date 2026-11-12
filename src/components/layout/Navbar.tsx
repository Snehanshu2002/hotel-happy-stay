import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Navigation, Clock, ChevronRight } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../../config/restaurantConfig';

interface NavbarProps {
  onNavigate?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Specialities', href: '#specialities' },
    { label: 'Our Menu', href: '#menu' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-charcoal-950/95 backdrop-blur-md shadow-2xl py-2.5 sm:py-3 border-b border-gold-500/20'
            : 'bg-gradient-to-b from-charcoal-950/95 via-charcoal-950/75 to-transparent py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Brand Logo */}
            <a
              href="#home"
              className="group flex items-center gap-3 shrink-0 transition-transform duration-200"
            >
              <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-charcoal-950 shadow-gold-glow shrink-0">
                <span className="font-display font-black text-xl tracking-tighter">H</span>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-charcoal-950" title="Open Daily"></span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold tracking-wider text-base sm:text-lg lg:text-xl text-cream-50 group-hover:text-gold-400 transition-colors whitespace-nowrap">
                  {RESTAURANT_CONFIG.name}
                </span>
                <span className="text-[10px] sm:text-[11px] text-gold-400 font-serif tracking-widest uppercase">
                  Tangi • Odisha (NH 16)
                </span>
              </div>
            </a>

            {/* Center: Desktop Navigation Links (Clean single line, no wrapping) */}
            <nav className="hidden xl:flex items-center gap-5 2xl:gap-7 shrink-0">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs 2xl:text-sm font-medium tracking-wide text-cream-200 hover:text-gold-400 transition-colors relative py-1 whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right: Actions & Directions */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              {/* Operating status badge */}
              <div className="hidden 2xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold whitespace-nowrap">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>{RESTAURANT_CONFIG.hours.status}</span>
              </div>

              {/* Call Button */}
              <a
                href={`tel:${RESTAURANT_CONFIG.contact.primaryPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-charcoal-800/90 hover:bg-charcoal-700 text-cream-100 hover:text-white border border-charcoal-700 transition-all text-xs font-semibold whitespace-nowrap"
                title="Call Hotel Happy Stay"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>{RESTAURANT_CONFIG.contact.primaryPhone}</span>
              </a>

              {/* Get Directions CTA */}
              <a
                href={RESTAURANT_CONFIG.googleReviews.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-charcoal-950 hover:brightness-110 shadow-gold-subtle transition-all text-xs font-bold active:scale-95 whitespace-nowrap"
              >
                <Navigation className="w-3.5 h-3.5 fill-charcoal-950" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Tablet & Mobile Right: Quick Call + Hamburger Button */}
            <div className="flex items-center gap-2 xl:hidden">
              <a
                href={`tel:${RESTAURANT_CONFIG.contact.primaryPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-charcoal-850 border border-charcoal-700 text-gold-400 text-xs font-semibold"
                aria-label="Call"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Call</span>
              </a>

              <a
                href={RESTAURANT_CONFIG.googleReviews.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-gold-500 text-charcoal-950 text-xs font-bold"
              >
                <Navigation className="w-3 h-3 fill-charcoal-950" />
                <span>Directions</span>
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-charcoal-800 text-cream-100 hover:text-gold-400 border border-charcoal-700 focus:outline-none focus:ring-1 focus:ring-gold-500"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-0 right-0 bottom-0 w-full sm:w-80 max-w-sm bg-charcoal-950 border-l border-gold-500/20 p-6 flex flex-col justify-between overflow-y-auto shadow-2xl animate-in slide-in-from-right duration-200">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-charcoal-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-gold-500 text-charcoal-950 font-display font-black text-lg flex items-center justify-center">
                    H
                  </div>
                  <div>
                    <span className="font-display font-bold text-cream-50 text-base">HOTEL HAPPY STAY</span>
                    <span className="block text-[10px] text-gold-400/90 tracking-wider">NH 16, TANGI, ODISHA</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-cream-300 hover:text-white bg-charcoal-800 border border-charcoal-700"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Status pill */}
              <div className="my-4 flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>{RESTAURANT_CONFIG.hours.status} — Highway Dining Destination</span>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col gap-1 py-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2.5 px-3 rounded-lg text-cream-100 hover:text-gold-400 hover:bg-charcoal-900 transition-colors text-sm font-medium"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-charcoal-600" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-charcoal-800 space-y-3">
              <a
                href={`tel:${RESTAURANT_CONFIG.contact.primaryPhone.replace(/\s+/g, '')}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-charcoal-800 text-cream-100 hover:bg-charcoal-700 border border-charcoal-700 font-semibold text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>Call {RESTAURANT_CONFIG.contact.primaryPhone}</span>
              </a>

              <a
                href={RESTAURANT_CONFIG.googleReviews.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-charcoal-950 font-bold text-sm shadow-gold-subtle transition-all"
              >
                <Navigation className="w-4 h-4 fill-charcoal-950" />
                <span>Get Directions (Google Maps)</span>
              </a>

              <p className="text-center text-[11px] text-charcoal-400 pt-1">
                NH 16, Chandrapur, Tangi, Odisha 752023
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
