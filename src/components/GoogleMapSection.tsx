import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { HOTEL_DATA } from '../data/hotelData';

export const GoogleMapSection: React.FC = () => {
  return (
    <section
      id="map-section"
      aria-label="Google Map View"
      className="py-16 sm:py-20 bg-[#FFFFFF] border-b border-[#D8C8AE]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Frame with Rounded Map Container */}
        <div className="border border-[#D8C8AE] rounded-xs p-3 sm:p-4 bg-[#F6F1E8] shadow-xs">
          
          {/* Header Bar */}
          <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D8C8AE]/60 mb-3 bg-[#FFFFFF] rounded-xs">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-[#B99A5B]/15 flex items-center justify-center text-[#B99A5B]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif-luxury text-base font-semibold text-[#171717]">
                  Hotel Kamla Vihar — Mohania, Bihar
                </h4>
                <p className="text-xs text-[#171717]/60 font-sans-clean">
                  Ward Number 16, Vimla Pipe House and Company, Anwari, Mohania 821109
                </p>
              </div>
            </div>

            <a
              id="map-section-open-google-maps-btn"
              href={HOTEL_DATA.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-4 py-2 bg-[#171717] text-[#FFFFFF] text-xs uppercase tracking-wider font-medium rounded-xs hover:bg-[#2e2e2e] transition-all shrink-0"
            >
              <Navigation className="w-3.5 h-3.5 text-[#D8C8AE]" />
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3 h-3 text-[#D8C8AE]/80 ml-0.5" />
            </a>
          </div>

          {/* Large Rounded Map Frame */}
          <div className="w-full h-80 sm:h-[420px] rounded-xs overflow-hidden border border-[#D8C8AE]/80 relative bg-[#FFFFFF]">
            <iframe
              title="Hotel Kamla Vihar Location Map"
              src={HOTEL_DATA.googleMapsEmbedUrl}
              className="w-full h-full border-0 filter saturate-90"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
