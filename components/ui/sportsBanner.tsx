"use client";
import React, { useState } from "react";
import { 
  Waves, Bike, CircleDot, Dribbble, Trophy, 
  Gamepad2, Music, Zap, Palette, Flower2, 
  ChevronRight, Calendar, Info, ArrowRight, Play, Target, Star
} from "lucide-react";
import BookDemo from "./bookDemo";

// --- DATA CONFIGURATION FOR ALL 10 SPORTS ---
const sportData: Record<string, any> = {
  swimming: {
    title: "Master the", accent: "Waves.",
    desc: "From basic strokes to competitive racing techniques. Dive into professional aquatic training.",
    img: "/a21.jpeg",
    icon: Waves, color: "#00E5FF", category: "Outdoor"
  },
  skating: {
    title: "Speed and", accent: "Precision.",
    desc: "Master the art of balance and high-velocity maneuvers on wheels with national-level coaches.",
    img: "/135.jpeg",
    icon: Bike, color: "#0066FF", category: "Outdoor"
  },
  football: {
    title: "The Spirit of", accent: "The Game.",
    desc: "Tactical discipline, teamwork, and professional ball control. Build your legacy on the pitch.",
    img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600",
    icon: CircleDot, color: "#4ADE80", category: "Outdoor"
  },
  basketball: {
    title: "Rise Above", accent: "The Rim.",
    desc: "Elite shooting mechanics, defensive strategy, and court vision for the modern player.",
    img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1600",
    icon: Dribbble, color: "#FB923C", category: "Outdoor"
  },
  cricket: {
    title: "The Gentleman's", accent: "Pursuit.",
    desc: "Professional batting, bowling, and strategic gameplay designed for competitive tournament play.",
    img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1600",
    icon: Trophy, color: "#EF4444", category: "Outdoor"
  },
  chess: {
    title: "Battle of", accent: "The Minds.",
    desc: "Deep strategic analysis and tactical mastery. Learn the game of kings from FIDE rated mentors.",
    img: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=1600",
    icon: Gamepad2, color: "#8B5CF6", category: "Indoor"
  },
  music: {
    title: "Notes of", accent: "Excellence.",
    desc: "Instrumental mastery and vocal discipline. Express your soul through professional music education.",
    img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1600",
    icon: Music, color: "#EC4899", category: "Indoor"
  },
  dance: {
    title: "The Poetry of", accent: "Motion.",
    desc: "Classical, contemporary, and urban styles. Develop rhythm, grace, and athletic agility.",
    img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1600",
    icon: Zap, color: "#F43F5E", category: "Indoor"
  },
  "art-and-craft": {
    title: "Crafting", accent: "The Future.",
    desc: "Unleash creativity through painting, sculpting, and design. Where imagination meets technique.",
    img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1600",
    icon: Palette, color: "#FACC15", category: "Indoor"
  },
  yoga: {
    title: "Balance and", accent: "Inner Strength.",
    desc: "Ancient wisdom for modern wellness. Achieve physical flexibility and mental clarity.",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1600",
    icon: Flower2, color: "#10B981", category: "Indoor"
  }
};

interface Props {
  sportKey: string;
}

