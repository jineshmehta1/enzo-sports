"use client";
import React from "react";
import { 
  Waves, 
  Bike, 
  CircleDot, 
  Dribbble, 
  Trophy, 
  Gamepad2, 
  Music, 
  Zap, 
  Palette, 
  Leaf, 
  ArrowRight 
} from "lucide-react";

const programs = [
  { name: "Swimming", id: "swimming", icon: Waves, color: "#0066FF", image: "/swim.webp" },
  { name: "Skating", id: "skating", icon: Bike, color: "#0066FF", image: "/70.jpeg" },
  { name: "Football", id: "football", icon: CircleDot, color: "#4ADE80", image: "/football.avif" },
  { name: "Basketball", id: "basketball", icon: Dribbble, color: "#FB923C", image: "/basket.avif" },
  { name: "Cricket", id: "cricket", icon: Trophy, color: "#EF4444", image: "/cric.webp" },
  { name: "Chess", id: "chess", icon: Gamepad2, color: "#8B5CF6", image: "/chess.jpg" },
  { name: "Music", id: "music", icon: Music, color: "#EC4899", image: "/music.jpg" },
  { name: "Dance", id: "dance", icon: Zap, color: "#F43F5E", image: "/dance.jpg" },
  { name: "Art & Craft", id: "art-and-craft", icon: Palette, color: "#FACC15", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=500&auto=format&fit=crop" },
  { name: "Yoga", id: "yoga", icon: Leaf, color: "#10B981", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=500&auto=format&fit=crop" },
];

const ProgramsOfferings: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-white w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* --- Responsive Header Section --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
          <div className="space-y-2 md:space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 md:w-12 h-[2px] bg-[#d31d24]" />
              <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] text-[#0066FF]">
                The Enzo Catalog
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0a1128] uppercase italic tracking-tighter leading-none">
              Explore Our <span className="text-[#0066FF] not-italic">Offerings</span>
            </h2>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-[8px] md:text-[10px]">
              Elite Training Programs for the Next Generation of Champions
            </p>
          </div>
          
          <a 
            href="/all-sports" 
            className="group inline-flex items-center gap-2 text-[10px] md:text-[12px] font-black uppercase tracking-widest text-[#0a1128] hover:text-[#d31d24] transition-all"
          >
            See All Programs 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* --- High-Class Grid Layout --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {programs.map((sport) => (
            <a 
              key={sport.id}
              href={`/sports/${sport.id}`}
              className="group flex flex-col items-center w-full"
            >
              {/* Image Card Container */}
              <div className="relative w-full aspect-[4/5] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-md transition-all duration-500 bg-slate-100 group-hover:shadow-[0_20px_50px_rgba(10,17,40,0.15)] group-hover:-translate-y-2 border border-slate-50">
                
                {/* Visual Depth Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/60 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Image Component */}
                <img 
                  src={sport.image} 
                  alt={sport.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Performance Glow (Hover State) */}
                <div 
                  className="absolute inset-0 border-2 md:border-[3px] rounded-[1.5rem] md:rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 pointer-events-none"
                  style={{ borderColor: sport.color, boxShadow: `inset 0 0 30px ${sport.color}22` }}
                />
              </div>

              {/* Responsive Label & Icon Area */}
              <div className="mt-4 md:mt-6 flex flex-col items-center gap-2 md:gap-3 text-center">
                <div 
                  className="w-9 h-9 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-[360deg] shadow-sm"
                  style={{ backgroundColor: `${sport.color}15` }}
                >
                  <sport.icon 
                    className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:scale-110" 
                    style={{ color: sport.color }} 
                  />
                </div>
                
                <h3 className="text-sm sm:text-base md:text-xl font-black uppercase tracking-tighter text-[#0a1128] group-hover:text-[#0066FF] transition-colors leading-none">
                  {sport.name}
                </h3>
                
                {/* Subtle Hover Indicator */}
                <div 
                  className="h-[2px] w-0 group-hover:w-8 transition-all duration-300 rounded-full"
                  style={{ backgroundColor: sport.color }}
                />
              </div>
            </a>
          ))}
        </div>

        {/* --- Mobile Only: Decorative Accent --- */}
        <div className="mt-16 flex justify-center md:hidden">
            <div className="w-12 h-1 bg-slate-100 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default ProgramsOfferings;