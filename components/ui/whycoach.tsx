"use client";
import React from "react";
import { 
  Award, 
  UserCheck, 
  Cpu, 
  Trophy, 
  Activity, 
  Dumbbell, 
  HeartHandshake, 
  Target,
  ChevronRight
} from "lucide-react";

const coachFeatures = [
  {
    title: "Experienced Professionals",
    desc: "Mentorship from former national athletes and certified industry veterans.",
    icon: Award,
    color: "#d31d24", // Enzo Red
  },
  {
    title: "Individual Attention",
    desc: "Small batch sizes to ensure every athlete receives personalized technical feedback.",
    icon: UserCheck,
    color: "#0066FF", // Electric Blue
  },
  {
    title: "Modern Methods",
    desc: "Scientific training modules utilizing the latest global athletic standards.",
    icon: Cpu,
    color: "#0a1128", // Navy
  },
  {
    title: "Tournament Preparation",
    desc: "Tactical and mental conditioning specifically for high-stakes competitions.",
    icon: Trophy,
    color: "#d31d24",
  },
  {
    title: "Skill Tracking",
    desc: "Detailed monthly performance analytics to visualize student evolution.",
    icon: Activity,
    color: "#0066FF",
  },
  {
    title: "Fitness Guidance",
    desc: "Comprehensive conditioning focusing on agility, core strength, and stamina.",
    icon: Dumbbell,
    color: "#0a1128",
  },
  {
    title: "Positive Environment",
    desc: "A growth-centric culture that fosters confidence and true sportsmanship.",
    icon: HeartHandshake,
    color: "#d31d24",
  },
  {
    title: "Goal-Oriented Training",
    desc: "Clear development roadmaps from beginner levels to elite mastery.",
    icon: Target,
    color: "#0066FF",
  },
];

const WhyOurCoaches: React.FC = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* --- Responsive Header Section --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-20 gap-8">
          <div className="max-w-2xl space-y-4 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="w-8 md:w-12 h-[3px] bg-[#d31d24]" />
              <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-[#0066FF]">
                The Enzo Advantage
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-black text-[#0a1128] uppercase italic tracking-tighter leading-[1] md:leading-none">
              Why Train With <br className="hidden sm:block" />
              <span className="text-[#0066FF] not-italic">Our Coaches?</span>
            </h2>
          </div>
          
          <div className="lg:max-w-xs text-center lg:text-right">
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[9px] md:text-[10px] leading-relaxed border-y lg:border-y-0 lg:border-r-4 border-[#d31d24] py-4 lg:py-2 lg:pr-6">
              Professional excellence is not a choice, it is our foundational requirement for building champions.
            </p>
          </div>
        </div>

        {/* --- High-Class Grid Layout --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {coachFeatures.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(10,17,40,0.1)] hover:-translate-y-2 overflow-hidden"
            >
              {/* Interactive Background Glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none" 
                style={{ backgroundColor: item.color }}
              />

              {/* Icon Container with Adaptive Sizing */}
              <div className="relative z-10 mb-6 md:mb-8">
                 <div 
                   className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg transition-all duration-700 group-hover:rotate-[360deg] group-hover:scale-110"
                   style={{ backgroundColor: item.color }}
                 >
                    <item.icon className="text-white w-6 h-6 md:w-7 md:h-7" />
                 </div>
              </div>

              {/* Responsive Text Content */}
              <div className="relative z-10 space-y-2 md:space-y-3">
                <h3 className="text-lg md:text-xl font-black text-[#0a1128] uppercase italic tracking-tight leading-tight group-hover:text-[#0066FF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Decorative Animated Bottom Strip */}
              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-slate-50 flex items-center justify-between">
                <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-slate-300 group-hover:text-[#0066FF] transition-colors">
                  Academy Standard
                </span>
                <div className="p-1 rounded-full bg-slate-50 text-slate-300 group-hover:text-[#d31d24] group-hover:bg-red-50 transition-all duration-300 transform group-hover:translate-x-1">
                   <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Responsive Trust Bar --- */}
        <div className="mt-16 md:mt-24">
            <div className="flex flex-wrap justify-center items-center gap-y-4 gap-x-6 md:gap-x-12 lg:gap-x-16 py-8 border-t border-slate-200">
               {[
                 "Proven Methodology", 
                 "Certified Mentors", 
                 "Result Oriented"
               ].map((text, i) => (
                 <React.Fragment key={i}>
                   <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-[#0a1128] opacity-60 hover:opacity-100 transition-opacity">
                     {text}
                   </p>
                   {i < 2 && (
                     <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#d31d24] opacity-30" />
                   )}
                 </React.Fragment>
               ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOurCoaches;