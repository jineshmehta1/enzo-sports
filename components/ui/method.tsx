"use client";
import React from "react";
import { 
  ClipboardCheck, 
  BarChart3, 
  DraftingCompass, 
  Zap, 
  Timer, 
  Trophy, 
  TrendingUp,
  ArrowRight,
  ArrowDown
} from "lucide-react";

const methodologySteps = [
  {
    title: "Assessment",
    desc: "Initial baseline testing to identify current physical and mental performance levels.",
    icon: ClipboardCheck,
    color: "#0a1128", 
  },
  {
    title: "Skill Analysis",
    desc: "Deep dive into technical execution, identifying strengths and areas for evolution.",
    icon: BarChart3,
    color: "#0066FF",
  },
  {
    title: "Training Plan",
    desc: "Customized roadmap designed by elite coaches to hit specific development milestones.",
    icon: DraftingCompass,
    color: "#d31d24",
  },
  {
    title: "Practice Sessions",
    desc: "High-intensity, focused repetitions under the guidance of our professional mentors.",
    icon: Zap,
    color: "#0a1128",
  },
  {
    title: "Performance Evaluation",
    desc: "Data-driven reviews and video analysis to measure progress against the baseline.",
    icon: Timer,
    color: "#0066FF",
  },
  {
    title: "Tournament Prep",
    desc: "Tactical simulations and mental conditioning for state and national competitions.",
    icon: Trophy,
    color: "#d31d24",
  },
  {
    title: "Continuous Improvement",
    desc: "Refining the strategy for the next level of elite performance and legacy building.",
    icon: TrendingUp,
    color: "#0a1128",
  },
];

const CoachingMethodology: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Technical Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#0a1128 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 md:w-12 h-[2px] bg-[#d31d24]" />
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-[#0066FF]">
              The Enzo Blueprint
            </span>
            <span className="w-8 md:w-12 h-[2px] bg-[#d31d24]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#0a1128] uppercase italic tracking-tighter leading-none">
            Training <span className="text-[#0066FF] not-italic">Pipeline</span>
          </h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[9px] md:text-[11px] max-w-2xl mx-auto">
            Our systematic professional ecosystem for transforming potential into mastery.
          </p>
        </div>

        {/* --- Main Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 md:gap-x-12">
          {methodologySteps.map((step, idx) => (
            <div key={idx} className="relative group">
              
              {/* CONNECTORS */}
              {/* Desktop/Tablet Horizontal Arrow */}
              {idx % 3 !== 2 && idx < methodologySteps.length - 1 && (
                <div className="hidden lg:flex absolute -right-8 top-1/2 -translate-y-1/2 z-20">
                   <ArrowRight className="text-slate-100 w-8 h-8 group-hover:text-[#0066FF] group-hover:translate-x-1 transition-all duration-500" />
                </div>
              )}
              {/* Mobile Vertical Arrow */}
              {idx < methodologySteps.length && (
                <div className="flex lg:hidden absolute -bottom-10 left-1/2 -translate-x-1/2 z-20">
                   <ArrowDown className="text-slate-100 w-6 h-6 animate-bounce opacity-50" />
                </div>
              )}

              {/* Step Card */}
              <div className="h-full bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_30px_70px_-15px_rgba(10,17,40,0.1)] hover:-translate-y-2 relative overflow-hidden">
                
                {/* Visual Accent Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 transition-all duration-500 group-hover:h-2" style={{ backgroundColor: step.color }} />

                {/* Step Numbering (Faded Background) */}
                <div className="absolute top-6 right-8 pointer-events-none">
                    <span className="text-5xl md:text-6xl font-black italic opacity-[0.04] text-[#0a1128] group-hover:opacity-[0.08] transition-opacity">
                        0{idx + 1}
                    </span>
                </div>

                {/* Icon Circle */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-xl transition-all duration-700 group-hover:rotate-[360deg]"
                  style={{ backgroundColor: step.color, boxShadow: `0 10px 30px ${step.color}33` }}
                >
                  <step.icon className="text-white w-8 h-8" strokeWidth={2.5} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-[#0a1128] uppercase italic tracking-tighter leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* FINAL RESULT CARD (Stays as 8th slot to keep grid square on Desktop) */}
          <div className="relative">
             <div className="h-full bg-[#0a1128] p-10 rounded-[2.5rem] flex flex-col justify-center items-center text-center shadow-2xl relative overflow-hidden group border-4 border-transparent hover:border-[#d31d24] transition-all duration-500">
                {/* Pulsing Light Glow */}
                <div className="absolute inset-0 bg-[#0066FF]/5 animate-pulse" />
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#d31d24]/10 blur-3xl rounded-full" />
                
                <div className="relative z-10 space-y-4">
                    <div className="w-20 h-20 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-2 border border-white/10">
                        <Trophy className="w-10 h-10 text-[#0066FF] drop-shadow-[0_0_15px_rgba(0,102,255,0.5)]" />
                    </div>
                    <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter leading-none">
                      Championship <br /> <span className="text-[#0066FF] not-italic">Standard</span>
                    </h3>
                    <div className="h-[2px] w-12 bg-[#d31d24] mx-auto" />
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
                      THE ENZO EVOLUTION
                    </p>
                </div>
             </div>
          </div>
        </div>

        {/* --- Responsive Bottom Label --- */}
        <div className="mt-24 flex flex-col items-center gap-6">
            <div className="h-[1px] w-full max-w-md bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] text-center">
                Strict Adherence to <span className="text-[#0a1128]">Professional Athletic Standards</span>
            </p>
        </div>

      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { display: none; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </section>
  );
};

export default CoachingMethodology;