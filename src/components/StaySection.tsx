import React from 'react';
import { BedDouble, Compass, HeartHandshake } from 'lucide-react';

export const StaySection: React.FC = () => {
  const blocks = [
    {
      id: "comfort",
      title: "COMFORT",
      quote: "A place to pause, rest and continue your journey.",
      description: "Designed as a tranquil sanctuary where travellers can unwind with quiet ease and recharge before continuing onward.",
      icon: BedDouble,
    },
    {
      id: "convenience",
      title: "CONVENIENCE",
      quote: "Located in Anwari, Mohania, Bihar.",
      description: "Positioned at Ward Number 16 for straightforward access from the regional transit routes passing through Mohania.",
      icon: Compass,
    },
    {
      id: "hospitality",
      title: "HOSPITALITY",
      quote: "A welcoming environment for guests visiting the area.",
      description: "Rooted in authentic regional courtesy, ensuring every visiting guest receives a respectful, supportive, and helpful greeting.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section
      id="stay"
      aria-label="Your Stay"
      className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#D8C8AE]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B99A5B] font-semibold">
            ACCOMMODATION ESSENCE
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#171717] font-medium mt-2">
            Your Stay
          </h2>
          <div className="w-12 h-[1.5px] bg-[#B99A5B] mx-auto mt-4" />
        </div>

        {/* Three Elegant Editorial Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blocks.map((block) => {
            const IconComponent = block.icon;
            return (
              <div
                key={block.id}
                id={`stay-block-${block.id}`}
                className="group p-8 sm:p-10 bg-[#F6F1E8]/50 hover:bg-[#F6F1E8] border border-[#D8C8AE]/70 rounded-xs transition-all duration-300 flex flex-col justify-between shadow-xs hover:border-[#B99A5B]/60"
              >
                <div>
                  <div className="w-10 h-10 rounded-xs bg-[#FFFFFF] border border-[#B99A5B]/30 flex items-center justify-center text-[#B99A5B] mb-6 group-hover:bg-[#B99A5B] group-hover:text-[#FFFFFF] transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B99A5B]">
                    {block.title}
                  </span>

                  <p className="font-editorial text-2xl text-[#171717] mt-3 mb-4 leading-snug font-normal">
                    “{block.quote}”
                  </p>
                </div>

                <p className="font-sans-clean text-sm text-[#171717]/70 leading-relaxed pt-4 border-t border-[#D8C8AE]/40">
                  {block.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
