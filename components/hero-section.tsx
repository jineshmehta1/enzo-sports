"use client";
import React from "react";
import { ArrowRightIcon, Trophy } from "lucide-react";

const Hero: React.FC = () => {
  // Brand Colors
  const electricBlue = "#0066FF";
  const enzoRed = "#d31d24";
  const navyBlue = "#0a1128";

  return (
    <section className="relative w-full h-screen min-h-[650px] md:min-h-[800px] flex items-center justify-center overflow-hidden bg-black">
      {/* --- Background Image --- */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.png" 
          alt="Enzo Elite Sports Programs"
          className="w-full h-full object-cover object-center"
        />
        
        {/* 
            RESPONSIVE OVERLAYS: 
            Heavier dark tint on mobile to ensure text readability 
            over smaller, higher-density screens.
        */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/20 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/80 via-transparent to-[#0a1128]/90 z-10" />
        
        {/* Side vignettes to keep focus on center text */}
        <div className="hidden md:block absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black/60 to-transparent z-10" />
        <div className="hidden md:block absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black/60 to-transparent z-10" />
      </div>

      {/* --- Centered Hero Content --- */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <div className="max-w-[95%] sm:max-w-4xl lg:max-w-5xl mx-auto">
          
          {/* Top Badge - Scales down on mobile */}
          <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 md:mb-8 animate-fade-in shadow-xl">
            <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0066FF]" />
            <span className="text-white text-[9px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em]">
              The Ultimate Multisport Academy
            </span>
          </div>

          {/* Headline - Dynamic sizing from 2.5rem to 9xl */}
          <h1 className="text-[2.5rem] sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-black text-white uppercase italic tracking-tighter leading-[0.9] sm:leading-[0.85] mb-6 md:mb-8 drop-shadow-2xl">
            Unleash Your <br />
            <span className="text-[#0066FF] not-italic drop-shadow-[0_0_30px_rgba(0,102,255,0.3)]">
              Elite Potential
            </span>
          </h1>

          {/* Subtext - Width constrained for readability on all screens */}
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-[280px] sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mb-10 md:mb-14 font-bold leading-snug sm:leading-tight drop-shadow-lg">
            Professional training in <span className="text-[#0066FF]">Sports</span>, 
            <span className="text-[#0066FF]"> Creative Arts</span>, and 
            <span className="text-[#0066FF]"> Strategic Thinking</span>. 
            From the field to the chessboard, we build champions.
          </p>

          {/* Centered CTA Buttons - Stacked on mobile, row on tablet+ */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4 sm:px-0">
            <a
              href="/booktrial"
              className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-[#d31d24] hover:bg-[#0066FF] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-black uppercase tracking-widest text-xs sm:text-sm transition-all duration-300 shadow-xl shadow-red-600/20 hover:shadow-blue-600/40 hover:-translate-y-1 active:scale-95"
            >
              Start Free Trial
              <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/programs"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/10 hover:bg-white text-white hover:text-[#0a1128] border border-white/30 hover:border-white backdrop-blur-md px-8 sm:px-12 py-4 sm:py-5 rounded-full font-black uppercase tracking-widest text-xs sm:text-sm transition-all shadow-xl active:scale-95"
            >
              Explore Programs
            </a>
          </div>

          {/* Bottom Indicator - Hidden on small mobile screens to prevent clutter */}
          <div className="hidden sm:flex absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-60">
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-white">Scroll to Explore</span>
            <div className="w-[2px] h-8 md:h-12 bg-gradient-to-b from-[#0066FF] to-transparent rounded-full" />
          </div>

        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;