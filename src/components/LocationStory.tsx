import React from 'react';
import { MapPin, Navigation, ExternalLink, Compass } from 'lucide-react';
import { HOTEL_DATA } from '../data/hotelData';

export const LocationStory: React.FC = () => {
  return (
    <section
      id="location"
      aria-label="Location in Mohania"
      className="py-20 lg:py-28 bg-[#F6F1E8] relative overflow-hidden"
    >
      {/* Subtle architectural background line grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#B99A5B_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 mb-2">
            <Compass className="w-4 h-4 text-[#B99A5B]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#B99A5B] font-semibold">
              LOCATION & DESTINATION
            </span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#171717] font-medium leading-tight">
            Conveniently Located in Mohania
          </h2>
          <p className="mt-4 font-sans-clean text-base text-[#171717]/75 max-w-2xl leading-relaxed">
            Positioned in Anwari, Mohania, Hotel Kamla Vihar provides direct road accessibility for travellers traversing Bihar and neighboring regional corridors.
          </p>
        </div>

        {/* Map-Inspired Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address Details Card */}
          <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#D8C8AE] p-8 sm:p-10 rounded-xs shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xs bg-[#F6F1E8] border border-[#B99A5B]/30 flex items-center justify-center text-[#B99A5B] mb-6">
                <MapPin className="w-6 h-6 animate-bounce" />
              </div>

              <span className="text-xs uppercase tracking-widest text-[#B99A5B] font-semibold">
                Official Registered Address
              </span>
              <h3 className="font-serif-luxury text-2xl text-[#171717] mt-1 mb-4 font-medium">
                Hotel Kamla Vihar
              </h3>

              <div className="space-y-3 font-sans-clean text-sm sm:text-base text-[#171717]/85 border-t border-[#D8C8AE]/50 pt-4">
                <div className="flex items-start space-x-3">
                  <span className="text-xs text-[#B99A5B] font-medium uppercase tracking-wider w-20 shrink-0">Street:</span>
                  <span className="font-medium">Ward Number 16</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-xs text-[#B99A5B] font-medium uppercase tracking-wider w-20 shrink-0">Landmark:</span>
                  <span>Vimla Pipe House and Company</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-xs text-[#B99A5B] font-medium uppercase tracking-wider w-20 shrink-0">Area:</span>
                  <span>Anwari</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-xs text-[#B99A5B] font-medium uppercase tracking-wider w-20 shrink-0">City:</span>
                  <span>Mohania</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-xs text-[#B99A5B] font-medium uppercase tracking-wider w-20 shrink-0">State & PIN:</span>
                  <span>Bihar 821109</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-[#D8C8AE]/60">
              <a
                id="location-story-open-maps-btn"
                href={HOTEL_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-[#B99A5B] text-[#FFFFFF] text-xs uppercase tracking-widest font-medium rounded-xs hover:bg-[#a6884a] transition-all shadow-xs"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-80" />
              </a>
            </div>
          </div>

          {/* Stylized Architectural Map Canvas with Pin Animation */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#D8C8AE] rounded-xs p-4 sm:p-6 shadow-xs flex flex-col justify-between relative">
            <div className="relative w-full h-72 sm:h-96 rounded-xs overflow-hidden border border-[#D8C8AE]/60 bg-[#F6F1E8]">
              {/* Actual interactive iframe embed */}
              <iframe
                title="Hotel Kamla Vihar Location Map"
                src={HOTEL_DATA.googleMapsEmbedUrl}
                className="w-full h-full border-0 filter saturate-85 contrast-105"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Floating Overlay Badge on Map */}
              <div className="absolute top-4 left-4 bg-[#FFFFFF]/95 backdrop-blur-md px-3.5 py-2 border border-[#B99A5B]/50 rounded-xs shadow-sm flex items-center space-x-2 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
                <span className="text-xs font-semibold tracking-wider text-[#171717]">
                  Mohania, Bihar 821109
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 pt-4 border-t border-[#D8C8AE]/50 text-xs text-[#171717]/70">
              <p>GPS and road navigation available via Google Maps application.</p>
              <a
                href={HOTEL_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B99A5B] hover:underline font-medium inline-flex items-center space-x-1"
              >
                <span>Navigate directly</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
