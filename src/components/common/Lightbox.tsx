import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../../types/restaurant';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % items.length);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Top Bar with counter and close button */}
      <div
        className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 sm:p-6 bg-gradient-to-b from-black/80 to-transparent z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="text-gold-400 font-serif text-sm tracking-wider uppercase">
            Photo {currentIndex + 1} of {items.length}
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-charcoal-800 text-gold-300 border border-charcoal-700">
            {currentItem.categoryLabel}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-charcoal-800/80 text-cream-200 hover:text-white hover:bg-charcoal-700 transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation: Previous Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex - 1 + items.length) % items.length);
        }}
        className="absolute left-3 sm:left-6 z-10 p-3 rounded-full bg-charcoal-900/80 text-cream-200 hover:text-gold-400 hover:bg-charcoal-800 border border-charcoal-700/60 transition-all shadow-lg"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[80vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentItem.imageUrl}
          alt={currentItem.title}
          className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-charcoal-800"
        />

        <div className="mt-4 text-center max-w-2xl px-4">
          <h3 className="text-lg sm:text-xl font-serif text-cream-100 font-semibold mb-1">
            {currentItem.title}
          </h3>
          <p className="text-sm text-charcoal-300">
            {currentItem.caption}
          </p>
        </div>
      </div>

      {/* Navigation: Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex + 1) % items.length);
        }}
        className="absolute right-3 sm:right-6 z-10 p-3 rounded-full bg-charcoal-900/80 text-cream-200 hover:text-gold-400 hover:bg-charcoal-800 border border-charcoal-700/60 transition-all shadow-lg"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