const SportBanner: React.FC<Props> = ({ sportKey }) => {
  const data = sportData[sportKey];
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  if (!data) return <div className="py-20 text-center font-black uppercase text-[#0a1128]">Sport Program Not Found</div>;

  return (
    <section className="relative w-full h-[550px] md:h-[700px] lg:h-[850px] flex items-center justify-center overflow-hidden bg-[#0a1128]">
      
      {/* --- BACKGROUND IMAGE LAYER --- */}
      <div className="absolute inset-0 z-0">
        <img
          src={data.img}
          alt={`${data.title} ${data.accent}`}
          className="w-full h-full object-cover object-center scale-105 opacity-50 grayscale-[20%]"
        />
        
        {/* --- DYNAMIC GRADIENT OVERLAYS --- */}
        {/* 1. Navbar Safety: Extra dense top gradient for link visibility */}
        <div className="absolute inset-x-0 top-0 h-32 md:h-48 bg-gradient-to-b from-[#0a1128] via-[#0a1128]/80 to-transparent z-10 opacity-95" />
        
        {/* 2. Brand Mood Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/60 via-transparent to-[#0a1128] z-10" />
        
        {/* 3. Radial Focus for centered content */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a1128_100%)] opacity-70 z-10" />
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-12 text-center pt-20 md:pt-24 lg:pt-32">
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
          
          {/* Top Badge: Adaptive scaling */}
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-2 animate-fade-in">
            <div className="h-[1px] w-6 md:w-12 bg-[#d31d24]" />
            <span className="text-[9px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-white/80 flex items-center gap-2">
              <data.icon size={14} style={{ color: data.color }} className="animate-pulse" />
              Elite {data.category} Program
            </span>
            <div className="h-[1px] w-6 md:w-12 bg-[#d31d24]" />
          </div>

          {/* Headline: Fluid font sizes for all breakpoints */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl font-black text-white uppercase italic tracking-tighter leading-[0.9] sm:leading-[0.85] drop-shadow-2xl">
            {data.title} <br />
            <span style={{ color: data.color }} className="not-italic inline-block mt-2 md:mt-0">
              {data.accent}
            </span>
          </h1>

          {/* Description: Constrained width for readability on phones */}
          <p className="text-slate-300 text-xs sm:text-base md:text-lg lg:text-xl font-medium max-w-[300px] sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed opacity-90">
            {data.desc}
          </p>

          {/* Action Buttons: Vertical stack on mobile, horizontal row on desktop */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 md:pt-8 px-4 sm:px-0">
            <button 
              onClick={() => setIsBookModalOpen(true)}
              style={{ backgroundColor: data.color }}
              className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 text-white rounded-full font-black uppercase tracking-widest text-[10px] md:text-[11px] transition-all duration-300 shadow-xl hover:bg-white hover:text-[#0a1128] flex items-center justify-center gap-3 active:scale-95 group"
            >
              <Target className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              Book Free Trial
            </button>
            
            <button className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-white/10 hover:bg-white text-white hover:text-[#0a1128] border border-white/20 hover:border-white backdrop-blur-md rounded-full font-black uppercase tracking-widest text-[10px] md:text-[11px] transition-all flex items-center justify-center gap-3 active:scale-95">
              <Play className="w-4 h-4" style={{ color: data.color }} />
              Watch Demo
            </button>
          </div>

          {/* Breadcrumb Path: Minimalist style */}
          <div className="pt-8 md:pt-12 flex items-center justify-center gap-2 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
             <a href="/" className="hover:text-white transition-colors">Home</a>
             <ChevronRight className="w-3 h-3 text-[#d31d24]" />
             <span className="text-white/40">{data.category}</span>
             <ChevronRight className="w-3 h-3 text-[#d31d24]" />
             <span className="text-white" style={{ color: data.color }}>{sportKey.replace("-", " ")}</span>
          </div>
        </div>
      </div>

      {/* --- DECORATIVE ACCENTS --- */}
      {/* 1. Giant Watermark Icon (Desktop Only) */}
      <div className="absolute right-[-5%] bottom-[-5%] opacity-[0.03] pointer-events-none select-none hidden lg:block">
          <data.icon size={450} className="text-white -rotate-12" />
      </div>

      {/* 2. Performance Star (Bottom Left) */}
      <div className="absolute bottom-10 left-10 hidden xl:flex items-center gap-3 opacity-20 group">
          <Star className="text-white animate-pulse" size={24} style={{ color: data.color }} />
          <span className="text-white text-[10px] font-black uppercase tracking-widest">Enzo Excellence Standard</span>
      </div>

      {/* Bottom Fade transition */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0a1128] to-transparent z-10" />

      {/* Book Demo Modal */}
      <BookDemo 
        isOpen={isBookModalOpen} 
        onClose={() => setIsBookModalOpen(false)} 
      />

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

export default SportBanner;