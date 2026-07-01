"use client";

import React, { useState } from "react";
import { 
  Plus, Minus, ArrowRight, BookOpen, ShieldCheck, Globe2, Heart, Trophy, MessageSquare , Phone
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
  t: string;
  d: string;
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
  levelImages?: string[];
  curriculumDesc?: string;
  faqData: FAQ[];
  faqImage?: string;
}

const defaultHighlightGifs = [
  "/prof.jpg",
  "/small.jpg",
  "/creative.png",
  "/focus.png",
  "/skill.png",
  "/tour.jpg"
];

const defaultLevelImages = [
  "https://images.unsplash.com/photo-1528659109033-68d7120db8aa?q=80&w=600",
  "https://images.unsplash.com/photo-1518428135898-356c28f3cb52?q=80&w=600",
  "https://images.unsplash.com/photo-1542652735873-fb2814816f1c?q=80&w=600",
  "https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=600"
];

const defaultFaqImage = "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200";
const defaultStatsImage = "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=1200";

const cardColors = [
  "bg-gradient-to-br from-blue-50 via-white to-cyan-100",
  "bg-gradient-to-br from-purple-50 via-white to-pink-100",
  "bg-gradient-to-br from-orange-50 via-white to-amber-100",
  "bg-gradient-to-br from-emerald-50 via-white to-green-100",
  "bg-gradient-to-br from-rose-50 via-white to-red-100",
  "bg-gradient-to-br from-indigo-50 via-white to-violet-100",
];

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
  levelImages,
  curriculum,
  curriculumDesc,
  faqData,
  faqImage
}: SportPageLayoutProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const gifs = highlightGifs && highlightGifs.length > 0 ? highlightGifs : defaultHighlightGifs;

  return (
    <div className="bg-white font-sans text-[#0a1128] overflow-x-hidden">

      {/* 1. WHY CHOOSE US */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
        <div className="relative container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
            
            {/* LEFT CONTENT */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <span className="inline-flex items-center rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] mb-4" style={{ backgroundColor: `${themeColor}15`, color: themeColor }}>
                  Exclusive {sportKey} Program
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter leading-[1] md:leading-[0.95]">
                  Why Choose Our <br className="hidden sm:block" />
                  <span style={{ color: themeColor }}>{title}?</span>
                </h2>
                <p className="mt-6 text-slate-500 text-base md:text-lg leading-relaxed max-w-xl">
                  {description}
                </p>
              </div>

              {/* Responsive 2-column feature grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {features.map((item, i) => {
                  const defaultIcons = [ShieldCheck, Globe2, Heart, Trophy];
                  const Icon = item.icon || defaultIcons[i % 4];
                  return (
                    <div key={i} className="group rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style={{ backgroundColor: `${themeColor}10` }}>
                        <Icon size={24} style={{ color: themeColor }} />
                      </div>
                      <h4 className="font-black uppercase text-xs tracking-wider text-[#0a1128]">{item.title}</h4>
                      <p className="mt-2 text-xs leading-relaxed text-slate-400 font-medium">{item.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* RIGHT BENTO STATS - Handled with Aspect Ratios for Mobile */}
            <div className="relative w-full h-[450px] sm:h-[600px] lg:h-[700px] mt-10 lg:mt-0">
               {/* Main Card */}
               <div className="absolute top-0 right-0 w-[85%] h-[65%] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl z-10 border-[6px] md:border-8 border-white group">
                 <img src={statsImage || defaultStatsImage} alt="Training" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                 
               </div>
               
               {/* Accent Card 1 (Navy) */}
               {stats[1] && (
                 <div className="absolute bottom-12 left-0 w-[60%] h-[40%] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl z-20 border-[6px] md:border-8 border-white bg-[#0a1128] p-6 md:p-10 flex flex-col justify-center">
                      <h3 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter">{stats[1].val}</h3>
                      <p className="text-white/40 uppercase tracking-[0.2em] text-[8px] md:text-[10px] font-black mt-2">{stats[1].lab}</p>
                 </div>
               )}
               
               {/* Accent Card 2 (White) */}
               {stats[2] && (
                 <div className="absolute bottom-0 right-8 md:right-12 w-[45%] h-[35%] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl z-30 border-[4px] md:border-8 border-white bg-white p-4 md:p-8 flex flex-col justify-center text-center">
                      <h3 className="text-2xl md:text-4xl font-black italic tracking-tighter" style={{ color: themeColor }}>{stats[2].val}</h3>
                      <p className="text-slate-400 uppercase tracking-[0.2em] text-[8px] md:text-[9px] font-black mt-1">{stats[2].lab}</p>
                 </div>
               )}
            </div>

          </div>
        </div>
      </section>

      {/* 2. HIGHLIGHTS (Responsive Gifs Grid) */}
    <section className="py-20 md:py-32 bg-slate-50 overflow-hidden">
  <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
    <div className="text-center mb-12 md:mb-20 space-y-4">
      <h2 className="text-3xl md:text-5xl font-black text-[#0a1128] uppercase italic tracking-tighter leading-none">
        Program <span style={{ color: themeColor }}>Highlights</span>
      </h2>

      <div
        className="h-1 w-20 md:w-32 mx-auto rounded-full"
        style={{ backgroundColor: themeColor }}
      />
    </div>

    {/*
      Soft colorful backgrounds for cards
    */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
      {highlights.map((h, i) => {
        const cardColors = [
          "from-blue-50 via-white to-cyan-100",
          "from-purple-50 via-white to-pink-100",
          "from-orange-50 via-white to-amber-100",
          "from-emerald-50 via-white to-green-100",
          "from-rose-50 via-white to-red-100",
          "from-indigo-50 via-white to-violet-100",
        ];

        return (
          <div
            key={i}
            className={`bg-gradient-to-br ${
              cardColors[i % cardColors.length]
            } rounded-[2.5rem] border border-white/70 shadow-lg hover:shadow-2xl group transition-all duration-500 hover:-translate-y-3 overflow-hidden relative flex flex-col items-center text-center p-8 md:p-12`}
          >
            {/* Decorative blobs */}
            <div
              className="absolute -top-16 -right-16 w-44 h-44 rounded-full opacity-20 blur-3xl group-hover:scale-150 transition-transform duration-700"
              style={{ backgroundColor: themeColor }}
            />

            <div
              className="absolute -bottom-16 -left-16 w-36 h-36 rounded-full opacity-10 blur-2xl group-hover:scale-125 transition-transform duration-700"
              style={{ backgroundColor: themeColor }}
            />

            {/* Image */}
            <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-8 border-[6px] border-white shadow-xl group-hover:scale-110 transition-transform duration-700">
              <img
                src={gifs[i % gifs.length]}
                alt="Action"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-black text-[#0a1128] uppercase italic mb-4 transition-colors duration-300 group-hover:text-[#0066FF]">
                {h.t}
              </h3>

              <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
                {h.d}
              </p>
            </div>

            {/* Hover Accent Line */}
            <div
              className="absolute bottom-0 left-0 h-2 w-0 group-hover:w-full transition-all duration-500"
              style={{ backgroundColor: themeColor }}
            />
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* 3. STRUCTURED GROWTH PATH */}
{/* 3. STRUCTURED GROWTH PATH */}
{/* 3. STRUCTURED GROWTH PATH */}
<section className="py-20 md:py-28">
  <div className="container mx-auto max-w-7xl px-4 sm:px-6">
    {/* Heading */}
    <div className="text-center mb-14 md:mb-20">
      <h2 className="text-3xl sm:text-5xl md:text-5xl font-black text-[#0a1128] uppercase tracking-tighter italic leading-none">
        Structured <span style={{ color: themeColor }}>Evolution</span>
      </h2>

      <p className="mt-5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
        From Foundations to Mastery
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-7">
      {levels.map((l: any, i: number) => {
        const levelImgs =
          levelImages && levelImages.length > 0
            ? levelImages
            : defaultLevelImages;

        const img =
          l.img || levelImgs[i % levelImgs.length];

        return (
          <div
            key={i}
            className="
              relative
              group
              overflow-hidden
              rounded-[2rem]
              lg:rounded-[2.5rem]
              border-4 border-white
              shadow-xl
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-500

              w-full

              aspect-[5/6]
              sm:aspect-[4/5]
              md:aspect-[5/6]
              lg:aspect-[4/5]
              xl:aspect-[3/4]
              2xl:aspect-[5/6]
            "
          >
            {/* Background */}
            <img
              src={img}
              alt={l.level}
              className="
                absolute inset-0
                w-full h-full
                object-cover
                grayscale-[25%]
                group-hover:grayscale-0
                group-hover:scale-105
                transition-all
                duration-700
              "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#081126] via-[#081126]/40 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5 lg:p-6 xl:p-7 text-white">

              {/* Age */}
              <div>
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em]">
                  {l.age}
                </span>
              </div>

              {/* Bottom */}
              <div>
                <h4
                  className="text-3xl font-black italic uppercase tracking-tight leading-none mb-3"
                  style={{
                    color:
                      i === levels.length - 1
                        ? themeColor
                        : "#fff",
                  }}
                >
                  {l.level}
                </h4>

                <p
                  className="
                    text-sm
                    leading-relaxed
                    text-slate-200

                    opacity-100
                    lg:opacity-0
                    lg:translate-y-5

                    lg:group-hover:opacity-100
                    lg:group-hover:translate-y-0

                    transition-all
                    duration-500
                  "
                >
                  {l.desc}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* 4. CURRICULUM (Mobile Stacked, Desktop Side-by-Side) */}
      <section className="py-20 md:py-32 bg-[#0a1128] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
             <div className="space-y-10 md:space-y-12">
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none">
                   Training <br /> <span style={{ color: themeColor }}>Blueprint.</span>
                </h2>
                <div className="space-y-6">
                  {curriculum.map((c: any, i: number) => (
                    <div key={i} className="group border-l-4 border-white/10 pl-6 transition-all duration-300 hover:border-white">
                      <h4 className="text-lg md:text-xl font-black uppercase text-white mb-4 group-hover:text-[#0066FF] transition-colors">{c.title}</h4>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                         {c.points.map((p: string) => (
                           <span key={p} className="text-[9px] md:text-[11px] font-black text-slate-400 uppercase tracking-widest px-3 py-1.5 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                             {p}
                           </span>
                         ))}
                      </div>
                    </div>
                  ))}
                </div>
             </div>
             
             <div className="p-8 md:p-16 bg-white/5 backdrop-blur-xl rounded-[2.5rem] md:rounded-[4rem] border border-white/10 relative">
                <BookOpen size={64} className="mb-8 text-[#0066FF]" />
                <h3 className="text-3xl md:text-5xl font-black uppercase italic mb-6 leading-tight tracking-tighter">Beyond the <br /> Fundamentals</h3>
                <p className="text-slate-400 text-base md:text-lg leading-relaxed font-medium">
                  {curriculumDesc || "Our curriculum isn't just about physical repetition. We teach students to analyze patterns, manage their bodies under pressure, and build character through structured discipline."}
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ (Mobile Image Top, Desktop Image Left) */}
      <section className="py-20 md:py-32 container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
           
           <div className="relative rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-3xl h-[400px] md:h-[650px] lg:h-[750px] group order-2 lg:order-1">
             <img src={faqImage || defaultFaqImage} alt="Support" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-[#0a1128]/20 to-transparent" />
             <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 text-white max-w-sm space-y-4">
                <h3 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-none">Still Have <br /> <span style={{ color: themeColor }}>Questions?</span></h3>
                <p className="text-slate-300 text-sm md:text-base font-medium">Reach out to our elite admissions desk for direct assistance.</p>
                <div className="flex gap-4 pt-4">
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10"><MessageSquare size={20} /></div>
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10"><Phone size={20} /></div>
                </div>
             </div>
           </div>

           <div className="space-y-10 order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-tight text-[#0a1128]">
                Everything you <br /> <span style={{ color: themeColor }}>Need to Know.</span>
              </h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <div key={i} className={`border border-slate-100 rounded-3xl overflow-hidden transition-all duration-500 ${openFaq === i ? 'bg-slate-50 shadow-xl' : 'bg-white hover:bg-slate-50 shadow-sm'}`}>
                     <button 
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full p-6 md:p-8 text-left flex justify-between items-center"
                     >
                        <span className="font-black uppercase text-sm md:text-base tracking-tight pr-6 leading-tight">{faq.q}</span>
                        <div className="shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center transition-all shadow-md" style={{ backgroundColor: openFaq === i ? themeColor : 'white', color: openFaq === i ? 'white' : '#64748b' }}>
                           {openFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                        </div>
                     </button>
                     <div className={`overflow-hidden transition-all duration-500 ${openFaq === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                       <div className="p-6 md:p-8 pt-0 text-slate-500 text-sm md:text-base font-medium leading-relaxed">
                         {faq.a}
                       </div>
                     </div>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* 6. FINAL RESPONSIVE CTA */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
         <div className="container mx-auto max-w-5xl">
            <div className="p-2 md:p-3 rounded-[3.5rem] md:rounded-[4.5rem]" style={{ border: `2px dashed ${themeColor}44` }}>
               <div className="bg-[#0a1128] rounded-[2.5rem] md:rounded-[4rem] py-16 md:py-24 px-8 md:px-20 text-center relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066FF]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                  
                  <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-4xl mx-auto">
                     <div className="text-center lg:text-left flex-1 space-y-4">
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
                           Ready to <br /> <span style={{ color: themeColor }}>Level Up?</span>
                        </h2>
                        <p className="text-slate-400 text-xs md:text-sm font-bold uppercase tracking-[0.2em] leading-relaxed">
                          Admissions: +91 7259582089 <br className="md:hidden" /> • Bangalore Hub
                        </p>
                     </div>
                     <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full lg:w-auto">
                        <button className="w-full sm:w-auto px-10 py-5 bg-[#d31d24] text-white rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all hover:bg-[#0066FF] hover:shadow-2xl hover:shadow-blue-600/30 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 shadow-xl shadow-red-600/10">
                          Book Free Trial <ArrowRight size={16} />
                        </button>
                        <button className="w-full sm:w-auto px-10 py-5 bg-white/5 border-2 border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-white/10 transition-all flex items-center justify-center gap-2 active:scale-95">
                          Talk to Coach
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}