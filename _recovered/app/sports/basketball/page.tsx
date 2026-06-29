"use client";

import React, { useState } from "react";
import { 
  Trophy, Users, Target, ShieldCheck, Zap, BarChart3, 
  Plus, Minus, Star, Award, BookOpen, Globe2, Heart, Medal, ArrowRight, Play
} from "lucide-react";
import SportBanner from "@/components/ui/sportsBanner";

const levels = [
  {
    "age": "6-9 Years",
    "level": "Rookies",
    "desc": "Ball handling, layups and basic rules.",
    "img": "https://images.unsplash.com/photo-1528659109033-68d7120db8aa?q=80&w=600"
  },
  {
    "age": "10-13 Years",
    "level": "Hustlers",
    "desc": "Shooting form, team defense and spacing.",
    "img": "https://images.unsplash.com/photo-1518428135898-356c28f3cb52?q=80&w=600"
  },
  {
    "age": "14-16 Years",
    "level": "Varsity",
    "desc": "Advanced plays, perimeter defense and athleticism.",
    "img": "https://images.unsplash.com/photo-1542652735873-fb2814816f1c?q=80&w=600"
  },
  {
    "age": "17+ Years",
    "level": "Pro Prep",
    "desc": "College-level drills and intense scrimmages.",
    "img": "https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=600"
  }
];
const curriculum = [
  {
    "title": "Ball Handling",
    "points": [
      "Crossovers",
      "Pound Dribbles",
      "Weak Hand"
    ]
  },
  {
    "title": "Shooting Mechanics",
    "points": [
      "B.E.E.F. Form",
      "Catch & Shoot",
      "Off the Dribble"
    ]
  },
  {
    "title": "Defensive Principles",
    "points": [
      "Stance",
      "Closeouts",
      "Help Defense"
    ]
  },
  {
    "title": "Offensive Concepts",
    "points": [
      "Spacing",
      "Cutting",
      "Screening"
    ]
  },
  {
    "title": "Athleticism",
    "points": [
      "Lateral Quickness",
      "Vertical Leap",
      "Stamina"
    ]
  }
];
const schedule = [
  {
    "days": "Mon - Wed - Fri",
    "time": "5:00 PM",
    "batch": "Varsity Training"
  },
  {
    "days": "Weekends",
    "time": "8:00 AM",
    "batch": "Skills Clinic"
  }
];
const stats = [
  {
    "val": "400+",
    "lab": "Hoopers"
  },
  {
    "val": "3",
    "lab": "Indoor Courts"
  },
  {
    "val": "10k+",
    "lab": "Shots Weekly"
  },
  {
    "val": "100%",
    "lab": "Effort Required"
  }
];
const features = [
  {
    "title": "Hardwood Courts",
    "desc": "Premium indoor courts for optimal bounce and grip."
  },
  {
    "title": "Shooting Machines",
    "desc": "Automated rebounding for high-volume shooting practice."
  },
  {
    "title": "Vertical Training",
    "desc": "Plyometric programs to increase vertical leap."
  },
  {
    "title": "Game IQ",
    "desc": "Pick-and-roll reads and defensive rotations."
  }
];

const faqData = [
  { q: "Do I need prior experience?", a: "No. We have dedicated batches for absolute beginners where we teach everything from scratch." },
  { q: "What should I bring?", a: "Just comfortable sportswear and a water bottle. We provide all the specialized equipment needed for training." },
  { q: "What is the batch size?", a: "We maintain a strict low coach-to-student ratio to ensure personalized attention and safety." },
  { q: "Are there competition opportunities?", a: "Yes. Our students participate in regular internal showcases and external state/national tournaments." },
];

// High quality GIF placeholders for highlights
const highlightGifs = [
  "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
  "https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif",
  "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
  "https://media.giphy.com/media/26AHONQ79FdWZhAIw/giphy.gif",
  "https://media.giphy.com/media/l0HlSi3AIOM3fAhX2/giphy.gif",
  "https://media.giphy.com/media/3oEduUy2KjJbH30BNe/giphy.gif"
];

