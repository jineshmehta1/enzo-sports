"use client";
import React from "react";
import { Target, Eye, ShieldCheck, Zap } from "lucide-react";

const MissionVision: React.FC = () => {
  // Brand Colors
  const navy = "#0a1128";
  const red = "#d31d24";
  const blue = "#0066FF";

  const coreDNA = ["Discipline", "Strategy", "Performance", "Legacy"];
  const sports = ["SKATING", "CHESS", "SOCCER", "BASKETBALL", "SWIMMING"];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-7xl">
        
        {/* --- Responsive Header Area --- */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-20 gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 md:w-12 h-[3px] bg-[#d31d24]" />
              <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] text-[#0066FF]">
                The Enzo Blueprint
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-[#0a1128] uppercase italic tracking-tighter leading-[0.95]">
              Driven by <span className="text-[#0066FF] not-italic">Purpose,</span> <br />
              Defined by <span className="relative inline-block">
                Results.
                <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-1.5 md:h-3 bg-[#d31d24]/10 -z-10" />
              </span>
            </h2>
          </div>
          <div className="hidden md:block text-right">
             <p className="text-slate-400 font-bold uppercase tracking-widest text-[9px] lg:text-[10px]">
                Established 2024 <br /> Multisport Excellence
             </p>
          </div>
        </div>

        {/* --- High-Class Staggered Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 items-stretch">
          
          {/* 1. MISSION CARD: Fluid Text & Responsive Scaling */}
          <div className="lg:col-span-7 group relative overflow-hidden bg-[#0a1128] rounded-[2rem] md:rounded-[3.5rem] p-8 md:p-12 lg:p-16 text-white transition-all duration-700 hover:shadow-2xl hover:shadow-blue-900/30">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 md:w-80 md:h-80 bg-gradient-to-br from-[#0066FF]/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-1000" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="space-y-6 md:space-y-10">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-[#0066FF] rounded-2xl md:rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/40 transition-transform group-hover:scale-110">
                  <Target className="w-7 h-7 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter">
                  Our Mission
                </h3>
                <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-slate-300 leading-tight md:leading-relaxed font-medium">
                  To democratize <span className="text-white font-black underline decoration-[#d31d24] decoration-2 underline-offset-4 md:underline-offset-8">elite athletic training</span> by providing pro-grade coaching and strategic mentorship to every aspiring champion.
                </p>
              </div>
              
              <div className="pt-10 md:pt-16 flex items-center gap-4 text-[#0066FF] font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">
                 <span className="whitespace-nowrap">Professional Standards</span>
                 <div className="flex-grow h-[1px] bg-white/10" />
              </div>
            </div>
          </div>

          {/* 2. VISION & VALUES COLUMN */}
          <div className="lg:col-span-5 flex flex-col gap-4 md:gap-6">
            
            {/* Vision Sub-card */}
            <div className="flex-1 group bg-slate-50 border border-slate-100 rounded-[2rem] md:rounded-[3rem] p-8 md:p-10 transition-all duration-500 hover:bg-white hover:shadow-xl hover:border-blue-100">
                <div className="flex justify-between items-start mb-6 md:mb-8">
                   <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-[#d31d24] group-hover:bg-[#d31d24] group-hover:text-white transition-all duration-300">
                      <Eye className="w-6 h-6" />
                   </div>
                   <span className="text-[9px] md:text-[10px] font-black text-slate-300 uppercase tracking-widest">Global Reach</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-[#0a1128] uppercase italic mb-4">The Vision</h3>
                <p className="text-sm md:text-base text-slate-500 font-bold leading-relaxed">
                  To become the global benchmark for multisport excellence, forging world-class leaders through technical mastery.
                </p>
            </div>

            {/* Values Sub-card */}
            <div className="flex-1 group bg-[#d31d24] rounded-[2rem] md:rounded-[3rem] p-8 md:p-10 text-white transition-all duration-500 hover:shadow-xl hover:shadow-red-600/30">
                <div className="flex justify-between items-start mb-6 md:mb-8">
                   <div className="w-12 h-12 bg-white/10 rounded-xl backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      <ShieldCheck className="w-6 h-6" />
                   </div>
                   <Zap className="w-5 h-5 text-white/40 group-hover:text-white transition-colors animate-pulse" />
                </div>
                <h3 className="text-xl md:text-2xl font-black uppercase italic mb-4">Core DNA</h3>
                <div className="flex flex-wrap gap-2">
                   {coreDNA.map((val) => (
                     <span key={val} className="px-3 py-1.5 md:px-4 md:py-2 bg-black/10 border border-white/10 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-[#d31d24] transition-colors cursor-default">
                       {val}
                     </span>
                   ))}
                </div>
            </div>

          </div>
        </div>

        {/* --- Responsive Bottom Performance Strip --- */}
        {/* On mobile, this becomes a horizontal scrollable strip to avoid crowding */}
        <div className="mt-12 md:mt-20 relative overflow-hidden">
            <div className="flex items-center justify-start lg:justify-center gap-8 md:gap-16 lg:gap-24 overflow-x-auto no-scrollbar py-4 md:py-0 opacity-20 grayscale pointer-events-none whitespace-nowrap">
                {sports.map((sport) => (
                    <span key={sport} className="text-3xl md:text-5xl lg:text-6xl font-black italic tracking-tighter text-[#0a1128] shrink-0">
                        {sport}
                    </span>
                ))}
            </div>
            {/* Visual gradient mask for mobile scroll edges */}
            <div className="md:hidden absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent" />
            <div className="md:hidden absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent" />
        </div>

      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default MissionVision;