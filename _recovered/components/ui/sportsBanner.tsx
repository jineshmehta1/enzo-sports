"use client";
import React from "react";
import { 
  Waves, Bike, CircleDot, Dribbble, Trophy, 
  Gamepad2, Music, Zap, Palette, Flower2, 
  ChevronRight, Calendar, Info, ArrowRight, Play
} from "lucide-react";

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

  if (!data) return <div className="py-20 text-center">Sport Not Found</div>;

  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-[#0a1128] pt-24 pb-12">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" style={{ backgroundColor: data.color }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" style={{ backgroundColor: data.color }} />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] z-0" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Typography */}
          <div className="space-y-8 text-center lg:text-left">
            
            {/* Category Badge */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] font-black uppercase tracking-[0.3em] text-white flex items-center gap-2 shadow-lg backdrop-blur-md">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: data.color }} />
                Elite {data.category} Academy
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-white uppercase italic tracking-tighter leading-[0.85] drop-shadow-2xl">
              {data.title} <br />
              <span style={{ color: data.color }} className="not-italic relative inline-block mt-2">
                {data.accent}
                <svg className="absolute w-full h-4 -bottom-2 left-0 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke={data.color} strokeWidth="3" fill="none" strokeDasharray="5,5" />
                </svg>
              </span>
            </h1>

            <p className="text-slate-300 text-sm md:text-lg font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed border-l-4 pl-4" style={{ borderColor: data.color }}>
              {data.desc}
            </p>

            {/* Action Buttons with Dotted/Premium styling */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-4">
              <div className="p-1 rounded-full bg-gradient-to-r from-white to-white/60 hover:scale-105 transition-transform shadow-2xl shadow-white/10 cursor-pointer">
                <button className="px-8 py-4 bg-white text-[#0a1128] rounded-full font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-3">
                  Book Free Trial <ArrowRight size={16} />
                </button>
              </div>
              <button className="px-8 py-4 bg-white/5 backdrop-blur-md text-white border-2 border-dashed border-white/30 rounded-full font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-2 hover:bg-white/10 transition-all hover:border-white">
                <Play size={16} style={{ color: data.color }} />
                Watch Demo
              </button>
            </div>

            {/* Breadcrumb */}
            <div className="pt-8 flex items-center justify-center lg:justify-start gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
               <a href="/" className="hover:text-white transition-colors">Home</a>
               <ChevronRight className="w-3 h-3 text-slate-600" />
               <span className="text-white/60">{data.category}</span>
               <ChevronRight className="w-3 h-3 text-slate-600" />
               <span style={{ color: data.color }}>{sportKey.replace("-", " ")}</span>
            </div>

          </div>

          {/* Right: Floating Image Panel */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none hidden sm:block">
            {/* The Floating Container */}
            <div className="relative z-20 rounded-[3rem] p-3 backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl animate-[float_6s_ease-in-out_infinite]" style={{ boxShadow: \`0 25px 50px -12px \${data.color}40\` }}>
              <div className="overflow-hidden rounded-[2.5rem] relative aspect-[4/5] lg:aspect-square">
                <img
                  src={data.img}
                  alt={data.sport}
                  className="w-full h-full object-cover object-center scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-transparent to-transparent opacity-80" />
                
                {/* Floating Meta Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex justify-between items-center">
                  <div>
                     <p className="text-[10px] font-black uppercase tracking-widest text-white/70">Program Status</p>
                     <p className="text-lg font-bold text-white flex items-center gap-2 mt-1">
                        <span className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80]" /> Enrolling Now
                     </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                     <data.icon style={{ color: data.color }} size={24} />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 -right-10 z-30 opacity-80 animate-pulse hidden xl:block">
               <data.icon size={120} style={{ color: data.color }} className="drop-shadow-2xl blur-[2px]" />
            </div>
            
          </div>

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: \`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      \`}} />
    </section>
  );
};

export default SportBanner;