export default function BasketballProgramPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const themeColor = "#FB923C";

  return (
    <div className="bg-white font-sans text-[#0a1128]">
      
      {/* 1. HERO BANNER */}
      <SportBanner sportKey="basketball"/>

      {/* 2. WHY CHOOSE US */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
        <div className="relative container mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            
            {/* LEFT */}
            <div>
              <span className="inline-flex items-center rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[3px] mb-6" style={{ backgroundColor: `${themeColor}15`, color: themeColor }}>
                Why Enzo Basketball
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tight leading-[0.95]">
                Why Choose Our{" "}
                <span style={{ color: themeColor }}>
                  Basketball Program?
                </span>
              </h2>
              <p className="mt-8 text-slate-600 text-lg leading-8 max-w-xl">
                Elite shooting mechanics, defensive strategy, and court vision for the modern player. Dominate the court.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mt-10">
                {features.map((item, i) => {
                  const icons = [ShieldCheck, Globe2, Heart, Trophy];
                  const Icon = icons[i % 4];
                  return (
                    <div key={i} className="group rounded-3xl border border-slate-200 bg-white p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: `${themeColor}15` }}>
                        <Icon size={24} style={{ color: themeColor }} />
                      </div>
                      <h4 className="font-black uppercase text-sm">{item.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-500">{item.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* RIGHT (Bento Box Stats) */}
            <div className="relative w-full h-full min-h-[500px]">
               <div className="absolute top-0 right-0 w-[80%] h-[60%] rounded-[3rem] overflow-hidden shadow-2xl z-10 border-4 border-white">
                 <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200" alt="Basketball Training" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/80 to-transparent p-8 flex flex-col justify-end">
                    <h3 className="text-4xl font-black text-white" style={{ color: themeColor }}>{stats[0].val}</h3>
                    <p className="text-white/80 uppercase tracking-widest text-xs font-bold">{stats[0].lab}</p>
                 </div>
               </div>
               
               <div className="absolute bottom-10 left-0 w-[60%] h-[40%] rounded-[3rem] overflow-hidden shadow-2xl z-20 border-4 border-white bg-[#0a1128] p-8 flex flex-col justify-center">
                    <h3 className="text-3xl font-black text-white">{stats[1].val}</h3>
                    <p className="text-white/60 uppercase tracking-widest text-[10px] font-bold mt-1">{stats[1].lab}</p>
               </div>
               
               <div className="absolute bottom-0 right-10 w-[45%] h-[35%] rounded-[2rem] overflow-hidden shadow-2xl z-30 border-4 border-white bg-white p-6 flex flex-col justify-center text-center">
                    <h3 className="text-3xl font-black" style={{ color: themeColor }}>{stats[3].val}</h3>
                    <p className="text-slate-500 uppercase tracking-widest text-[10px] font-bold mt-1">{stats[3].lab}</p>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. HIGHLIGHTS WITH GIFS */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl text-center mb-16">
          <h2 className="text-4xl font-black uppercase italic tracking-tighter">Program <span style={{ color: themeColor }}>Highlights</span></h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto font-medium">Experience training like never before with our cutting-edge facilities and methods.</p>
        </div>
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { t: "Pro Coaching", d: "One-on-one feedback loops." },
            { t: "Small Batches", d: "Strict attention to each student." },
            { t: "Modern Equipment", d: "Best in class facilities." },
            { t: "Match Practice", d: "Weekly internal sessions." },
            { t: "Skill Tracking", d: "Monthly digital progress reports." },
            { t: "Tournaments", d: "State & National level entries." },
          ].map((h, i) => (
            <div key={i} className="bg-white rounded-[2.5rem] border border-slate-100 group hover:shadow-2xl transition-all overflow-hidden flex flex-col">
              <div className="h-48 w-full bg-slate-100 relative overflow-hidden">
                 <img src={highlightGifs[i]} alt="GIF" className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>
              <div className="p-8 pt-4">
                <h3 className="text-xl font-black uppercase italic mb-2 group-hover:text-[var(--theme-c)] transition-colors" style={{ '--theme-c': themeColor } as any}>{h.t}</h3>
                <p className="text-slate-500 text-sm">{h.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. AGE GROUPS & LEVELS (IMAGE CARDS) */}
      <section className="py-24 container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
           <h2 className="text-4xl font-black uppercase tracking-tight italic">Structured <span style={{ color: themeColor }}>Growth Path</span></h2>
           <p className="text-slate-500 mt-4">A level for everyone. From beginners taking their first steps, to masters honing their craft.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {levels.map((l: any, i: number) => (
            <div key={i} className="relative group rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all h-[400px]">
               <img src={l.img} alt={l.level} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-[#0a1128]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
               
               <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="mb-auto inline-block self-start px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase tracking-widest">
                    {l.age}
                  </div>
                  <h4 className="text-white text-3xl font-black italic uppercase mb-3" style={{ color: i === levels.length - 1 ? themeColor : 'white' }}>
                    {l.level}
                  </h4>
                  <p className="text-slate-300 text-xs font-medium leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {l.desc}
                  </p>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CURRICULUM */}
      <section className="py-24 bg-[#0a1128] text-white">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-10 leading-none">Curriculum <br /> <span style={{ color: themeColor }}>Breakdown.</span></h2>
              <div className="space-y-6">
                {curriculum.map((c: any, i: number) => (
                  <div key={i} className="group border-l-4 border-white/10 pl-6 transition-all hover:border-[var(--hover-border)]" style={{ '--hover-border': themeColor } as any}>
                    <h4 className="text-lg font-black uppercase text-white mb-3 group-hover:text-[var(--hover-border)] transition-colors" style={{ '--hover-border': themeColor } as any}>{c.title}</h4>
                    <div className="flex flex-wrap gap-2">
                       {c.points.map((p: string) => <span key={p} className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full">{p}</span>)}
                    </div>
                  </div>
                ))}
              </div>
           </div>
           
           <div className="p-10 md:p-14 bg-white/5 backdrop-blur-lg rounded-[3rem] border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" style={{ backgroundColor: themeColor }} />
              <BookOpen size={48} className="mb-6 relative z-10" style={{ color: themeColor }} />
              <h3 className="text-3xl font-black uppercase italic mb-4 relative z-10">Beyond the Basics</h3>
              <p className="text-slate-400 leading-relaxed font-medium relative z-10">
                Our curriculum isn't just about physical repetition. We teach students to analyze patterns, manage their bodies under pressure, and build character through structured discipline.
              </p>
           </div>
        </div>
      </section>

      {/* 6. FAQ WITH IMAGE */}
      <section className="py-24 container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           
           <div className="order-2 lg:order-1 relative rounded-[3rem] overflow-hidden shadow-2xl h-[500px]">
             <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200" alt="FAQ Background" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#0a1128]/80 to-transparent mix-blend-multiply" />
             <div className="absolute bottom-10 left-10 text-white max-w-sm">
                <h3 className="text-3xl font-black uppercase italic tracking-tighter">Still Have <span style={{ color: themeColor }}>Questions?</span></h3>
                <p className="text-slate-300 mt-2 text-sm">Our support team is available 24/7 to help you start your journey.</p>
             </div>
           </div>

           <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-black uppercase mb-10 italic tracking-tighter">Everything you <span style={{ color: themeColor }}>Need to Know.</span></h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                     <button 
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full p-6 text-left flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
                     >
                        <span className="font-black uppercase text-sm pr-4">{faq.q}</span>
                        <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: openFaq === i ? themeColor : '#f1f5f9', color: openFaq === i ? 'white' : '#64748b' }}>
                           {openFaq === i ? <Minus size={16} /> : <Plus size={16} />}
                        </div>
                     </button>
                     <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                       <div className="p-6 pt-0 bg-white text-slate-500 text-sm font-medium leading-relaxed border-t border-slate-50 mt-2">
                         {faq.a}
                       </div>
                     </div>
                  </div>
                ))}
              </div>
           </div>

        </div>
      </section>

      {/* 7. DOTTED CTA SECTION */}
      <section className="py-24 px-6">
         <div className="container mx-auto max-w-5xl">
            {/* The Dotted Wrapper */}
            <div className="p-3 rounded-[4rem]" style={{ border: `3px dashed ${themeColor}` }}>
               <div className="bg-[#0a1128] rounded-[3.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-20" style={{ backgroundColor: themeColor }} />
                  
                  <div className="relative z-10 space-y-10">
                     <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase italic tracking-tighter leading-tight">
                        Ready to master <br /> <span style={{ color: themeColor }}>the next level?</span>
                     </h2>
                     <div className="flex flex-col sm:flex-row justify-center gap-6">
                        {/* Dotted border button wrapper */}
                        <div className="p-1.5 rounded-2xl border-2 border-dashed border-white/30 hover:border-white transition-colors">
                           <button className="w-full sm:w-auto px-12 py-5 bg-white text-[#0a1128] rounded-xl font-black uppercase tracking-widest text-xs transition-all hover:scale-[0.98] flex items-center justify-center gap-2">
                             Book Free Trial <ArrowRight size={16} />
                           </button>
                        </div>
                        <div className="p-1.5 rounded-2xl border-2 border-dashed border-transparent hover:border-white/30 transition-colors">
                           <button className="w-full sm:w-auto px-12 py-5 bg-transparent border-2 border-white/20 text-white rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                             Talk to Coach
                           </button>
                        </div>
                     </div>
                     <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] mt-8">
                       Contact Us: +91 72595 82089 • info@enzosports.com
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
}
