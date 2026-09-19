import React from 'react';
import { ArrowRight, HelpCircle } from 'lucide-react';
import { ROOM_PREVIEW_IMAGES } from '../data/hotelData';

interface RoomPreviewProps {
  onOpenLightbox?: (index: number) => void;
}

export const RoomPreview: React.FC<RoomPreviewProps> = ({ onOpenLightbox }) => {
  const handleScrollToContact = () => {
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="experience"
      aria-label="Room Preview"
      className="py-20 lg:py-28 bg-[#F6F1E8] border-b border-[#D8C8AE]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B99A5B] font-semibold">
              ACCOMMODATION OVERVIEW
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#171717] font-medium mt-2">
              Stay Your Way
            </h2>
            <p className="mt-3 font-sans-clean text-base text-[#171717]/75">
              Explore the available accommodation at Hotel Kamla Vihar.
            </p>
          </div>

          <div className="shrink-0">
            <button
              id="room-preview-enquire-btn-header"
              type="button"
              onClick={handleScrollToContact}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-[#171717] text-[#FFFFFF] text-xs uppercase tracking-widest font-medium rounded-xs hover:bg-[#2c2c2c] transition-all shadow-xs"
            >
              <span>Enquire About Rooms</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D8C8AE]" />
            </button>
          </div>
        </div>

        {/* Room Photography Cards (Strictly without invented prices, sizes, or AC tags) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ROOM_PREVIEW_IMAGES.map((room, idx) => (
            <div
              key={room.id}
              id={`room-preview-card-${idx + 1}`}
              className="group bg-[#FFFFFF] border border-[#D8C8AE] rounded-xs overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div 
                className="relative aspect-4/3 overflow-hidden cursor-pointer bg-[#D8C8AE]/20"
                onClick={() => onOpenLightbox && onOpenLightbox(idx + 1)}
              >
                <img
                  src={room.src}
                  alt={room.alt}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-[#171717]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-[#FFFFFF]/90 text-[#171717] px-3 py-1.5 text-xs uppercase tracking-wider font-medium rounded-xs backdrop-blur-xs">
                    View Photo
                  </span>
                </div>
              </div>

              {/* Verified Content Area */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#B99A5B]">
                    Hotel Kamla Vihar
                  </span>
                  <h3 className="font-serif-luxury text-xl font-medium text-[#171717] mt-1 mb-2">
                    {room.title}
                  </h3>
                  <p className="text-xs text-[#171717]/70 font-sans-clean leading-relaxed">
                    Clean, comfortable spaces prepared for visiting guests and travellers pausing in Mohania.
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-[#D8C8AE]/40 flex items-center justify-between">
                  <span className="text-xs text-[#171717]/60 italic">
                    Direct on-site availability
                  </span>
                  <button
                    type="button"
                    onClick={handleScrollToContact}
                    className="text-xs uppercase tracking-wider font-medium text-[#B99A5B] hover:text-[#171717] transition-colors inline-flex items-center space-x-1"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informational Callout */}
        <div className="mt-12 p-6 bg-[#FFFFFF] border border-[#D8C8AE]/80 rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start space-x-3">
            <HelpCircle className="w-5 h-5 text-[#B99A5B] shrink-0 mt-0.5" />
            <div className="text-xs text-[#171717]/80">
              <span className="font-semibold text-[#171717]">Room Details & Enquiry: </span>
              For room availability and guest arrangements, please submit an enquiry through our contact form or visit the premises in Anwari, Mohania.
            </div>
          </div>
          <button
            id="room-preview-enquire-btn-bottom"
            type="button"
            onClick={handleScrollToContact}
            className="shrink-0 px-5 py-2.5 bg-[#B99A5B] text-[#FFFFFF] text-xs uppercase tracking-wider font-medium rounded-xs hover:bg-[#a6884a] transition-all"
          >
            Enquire About Rooms
          </button>
        </div>

      </div>
    </section>
  );
};
