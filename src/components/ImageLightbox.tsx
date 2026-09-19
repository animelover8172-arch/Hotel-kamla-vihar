import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GalleryImage } from '../types';

interface ImageLightboxProps {
  images: GalleryImage[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  images,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  if (currentIndex === null || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        onNavigate(prevIndex);
      }
      if (e.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % images.length;
        onNavigate(nextIndex);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [currentIndex, images.length, onClose, onNavigate]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % images.length);
  };

  return (
    <div
      id="gallery-fullscreen-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Hotel photo lightbox view"
      className="fixed inset-0 z-50 bg-[#171717]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 select-none animate-fadeIn"
      onClick={onClose}
    >
      {/* Top Controls Bar */}
      <div 
        className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center space-x-4 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-xs uppercase tracking-widest text-[#FFFFFF]/70 font-mono">
          {currentIndex + 1} / {images.length}
        </span>
        <button
          id="lightbox-close-btn"
          type="button"
          onClick={onClose}
          className="p-2.5 rounded-full bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/25 text-[#FFFFFF] transition-colors focus:outline-hidden"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        id="lightbox-prev-btn"
        type="button"
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 p-3 rounded-full bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/25 text-[#FFFFFF] transition-all hover:scale-110 focus:outline-hidden"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        id="lightbox-next-btn"
        type="button"
        onClick={handleNext}
        className="absolute right-3 sm:right-6 p-3 rounded-full bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/25 text-[#FFFFFF] transition-all hover:scale-110 focus:outline-hidden"
        aria-label="Next photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div
        className="max-w-5xl max-h-[82vh] relative flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          referrerPolicy="no-referrer"
          className="max-w-full max-h-[75vh] object-contain rounded-xs shadow-2xl border border-[#FFFFFF]/15"
        />

        {/* Caption & Category Tag */}
        <div className="mt-4 text-center">
          {currentImage.label && (
            <span className="inline-block text-[11px] uppercase tracking-widest text-[#B99A5B] font-semibold bg-[#FFFFFF]/10 px-3 py-1 rounded-xs mb-1">
              {currentImage.label}
            </span>
          )}
          <p className="text-xs sm:text-sm text-[#FFFFFF]/80 font-sans-clean">
            {currentImage.alt}
          </p>
        </div>
      </div>
    </div>
  );
};
