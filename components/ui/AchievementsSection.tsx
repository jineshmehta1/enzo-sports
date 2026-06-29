"use client";
import React from "react";
import { Trophy, Users, Medal, Star, BarChart3, ChevronRight } from "lucide-react";

const stats = [
  { label: "Elite Athletes", value: "1200+", desc: "Professional Skill Development", icon: Users },
  { label: "Gold Medals", value: "450+", desc: "State & National Victories", icon: Medal },
  { label: "Championships", value: "32", desc: "Major Tournament Titles", icon: Trophy },
  { label: "Expert Coaches", value: "25+", desc: "Certified Pro Mentorship", icon: Star },
  { label: "Podium Rate", value: "98%", desc: "Consistent Performance", icon: BarChart3 },
];

const achievements = [
  { 
    name: "Aryan Raj", 
    title: "National Skating Gold", 
    cat: "U-14 Speed Sprint", 
    rank: "1st Place", 
    img: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    name: "Ishani Shah", 
    title: "State Chess Championship", 
    cat: "U-12 Master Category", 
    rank: "1st Place", 
    img: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    name: "Kabir Malhotra", 
    title: "Regional Soccer MVP", 
    cat: "U-16 Elite Division", 
    rank: "Top Scorer", 
    img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    name: "Riya Deshmukh", 
    title: "District Swimming Meet", 
    cat: "U-10 Butterfly", 
    rank: "1st Place", 
    img: "https://images.unsplash.com/photo-1530549387633-f71f9911bc01?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    name: "Zayan Khan", 
    title: "Basketball Junior Cup", 
    cat: "U-12 Junior League", 
    rank: "Best Defender", 
    img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=400&auto=format&fit=crop" 
  },
];

const BalancedAchievements: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* --- Responsive Header --- */}
        <div className="text-center mb-10 md:mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2">
             <div className="h-[1px] w-6 md:w-10 bg-slate-200" />
             <span className="text-[9px] md:text-[11px] font-extrabold uppercase tracking-[0.3em] text-[#d31d24]">Our Performance</span>
             <div className="h-[1px] w-6 md:w-10 bg-slate-200" />
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#0a1128] uppercase italic tracking-tighter leading-tight">
            Chasing Excellence, <br className="sm:hidden" />
            <span className="text-[#0066FF] not-italic">Defining Legacy</span>
          </h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[8px] md:text-[10px] max-w-xl mx-auto px-4">
            Official milestones and recent victories from the Enzo Elite community.
          </p>
        </div>

        {/* --- Responsive Stats Grid --- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 mb-16 md:mb-24">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className={`bg-slate-50 p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl transition-all duration-500 ${i === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
            >
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center mb-3 shadow-sm group-hover:bg-[#d31d24] transition-colors">
                <stat.icon className="w-4 h-4 text-[#d31d24] group-hover:text-white" />
              </div>
              <p className="text-2xl md:text-3xl font-black text-[#0a1128] group-hover:text-[#0066FF] transition-colors">{stat.value}</p>
              <p className="text-[9px] md:text-[10px] font-black text-[#0a1128] uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="hidden md:block text-[9px] font-bold text-slate-400 uppercase leading-none">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* --- Hall of Glory: Swipable Cards --- */}
        <div className="space-y-6 md:space-y-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 md:pb-6">
                <h3 className="text-lg md:text-2xl font-black text-[#0a1128] uppercase italic tracking-tight">Recent Achievements</h3>
                <a href="/achievements" className="flex items-center gap-1 md:gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#d31d24] hover:text-[#0066FF] transition-colors">
                    View All <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                </a>
            </div>

            {/* Horizontal Scroll Container */}
            <div 
              className="flex gap-4 md:gap-6 overflow-x-auto pb-8 no-scrollbar snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0"
            >
                {achievements.map((item, i) => (
                    <div 
                      key={i} 
                      className="flex-shrink-0 w-[240px] md:w-[300px] bg-white rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm group hover:shadow-lg transition-all snap-start"
                    >
                        {/* Image Section */}
                        <div className="relative aspect-square overflow-hidden bg-slate-100">
                            <img 
                                src={item.img} 
                                alt={item.name} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                loading="lazy"
                            />
                            <div className="absolute top-3 left-3 md:top-4 md:left-4 px-2.5 py-1 bg-[#0a1128] text-white text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg">
                                {item.rank}
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="p-5 md:p-6 text-center">
                            <div className="space-y-1 mb-3 md:mb-4">
                                <h4 className="text-[10px] md:text-[11px] font-black text-[#0a1128] uppercase tracking-tight leading-tight min-h-[32px] flex items-center justify-center">
                                    {item.title}
                                </h4>
                                <p className="text-[8px] md:text-[9px] font-black text-[#0066FF] uppercase tracking-[0.1em]">
                                    {item.cat}
                                </p>
                            </div>
                            <div className="pt-3 md:pt-4 border-t border-slate-50">
                                <p className="text-base md:text-lg font-black text-[#d31d24] italic tracking-tighter uppercase leading-none">
                                    {item.name}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>

      {/* Hide Scrollbar Styles */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default BalancedAchievements;