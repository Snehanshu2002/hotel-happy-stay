import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Navigation, ArrowDown, MapPin, Sparkles, Car, Clock, ShieldCheck } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../../config/restaurantConfig';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Subtle parallax effect on background image
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
      {/* Background with Real Hotel Exterior & Parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <img
          src="/images/hotel/exterior-hero.webp"
          alt="HOTEL HAPPY STAY Restaurant Exterior in Tangi, Odisha"
          className="w-full h-full object-cover object-center transform scale-110 filter brightness-[0.78] contrast-[1.05]"
        />
        {/* Refined gradient overlay ensuring the building and restaurant signage remain clearly recognizable */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/65 to-charcoal-950/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/70 via-transparent to-charcoal-950/70" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-charcoal-950/30 to-charcoal-950/80" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Badges: Location & Google Rating */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6"
        >
          {/* Location Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-charcoal-950/85 border border-gold-500/30 text-cream-100 text-xs tracking-wider uppercase font-medium backdrop-blur-md shadow-md">
            <MapPin className="w-3.5 h-3.5 text-gold-400" />
            <span>NH 16, Tangi • Odisha</span>
          </div>

          {/* Google Rating Pill Badge */}
          <a
            href={RESTAURANT_CONFIG.googleReviews.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal-950/85 border border-gold-400/50 text-cream-100 text-xs font-semibold backdrop-blur-md hover:bg-charcoal-900 transition-all shadow-gold-subtle"
          >
            <div className="flex items-center text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            </div>
            <span className="font-bold text-cream-50">{RESTAURANT_CONFIG.googleReviews.rating}</span>
            <span className="text-charcoal-400">/ 5.0</span>
            <span className="text-gold-400 font-normal">
              ({RESTAURANT_CONFIG.googleReviews.reviewCount.toLocaleString()}+ Reviews)
            </span>
          </a>

          {/* Operating Status Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-semibold backdrop-blur-md">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span>{RESTAURANT_CONFIG.hours.status}</span>
          </div>
        </motion.div>

        {/* Tagline Overline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-3"
        >
          <span className="font-serif italic text-gold-300 text-sm sm:text-base lg:text-lg tracking-widest uppercase font-medium">
            Hotel Happy Stay • Highway Dining Destination
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-cream-50 max-w-4xl leading-[1.14] mb-6 drop-shadow-md"
        >
          GOOD FOOD. GREAT MOMENTS.{' '}
          <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-amber-300 bg-clip-text text-transparent block sm:inline">
            WARM HOSPITALITY.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-sm sm:text-base lg:text-lg text-cream-100/90 max-w-2xl font-normal leading-relaxed mb-8 sm:mb-10 drop-shadow"
        >
          Discover the taste of delicious food at Hotel Happy Stay, Tangi. Enjoy freshly prepared meals, welcoming hospitality and a comfortable dining experience along your journey.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-12 sm:mb-14"
        >
          {/* Primary CTA */}
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-charcoal-950 font-bold text-sm sm:text-base shadow-gold-glow hover:brightness-110 active:scale-95 transition-all"
          >
            <span>Explore Our Menu</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          {/* Secondary CTA */}
          <a
            href={RESTAURANT_CONFIG.googleReviews.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-charcoal-950/90 hover:bg-charcoal-900 text-cream-100 font-semibold text-sm sm:text-base border border-gold-500/40 hover:border-gold-400 backdrop-blur-md active:scale-95 transition-all shadow-md"
          >
            <Navigation className="w-4 h-4 text-gold-400" />
            <span>Get Directions</span>
          </a>
        </motion.div>

        {/* Highway Perks Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-charcoal-950/85 border border-charcoal-800/90 backdrop-blur-md shadow-2xl"
        >
          <div className="flex items-center gap-3 p-2 text-left">
            <div className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-gold-400" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-cream-100">Fresh Seafood</h4>
              <p className="text-[11px] text-charcoal-300">Coastal Odia preparations</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 text-left">
            <div className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-gold-400" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-cream-100">Clean & Hygienic</h4>
              <p className="text-[11px] text-charcoal-300">Sanitized dining space</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 text-left">
            <div className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
              <Car className="w-4 h-4 text-gold-400" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-cream-100">Vehicle Parking</h4>
              <p className="text-[11px] text-charcoal-300">Spacious roadside parking</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 text-left">
            <div className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 text-gold-400" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-cream-100">Open Daily</h4>
              <p className="text-[11px] text-charcoal-300">Highway dining stop</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-gold-400/80 hover:text-gold-300 transition-colors cursor-pointer group"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] tracking-widest uppercase font-mono">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
