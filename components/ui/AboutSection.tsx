"use client";
import React from 'react';
import { Trophy, Target, ShieldCheck, ArrowRight } from 'lucide-react';

const AboutSection: React.FC = () => {
  // Brand Colors based on the ID Card
  const navy = "#0a1128";
  const red = "#d31d24";

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* --- Left Column: Dynamic Image Composition --- */}
          {/* Reduced height on mobile to keep the fold balanced */}
          <div className="w-full lg:w-1/2 relative order-1">
            <div className="relative w-full max-w-[550px] mx-auto lg:mx-0 h-[380px] sm:h-[480px] md:h-[550px]">
              
              {/* Decorative Red Swoosh Background */}
              <div 
                className="absolute -top-5 -left-5 w-48 h-48 sm:w-64 sm:h-64 opacity-10 rounded-full blur-3xl pointer-events-none"
                style={{ backgroundColor: red }}
              />

              {/* Image 1: Main Action (Athletic Focus) */}
              <div className="absolute top-0 left-0 w-[75%] sm:w-[80%] h-[60%] sm:h-[65%] z-10 p-1 bg-white shadow-2xl rounded-tr-[60px] sm:rounded-tr-[100px] rounded-bl-[30px] sm:rounded-bl-[40px] rounded-tl-[15px] rounded-br-[15px]">
                <img 
                  src="/a20.jpeg" 
                  alt="Elite Sports Training"
                  className="w-full h-full object-cover rounded-tr-[55px] sm:rounded-tr-[90px] rounded-bl-[25px] sm:rounded-bl-[35px] rounded-tl-[12px] rounded-br-[12px]"
                />
              </div>

              {/* Image 2: Detailed Mastery (Chess/Mental Focus) */}
              <div className="absolute bottom-0 right-0 w-[60%] sm:w-[65%] h-[50%] sm:h-[55%] z-20">
                <div className="w-full h-full p-2 sm:p-3 bg-white rounded-tl-[60px] sm:rounded-tl-[100px] rounded-br-[30px] sm:rounded-br-[40px] rounded-tr-[15px] rounded-bl-[15px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-b-4 sm:border-b-8 border-r-4 sm:border-r-8" style={{ borderColor: navy }}>
                  <img 
                    src="/28.jpeg" 
                    alt="Strategic Thinking"
                    className="w-full h-full object-cover rounded-tl-[55px] sm:rounded-tl-[90px] rounded-br-[25px] sm:rounded-br-[35px] rounded-tr-[12px] rounded-bl-[12px]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* --- Right Column: Text Content --- */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 order-2">
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 md:w-10 h-[2px]" style={{ backgroundColor: red }} />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em]" style={{ color: red }}>
                  All Sports. One Passion.
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-[1] md:leading-[0.95]" style={{ color: navy }}>
                Building The <br />
                <span className="relative inline-block text-white px-3 sm:px-4 py-1 mt-2">
                  <span className="absolute inset-0 skew-x-[-12deg]" style={{ backgroundColor: navy }}></span>
                  <span className="relative z-10">Elite Legacy</span>
                </span>
              </h2>
            </div>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
              Enzo Elite Sports is more than an academy—it’s a premier destination for holistic athletic and strategic evolution. We bridge the gap between raw talent and professional mastery through a scientifically backed curriculum designed for the modern champion.
            </p>

            {/* Core Values List - Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: ShieldCheck, title: "Pro Coaching", text: "Expert-led sessions" },
                { icon: Target, title: "Multi-Sport", text: "Physical & Mental" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50 group hover:border-red-100 transition-colors shadow-sm">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" style={{ color: red }} />
                  <div>
                    <h4 className="font-black uppercase text-[11px] sm:text-xs tracking-wider" style={{ color: navy }}>{item.title}</h4>
                    <p className="text-[9px] sm:text-[10px] text-slate-500 font-bold uppercase">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Profile Section - Responsive Flex */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 md:gap-6 pt-6 md:pt-8 border-t border-slate-100">
              <div className="relative shrink-0">
                <img 
                  src="/director_prashanth.jpg" // Update with actual image path
                  alt="Prashanth M - Director"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover shadow-xl grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: red }}>
                  <ArrowRight size={14} className="sm:size-4" />
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                   <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight" style={{ color: navy }}>Prashanth M</h4>
                   <span className="px-2 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-[10px] font-black text-white rounded-md italic" style={{ backgroundColor: red }}>DIRECTOR</span>
                </div>
                <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-[0.15em] sm:tracking-[0.2em] leading-tight">
                  Enzo Elite Sports Director & <br className="sm:hidden" /> Games Organiser
                </p>
                <div className="flex gap-4 mt-2">
                    <div className="text-[9px] sm:text-[10px] font-bold text-slate-500">IND • BLR</div>
                    <div className="text-[9px] sm:text-[10px] font-bold text-slate-500">EST. 2024</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;