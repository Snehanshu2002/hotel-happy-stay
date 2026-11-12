import React, { useState } from 'react';
import { MapPin, Phone, Navigation, Clock, MessageSquare, Copy, Check, Train, BedDouble, Car } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../../config/restaurantConfig';

export const LocationContact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const fullAddress = `${RESTAURANT_CONFIG.address.street}, ${RESTAURANT_CONFIG.address.locality}, ${RESTAURANT_CONFIG.address.district}, ${RESTAURANT_CONFIG.address.state} ${RESTAURANT_CONFIG.address.postalCode}, ${RESTAURANT_CONFIG.address.country}`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-charcoal-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Highway Stopover & Route Guide</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 leading-tight mb-4">
            Find Us on Your Journey
          </h2>
          <p className="text-sm sm:text-base text-charcoal-300 max-w-2xl mx-auto font-normal">
            Located right on National Highway 16 in Tangi, Odisha. Easily visible with high glow signboards, wide highway service road access, and 24-hour service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Business Info & Actions */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Details Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-charcoal-950 border border-charcoal-800 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-serif text-gold-400 tracking-widest uppercase">
                  Business Details
                </span>
                <h3 className="font-serif text-2xl font-bold text-cream-50 mt-1">
                  {RESTAURANT_CONFIG.name}
                </h3>
                <p className="text-xs text-charcoal-400 mt-0.5">
                  Multi-Cuisine Restaurant & Highway Lodging
                </p>
              </div>

              {/* Address with Copy Button */}
              <div className="space-y-2 pt-2 border-t border-charcoal-800/80">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/10 text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-bold text-cream-200 uppercase tracking-wider mb-1">
                      Address
                    </h4>
                    <p className="text-xs sm:text-sm text-charcoal-200 leading-relaxed">
                      {RESTAURANT_CONFIG.address.street}, {RESTAURANT_CONFIG.address.locality}, {RESTAURANT_CONFIG.address.city}, {RESTAURANT_CONFIG.address.state} – {RESTAURANT_CONFIG.address.postalCode}, India
                    </p>
                    <p className="text-xs text-gold-400/90 mt-1 font-medium">
                      Landmark: {RESTAURANT_CONFIG.address.landmark}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyAddress}
                  className="w-full mt-2 py-2 px-3 rounded-lg bg-charcoal-900 hover:bg-charcoal-800 border border-charcoal-700/60 text-xs text-cream-200 flex items-center justify-center gap-1.5 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Address Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-gold-400" />
                      <span>Copy Full Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Highway Traveler Transit Info */}
              <div className="space-y-3 pt-3 border-t border-charcoal-800/80 text-xs text-cream-200/90">
                <div className="flex items-center gap-2.5">
                  <Navigation className="w-4 h-4 text-gold-400 shrink-0" />
                  <span><strong className="text-cream-100">Highway Route:</strong> NH 16 (Berhampur – Bhubaneswar corridor)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Train className="w-4 h-4 text-gold-400 shrink-0" />
                  <span><strong className="text-cream-100">Nearest Station:</strong> Kalupara Gha Railway Station (~2.41 km)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong className="text-cream-100">Dining Timings:</strong> {RESTAURANT_CONFIG.hours.status} ({RESTAURANT_CONFIG.hours.daysOpen})</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Car className="w-4 h-4 text-gold-400 shrink-0" />
                  <span><strong className="text-cream-100">Vehicle Parking:</strong> {RESTAURANT_CONFIG.facilities.parking}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <BedDouble className="w-4 h-4 text-gold-400 shrink-0" />
                  <span><strong className="text-cream-100">Stay & Facilities:</strong> {RESTAURANT_CONFIG.facilities.lodgingNote}</span>
                </div>
              </div>

              {/* Action Buttons: Call & Directions */}
              <div className="space-y-3 pt-4 border-t border-charcoal-800">
                {/* Call Button */}
                <a
                  href={`tel:${RESTAURANT_CONFIG.contact.primaryPhone.replace(/\s+/g, '')}`}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-cream-50 font-bold text-sm border border-charcoal-700 shadow-md transition-all active:scale-95"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span>Call {RESTAURANT_CONFIG.contact.primaryPhone}</span>
                </a>

                {/* Get Directions Button */}
                <a
                  href={RESTAURANT_CONFIG.googleReviews.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-charcoal-950 font-bold text-sm shadow-gold-subtle hover:brightness-110 transition-all active:scale-95"
                >
                  <Navigation className="w-4 h-4 fill-charcoal-950" />
                  <span>Get Driving Directions (Google Maps)</span>
                </a>

                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/${RESTAURANT_CONFIG.contact.whatsappNumber}?text=Hello%20Hotel%20Happy%20Stay,%20I%20would%20like%20to%20inquire%20about%20dining%20and%20food%20availability.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 font-semibold text-xs sm:text-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Google Map & Distances */}
          <div className="lg:col-span-7 space-y-6">
            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-charcoal-800 shadow-2xl bg-charcoal-950 relative">
              <div className="h-96 sm:h-[450px] w-full">
                <iframe
                  title="Hotel Happy Stay Google Map Location"
                  src={`https://maps.google.com/maps?q=${RESTAURANT_CONFIG.geo.latitude},${RESTAURANT_CONFIG.geo.longitude}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter contrast-[1.05]"
                />
              </div>

              {/* Map Floating Card */}
              <div className="p-4 bg-charcoal-950/95 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold text-cream-100">
                    Direct Highway Frontage on NH 16
                  </span>
                </div>

                <a
                  href={RESTAURANT_CONFIG.googleReviews.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-gold-400 hover:text-gold-300 flex items-center gap-1"
                >
                  <span>Open in Google Maps App</span>
                  <Navigation className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Highway Corridor Approximate Distances Guide */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3.5 rounded-xl bg-charcoal-950/80 border border-charcoal-800">
                <span className="text-[10px] text-charcoal-400 uppercase tracking-wider block">From Bhubaneswar</span>
                <span className="text-base font-bold text-gold-400 font-serif">~70 km</span>
                <span className="text-[10px] text-charcoal-400 block mt-0.5">Approx 1.5 hrs</span>
              </div>

              <div className="p-3.5 rounded-xl bg-charcoal-950/80 border border-charcoal-800">
                <span className="text-[10px] text-charcoal-400 uppercase tracking-wider block">From Berhampur</span>
                <span className="text-base font-bold text-gold-400 font-serif">~100 km</span>
                <span className="text-[10px] text-charcoal-400 block mt-0.5">Approx 2 hrs</span>
              </div>

              <div className="p-3.5 rounded-xl bg-charcoal-950/80 border border-charcoal-800">
                <span className="text-[10px] text-charcoal-400 uppercase tracking-wider block">To Chilika Lake</span>
                <span className="text-base font-bold text-gold-400 font-serif">~25 km</span>
                <span className="text-[10px] text-charcoal-400 block mt-0.5">Fresh coastal zone</span>
              </div>

              <div className="p-3.5 rounded-xl bg-charcoal-950/80 border border-charcoal-800">
                <span className="text-[10px] text-charcoal-400 uppercase tracking-wider block">Kalupara Gha Stn</span>
                <span className="text-base font-bold text-gold-400 font-serif">2.4 km</span>
                <span className="text-[10px] text-charcoal-400 block mt-0.5">5 min drive</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
