import React from 'react';
import { Star, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { HOTEL_DATA } from '../data/hotelData';

export const GoogleReviews: React.FC = () => {
  return (
    <section
      id="reviews"
      aria-label="Google Guest Reviews"
      className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#D8C8AE]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B99A5B] font-semibold">
            GUEST EXPERIENCES & RATINGS
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#171717] font-medium mt-2">
            What Guests Are Saying
          </h2>
          <div className="w-12 h-[1.5px] bg-[#B99A5B] mx-auto mt-4 mb-6" />
          <p className="font-sans-clean text-base text-[#171717]/70">
            Real feedback verified on Google for Hotel Kamla Vihar in Anwari, Mohania.
          </p>
        </div>

        {/* Rating Presentation Container */}
        <div className="max-w-4xl mx-auto bg-[#F6F1E8]/70 border border-[#D8C8AE] rounded-xs p-8 sm:p-12 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Score Breakdown */}
            <div className="md:col-span-6 flex flex-col items-center md:items-start text-center md:text-left md:border-r md:border-[#D8C8AE]/70 md:pr-8">
              <div className="flex items-center space-x-1 text-[#B99A5B] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-7 h-7 fill-[#B99A5B] text-[#B99A5B]" />
                ))}
              </div>

              <div className="font-serif-luxury text-5xl sm:text-6xl font-semibold text-[#171717] tracking-tight">
                5.0 <span className="text-2xl sm:text-3xl font-normal text-[#171717]/60">/ 5</span>
              </div>

              <div className="mt-2 text-sm font-medium uppercase tracking-wider text-[#171717]">
                Google Reviews
              </div>
              <div className="text-xs text-[#171717]/60 mt-0.5">
                Based on 2 Verified Google User Ratings
              </div>

              <div className="mt-6">
                <a
                  id="reviews-see-all-google-btn"
                  href={HOTEL_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-[#171717] text-[#FFFFFF] text-xs uppercase tracking-widest font-medium rounded-xs hover:bg-[#2e2e2e] transition-all shadow-xs"
                >
                  <span>See all Google reviews</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#D8C8AE]" />
                </a>
              </div>
            </div>

            {/* Right Verified Reviews Breakdown (Authentic Star Ratings, No Fake Quotes) */}
            <div className="md:col-span-6 space-y-4">
              <div className="p-4 bg-[#FFFFFF] border border-[#D8C8AE]/60 rounded-xs">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-7 h-7 rounded-full bg-[#F6F1E8] border border-[#D8C8AE] flex items-center justify-center text-xs font-semibold text-[#171717]">
                      G
                    </span>
                    <span className="text-xs font-medium text-[#171717]">Google Reviewer</span>
                  </div>
                  <div className="flex text-[#B99A5B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#B99A5B] text-[#B99A5B]" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-1.5 text-[11px] text-[#171717]/60">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>5.0 Star Rating on Google Maps</span>
                </div>
              </div>

              <div className="p-4 bg-[#FFFFFF] border border-[#D8C8AE]/60 rounded-xs">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-7 h-7 rounded-full bg-[#F6F1E8] border border-[#D8C8AE] flex items-center justify-center text-xs font-semibold text-[#171717]">
                      G
                    </span>
                    <span className="text-xs font-medium text-[#171717]">Google Reviewer</span>
                  </div>
                  <div className="flex text-[#B99A5B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#B99A5B] text-[#B99A5B]" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-1.5 text-[11px] text-[#171717]/60">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>5.0 Star Rating on Google Maps</span>
                </div>
              </div>

              <div className="p-3 bg-[#FFFFFF]/60 border border-dashed border-[#D8C8AE] rounded-xs flex items-center space-x-2 text-xs text-[#171717]/70">
                <ShieldCheck className="w-4 h-4 text-[#B99A5B] shrink-0" />
                <span>Original Google reviews consist of verified 5-star ratings without written remarks.</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
