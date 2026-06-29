"use client";
import React from "react";
import { ArrowRight, Trophy, Star } from "lucide-react";

const AchievementCTA: React.FC = () => {
  // Brand Colors
  const navy = "#0a1128";
  const red = "#d31d24";
  const blue = "#0066FF";

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* --- High-Impact Compact Card --- */}
        <div className="relative overflow-hidden rounded-3xl md:rounded-[2.5rem] bg-[#0a1128] p-8 md:p-12 shadow-2xl">
          
          {/* Subtle Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#d31d24]/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#0066FF]/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
            
            {/* Left: Persuasive Text Block */}
            <div className="text-center lg:text-left space-y-4 max-w-xl">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-2">
                   <Star size={12} className="text-amber-400 fill-amber-400" />
                   <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/80">Become the next story</span>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none">
                Start your <span className="text-[#0066FF] not-italic">Championship Legacy</span>
              </h2>
              
              <p className="text-slate-400 text-sm md:text-base font-bold leading-relaxed">
                Join the academy where discipline meets destiny. Claim your <span className="text-white">Free Performance Assessment</span> and take the first step toward the podium.
              </p>
            </div>

            {/* Right: Conversion Button */}
            <div className="shrink-0 w-full lg:w-auto">
              <div className="flex flex-col items-center gap-4">
                <a 
                  href="/book-trial"
                  className="group w-full lg:w-auto flex items-center justify-center gap-4 bg-[#d31d24] hover:bg-[#0066FF] text-white px-10 py-6 rounded-2xl transition-all duration-500 shadow-xl shadow-red-600/20 hover:shadow-blue-600/30 hover:-translate-y-1 active:scale-95"
                >
                  <div className="text-left">
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-70 leading-none mb-1">Elite Enrollment</p>
                    <p className="text-xl font-black uppercase tracking-tight leading-none">Join The Academy</p>
                  </div>
                  <div className="p-2 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </a>
                
                <div className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex items-center gap-1.5">
                        <Trophy size={14} className="text-white" />
                        <span className="text-[9px] font-black uppercase text-white tracking-widest">State Recognized</span>
                    </div>
                    <div className="w-[1px] h-3 bg-white/20" />
                    <div className="flex items-center gap-1.5">
                        <Star size={14} className="text-white" />
                        <span className="text-[9px] font-black uppercase text-white tracking-widest">Certified Pro Coaches</span>
                    </div>
                </div>
              </div>
            </div>

          </div>

          {/* Large Background Watermark */}
          <div className="absolute -bottom-10 right-10 opacity-[0.03] pointer-events-none select-none hidden lg:block">
            <h3 className="text-[15rem] font-black italic text-white leading-none">ENZO</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementCTA;