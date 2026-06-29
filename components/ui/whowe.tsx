"use client";
import React from "react";
import { ArrowRight, Trophy, Target, ShieldCheck } from "lucide-react";

const WhoWeAre: React.FC = () => {
  // Brand Colors
  const navy = "#0a1128";
  const red = "#d31d24";
  const blue = "#0066FF";

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16 xl:gap-24">
          
          {/* --- Left Column: High-Impact Imagery --- */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative max-w-md mx-auto lg:mx-0">
              
              {/* The "Elite Arch" Image (Inspired by GoTo UI) */}
              <div className="relative aspect-[4/5] rounded-t-[12rem] rounded-b-2xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(10,17,40,0.3)] border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=800&auto=format&fit=crop" 
                  alt="Enzo Elite Training"
                  className="w-full h-full object-cover"
                />
                {/* Gradient for text readability on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/60 via-transparent to-transparent" />
              </div>

              {/* Dynamic Brand Accent (Floating Red Bar) */}
              <div className="absolute -bottom-6 -right-10 w-[80%] h-20 bg-[#d31d24] flex items-center px-10 shadow-2xl rounded-2xl -rotate-2">
                <span className="text-white font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
                  Est. 2024 • Built For Excellence
                </span>
              </div>

              {/* Decorative Navy Blob */}
              <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-[#0a1128]/5 rounded-full blur-3xl" />
            </div>
          </div>

          {/* --- Right Column: Persuasive Content --- */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="space-y-6">
              {/* Breadcrumb Label */}
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-12 bg-[#d31d24]" />
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#0066FF]">
                  The Enzo Ecosystem
                </span>
              </div>
              
              {/* Main Headline */}
              <h2 className="text-3xl md:text-5xl font-black text-[#0a1128] leading-[0.9] uppercase italic tracking-tighter">
                More Than An <br />
                <span className="text-[#0066FF] not-italic">Academy.</span>
              </h2>

              {/* Core Description */}
              <p className="text-xl text-slate-600 font-bold leading-relaxed border-l-4 border-[#d31d24] pl-6">
                Enzo Elite Sports is a community committed to nurturing talent across multiple sports disciplines. We bridge the gap between discovery and professional mastery.
              </p>

              <p className="text-slate-500 font-medium leading-relaxed max-w-xl">
                From beginners discovering their passion to competitive athletes preparing for state and national tournaments, we provide structured coaching programs designed to unlock every athlete's unique potential through discipline, strategy, and grit.
              </p>
            </div>

            {/* Feature Points Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-[#0066FF]/10 flex items-center justify-center text-[#0066FF]">
                    <Target size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#0a1128] uppercase tracking-tight">Structured Coaching</h4>
                    <p className="text-xs text-slate-500 font-medium mt-1">Science-backed training for every skill level.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-[#d31d24]/10 flex items-center justify-center text-[#d31d24]">
                    <Trophy size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#0a1128] uppercase tracking-tight">Tournament Prep</h4>
                    <p className="text-xs text-slate-500 font-medium mt-1">National & State level competition pathways.</p>
                  </div>
               </div>
            </div>

            {/* Call to Action */}
            <div className="pt-4">
              <button className="group flex items-center gap-6 px-10 py-5 bg-[#0a1128] text-white rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all hover:bg-[#d31d24] hover:shadow-2xl hover:shadow-red-600/20 active:scale-95">
                Learn Our Philosophy
                <div className="bg-white/10 p-1.5 rounded-full group-hover:bg-white/20 transition-colors">
                  <ArrowRight size={16} />
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;