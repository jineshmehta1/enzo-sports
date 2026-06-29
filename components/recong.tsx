"use client";
import React from "react";

const TrustSection: React.FC = () => {
  // Brand Colors
  const electricBlue = "#0066FF";
  const navyBlue = "#0a1128";
  const enzoRed = "#d31d24";

  const affiliations = [
    { name: "Global Sports Fed", logo: "/af1.jpeg" },
    { name: "National Skating Council", logo: "/af2.jpeg" },
    { name: "International Chess Org", logo: "/af3.jpeg" },
  ];

  const recognitions = [
    { name: "Ministry of Sports", logo: "/af4.jpeg" },
    { name: "Elite Academy Board", logo: "/af5.jpeg" },
  ];

  return (
    <section className="py-8 md:py-16 bg-white border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-stretch lg:gap-0">
          
          {/* --- Affiliated By (3 Logos) --- */}
          <div className="flex-1 lg:flex-[1.5] py-6 lg:py-8 lg:pr-12">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-[#0a1128] bg-slate-50 px-3 py-1.5 rounded-md whitespace-nowrap">
                Affiliated By
              </span>
              <div className="h-[1px] flex-grow bg-slate-100" />
            </div>
            
            {/* Grid for 3 logos: 3 cols on mobile/desktop */}
            <div className="grid grid-cols-3 gap-6 md:gap-12 items-center">
              {affiliations.map((item, i) => (
                <div key={i} className="flex justify-center group">
                  <img 
                    src={item.logo} 
                    alt={item.name}
                    className="max-h-12 sm:max-h-16 md:max-h-20 lg:max-h-24 w-auto object-contain transition-all duration-500 transform group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* --- Divider Logic: Vertical on Desktop, Horizontal on Mobile --- */}
          <div className="flex items-center justify-center my-4 lg:my-0">
            <div className="hidden lg:block w-[1px] h-32 bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
            <div className="lg:hidden w-full h-[1px] bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
          </div>

          {/* --- Recognized By (2 Logos) --- */}
          <div className="flex-1 py-6 lg:py-8 lg:pl-12">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-[#d31d24] bg-red-50 px-3 py-1.5 rounded-md whitespace-nowrap">
                Recognized By
              </span>
              <div className="h-[1px] flex-grow bg-slate-100" />
            </div>

            {/* Grid for 2 logos: 2 cols on mobile/desktop */}
            <div className="grid grid-cols-2 gap-8 md:gap-16 items-center">
              {recognitions.map((item, i) => (
                <div key={i} className="flex justify-center group">
                  <img 
                    src={item.logo} 
                    alt={item.name}
                    className="max-h-12 sm:max-h-16 md:max-h-20 lg:max-h-24 w-auto object-contain transition-all duration-500 transform group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* --- Bottom Responsive Accent Badge --- */}
        <div className="mt-10 md:mt-12 flex justify-center">
            <div className="px-5 py-2.5 rounded-full bg-slate-50 border border-slate-100 inline-flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-pulse" />
                <p className="text-[8px] md:text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] text-center">
                    Official Partner of <span className="text-[#0066FF]">Elite Sports Excellence</span>
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;