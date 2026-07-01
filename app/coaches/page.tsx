"use client";
import React from "react";
import Link from "next/link";
import { 
  Trophy, 
  ChevronRight,
  ArrowRight,
  Zap,
  Crown,
  Target,
  Award
} from "lucide-react";

// Sub-components
import CoachesBanner from "@/components/ui/coachBanner";
import MeetOurCoaches from "@/components/ui/coaches";
import CoachingMethodology from "@/components/ui/method";
import WhyOurCoaches from "@/components/ui/whycoach";

export default function CoachesPage() {
  // Brand Colors
  const navy = "#0a1128";
  const red = "#d31d24";
  const blue = "#0066FF";

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      
      {/* SECTION 1: HERO BANNER */}
      <CoachesBanner />

      {/* SECTION 2: LEADERSHIP & ROSTER */}
      {/* This component handles Prashanth M and the 3-column coach grid */}
      <MeetOurCoaches />

      {/* SECTION 3: THE PROCESS */}
      <CoachingMethodology />

      {/* SECTION 4: THE ADVANTAGE GRID */}
      <WhyOurCoaches />

      {/* SECTION 5: THE ENZO EDGE (Dark High-Impact Section) */}
      <section className="py-20 md:py-32 bg-[#0a1128] relative overflow-hidden">
        {/* Background Decorative Trophy */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full opacity-[0.03] pointer-events-none hidden lg:block">
          <Trophy size={600} className="text-white -rotate-12 translate-x-20" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
            <div className="max-w-2xl space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="w-10 h-[2px] bg-[#d31d24]" />
                <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-[#0066FF]">
                  Performance Standards
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-5xl font-black text-white uppercase italic tracking-tighter leading-none">
                The Enzo <span className="text-[#0066FF] not-italic">Edge.</span>
              </h2>
            </div>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-[9px] md:text-xs max-w-xs leading-relaxed border-l-0 lg:border-l-4 border-[#d31d24] lg:pl-8">
              We combine professional pedigree with scientific training to create the elite athlete of tomorrow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {[
              {
                icon: Crown,
                title: "Master-Level Expertise",
                desc: "Certified professionals with national and international competitive backgrounds.",
                accent: "#d31d24"
              },
              {
                icon: Zap,
                title: "Tactical Evolution",
                desc: "Data-driven curriculum tailored to individual growth and mental resilience.",
                accent: "#0066FF"
              },
              {
                icon: Target,
                title: "Global Exposure",
                desc: "Direct pathways to official state, national, and school-level championships.",
                accent: "#d31d24"
              }
            ].map((feature, i) => (
              <div key={i} className="space-y-6 group">
                <div 
                  className="w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center mx-auto lg:mx-0 transition-all duration-500 group-hover:scale-110 shadow-2xl group-hover:rotate-6"
                  style={{ backgroundColor: feature.accent }}
                >
                  <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tight">{feature.title}</h3>
                <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed max-w-sm mx-auto lg:mx-0">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FINAL CONVERSION CTA */}
      <section className="py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-[2.5rem] md:rounded-[4rem] bg-slate-50 p-8 md:p-20 overflow-hidden text-center border border-slate-100 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)]">
             {/* Decorative Accents */}
             <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#d31d24]/5 rounded-full blur-3xl" />
             <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#0066FF]/5 rounded-full blur-3xl" />
             
             <div className="relative z-10 space-y-10">
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-100 shadow-sm">
                        <Award size={14} className="text-[#0066FF]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0a1128]">Enrollment Open 2024</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-[#0a1128] uppercase italic tracking-tighter leading-[0.9]">
                      Ready to <span className="text-[#0066FF] not-italic">Level Up?</span>
                    </h2>
                    <p className="text-base md:text-xl text-slate-500 font-bold max-w-2xl mx-auto leading-relaxed">
                      Book a complimentary trial session with our elite coaches and experience our professional teaching methods first-hand.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                   <Link href="/booktrial" className="px-10 md:px-12 py-5 bg-[#d31d24] text-white rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all hover:bg-[#0a1128] hover:-translate-y-1 shadow-2xl shadow-red-600/20 active:scale-95 flex items-center justify-center gap-3">
                      Book Assessment <ArrowRight size={16} />
                   </Link>
                   <Link href="/gallery" className="px-10 md:px-12 py-5 bg-white border-2 border-slate-200 text-[#0a1128] rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all hover:border-[#0066FF] hover:text-[#0066FF] active:scale-95">
                      View Victories
                   </Link>
                </div>

                <div className="pt-8 border-t border-slate-200/60 max-w-xs mx-auto">
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-300">
                        Join the ranks of <span className="text-[#0a1128]">2,500+</span> Elite Athletes
                    </p>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}