import React, { useState, useMemo } from 'react';
import { Camera, ZoomIn } from 'lucide-react';
import { AUTHENTIC_HOTEL_GALLERY } from '../../config/restaurantConfig';
import { GalleryCategory } from '../../types/restaurant';
import { Lightbox } from '../common/Lightbox';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: { id: GalleryCategory; label: string }[] = [
    { id: 'all', label: 'All Photos' },
    { id: 'exterior', label: 'Restaurant Exterior' },
    { id: 'interior', label: 'Restaurant Interior' },
    { id: 'dining', label: 'Dining Area' },
    { id: 'seafood', label: 'Seafood' },
    { id: 'indian-dishes', label: 'Indian Dishes' },
    { id: 'ambience', label: 'Restaurant Ambience' },
  ];

  const filteredGallery = useMemo(() => {
    return AUTHENTIC_HOTEL_GALLERY.filter((item) =>
      activeCategory === 'all' ? true : item.category === activeCategory
    );
  }, [activeCategory]);

  const handleOpenLightbox = (index: number) => {
    const selectedItem = filteredGallery[index];
    const fullIndex = AUTHENTIC_HOTEL_GALLERY.findIndex((i) => i.id === selectedItem.id);
    setLightboxIndex(fullIndex >= 0 ? fullIndex : 0);
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-charcoal-950 relative border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Tour</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 leading-tight mb-4">
            Restaurant & Food Gallery
          </h2>
          <p className="text-sm sm:text-base text-cream-200/85 max-w-2xl mx-auto font-normal leading-relaxed">
            Explore genuine photographs of our 3-storey hotel, spacious air-conditioned dining halls, authentic coastal seafood, and inviting roadside atmosphere along NH 16.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => {
            const count =
              cat.id === 'all'
                ? AUTHENTIC_HOTEL_GALLERY.length
                : AUTHENTIC_HOTEL_GALLERY.filter((i) => i.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-charcoal-950 shadow-gold-subtle font-bold'
                    : 'bg-charcoal-900 text-cream-200 hover:text-gold-400 hover:bg-charcoal-800 border border-charcoal-800'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  activeCategory === cat.id ? 'bg-charcoal-950/20 text-charcoal-950 font-bold' : 'bg-charcoal-800 text-charcoal-300'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid: Large Photography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-charcoal-900 border border-charcoal-800 hover:border-gold-500/50 shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Photo */}
              <img
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
              />

              {/* Overlay with zoom icon and caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/95 via-charcoal-950/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-5">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[11px] text-gold-400 font-serif tracking-widest uppercase font-semibold">
                    {item.categoryLabel}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/40 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-charcoal-950 transition-colors">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-serif text-base sm:text-lg font-bold text-cream-50 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-cream-200/80 line-clamp-2 mt-1 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        items={AUTHENTIC_HOTEL_GALLERY}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </section>
  );
};
