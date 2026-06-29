"use client";

import React, { useState } from "react";
import { 
  Plus, Minus, ArrowRight, BookOpen, ShieldCheck, Globe2, Heart, Trophy 
} from "lucide-react";

interface Feature {
  title: string;
  desc: string;
  icon?: any;
}

interface Stat {
  val: string;
  lab: string;
}

interface Highlight {
  t: string; // title
  d: string; // desc
}

interface Level {
  age: string;
  level: string;
  desc: string;
  img?: string;
}

interface Curriculum {
  title: string;
  points: string[];
}

interface FAQ {
  q: string;
  a: string;
}

interface SportPageLayoutProps {
  sportKey: string;
  themeColor: string;
  title: string;
  description: string;
  features: Feature[];
  stats: Stat[];
  statsImage?: string;
  highlights: Highlight[];
  highlightGifs?: string[];
  levels: Level[];
  curriculum: Curriculum[];
  curriculumDesc?: string;
  faqData: FAQ[];
  faqImage?: string;
}

const defaultHighlightGifs = [
  "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
  "https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif",
  "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
  "https://media.giphy.com/media/26AHONQ79FdWZhAIw/giphy.gif",
  "https://media.giphy.com/media/l0HlSi3AIOM3fAhX2/giphy.gif",
  "https://media.giphy.com/media/3oEduUy2KjJbH30BNe/giphy.gif"
];

const defaultLevelImages = [
  "https://images.unsplash.com/photo-1528659109033-68d7120db8aa?q=80&w=600",
  "https://images.unsplash.com/photo-1518428135898-356c28f3cb52?q=80&w=600",
  "https://images.unsplash.com/photo-1542652735873-fb2814816f1c?q=80&w=600",
  "https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=600"
];

const defaultFaqImage = "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200";
const defaultStatsImage = "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=1200";

