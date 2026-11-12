import React from 'react';
import { Phone, MapPin, Navigation, Clock, Star, Heart } from 'lucide-react';
import { RESTAURANT_CONFIG, MENU_CATEGORIES } from '../../config/restaurantConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-950 text-cream-200 border-t border-charcoal-800/80 pt-16 pb-24 md:pb-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-charcoal-800/80">
          {/* Brand Info (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-charcoal-950 font-display font-black text-xl shadow-gold-glow">
                H
              </div>
              <div>
                <span className="font-display font-bold text-xl text-cream-50 tracking-wider">
                  {RESTAURANT_CONFIG.name}
                </span>
                <span className="block text-[11px] text-gold-400/90 font-serif tracking-widest uppercase">
                  {RESTAURANT_CONFIG.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-charcoal-300 leading-relaxed max-w-sm">
              Your premier highway dining destination in Tangi, Odisha along NH 16. Serving fresh seafood, tandoori specialties, and hearty Indian cuisine 24 hours a day with warm hospitality.
            </p>

            {/* Google Rating summary badge */}
            <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-charcoal-900 border border-charcoal-800">
              <div className="flex items-center text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-cream-100">{RESTAURANT_CONFIG.googleReviews.rating} / 5.0 Rating</span>
                <span className="text-charcoal-400 block text-[10px]">
                  Based on ~{RESTAURANT_CONFIG.googleReviews.reviewCount.toLocaleString()} Google Reviews
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-gold-400 tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-charcoal-300">
              <li>
                <a href="#home" className="hover:text-gold-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#specialities" className="hover:text-gold-400 transition-colors">Specialties</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-gold-400 transition-colors">Our Menu</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-gold-400 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold-400 transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-gold-400 transition-colors">Customer Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold-400 transition-colors">Location & Contact</a>
              </li>
            </ul>
          </div>

          {/* Menu Highlights (Col 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-gold-400 tracking-wider uppercase">
              Menu Specialties
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-charcoal-300">
              {MENU_CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <a href="#menu" className="hover:text-gold-400 transition-colors flex items-center justify-between">
                    <span>{cat.name}</span>
                    <span className="text-[10px] text-charcoal-500 font-mono">{cat.badge}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Highway Details (Col 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-gold-400 tracking-wider uppercase">
              Highway Transit Details
            </h4>
            <div className="space-y-2.5 text-xs text-charcoal-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>
                  Tangi, Chandrapur, Odisha 752023, India (NH 16 Highway Side)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:${RESTAURANT_CONFIG.contact.primaryPhone.replace(/\s+/g, '')}`} className="hover:text-gold-400 font-medium">
                  {RESTAURANT_CONFIG.contact.primaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-emerald-400 font-medium">
                  {RESTAURANT_CONFIG.hours.status} ({RESTAURANT_CONFIG.hours.daysOpen})
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={RESTAURANT_CONFIG.googleReviews.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-charcoal-900 hover:bg-charcoal-800 text-gold-400 text-xs font-semibold border border-charcoal-800 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-400 text-center sm:text-left">
          <p>
            &copy; {currentYear} {RESTAURANT_CONFIG.name}. All rights reserved.
          </p>

          <p className="flex items-center justify-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for Travelers along NH 16, Odisha</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
