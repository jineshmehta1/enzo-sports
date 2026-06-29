"use client";
import React from "react";
import { ArrowRight, Trophy } from "lucide-react";

const CompactCTA: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* --- Slim High-Impact Card --- */}
        <div className="relative overflow-hidden rounded-[2rem] bg-[#0a1128] p-8 md:p-12 shadow-2xl">
          
          {/* Subtle Background Glows */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#d31d24]/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#0066FF]/20 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Left: Punchy Text */}
            <div className="text-center lg:text-left space-y-3">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-[#0066FF]">
                <Trophy className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Ready to lead?</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none">
                Start your <span className="text-[#0066FF] not-italic">Elite Journey</span>
              </h2>
              <p className="text-slate-400 text-sm md:text-base font-bold">
                Claim your <span className="text-white">Free Performance Assessment</span> and join the ranks of champions.
              </p>
            </div>

            {/* Right: The High-Conversion Button */}
            <div className="shrink-0 w-full lg:w-auto">
              <a 
                href="/book-trial"
                className="group flex items-center justify-center gap-4 bg-[#d31d24] hover:bg-[#0066FF] text-white px-10 py-5 rounded-2xl transition-all duration-300 shadow-xl shadow-red-600/20 hover:shadow-blue-600/30 hover:-translate-y-1"
              >
                <div className="text-left">
                  <p className="text-[9px] font-black uppercase tracking-widest opacity-70 leading-none mb-1">Limited spots</p>
                  <p className="text-lg font-black uppercase tracking-tight leading-none">Join the Academy</p>
                </div>
                <div className="p-2 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </a>
              <p className="mt-3 text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] text-center">
                Valid for all 10+ sports programs
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CompactCTA;