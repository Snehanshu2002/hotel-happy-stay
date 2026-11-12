import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Phone, Award, Flame, Filter } from 'lucide-react';
import { MENU_CATEGORIES, SAMPLE_MENU_ITEMS, RESTAURANT_CONFIG } from '../../config/restaurantConfig';
import { FoodCategory } from '../../types/restaurant';

export const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<FoodCategory>('seafood');
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return SAMPLE_MENU_ITEMS.filter((item) => {
      // Category match
      const matchesCategory = item.category === selectedCategory;

      // Diet filter match
      const matchesDiet =
        dietFilter === 'all'
          ? true
          : dietFilter === 'veg'
          ? item.isVeg
          : !item.isVeg;

      // Search query match
      const matchesSearch =
        searchQuery.trim() === ''
          ? true
          : item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesDiet && matchesSearch;
    });
  }, [selectedCategory, dietFilter, searchQuery]);

  return (
    <section id="menu" className="py-20 lg:py-28 bg-charcoal-900 relative">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Culinary Offerings</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 leading-tight mb-4">
            Explore Our Dining Menu
          </h2>
          <p className="text-sm sm:text-base text-charcoal-300 max-w-2xl mx-auto font-normal">
            From the freshest coastal catch and succulent tandoor kebabs to soothing vegetarian curries and piping hot tandoori breads.
          </p>
        </div>

        {/* Filter and Search Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-charcoal-950/80 p-3.5 sm:p-4 rounded-2xl border border-charcoal-800 shadow-md">
          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400" />
            <input
              type="text"
              placeholder="Search dishes (e.g. Pomfret, Paneer, Naan)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-charcoal-900 border border-charcoal-700 rounded-xl text-cream-100 placeholder-charcoal-400 text-xs sm:text-sm focus:outline-none focus:border-gold-500 transition-colors"
            />
          </div>

          {/* Diet Filter Buttons (All / Veg / Non-Veg) */}
          <div className="flex items-center gap-1.5 w-full md:w-auto justify-end">
            <span className="hidden sm:inline text-xs text-charcoal-400 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            <button
              onClick={() => setDietFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                dietFilter === 'all'
                  ? 'bg-gold-500 text-charcoal-950 font-bold shadow-gold-subtle'
                  : 'bg-charcoal-900 text-cream-200 hover:bg-charcoal-800 border border-charcoal-800'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setDietFilter('veg')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                dietFilter === 'veg'
                  ? 'bg-emerald-600 text-white font-bold shadow-md'
                  : 'bg-charcoal-900 text-cream-200 hover:bg-charcoal-800 border border-charcoal-800'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Veg Only
            </button>
            <button
              onClick={() => setDietFilter('non-veg')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                dietFilter === 'non-veg'
                  ? 'bg-rose-600 text-white font-bold shadow-md'
                  : 'bg-charcoal-900 text-cream-200 hover:bg-charcoal-800 border border-charcoal-800'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-rose-400"></span>
              Non-Veg
            </button>
          </div>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-thin scrollbar-thumb-gold-500/20 scrollbar-track-transparent">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as FoodCategory)}
              className={`shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-charcoal-950 font-bold shadow-gold-subtle scale-[1.02]'
                  : 'bg-charcoal-950/70 text-cream-200 hover:text-gold-400 hover:bg-charcoal-800 border border-charcoal-800'
              }`}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative p-5 rounded-2xl bg-charcoal-950/70 border border-charcoal-800/90 hover:border-gold-500/40 hover:bg-charcoal-950 transition-all duration-200 flex flex-col justify-between shadow-md"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    {/* Item Title and Badges */}
                    <div className="flex items-center gap-2.5 flex-wrap">
                      {/* Veg / Non-Veg Icon */}
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center border ${
                          item.isVeg ? 'border-emerald-500' : 'border-rose-500'
                        }`}
                        title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${
                            item.isVeg ? 'bg-emerald-500' : 'bg-rose-500'
                          }`}
                        />
                      </div>

                      <h3 className="font-serif text-base sm:text-lg font-bold text-cream-100 group-hover:text-gold-300 transition-colors">
                        {item.name}
                      </h3>

                      {item.isChefSpecial && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-gold-500/20 text-gold-400 border border-gold-500/30">
                          <Award className="w-3 h-3 text-gold-400" /> Chef's Special
                        </span>
                      )}

                      {item.isPopular && (
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                          Popular
                        </span>
                      )}
                    </div>

                    {/* Price Tag */}
                    <div className="text-right shrink-0">
                      <span className="text-base sm:text-lg font-bold text-gold-400">
                        ₹{item.price}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-cream-200/90 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Footer specs */}
                <div className="mt-4 pt-3 border-t border-charcoal-800/60 flex items-center justify-between text-xs text-cream-300/80">
                  <div className="flex items-center gap-1.5">
                    {item.spiceLevel && (
                      <span className="flex items-center gap-0.5 text-[11px] text-cream-300/80">
                        Spice:
                        {[...Array(item.spiceLevel)].map((_, i) => (
                          <Flame key={i} className="w-3 h-3 text-spice-500 fill-spice-500" />
                        ))}
                      </span>
                    )}
                  </div>

                  <a
                    href={`tel:${RESTAURANT_CONFIG.contact.primaryPhone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-1 text-[11px] text-gold-400 hover:text-gold-300 font-medium"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Inquire order</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-charcoal-950/40 rounded-2xl border border-charcoal-800">
            <p className="text-cream-200/80 text-sm">
              No dishes found matching your current filter. Try selecting another category or clear search terms.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setDietFilter('all');
              }}
              className="mt-3 px-4 py-2 rounded-lg bg-charcoal-800 text-gold-400 text-xs font-semibold hover:bg-charcoal-700"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Disclaimer / Customization Banner for Restaurant Owner */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-charcoal-950 border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-serif font-bold text-cream-100 mb-1">
              Fresh Daily Seasonal Catch & Highway Specials
            </h4>
            <p className="text-xs text-cream-200/85">
              *Displayed prices are sample menu rates configured in <code className="text-gold-400 bg-charcoal-900 px-1 py-0.5 rounded">restaurantConfig.ts</code>. The hotel owner can easily modify or update dishes, prices, and availability anytime.
            </p>
          </div>

          <a
            href={`tel:${RESTAURANT_CONFIG.contact.primaryPhone.replace(/\s+/g, '')}`}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-charcoal-800 hover:bg-gold-500 hover:text-charcoal-950 text-cream-100 text-xs font-bold transition-all border border-charcoal-700 active:scale-95"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call for Today's Fresh Menu</span>
          </a>
        </div>
      </div>
    </section>
  );
};
