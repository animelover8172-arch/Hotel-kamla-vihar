import React from 'react';
import { MapPin, Sun, Compass } from 'lucide-react';

export const HotelDetails: React.FC = () => {
  const panels = [
    {
      num: "01",
      tag: "THE LOCATION",
      headline: "Anwari, Mohania, Bihar",
      subtext: "Conveniently situated in Ward Number 16, offering direct connectivity and simple access for regional road travel.",
      icon: MapPin,
    },
    {
      num: "02",
      tag: "THE ATMOSPHERE",
      headline: "A simple and welcoming hotel environment.",
      subtext: "Quiet corridors, unhurried surroundings, and warm Indian hospitality tailored to calm, unpretentious hospitality.",
      icon: Sun,
    },
    {
      num: "03",
      tag: "THE EXPERIENCE",
      headline: "A comfortable stop for guests travelling through the area.",
      subtext: "Providing a reliable resting place where travellers can pause, sleep peacefully, and depart refreshed.",
      icon: Compass,
    },
  ];

  return (
    <section
      id="details"
      aria-label="The Hotel in Details"
      className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#D8C8AE]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B99A5B] font-semibold">
            ARCHITECTURAL PHILOSOPHY
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#171717] font-medium mt-2">
            The Hotel in Details
          </h2>
          <div className="w-12 h-[1.5px] bg-[#B99A5B] mt-4" />
        </div>

        {/* Large Horizontal Panels */}
        <div className="space-y-6">
          {panels.map((panel) => {
            const IconComponent = panel.icon;
            return (
              <div
                key={panel.num}
                id={`hotel-details-panel-${panel.num}`}
                className="group relative bg-[#F6F1E8]/60 hover:bg-[#F6F1E8] border border-[#D8C8AE] rounded-xs p-8 sm:p-12 transition-all duration-300 shadow-xs hover:border-[#B99A5B]/70"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Panel Number & Tag */}
                  <div className="lg:col-span-3 flex items-center space-x-4">
                    <span className="font-serif-luxury text-4xl sm:text-5xl font-light text-[#B99A5B]/80 group-hover:text-[#B99A5B] transition-colors">
                      {panel.num}
                    </span>
                    <div className="h-8 w-[1px] bg-[#D8C8AE]" />
                    <div className="flex items-center space-x-2">
                      <IconComponent className="w-4 h-4 text-[#B99A5B]" />
                      <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#171717]">
                        {panel.tag}
                      </span>
                    </div>
                  </div>

                  {/* Large Headline */}
                  <div className="lg:col-span-5">
                    <h3 className="font-editorial text-2xl sm:text-3xl text-[#171717] font-normal leading-snug">
                      {panel.headline}
                    </h3>
                  </div>

                  {/* Refined Subtext */}
                  <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#D8C8AE]/70 pt-4 lg:pt-0 lg:pl-8">
                    <p className="font-sans-clean text-sm text-[#171717]/70 leading-relaxed">
                      {panel.subtext}
                    </p>
                  </div>

                </div>

                {/* Subtle bottom edge gold hover indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#B99A5B] transition-colors" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
