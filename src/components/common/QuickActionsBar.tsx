import React from 'react';
import { Phone, Navigation, BookOpen } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../../config/restaurantConfig';

export const QuickActionsBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-3 left-3 right-3 z-40 bg-charcoal-900/95 backdrop-blur-lg border border-gold-500/30 rounded-2xl shadow-luxury p-2.5 px-4 flex items-center justify-between gap-2">
      {/* Call Button */}
      <a
        href={`tel:${RESTAURANT_CONFIG.contact.primaryPhone.replace(/\s+/g, '')}`}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-charcoal-800 text-cream-100 hover:bg-charcoal-700 active:scale-95 transition-all text-xs font-semibold border border-charcoal-700"
      >
        <Phone className="w-4 h-4 text-gold-400" />
        <span>Call</span>
      </a>

      {/* Menu Button */}
      <a
        href="#menu"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-charcoal-800 text-cream-100 hover:bg-charcoal-700 active:scale-95 transition-all text-xs font-semibold border border-charcoal-700"
      >
        <BookOpen className="w-4 h-4 text-gold-400" />
        <span>Menu</span>
      </a>

      {/* Directions CTA (Highlighted) */}
      <a
        href={RESTAURANT_CONFIG.googleReviews.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-[1.2] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-charcoal-950 font-bold text-xs shadow-gold-subtle active:scale-95 transition-all"
      >
        <Navigation className="w-4 h-4 fill-charcoal-950" />
        <span>Directions</span>
      </a>
    </div>
  );
};
