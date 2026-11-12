import React from 'react';
import { Utensils, Waves, Sparkles, HeartHandshake, MapPin, Clock, Check } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../../config/restaurantConfig';

export const AboutSection: React.FC = () => {
  const features = [
    {
      title: "Delicious Food",
      description: "Enjoy a rich variety of vegetarian and non-vegetarian dishes prepared fresh with regional homestyle spices.",
      icon: Utensils,
      highlight: "Multi-Cuisine Flavors"
    },
    {
      title: "Fresh Seafood",
      description: "Discover fresh crab masala, crispy pomfret, and succulent prawns sourced from coastal Odisha.",
      icon: Waves,
      highlight: "Coastal Specialties"
    },
    {
      title: "Clean & Hygienic",
      description: "A comfortable air-conditioned dining hall, neat table setups, and well-maintained washrooms.",
      icon: Sparkles,
      highlight: "Family Comfort"
    },
    {
      title: "Friendly Hospitality",
      description: "Courteous staff and welcoming service committed to making every highway stop relaxed and memorable.",
      icon: HeartHandshake,
      highlight: "Warm Service"
    }
  ];

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-charcoal-900 border-t border-charcoal-800/80 overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Split: Narrative & Photo Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Story & Narrative with High Readability */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Welcome to Hotel Happy Stay</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 leading-tight">
              A Place Where Every Meal Feels Special
            </h2>

            <div className="space-y-4 text-cream-100 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                {RESTAURANT_CONFIG.aboutDescription}
              </p>
              <p className="text-sm sm:text-base text-cream-200/90 leading-relaxed">
                Conveniently situated along National Highway 16 in Chandrapur, Tangi (near Tangi Police Station and 2.4 km from Kalupara Gha Railway Station), Hotel Happy Stay is a preferred dining break for travelers driving between Berhampur and Bhubaneswar.
              </p>
            </div>

            {/* Highway Quick Info Box */}
            <div className="p-5 rounded-2xl bg-charcoal-950/90 border border-charcoal-800 shadow-xl space-y-3">
              <div className="flex items-center gap-2 text-gold-400 font-semibold text-xs tracking-wider uppercase">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Strategic Highway Location (NH 16)</span>
              </div>
              <p className="text-xs sm:text-sm text-cream-200/80 leading-relaxed">
                Whether you are traveling for work, taking a family holiday, or commuting across Odisha, our kitchen serves delicious coastal seafood, sizzling tandoor preparations, and wholesome Indian vegetarian dishes.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-cream-100">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <Clock className="w-3.5 h-3.5" /> {RESTAURANT_CONFIG.hours.status}
                </span>
                <span className="flex items-center gap-1.5 text-cream-200">
                  <Check className="w-3.5 h-3.5 text-gold-400" /> Air-Conditioned Hall
                </span>
                <span className="flex items-center gap-1.5 text-cream-200">
                  <Check className="w-3.5 h-3.5 text-gold-400" /> Ample Vehicle Parking
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Elegant Authentic Photo Collage */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Photo 1: 3-Storey Hotel Facade */}
              <div className="relative rounded-2xl overflow-hidden border border-charcoal-700/80 shadow-2xl group h-52 sm:h-64">
                <img
                  src="/images/hotel/building-facade.webp"
                  alt="Hotel Happy Stay Building Facade"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[11px] font-semibold text-cream-100 font-serif block">
                    Hotel Building & Facade
                  </span>
                  <span className="text-[10px] text-gold-400/90">Along NH 16 Highway</span>
                </div>
              </div>

              {/* Photo 2: Dining Hall Interior */}
              <div className="relative rounded-2xl overflow-hidden border border-charcoal-700/80 shadow-2xl group h-52 sm:h-64">
                <img
                  src="/images/hotel/dining-hall.webp"
                  alt="Air-Conditioned Dining Hall"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[11px] font-semibold text-cream-100 font-serif block">
                    AC Dining Room
                  </span>
                  <span className="text-[10px] text-gold-400/90">Comfortable Family Seating</span>
                </div>
              </div>

              {/* Photo 3: Reception with Golden Logo */}
              <div className="relative rounded-2xl overflow-hidden border border-charcoal-700/80 shadow-2xl group h-44 sm:h-52">
                <img
                  src="/images/hotel/reception-lounge.webp"
                  alt="Hotel Reception with Golden Logo"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[11px] font-semibold text-cream-100 font-serif block">
                    Welcoming Reception
                  </span>
                  <span className="text-[10px] text-gold-400/90">Golden Happy Stay Emblem</span>
                </div>
              </div>

              {/* Photo 4: Family Dining Ambience */}
              <div className="relative rounded-2xl overflow-hidden border border-charcoal-700/80 shadow-2xl group h-44 sm:h-52">
                <img
                  src="/images/hotel/dining-ambience.webp"
                  alt="Family Dining Ambience"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[11px] font-semibold text-cream-100 font-serif block">
                    Warm Dining Ambience
                  </span>
                  <span className="text-[10px] text-gold-400/90">Attentive Hospitality</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Four Feature Cards */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-charcoal-950/85 border border-charcoal-800 hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-400 flex items-center justify-center mb-5 group-hover:bg-gold-500 group-hover:text-charcoal-950 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-gold-400 font-semibold">
                  {item.highlight}
                </span>
                <h3 className="font-serif text-lg font-bold text-cream-50 mt-1 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-cream-200/80 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