export default function SportPageLayout({
  sportKey,
  themeColor,
  title,
  description,
  features,
  stats,
  statsImage,
  highlights,
  highlightGifs,
  levels,
  curriculum,
  curriculumDesc,
  faqData,
  faqImage
}: SportPageLayoutProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const gifs = highlightGifs && highlightGifs.length > 0 ? highlightGifs : defaultHighlightGifs;

  return (
    <div className="bg-white font-sans text-[#0a1128]">

      {/* 2. WHY CHOOSE US */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
        <div className="relative container mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            
            {/* LEFT */}
            <div>
              <span className="inline-flex items-center rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[3px] mb-6" style={{ backgroundColor: `${themeColor}15`, color: themeColor }}>
                Why Enzo {sportKey.charAt(0).toUpperCase() + sportKey.slice(1)}
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tight leading-[0.95]">
                Why Choose Our{" "}
                <span style={{ color: themeColor }}>
                  {title}?
                </span>
              </h2>
              <p className="mt-8 text-slate-600 text-lg leading-8 max-w-xl">
                {description}
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mt-10">
                {features.map((item, i) => {
                  const defaultIcons = [ShieldCheck, Globe2, Heart, Trophy];
                  const Icon = item.icon || defaultIcons[i % 4];
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
                 <img src={statsImage || defaultStatsImage} alt="Training" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
                 {stats[0] && (
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/80 to-transparent p-8 flex flex-col justify-end">
                      <h3 className="text-4xl font-black text-white" style={{ color: themeColor }}>{stats[0].val}</h3>
                      <p className="text-white/80 uppercase tracking-widest text-xs font-bold">{stats[0].lab}</p>
                   </div>
                 )}
               </div>
               
               {stats[1] && (
                 <div className="absolute bottom-10 left-0 w-[60%] h-[40%] rounded-[3rem] overflow-hidden shadow-2xl z-20 border-4 border-white bg-[#0a1128] p-8 flex flex-col justify-center">
                      <h3 className="text-3xl font-black text-white">{stats[1].val}</h3>
                      <p className="text-white/60 uppercase tracking-widest text-[10px] font-bold mt-1">{stats[1].lab}</p>
                 </div>
               )}
               
               {stats[2] && (
                 <div className="absolute bottom-0 right-10 w-[45%] h-[35%] rounded-[2rem] overflow-hidden shadow-2xl z-30 border-4 border-white bg-white p-6 flex flex-col justify-center text-center">
                      <h3 className="text-3xl font-black" style={{ color: themeColor }}>{stats[2].val}</h3>
                      <p className="text-slate-500 uppercase tracking-widest text-[10px] font-bold mt-1">{stats[2].lab}</p>
                 </div>
               )}
            </div>

          </div>
        </div>
      </section>

      {/* 3. HIGHLIGHTS WITH CIRCULAR GIFS */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl text-center mb-16">
          <h2 className="text-4xl font-black uppercase italic tracking-tighter">Program <span style={{ color: themeColor }}>Highlights</span></h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto font-medium">Experience training like never before with our cutting-edge facilities and methods.</p>
        </div>
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((h, i) => (
            <div key={i} className="bg-white rounded-[2.5rem] border border-slate-100 group hover:shadow-2xl transition-all overflow-hidden flex flex-col items-center text-center p-8">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 shadow-lg border-4 border-white group-hover:scale-110 transition-transform duration-500">
                 <img src={gifs[i % gifs.length]} alt="Highlight GIF" className="w-full h-full object-cover" />
              </div>
              <div>
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
          {levels.map((l: any, i: number) => {
            const img = l.img || defaultLevelImages[i % defaultLevelImages.length];
            return (
              <div key={i} className="relative group rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all h-[400px]">
                 <img src={img} alt={l.level} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
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
            )
          })}
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
                {curriculumDesc || "Our curriculum isn't just about physical repetition. We teach students to analyze patterns, manage their bodies under pressure, and build character through structured discipline."}
              </p>
           </div>
        </div>
      </section>

      {/* 6. FAQ WITH IMAGE LEFT & QUESTIONS RIGHT */}
      <section className="py-24 container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           
           {/* IMAGE ON LEFT ON ALL SCREENS */}
           <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[500px]">
             <img src={faqImage || defaultFaqImage} alt="FAQ Background" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#0a1128]/80 to-transparent mix-blend-multiply" />
             <div className="absolute bottom-10 left-10 text-white max-w-sm">
                <h3 className="text-3xl font-black uppercase italic tracking-tighter">Still Have <span style={{ color: themeColor }}>Questions?</span></h3>
                <p className="text-slate-300 mt-2 text-sm">Our support team is available 24/7 to help you start your journey.</p>
             </div>
           </div>

           {/* QUESTIONS ON RIGHT */}
           <div>
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

      {/* 7. COMPACT DOTTED CTA SECTION */}
      <section className="py-24 px-6">
         <div className="container mx-auto max-w-4xl">
            {/* The Dotted Wrapper (Compact) */}
            <div className="p-2 rounded-[3rem]" style={{ border: `2px dashed ${themeColor}` }}>
               <div className="bg-[#0a1128] rounded-[2.5rem] py-12 px-8 text-center relative overflow-hidden shadow-xl">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-20" style={{ backgroundColor: themeColor }} />
                  
                  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 max-w-3xl mx-auto">
                     <div className="text-left flex-1">
                        <h2 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter leading-tight">
                           Ready to master <br /> <span style={{ color: themeColor }}>the next level?</span>
                        </h2>
                        <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] mt-4">
                          Contact Us: +91 7259582089 • enzosportsblr@gmail.com
                        </p>
                     </div>
                     <div className="flex flex-col sm:flex-row gap-4">
                        <div className="p-1 rounded-2xl border-2 border-dashed border-white/30 hover:border-white transition-colors shrink-0">
                           <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#0a1128] rounded-xl font-black uppercase tracking-widest text-xs transition-all hover:scale-[0.98] flex items-center justify-center gap-2">
                             Book Free Trial <ArrowRight size={16} />
                           </button>
                        </div>
                        <div className="p-1 rounded-2xl border-2 border-dashed border-transparent hover:border-white/30 transition-colors shrink-0">
                           <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/20 text-white rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                             Talk to Coach
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
}
