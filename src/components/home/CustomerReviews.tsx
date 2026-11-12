import React from 'react';
import { Star, ExternalLink, Quote, ShieldCheck } from 'lucide-react';
import { CUSTOMER_REVIEWS, RESTAURANT_CONFIG } from '../../config/restaurantConfig';

export const CustomerReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-charcoal-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
            <span>Verified Customer Feedback</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 leading-tight mb-4">
            Loved by Travelers & Locals Alike
          </h2>
          <p className="text-sm sm:text-base text-charcoal-300 max-w-2xl mx-auto font-normal">
            Real feedback from highway drivers, families, and regular patrons who made Hotel Happy Stay their trusted dining break.
          </p>
        </div>

        {/* Rating Overview Banner */}
        <div className="max-w-4xl mx-auto mb-14 p-6 sm:p-8 rounded-2xl bg-charcoal-950 border border-gold-500/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex flex-col items-center justify-center w-24 h-24 rounded-2xl bg-gold-500/10 border border-gold-500/30">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-400">
                {RESTAURANT_CONFIG.googleReviews.rating}
              </span>
              <span className="text-xs text-charcoal-400 font-medium">out of 5.0</span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <h3 className="font-serif text-lg font-bold text-cream-50">
                Official Google Maps Rating
              </h3>
              <p className="text-xs sm:text-sm text-cream-200/90">
                Based on approximately{' '}
                <strong className="text-gold-400 font-semibold">
                  {RESTAURANT_CONFIG.googleReviews.reviewCount.toLocaleString()}+ reviews
                </strong>{' '}
                from travelers on NH 16.
              </p>
            </div>
          </div>

          <a
            href={RESTAURANT_CONFIG.googleReviews.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-charcoal-950 font-bold text-xs sm:text-sm shadow-gold-subtle hover:brightness-110 active:scale-95 transition-all"
          >
            <span>Read More Google Reviews</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="relative p-6 sm:p-7 rounded-2xl bg-charcoal-950/80 border border-charcoal-800 hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Quote Icon Background */}
                <Quote className="w-8 h-8 text-gold-500/20 mb-3" />

                {/* Stars and Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  {review.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-gold-500/10 text-gold-400 border border-gold-500/20">
                      {review.badge}
                    </span>
                  )}
                </div>

                {/* Review Highlight Title */}
                {review.title && (
                  <h4 className="font-serif text-base sm:text-lg font-bold text-cream-100 mb-2">
                    "{review.title}"
                  </h4>
                )}

                {/* Review text */}
                <p className="text-xs sm:text-sm text-cream-100/90 leading-relaxed font-normal">
                  {review.comment}
                </p>
              </div>

              {/* Review Author Footer */}
              <div className="mt-6 pt-4 border-t border-charcoal-800/80 flex items-center justify-between">
                <div>
                  <h5 className="font-semibold text-xs sm:text-sm text-cream-100">
                    {review.author}
                  </h5>
                  <span className="text-[11px] text-charcoal-400">
                    {review.date}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Google Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highway commuter callout */}
        <div className="mt-12 text-center">
          <p className="text-xs text-charcoal-400 max-w-xl mx-auto">
            Reviews sourced directly from the public Google Maps listing of Hotel Happy Stay, Tangi, Odisha.
          </p>
        </div>
      </div>
    </section>
  );
};
