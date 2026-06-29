"use client";
import React, { useState } from "react";
import { 
  Waves, Bike, CircleDot, Dribbble, Trophy, 
  Gamepad2, Music, Zap, Palette, Flower2, 
  ChevronRight, Calendar, Info, ArrowRight, Play, Target
} from "lucide-react";
import BookDemo from "./bookDemo";

// --- DATA CONFIGURATION FOR ALL 10 SPORTS ---
const sportData: Record<string, any> = {
  swimming: {
    title: "Master the", accent: "Waves.",
    desc: "From basic strokes to competitive racing techniques. Dive into professional aquatic training.",
    img: "https://images.unsplash.com/photo-1530549387633-f71f9911bc01?q=80&w=1600",
    icon: Waves, color: "#00E5FF", category: "Outdoor"
  },
  skating: {
    title: "Speed and", accent: "Precision.",
    desc: "Master the art of balance and high-velocity maneuvers on wheels with national-level coaches.",
    img: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1600",
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

  if (!data) return <div className="py-20 text-center">Sport Not Found</div>;

  return (
    <section className="relative w-full h-[450px] md:h-[700px] flex items-center justify-center overflow-hidden bg-[#0a1128]">
      {/* --- Background Image with Professional Dark Overlay --- */}
      <div className="absolute inset-0 z-0">
        <img
          src={data.img}
          alt={`${data.title} ${data.accent}`}
          className="w-full h-full object-cover object-center scale-105 opacity-50 grayscale-[30%]"
        />
        
        {/* Safety Top Gradient: Ensures Navbar visibility at all times */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0a1128] to-transparent z-10 opacity-90" />
        
        {/* Main Brand Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/80 via-[#0a1128]/40 to-[#0a1128] z-10" />
      </div>

      {/* --- Banner Content --- */}
      <div className="relative z-20 container mx-auto px-6 text-center pt-16 md:pt-24">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Top Badge Style (Consistent with other sub-pages) */}
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-[1px] w-8 md:w-12 bg-[#d31d24]" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-white/70 flex items-center gap-2">
              <data.icon size={14} style={{ color: data.color }} />
              Elite {data.category} Academy
            </span>
            <div className="h-[1px] w-8 md:w-12 bg-[#d31d24]" />
          </div>

          {/* Headline - Mixed Typography Style */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase italic tracking-tighter leading-[0.85]">
            {data.title} <br />
            <span style={{ color: data.color }} className="not-italic">
              {data.accent}
            </span>
          </h1>

          {/* Description Paragraph */}
          <p className="text-slate-300 text-sm md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            {data.desc}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => setIsBookModalOpen(true)}
              style={{ backgroundColor: data.color }}
              className="w-full sm:w-auto px-10 py-4 hover:bg-white hover:text-[#0a1128] text-white rounded-full font-black uppercase tracking-widest text-[11px] transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
            >
              <Target className="w-4 h-4" />
              Book Free Trial
            </button>
            <button className="w-full sm:w-auto px-10 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-full font-black uppercase tracking-widest text-[11px] backdrop-blur-sm transition-all flex items-center justify-center gap-2">
              <Play className="w-4 h-4" style={{ color: data.color }} />
              Watch Demo
            </button>
          </div>

          {/* Breadcrumb Path */}
          <div className="pt-8 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
             <a href="/" className="hover:text-white transition-colors">Home</a>
             <ChevronRight className="w-3 h-3 text-[#d31d24]" />
             <span className="text-white/60 uppercase tracking-widest">{data.category}</span>
             <ChevronRight className="w-3 h-3 text-[#d31d24]" />
             <span className="text-white uppercase tracking-widest" style={{ color: data.color }}>{sportKey.replace("-", " ")}</span>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Fade for smooth section transition */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0a1128] to-transparent z-10" />

      {/* Book Demo Modal */}
      <BookDemo 
        isOpen={isBookModalOpen} 
        onClose={() => setIsBookModalOpen(false)} 
      />
    </section>
  );
};

export default SportBanner;