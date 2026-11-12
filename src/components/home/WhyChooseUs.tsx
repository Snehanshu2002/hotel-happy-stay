import React from 'react';
import { UtensilsCrossed, Sparkles, HeartHandshake, Navigation, Car, Wallet, CheckCircle } from 'lucide-react';
import { WHY_CHOOSE_US } from '../../config/restaurantConfig';

export const WhyChooseUs: React.FC = () => {
  // Mapping of icons
  const iconMap: Record<string, React.ElementType> = {
    UtensilsCrossed,
    Sparkles,
    HeartHandshake,
    Navigation,
    Car,
    Wallet
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-charcoal-950 relative border-t border-charcoal-800/80">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>The Highway Traveler's Choice</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 leading-tight mb-4">
            Why Commuters & Families Choose Us
          </h2>
          <p className="text-sm sm:text-base text-cream-200/85 max-w-2xl mx-auto font-normal leading-relaxed">
            Rooted in authentic customer reviews from thousands of highway commuters traveling along NH 16 through Tangi, Odisha.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = iconMap[item.iconName] || Sparkles;
            return (
              <div
                key={item.id}
                className="group p-7 rounded-2xl bg-charcoal-900/90 border border-charcoal-800 hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-gold-glow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-500/30 text-gold-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-charcoal-950 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-cream-50 group-hover:text-gold-300 transition-colors mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-cream-200/85 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-charcoal-800/60 flex items-center gap-1.5 text-xs text-gold-400 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-400" />
                  <span>Verified Guest Feedback</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
