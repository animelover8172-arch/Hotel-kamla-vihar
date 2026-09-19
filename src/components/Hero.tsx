import React from 'react';
import { ArrowRight, Navigation, MapPin } from 'lucide-react';
import { HERO_IMAGE, HOTEL_DATA } from '../data/hotelData';

export const Hero: React.FC = () => {
  const handleScrollToSection = (sectionId: string) => {
    const el = document.querySelector(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      aria-label="Hotel Kamla Vihar Hero"
      className="relative min-h-[90vh] lg:min-h-screen pt-28 pb-16 lg:py-0 flex items-center bg-[#F6F1E8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Editorial Content */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-8">
            
            {/* Small Label with Hindi subline */}
            <div className="space-y-1">
              <div className="inline-flex items-center space-x-2">
                <span className="w-6 h-[1px] bg-[#B99A5B]"></span>
                <span className="text-xs uppercase tracking-[0.25em] text-[#B99A5B] font-medium">
                  HOTEL KAMLA VIHAR
                </span>
              </div>
              <p className="text-xs text-[#171717]/60 font-medium tracking-wider pl-8">
                होटल कमला विहार
              </p>
            </div>

            {/* Large Heading */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#171717] font-medium leading-[1.15] tracking-tight">
              A Comfortable Stay in Mohania
            </h1>

            {/* Short Description */}
            <p className="font-sans-clean text-base sm:text-lg text-[#171717]/80 leading-relaxed max-w-xl">
              Welcome to Hotel Kamla Vihar, located in Anwari, Mohania, Bihar — a convenient place to stay while travelling through the region.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="hero-explore-hotel-btn"
                type="button"
                onClick={() => handleScrollToSection('#introduction')}
                className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 bg-[#171717] text-[#FFFFFF] text-xs uppercase tracking-widest font-medium rounded-xs hover:bg-[#2b2b2b] transition-all shadow-xs group"
              >
                <span>Explore Hotel</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D8C8AE] group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                id="hero-get-directions-btn"
                href={HOTEL_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 border border-[#B99A5B] bg-transparent text-[#171717] text-xs uppercase tracking-widest font-medium rounded-xs hover:bg-[#B99A5B]/10 hover:border-[#B99A5B] transition-all shadow-xs"
              >
                <Navigation className="w-3.5 h-3.5 text-[#B99A5B]" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Micro Verified Trust Bar */}
            <div className="pt-4 border-t border-[#D8C8AE]/50 flex items-center space-x-6 text-xs text-[#171717]/70">
              <div className="flex items-center space-x-1.5">
                <span className="text-[#B99A5B] font-semibold">5.0 ★</span>
                <span>Google Rating</span>
              </div>
              <span className="text-[#D8C8AE]">•</span>
              <div>
                <span>Ward No. 16, Anwari, Mohania</span>
              </div>
            </div>

          </div>

          {/* RIGHT: High Quality Hotel Image with Thin Gold Architectural Frame */}
          <div className="lg:col-span-6 relative">
            
            {/* Outer Decorative Architectural Border Offset */}
            <div className="relative p-2 sm:p-3 border border-[#B99A5B]/40 rounded-xs bg-[#F6F1E8]">
              
              {/* Inner Image Container */}
              <div className="relative overflow-hidden rounded-xs aspect-4/3 sm:aspect-5/4 lg:aspect-4/3 shadow-sm group">
                <img
                  src={HERO_IMAGE.src}
                  alt={HERO_IMAGE.alt}
                  referrerPolicy="no-referrer"
                  loading="eager"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
                />
                
                {/* Subtle soft vignette on image edge */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Location Label */}
                <div
                  id="hero-floating-location-badge"
                  className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#F6F1E8]/95 backdrop-blur-sm border border-[#B99A5B]/40 px-3.5 py-2 rounded-xs shadow-xs flex items-center space-x-2"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#B99A5B] shrink-0" />
                  <span className="text-xs uppercase tracking-widest font-medium text-[#171717]">
                    Anwari • Mohania • Bihar
                  </span>
                </div>
              </div>

              {/* Architectural accent corners */}
              <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#B99A5B]" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#B99A5B]" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
