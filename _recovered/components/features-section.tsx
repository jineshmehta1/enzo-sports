"use client";
import React from "react";
import { Trophy, Medal, Star, Target, Users, Globe, ArrowUpRight } from "lucide-react";

const stats = [
  { label: "State Medals", value: "150+", icon: Medal, color: "#d31d24" },
  { label: "National Champions", value: "12", icon: Trophy, color: "#0066FF" },
  { label: "Elite Students", value: "2.5K", icon: Users, color: "#0a1128" },
  { label: "Years of Excellence", value: "10+", icon: Globe, color: "#0066FF" },
];

const highlights = [
  {
    year: "2023",
    title: "National Chess Grandmaster Title",
    desc: "Our student Eshan Gupta secured the youngest Grandmaster norm in the regional qualifiers.",
    sport: "Chess",
  },
  {
    year: "2022",
    title: "Inter-State Skating Gold Sweep",
    desc: "The Enzo Speedsters team won 8 out of 10 gold medals at the National Speed Skating Championship.",
    sport: "Skating",
  },
  {
    year: "2022",
    title: "AFC Grassroots Recognition",
    desc: "Our Soccer program was officially recognized by the AFC for excellence in youth development.",
    sport: "Soccer",
  },
];

const AchievementSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-[#d31d24]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0066FF]">
                The Enzo Hall of Fame
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-[#0a1128] uppercase italic tracking-tighter leading-[0.9]">
              Chasing <span className="text-[#0066FF] not-italic">Excellence</span>,<br /> 
              Defining <span className="relative">Legacy<span className="absolute bottom-2 left-0 w-full h-3 bg-[#d31d24]/10 -z-10" /></span>
            </h2>
          </div>
          <p className="text-slate-500 font-bold max-w-sm text-right lg:text-left border-l-4 lg:border-l-0 lg:border-r-4 border-[#0066FF] px-6 py-2">
            Our records aren't just numbers—they are the result of thousands of hours of elite discipline.
          </p>
        </div>

        {/* --- Stats Counter Grid --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-24">
          {stats.map((stat, i) => (
            <div key={i} className="group relative p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <stat.icon size={48} />
              </div>
              <p className="text-5xl md:text-6xl font-black text-[#0a1128] mb-2 tracking-tighter group-hover:text-[#0066FF] transition-colors">
                {stat.value}
              </p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                {stat.label}
              </p>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#d31d24] group-hover:w-1/2 transition-all rounded-full" />
            </div>
          ))}
        </div>

        {/* --- Major Wins: Timeline Style --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {highlights.map((win, i) => (
            <div key={i} className="group relative bg-[#0a1128] rounded-[2rem] p-10 text-white overflow-hidden shadow-xl">
              {/* Decorative background element */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-[#d31d24]/20 transition-all" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex justify-between items-start">
                  <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-[10px] font-black tracking-widest uppercase text-[#0066FF]">
                    {win.sport}
                  </span>
                  <span className="text-4xl font-black italic opacity-20 text-white">{win.year}</span>
                </div>
                
                <h3 className="text-2xl font-black uppercase tracking-tight leading-tight">
                  {win.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  {win.desc}
                </p>

                <div className="pt-4">
                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0066FF] group-hover:text-white transition-colors">
                    Read the Story <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Certification Badge Area --- */}
        <div className="mt-20 pt-12 border-t border-slate-100 flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="flex items-center gap-2">
                <Star className="text-amber-500 fill-amber-500" size={16} />
                <span className="text-xs font-black uppercase tracking-widest text-[#0a1128]">Affiliated Academy</span>
            </div>
            <div className="flex items-center gap-2">
                <Star className="text-amber-500 fill-amber-500" size={16} />
                <span className="text-xs font-black uppercase tracking-widest text-[#0a1128]">ISO Certified Training</span>
            </div>
            <div className="flex items-center gap-2">
                <Star className="text-amber-500 fill-amber-500" size={16} />
                <span className="text-xs font-black uppercase tracking-widest text-[#0a1128]">National Sports Partner</span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default AchievementSection;