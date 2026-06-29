"use client";
import React from "react";
import { Phone, MapPin, ChevronRight, MessageSquare, Star } from "lucide-react";

const ContactBanner: React.FC = () => {
  // Brand Colors
  const electricBlue = "#0066FF";
  const enzoRed = "#d31d24";
  const navyBlue = "#0a1128";

  return (
    <section className="relative w-full h-[550px] md:h-[750px] lg:h-[800px] flex items-center justify-center overflow-hidden bg-[#0a1128]">
      {/* --- Background Image Container --- */}
      <div className="absolute inset-0 z-0">
        <img
          src="/128.jpeg" 
          alt="Contact Enzo Elite"
          className="w-full h-full object-cover object-center scale-105 opacity-50 grayscale-[20%]"
        />
        
        {/* --- DYNAMIC GRADIENT STACK --- */}
        {/* 1. Top Safety: Protects Navbar readability on all devices */}
        <div className="absolute inset-x-0 top-0 h-32 md:h-48 bg-gradient-to-b from-[#0a1128] via-[#0a1128]/80 to-transparent z-10 opacity-95" />
        
        {/* 2. Brand Mood Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/60 via-transparent to-[#0a1128] z-10" />
        
        {/* 3. Radial Focus for centered typography */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a1128_100%)] opacity-70 z-10" />
      </div>

      {/* --- Responsive Content Area --- */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-12 text-center pt-20 md:pt-24 lg:pt-32">
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
          
          {/* Top Badge: Premium wide tracking */}
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-2 animate-fade-in">
            <div className="h-[1px] w-6 md:w-12 bg-[#d31d24]" />
            <span className="text-[9px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-white/80">
              Admissions • Inquiries • Support
            </span>
            <div className="h-[1px] w-6 md:w-12 bg-[#d31d24]" />
          </div>

          {/* Fluid Headline: Optimized for all breakpoints */}
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-black text-white uppercase italic tracking-tighter leading-[0.9] sm:leading-[0.85] drop-shadow-2xl">
            Connect With <br />
            <span className="text-[#0066FF] not-italic inline-block mt-2 md:mt-0">The Elite.</span>
          </h1>

          {/* Constrained Description for readability */}
          <p className="text-slate-300 text-xs sm:text-base md:text-lg lg:text-xl font-medium max-w-[300px] sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed opacity-90">
            Ready to start your athletic journey? Our coordinators are here to guide you toward your professional performance goals.
          </p>

          {/* Action Buttons: Stacked on mobile, side-by-side on desktop */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 md:pt-8 px-4 sm:px-0">
            <button className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-[#0066FF] hover:bg-white hover:text-[#0a1128] text-white rounded-full font-black uppercase tracking-widest text-[10px] md:text-[11px] transition-all duration-500 shadow-xl shadow-blue-600/30 flex items-center justify-center gap-3 group active:scale-95">
              <Phone className="w-4 h-4 transition-transform group-hover:scale-110" />
              Book a Call
            </button>
            <button className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-white/10 hover:bg-white text-white hover:text-[#0a1128] border border-white/20 hover:border-white backdrop-blur-md rounded-full font-black uppercase tracking-widest text-[10px] md:text-[11px] transition-all flex items-center justify-center gap-3 active:scale-95">
              <MapPin className="w-4 h-4 text-[#d31d24]" />
              Find Academy
            </button>
          </div>

          {/* Breadcrumb Path */}
          <div className="pt-8 md:pt-12 flex items-center justify-center gap-2 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
             <a href="/" className="hover:text-white transition-colors">Home</a>
             <ChevronRight className="w-3 h-3 text-[#d31d24]" />
             <span className="text-white">Contact Us</span>
          </div>
        </div>
      </div>

      {/* --- DECORATIVE ACCENTS --- */}
      {/* 1. Background Watermark (Desktop Only) */}
      <div className="absolute right-[-5%] bottom-[-5%] opacity-[0.03] pointer-events-none select-none hidden lg:block">
        <h2 className="text-[20rem] font-black text-white italic leading-none tracking-tighter">CONNECT</h2>
      </div>

      {/* 2. Response Badge (Bottom Left) */}
      <div className="absolute bottom-10 left-10 hidden xl:flex items-center gap-3 opacity-20 group">
          <MessageSquare className="text-[#0066FF] animate-pulse" size={24} />
          <span className="text-white text-xs font-black uppercase tracking-widest">2-Hour Response Time</span>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0a1128] to-transparent z-10" />

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

export default ContactBanner;