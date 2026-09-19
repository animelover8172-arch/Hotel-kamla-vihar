import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';
import { INTRO_IMAGE, HOTEL_DATA } from '../data/hotelData';

export const Introduction: React.FC = () => {
  return (
    <section
      id="introduction"
      aria-label="Welcome to Kamla Vihar"
      className="py-20 lg:py-28 bg-[#FFFFFF] border-y border-[#D8C8AE]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Large Hotel Image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative group overflow-hidden rounded-xs border border-[#D8C8AE]/80 shadow-xs">
              <img
                src={INTRO_IMAGE.src}
                alt={INTRO_IMAGE.alt}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full aspect-4/3 object-cover object-center transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 border border-[#B99A5B]/20 pointer-events-none" />
            </div>
          </div>

          {/* RIGHT: Editorial Content & Verified Rating */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B99A5B] font-semibold">
                INTRODUCTION
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#171717] font-medium leading-tight">
                Welcome to Kamla Vihar
              </h2>
            </div>

            {/* Core statement */}
            <p className="font-editorial text-2xl sm:text-3xl text-[#171717]/90 leading-snug italic">
              “Hotel Kamla Vihar offers guests a simple and welcoming place to stay in Anwari, Mohania.”
            </p>

            <p className="font-sans-clean text-base text-[#171717]/75 leading-relaxed">
              Situated in Ward Number 16, Anwari, Mohania, Bihar, our hotel provides an accessible, calm stopover for visitors travelling across the region. Built with the warmth of local hospitality, we value quiet rest, personal respect, and an authentic, pleasant atmosphere.
            </p>

            {/* Verified Google Metrics Block */}
            <div className="pt-4 border-t border-[#D8C8AE]/60 grid grid-cols-2 gap-4">
              <div className="p-4 bg-[#F6F1E8]/70 rounded-xs border border-[#D8C8AE]/50">
                <div className="flex items-center space-x-1 text-[#B99A5B] mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#B99A5B] text-[#B99A5B]" />
                  ))}
                </div>
                <div className="text-2xl font-serif-luxury font-semibold text-[#171717]">
                  5.0 ★
                </div>
                <div className="text-xs uppercase tracking-wider text-[#171717]/70 mt-0.5">
                  Google Rating
                </div>
              </div>

              <div className="p-4 bg-[#F6F1E8]/70 rounded-xs border border-[#D8C8AE]/50">
                <div className="flex items-center space-x-1 text-[#171717]/70 mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#B99A5B]" />
                  <span className="text-[11px] font-medium uppercase tracking-wider text-[#B99A5B]">Verified</span>
                </div>
                <div className="text-2xl font-serif-luxury font-semibold text-[#171717]">
                  2
                </div>
                <div className="text-xs uppercase tracking-wider text-[#171717]/70 mt-0.5">
                  Google Reviews
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
