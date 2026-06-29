"use client";
import React from "react";
import { 
  ArrowRight, 
  Instagram, 
  Linkedin, 
  CheckCircle2, 
  ShieldCheck,
  Zap,
  Star
} from "lucide-react";

const leadership = [
  {
    name: "Angel M",
    role: "CO DIRECTOR",
    specialty: "Academy Operations & Planning",
    image: "/angel.jpeg", 
    experience: "12+ Years",
    accent: "#0066FF"
  },
  {
    name: "Arjun V",
    role: "HEAD COACH",
    specialty: "Advanced Athletic Performance",
    image: "/arjun.jpeg", 
    experience: "10+ Years",
    accent: "#0a1128"
  },
  {
    name: "Athish Naren Raj S",
    role: "COACH",
    specialty: "Technical Skill Mastery",
    image: "/athish.jpeg", 
    experience: "8+ Years",
    accent: "#d31d24"
  }
];

const MeetOurCoaches: React.FC = () => {
  const navy = "#0a1128";
  const red = "#d31d24";
  const blue = "#0066FF";

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-20 gap-8">
          <div className="max-w-3xl space-y-4 md:space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 md:w-12 h-[3px] bg-[#d31d24]" />
              <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-[#0066FF]">
                Executive Leadership
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-[#0a1128] uppercase italic tracking-tighter leading-[0.9]">
              Meet The <span className="text-[#d31d24] not-italic">Elite Team</span>
            </h2>
            <p className="text-slate-500 font-medium text-sm md:text-lg max-w-2xl leading-relaxed">
               Expert mentors dedicated to transforming potential into professional performance.
            </p>
          </div>
          <div className="shrink-0">
            <a href="/programs" className="inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-[#0a1128] text-white rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-[11px] transition-all hover:bg-[#d31d24] shadow-xl active:scale-95">
              Explore Programs <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* --- 1. DIRECTOR SPOTLIGHT: PRASHANTH M --- */}
        <div className="mb-20 md:mb-32 bg-slate-50 rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-16 border border-slate-100 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0a1128] -skew-x-12 translate-x-32 hidden lg:block opacity-5 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
            {/* Image Side */}
            <div className="w-full lg:w-5/12 relative">
               <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden border-4 md:border-8 border-white shadow-2xl">
                  <img 
                    src="/prashant.jpeg" 
                    alt="Prashanth M" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-transparent to-transparent opacity-60" />
               </div>
               
               {/* SKEWED RED BADGE (Matches ID Card Aesthetic) */}
               <div className="absolute -bottom-4 -right-2 md:-bottom-8 md:-right-8 bg-[#d31d24] text-white py-4 px-8 md:py-6 md:px-10 shadow-2xl rounded-2xl -rotate-2 group-hover:rotate-0 transition-transform duration-500">
                  <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] opacity-80">Founder & Head</p>
                  <p className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter">DIRECTOR</p>
               </div>
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-7/12 space-y-6 md:space-y-10">
              <div className="space-y-2">
                <h3 className="text-4xl md:text-6xl font-black text-[#0a1128] uppercase italic tracking-tighter">
                  Prashanth M
                </h3>
                <p className="text-[#0066FF] font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                  Enzo Elite Sports Director
                </p>
              </div>

              <p className="text-lg md:text-2xl text-slate-600 font-bold italic border-l-4 border-[#d31d24] pl-5 md:pl-8 leading-relaxed">
                "Excellence isn't an act, it's a habit. We build the grandmasters of both sport and life."
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4">
                {[
                  { icon: ShieldCheck, label: "Experience", val: "15+ Years" },
                  { icon: Zap, label: "Role", val: "Organiser" },
                  { icon: Star, label: "Focus", val: "Strategy" }
                ].map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <stat.icon className="text-[#d31d24] w-4 h-4 md:w-5 md:h-5 mb-2" />
                    <p className="text-[9px] md:text-[10px] font-black uppercase text-slate-400 tracking-widest">{stat.label}</p>
                    <p className="text-base md:text-xl font-black text-[#0a1128] italic">{stat.val}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- 2. COACHES ROSTER GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {leadership.map((coach, idx) => (
            <div key={idx} className="group flex flex-col">
              {/* Profile Card */}
              <div className="relative w-full aspect-[4/5] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-slate-50 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-3">
                <img 
                  src={coach.image} 
                  alt={coach.name}
                  className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-transparent to-transparent opacity-80" />
                
                {/* ID-Card Style Badge Overlay */}
                <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-8 md:right-8 text-white space-y-1">
                   <div className="flex items-center gap-2 mb-3">
                      <span className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-lg text-[8px] md:text-[9px] font-black uppercase tracking-widest">
                        {coach.experience} Experience
                      </span>
                   </div>
                   <h4 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter leading-none">{coach.name}</h4>
                   
                   {/* Role Badge (The Red Slashes /// Style from ID card) */}
                   <div className="flex items-center gap-3 pt-3">
                      <div className="flex gap-1 text-[#d31d24] font-bold text-sm">///</div>
                      <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] text-white">
                        {coach.role}
                      </p>
                      <div className="flex gap-1 text-[#d31d24] font-bold text-sm">///</div>
                   </div>
                </div>

                {/* Social Floating Bar */}
                <div className="absolute top-6 right-[-50px] group-hover:right-6 transition-all duration-500 flex flex-col gap-2">
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0a1128] hover:bg-[#d31d24] hover:text-white transition-all shadow-xl">
                    <Instagram size={18} />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0a1128] hover:bg-[#0066FF] hover:text-white transition-all shadow-xl">
                    <Linkedin size={18} />
                  </button>
                </div>
              </div>

              {/* Bottom Details Section */}
              <div className="mt-6 md:mt-8 px-2 space-y-3">
                 <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#0066FF] shrink-0 mt-0.5" />
                    <p className="text-[10px] md:text-[11px] font-black text-[#0a1128] uppercase tracking-widest leading-tight">
                        {coach.specialty}
                    </p>
                 </div>
                 <button className="w-full py-4 rounded-2xl bg-slate-50 border border-slate-100 text-[#0a1128] text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all hover:bg-[#0a1128] hover:text-white active:scale-95">
                    View Full Profile
                 </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- Footer Credentials Row --- */}
        <div className="mt-20 md:mt-32 pt-12 border-t border-slate-100 flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
            <span className="text-xl md:text-3xl font-black italic tracking-tighter text-[#0a1128]">BANGALORE SCHOOL GAMES</span>
            <span className="text-xl md:text-3xl font-black italic tracking-tighter text-[#0a1128]">ENZO ELITE SPORTS</span>
            <span className="text-xl md:text-3xl font-black italic tracking-tighter text-[#0a1128]">EST. 2024</span>
        </div>

      </div>
    </section>
  );
};

export default MeetOurCoaches;