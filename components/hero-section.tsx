"use client";
import React from "react";
import { ArrowRight, Trophy, Home, ChevronRight, Star } from "lucide-react";

const EliteWhiteMosaicHero: React.FC = () => {
  // Brand Colors
  const electricBlue = "#0066FF";
  const enzoRed = "#d31d24";
  const navyBlue = "#0a1128";

  // Data: a1.jpeg to a30.jpeg
  const bgImages = Array.from({ length: 32 }, (_, i) => `/a${(i % 30) + 1}.jpeg`);

  return (
    <section className="pt-5 md:pt-15 relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-white">
      
      {/* --- 1. BACKGROUND IMAGE MOSAIC (Netflix Style) --- */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none select-none">
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 p-4 scale-110 -rotate-2">
          {bgImages.map((src, idx) => (
            <div 
              key={idx} 
              className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-100 border border-slate-200"
            >
              <img
                src={src}
                alt="Enzo Action"
                className="w-full h-full object-cover grayscale opacity-100"
              />
            </div>
          ))}
        </div>
      </div>

      {/* --- 2. THE "MASTERS" OVERLAY (White Radial Spotlight) --- */}

      {/* --- 3. CENTER CONTENT --- */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          
          {/* Elite Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0a1128] mb-8 shadow-xl">
            <Trophy className="w-4 h-4 text-[#0066FF]" />
            <span className="text-white text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em]">
              Established 2024 • Enzo Elite
            </span>
          </div>

          {/* Original Headline - Styled for White Theme */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0a1128] uppercase italic tracking-tighter leading-[0.85] mb-8 drop-shadow-sm">
            Unleash Your <br />
            <span className="text-[#0066FF] not-italic">Elite Potential</span>
          </h1>

          {/* Original Subtext */}
          <p className="text-slate-500 text-sm md:text-xl lg:text-2xl font-bold max-w-3xl mx-auto mb-12 leading-tight md:leading-relaxed uppercase tracking-tight">
            Professional training in <span className="text-[#0066FF]">Sports</span>, 
            <span className="text-[#0a1128]"> Creative Arts</span>, and 
            <span className="text-[#d31d24]"> Strategic Thinking</span>. 
            From the field to the chessboard, we build champions.
          </p>

          {/* Breadcrumb Pill (Matches "Masters" image middle nav) */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-4 px-8 py-3.5 bg-white border border-slate-100 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              <Home className="w-4 h-4 text-slate-300" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Home</span>
              <ChevronRight className="w-4 h-4 text-slate-200" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#0a1128]">Multisport Academy</span>
            </div>
          </div>

          {/* Original CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
            <a
              href="/booktrial"
              className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-[#d31d24] hover:bg-[#0a1128] text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 shadow-xl shadow-red-600/20 hover:-translate-y-1 active:scale-95"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/programs"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-[#0a1128] border-2 border-slate-100 hover:border-[#0066FF] hover:text-[#0066FF] px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs md:text-sm transition-all shadow-sm active:scale-95"
            >
              Explore Programs
            </a>
          </div>

     

        </div>
      </div>
    </section>
  );
};

export default EliteWhiteMosaicHero;