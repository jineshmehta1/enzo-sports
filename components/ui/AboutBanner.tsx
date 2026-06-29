"use client";
import React from "react";
import { Users2, Target, ChevronRight, ShieldCheck } from "lucide-react";

const AboutBanner: React.FC = () => {
  // Brand Colors
  const electricBlue = "#0066FF";
  const enzoRed = "#d31d24";
  const navyBlue = "#0a1128";

  return (
    <section className="relative w-full h-[550px] md:h-[750px] lg:h-[800px] flex items-center justify-center overflow-hidden bg-[#0a1128]">
      {/* --- Background Image Container --- */}
      <div className="absolute inset-0 z-0">
        <img
          src="/136.jpeg" 
          alt="About Enzo Elite"
          className="w-full h-full object-cover object-center scale-105 opacity-50 grayscale-[20%]"
        />
        
        {/* --- NAV PROTECTION: Darkens top for Navbar legibility --- */}
        <div className="absolute inset-x-0 top-0 h-32 md:h-48 bg-gradient-to-b from-[#0a1128] via-[#0a1128]/80 to-transparent z-10 opacity-90" />
        
        {/* Main Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/60 via-transparent to-[#0a1128] z-10" />
        
        {/* Subtle Side Vignettes for Desktop focus */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0a1128]/40 to-transparent z-10" />
        <div className="hidden lg:block absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0a1128]/40 to-transparent z-10" />
      </div>

      {/* --- Responsive Content Area --- */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-12 text-center pt-20 md:pt-24 lg:pt-32">
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
          
          {/* Top Badge: Scales and spaces for mobile */}
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-2 animate-fade-in">
            <div className="h-[1px] w-6 md:w-12 bg-[#d31d24]" />
            <span className="text-[9px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-white/80">
              Our Story • Your Legacy • Est. 2024
            </span>
            <div className="h-[1px] w-6 md:w-12 bg-[#d31d24]" />
          </div>

          {/* Fluid Headline: Optimized for mobile wrapping */}
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-black text-white uppercase italic tracking-tighter leading-[0.9] sm:leading-[0.85] drop-shadow-2xl">
            Defining the <br />
            <span className="text-[#0066FF] not-italic inline-block mt-2 md:mt-0">Elite Standard.</span>
          </h1>

          {/* Constrained Description for readability */}
          <p className="text-slate-300 text-xs sm:text-base md:text-lg lg:text-xl font-medium max-w-[280px] sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed opacity-90">
            We are more than a sports academy. Enzo Elite is a professional ecosystem built to 
            transform raw potential into championship-level character and technical mastery.
          </p>

          {/* Action Buttons: Stacked on mobile, side-by-side on tablet+ */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 md:pt-8 px-4 sm:px-0">
            <button className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-[#0066FF] hover:bg-white hover:text-[#0a1128] text-white rounded-full font-black uppercase tracking-widest text-[10px] md:text-[11px] transition-all duration-300 shadow-xl shadow-blue-600/30 flex items-center justify-center gap-3 group active:scale-95">
              <Target className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              Our Mission
            </button>
            <button className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-white/10 hover:bg-white text-white hover:text-[#0a1128] border border-white/20 hover:border-white backdrop-blur-md rounded-full font-black uppercase tracking-widest text-[10px] md:text-[11px] transition-all flex items-center justify-center gap-3 active:scale-95">
              <Users2 className="w-4 h-4 text-[#d31d24]" />
              Meet Coaches
            </button>
          </div>

          {/* Breadcrumb Path: Minimal and clean for mobile */}
          <div className="pt-8 md:pt-12 flex items-center justify-center gap-2 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
             <a href="/" className="hover:text-white transition-colors">Home</a>
             <ChevronRight className="w-3 h-3 text-[#d31d24]" />
             <span className="text-white">Who We Are</span>
          </div>
        </div>
      </div>

      {/* Decorative Brand Accent (Bottom Left) */}
      <div className="absolute left-[-5%] bottom-[-5%] opacity-[0.03] pointer-events-none select-none hidden lg:block">
        <h2 className="text-[18rem] font-black text-white italic leading-none">ABOUT</h2>
      </div>

      {/* Responsive Styles for Animations */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default AboutBanner;