"use client";
import React from "react";
import { 
  ShieldCheck, Trophy, Users, Zap, Dumbbell, 
  BarChart3, Heart, School 
} from "lucide-react";

const differentiators = [
  { 
    title: "Certified Coaches", 
    desc: "Mentorship from national-level pro athletes.",
    icon: ShieldCheck 
  },
  { 
    title: "Pro Training Programs", 
    desc: "Scientifically backed curriculum for all levels.",
    icon: Trophy 
  },
  { 
    title: "Age-wise Batches", 
    desc: "Tailored training based on developmental stages.",
    icon: Users 
  },
  { 
    title: "Tournament Exposure", 
    desc: "Guaranteed entry into state & national leagues.",
    icon: Zap 
  },
  { 
    title: "Fitness Development", 
    desc: "Focus on agility, core strength, and stamina.",
    icon: Dumbbell 
  },
  { 
    title: "Performance Tracking", 
    desc: "Monthly digital reports on student progress.",
    icon: BarChart3 
  },
  { 
    title: "Safe Environment", 
    desc: "Strict safety protocols and medical-first care.",
    icon: Heart 
  },
  { 
    title: "School Partnerships", 
    desc: "Official tie-ups with leading regional schools.",
    icon: School 
  },
];

const WhyChooseEnzo: React.FC = () => {
  // Brand Colors
  const navy = "#0a1128";
  const red = "#d31d24";
  const blue = "#0066FF";

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 xl:gap-20">
          
          {/* --- Left Column: Director Portrait --- */}
          <div className="w-full lg:w-5/12 order-2 lg:order-1">
            <div className="relative h-[450px] sm:h-[550px] lg:h-[650px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] group">
              <img 
                src="/132.jpeg" // Replace with actual path
                alt="Director Prashanth M"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              {/* Sophisticated Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-transparent to-transparent opacity-80" />
              
              {/* Name Tag on Image */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-8 h-[2px] bg-[#d31d24]" />
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0066FF]">Academy Director</span>
                </div>
                <h4 className="text-white text-3xl sm:text-4xl font-black uppercase italic tracking-tighter leading-none">Prashanth M</h4>
                <p className="text-slate-300 text-xs font-bold uppercase tracking-widest mt-2">Enzo Elite Performance Standard</p>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#0066FF]/10 rounded-bl-full backdrop-blur-sm border-b border-l border-white/10" />
            </div>
          </div>

          {/* --- Right Column: Text & Features --- */}
          <div className="w-full lg:w-7/12 order-1 lg:order-2 space-y-12">
            
            {/* Heading Block: Responsive Centering */}
            <div className="space-y-4 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                 <span className="h-[2px] w-12 bg-[#d31d24]" />
                 <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#d31d24]">Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-[#0a1128] uppercase italic tracking-tighter leading-[0.95]">
                The Elite <br className="hidden sm:block" /> 
                <span className="text-[#0066FF] not-italic">Difference.</span>
              </h2>
              <p className="text-slate-500 font-medium max-w-2xl mx-auto lg:mx-0 text-sm md:text-base leading-relaxed">
                Enzo Elite Sports isn't just an academy; it's a professional ecosystem designed to forge champions through discipline, technology, and expert mentorship.
              </p>
            </div>

            {/* Feature Grid: Adaptive columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 md:gap-y-12">
              {differentiators.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row items-center lg:items-start gap-4 md:gap-6 group text-center sm:text-left">
                  
                  {/* Square Boxed Icon with Red Offset Shadow */}
                  <div className="relative shrink-0">
                    <div className="absolute top-1 left-1 w-12 h-12 md:w-14 md:h-14 bg-[#d31d24] rounded-2xl transition-transform group-hover:scale-110" />
                    <div className="relative w-12 h-12 md:w-14 md:h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-[#0a1128] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shadow-sm">
                      <item.icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-1">
                    <h4 className="text-base md:text-lg font-black text-[#0a1128] uppercase tracking-tight leading-tight group-hover:text-[#0066FF] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-400 font-medium leading-relaxed max-w-[200px] sm:max-w-none">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Responsive Social Proof Bar */}
            <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-slate-100 overflow-hidden shadow-sm">
                             <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Student" className="w-full h-full object-cover" />
                        </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-4 border-white bg-[#0066FF] flex items-center justify-center text-[10px] font-black text-white shadow-sm">
                        +2K
                    </div>
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center sm:text-left">
                    Trusted by <span className="text-[#0a1128] border-b-2 border-[#d31d24]">2,500+</span> Elite Athletes Worldwide
                </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseEnzo;