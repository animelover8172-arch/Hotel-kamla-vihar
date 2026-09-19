import React from 'react';
import { Maximize2, Camera } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/hotelData';

interface GalleryProps {
  onOpenLightbox: (index: number) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenLightbox }) => {
  // Structure:
  // 1 large image: GALLERY_IMAGES[0]
  // 2 medium images: GALLERY_IMAGES[1], GALLERY_IMAGES[2]
  // 4 small images: GALLERY_IMAGES[3], GALLERY_IMAGES[4], GALLERY_IMAGES[5], GALLERY_IMAGES[6]
  const largeImage = GALLERY_IMAGES[0];
  const mediumImages = GALLERY_IMAGES.slice(1, 3);
  const smallImages = GALLERY_IMAGES.slice(3, 7);

  return (
    <section
      id="gallery"
      aria-label="Hotel Gallery"
      className="py-20 lg:py-28 bg-[#F6F1E8] border-b border-[#D8C8AE]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 mb-2">
            <Camera className="w-4 h-4 text-[#B99A5B]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#B99A5B] font-semibold">
              VISUAL EXPLORATION
            </span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#171717] font-medium leading-tight">
            Hotel Gallery
          </h2>
          <p className="mt-3 font-sans-clean text-base text-[#171717]/75">
            Architectural perspectives, welcoming guest spaces, and property surroundings at Hotel Kamla Vihar.
          </p>
        </div>

        {/* Editorial Masonry Gallery Layout */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* Top Tier: 1 Large Image (featured) and 2 Medium Images */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            
            {/* 1 Large Image */}
            <div
              id="gallery-item-1"
              className="lg:col-span-7 group relative overflow-hidden rounded-xs border border-[#D8C8AE] bg-[#FFFFFF] shadow-xs cursor-pointer"
              onClick={() => onOpenLightbox(0)}
            >
              <div className="relative aspect-16/10 sm:aspect-16/11 overflow-hidden">
                <img
                  src={largeImage.src}
                  alt={largeImage.alt}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Floating Meta Tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    {largeImage.label && (
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-[#B99A5B] bg-[#171717]/80 backdrop-blur-xs px-2.5 py-1 rounded-xs">
                        {largeImage.label}
                      </span>
                    )}
                    <h3 className="text-sm sm:text-base font-serif-luxury text-[#FFFFFF] mt-1 font-medium">
                      {largeImage.alt}
                    </h3>
                  </div>
                  <div className="p-2 rounded-full bg-[#FFFFFF]/20 backdrop-blur-xs text-[#FFFFFF] group-hover:bg-[#B99A5B] group-hover:text-[#FFFFFF] transition-all">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* 2 Medium Images (stacked vertically on large screens) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-8">
              {mediumImages.map((img, idx) => (
                <div
                  key={img.id}
                  id={`gallery-item-${idx + 2}`}
                  className="group relative overflow-hidden rounded-xs border border-[#D8C8AE] bg-[#FFFFFF] shadow-xs cursor-pointer"
                  onClick={() => onOpenLightbox(idx + 1)}
                >
                  <div className="relative aspect-16/10 lg:aspect-16/9 overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/60 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                    
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                      <div>
                        {img.label && (
                          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#B99A5B] bg-[#171717]/80 backdrop-blur-xs px-2 py-0.5 rounded-xs">
                            {img.label}
                          </span>
                        )}
                        <p className="text-xs font-serif-luxury text-[#FFFFFF] mt-0.5 font-medium line-clamp-1">
                          {img.alt}
                        </p>
                      </div>
                      <div className="p-1.5 rounded-full bg-[#FFFFFF]/20 text-[#FFFFFF] group-hover:bg-[#B99A5B] transition-colors">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Bottom Tier: 4 Smaller Images */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {smallImages.map((img, idx) => (
              <div
                key={img.id}
                id={`gallery-item-${idx + 4}`}
                className="group relative overflow-hidden rounded-xs border border-[#D8C8AE] bg-[#FFFFFF] shadow-xs cursor-pointer"
                onClick={() => onOpenLightbox(idx + 3)}
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/60 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                  
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-end justify-between">
                    <div>
                      {img.label && (
                        <span className="text-[9px] font-semibold uppercase tracking-widest text-[#B99A5B] bg-[#171717]/80 px-2 py-0.5 rounded-xs">
                          {img.label}
                        </span>
                      )}
                    </div>
                    <div className="p-1 rounded-full bg-[#FFFFFF]/20 text-[#FFFFFF] group-hover:bg-[#B99A5B] transition-colors">
                      <Maximize2 className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Informational Subtext */}
        <div className="mt-8 text-center text-xs text-[#171717]/60 font-sans-clean">
          Click on any photo to view in high-resolution full-screen mode.
        </div>

      </div>
    </section>
  );
};
