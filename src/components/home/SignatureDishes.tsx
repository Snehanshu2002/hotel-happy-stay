import React from 'react';
import { Flame, Sparkles, Phone, Info } from 'lucide-react';
import { SIGNATURE_DISHES, RESTAURANT_CONFIG } from '../../config/restaurantConfig';

export const SignatureDishes: React.FC = () => {
  return (
    <section id="specialities" className="py-20 lg:py-28 bg-charcoal-950 relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-spice-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chef's Handcrafted Specialties</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 leading-tight mb-4">
            Signature Highway Flavors
          </h2>
          <p className="text-sm sm:text-base text-cream-200/85 max-w-2xl mx-auto font-normal leading-relaxed">
            Relished by highway commuters and food lovers traveling through Odisha. Freshly prepared, rich in coastal spices, and crafted to recharge you on your journey.
          </p>
        </div>

        {/* 8 Signature Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {SIGNATURE_DISHES.map((dish) => (
            <div
              key={dish.id}
              className="group flex flex-col rounded-2xl bg-charcoal-900/90 border border-charcoal-800 hover:border-gold-500/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-gold-glow overflow-hidden"
            >
              {/* Dish Image Container - Large & Appetizing */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-charcoal-950">
                <img
                  src={dish.image}
                  alt={`${dish.name} at Hotel Happy Stay`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                />

                {/* Top Badge Overlay */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-charcoal-950/85 backdrop-blur-md text-gold-400 border border-gold-500/30 shadow-md">
                    {dish.tag}
                  </span>
                </div>

                {/* Veg / Non-Veg Indicator */}
                <div className="absolute top-3 right-3">
                  <div
                    className={`w-6 h-6 rounded bg-charcoal-950/90 backdrop-blur-md flex items-center justify-center border ${
                      dish.isVeg ? 'border-emerald-500' : 'border-rose-500'
                    }`}
                    title={dish.isVeg ? 'Pure Vegetarian' : 'Non-Vegetarian'}
                  >
                    <div
                      className={`w-2.5 h-2.5 rounded-full ${
                        dish.isVeg ? 'bg-emerald-500' : 'bg-rose-500'
                      }`}
                    />
                  </div>
                </div>

                {/* Gradient bottom shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent opacity-80" />
              </div>

              {/* Card Body */}
              <div className="flex-1 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-medium tracking-wide uppercase text-gold-400 font-semibold">
                      {dish.category}
                    </span>

                    {/* Spice Level meter */}
                    <div className="flex items-center gap-0.5" title={`Spice Level: ${dish.spiceLevel}/3`}>
                      {[...Array(dish.spiceLevel)].map((_, i) => (
                        <Flame key={i} className="w-3.5 h-3.5 text-spice-500 fill-spice-500" />
                      ))}
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-cream-50 group-hover:text-gold-300 transition-colors mb-2">
                    {dish.name}
                  </h3>

                  <p className="text-xs text-cream-200/85 leading-relaxed line-clamp-3 mb-4 font-normal">
                    {dish.description}
                  </p>
                </div>

                {/* Card Footer: Price & Order Info */}
                <div className="pt-3 border-t border-charcoal-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-cream-300/80 uppercase tracking-wider block font-medium">
                      Sample Price*
                    </span>
                    <span className="text-base font-bold text-gold-400">
                      ₹{dish.samplePrice}
                    </span>
                  </div>

                  <a
                    href={`tel:${RESTAURANT_CONFIG.contact.primaryPhone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-charcoal-800 hover:bg-gold-500 hover:text-charcoal-950 text-cream-100 text-xs font-semibold transition-all active:scale-95"
                    title="Call to Order or Inquire"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Note */}
        <div className="mt-10 p-4 rounded-xl bg-charcoal-900/80 border border-charcoal-800 flex items-start gap-3 max-w-2xl mx-auto text-xs text-cream-200/80">
          <Info className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
          <p>
            *Sample rates shown for guest reference. Daily catch (including Chilika crabs, pomfret, and seasonal prawns) and custom preparations can be confirmed directly by calling the restaurant.
          </p>
        </div>
      </div>
    </section>
  );
};
