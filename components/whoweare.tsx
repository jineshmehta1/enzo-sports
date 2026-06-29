"use client";
import React from "react";
import { ArrowRight, Target, ShieldCheck, Globe, Trophy } from "lucide-react";

const WhoWeAre: React.FC = () => {
  // Brand Colors
  const electricBlue = "#0066FF";
  const enzoRed = "#d31d24";
  const navyBlue = "#0a1128";

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-24">
          
          {/* --- LEFT CONTENT: Strategic Text Block --- */}
          <div className="w-full lg:w-[55%] order-2 lg:order-1 space-y-8 md:space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-[3px] w-12 bg-[#d31d24] rounded-full" />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-[#0066FF]">
                  The Enzo Ecosystem
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black text-[#0a1128] leading-[0.95] tracking-tighter uppercase italic">
                Forging Champions <br /> 
                <span className="text-[#0066FF] not-italic">Through Discipline.</span>
              </h2>
              
              <p className="text-lg md:text-xl text-slate-600 font-bold leading-relaxed max-w-2xl border-l-4 border-[#d31d24] pl-6">
                Enzo Elite Sports provides the professional environment where raw kinetic potential is transformed into world-class mastery.
              </p>
            </div>

            {/* --- Feature Grid: Icon-Led Value Props --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                { 
                  title: "Elite Mentors", 
                  desc: "Guidance from national-level pro athletes.",
                  icon: Target,
                  color: "#d31d24"
                },
                { 
                  title: "Pro-Safety", 
                  desc: "Premium facilities designed for secure growth.",
                  icon: ShieldCheck,
                  color: "#0066FF"
                },
                { 
                  title: "Global Vision", 
                  desc: "Fostering standards that resonate worldwide.",
                  icon: Globe,
                  color: "#0a1128"
                },
                { 
                  title: "Legacy Building", 
                  desc: "Character development beyond the scoreboard.",
                  icon: Trophy,
                  color: "#d31d24"
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center transition-all duration-300 group-hover:bg-[#0a1128] group-hover:text-white group-hover:scale-110 shadow-sm">
                      <item.icon className="w-6 h-6" style={{ color: idx % 2 === 0 ? enzoRed : electricBlue }} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#0a1128] uppercase tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium leading-snug mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* --- Elite CTA --- */}
            <div className="pt-4">
              <button className="group flex items-center gap-6 px-10 py-5 bg-[#0a1128] text-white rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all hover:bg-[#d31d24] hover:shadow-[0_20px_40px_rgba(211,29,36,0.2)] active:scale-95">
                Learn Our Philosophy
                <div className="p-1 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>

          {/* --- RIGHT VISUAL: The "Elite Frame" --- */}
          <div className="w-full lg:w-[45%] order-1 lg:order-2 relative">
            <div className="relative max-w-[420px] mx-auto">
              
              {/* Decorative Back Elements */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#0066FF]/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -z-10 -bottom-12 -right-12 w-72 h-72 bg-[#0a1128]/5 rounded-[4rem] rotate-[15deg] hidden md:block" />

              {/* The Signature Arch Frame */}
              <div className="relative aspect-[4/5] rounded-t-[14rem] rounded-b-[2rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(10,17,40,0.3)] border-[10px] border-white z-10">
                <img 
                  src="/58.jpeg" 
                  alt="Elite Athlete Training"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Gradient for branding depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/70 via-transparent to-transparent opacity-60" />
              </div>

              {/* The Dynamic Status Bar (Responsive Fix) */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[110%] md:w-[125%] z-20">
                <div className="bg-[#0066FF] shadow-2xl rounded-2xl py-5 px-6 flex items-center justify-between overflow-hidden relative group">
                  {/* Internal Polish */}
                  <div className="absolute top-0 right-0 w-32 h-full bg-white/10 skew-x-[30deg] translate-x-10 group-hover:translate-x-0 transition-transform duration-700" />
                  
                  <div className="flex flex-col leading-none">
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/60 mb-1">Established</span>
                    <span className="text-xl font-black italic text-white tracking-tighter">2024</span>
                  </div>

                  <div className="h-10 w-[1px] bg-white/20" />

                  <div className="flex flex-col text-center leading-none">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Built For The Elite</span>
                    <span className="text-[8px] font-bold uppercase tracking-[0.5em] text-white/50 mt-1">Academy Standard</span>
                  </div>

                  <div className="h-10 w-[1px] bg-white/20 hidden sm:block" />

                  <div className="hidden sm:flex flex-col text-right leading-none">
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/60 mb-1">Location</span>
                    <span className="text-sm font-black text-white italic">INDIA</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;