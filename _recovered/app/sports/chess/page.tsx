"use client";

import React, { useState } from "react";
import { 
  Trophy, Users, Target, ShieldCheck, Zap, BarChart3, 
  MapPin, Phone, Mail, Clock, Calendar, ChevronRight, 
  Plus, Minus, Star, Play, CheckCircle2, Award, BookOpen, Globe2, Heart, Medal
} from "lucide-react";
import SportBanner from "@/components/ui/sportsBanner";

// --- DATA CONFIG ---
const levels = [
  { age: "5-7 Years", level: "Beginner", desc: "Foundational moves and piece values." },
  { age: "8-11 Years", level: "Foundation", desc: "Basic tactics and opening principles." },
  { age: "12-14 Years", level: "Intermediate", desc: "Middlegame strategy and positional play." },
  { age: "15+ Years", level: "Advanced", desc: "Endgame mastery and tournament prep." },
];

const curriculum = [
  { title: "Opening Principles", points: ["Center Control", "Piece Development", "King Safety"] },
  { title: "Tactical Motifs", points: ["Forks & Pins", "Skewer Attacks", "Discovery Checks"] },
  { title: "Middlegame Strategy", points: ["Pawn Structures", "Outpost Management", "Exchange Sacrifices"] },
  { title: "Endgame Mastery", points: ["Opposition", "King & Pawn Basics", "Rook Endgames"] },
  { title: "Mental Conditioning", points: ["Focus Training", "Time Management", "Resilience"] },
];

const faqData = [
  { q: "Do I need prior experience?", a: "No. We have dedicated batches for absolute beginners where we teach everything from scratch." },
  { q: "What should I bring?", a: "We provide professional tournament-grade chess sets. Just bring a notebook and a focused mind." },
  { q: "What is the batch size?", a: "We maintain a strict 1:12 coach-to-student ratio to ensure personalized attention." },
  { q: "Are there competition opportunities?", a: "Yes. Our students participate in weekly internal leagues and monthly state/national tournaments." },
];

export default function ChessProgramPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Brand Colors
  const navy = "#0a1128";
  const red = "#d31d24";
  const blue = "#0066FF";

  return (
    <div className="bg-white font-sans text-[#0a1128]">
      
      <SportBanner sportKey="chess"/>

      {/* 2. WHY CHOOSE ENZO CHESS */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-white">
  {/* Background */}
  <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />

  <div className="relative container mx-auto max-w-7xl px-6">
    <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

      {/* LEFT */}
      <div>

        <span className="inline-flex items-center rounded-full bg-[#0066FF]/10 text-[#0066FF] px-5 py-2 text-xs font-bold uppercase tracking-[3px] mb-6">
          Why Enzo Chess
        </span>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tight leading-[0.95]">
          Why Choose Our{" "}
          <span className="text-[#0066FF]">
            Chess Program?
          </span>
        </h2>

        <p className="mt-8 text-slate-600 text-lg leading-8 max-w-xl">
          At Enzo Elite Sports, chess is far more than a board game.
          We develop analytical thinking, decision making, concentration,
          patience and confidence through structured coaching by experienced
          FIDE-rated instructors.
        </p>

        {/* Feature Cards */}

        <div className="grid sm:grid-cols-2 gap-5 mt-10">

          {[
            {
              icon: ShieldCheck,
              title: "Certified Coaches",
              desc: "Learn from experienced FIDE-rated professionals."
            },
            {
              icon: Globe2,
              title: "International Curriculum",
              desc: "Structured training based on global standards."
            },
            {
              icon: Heart,
              title: "Positive Environment",
              desc: "Safe, motivating and student-focused learning."
            },
            {
              icon: Trophy,
              title: "Tournament Exposure",
              desc: "Regular internal & external chess competitions."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="group rounded-3xl border border-slate-200 bg-white p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#0066FF]/10 flex items-center justify-center mb-5">
                <item.icon
                  className="text-[#0066FF]"
                  size={24}
                />
              </div>

              <h4 className="font-black uppercase text-sm">
                {item.title}
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* RIGHT */}

      <div className="relative max-w-xl mx-auto w-full">

        {/* Image */}

        <div className="relative overflow-hidden rounded-[40px] shadow-2xl">

          <img
            src="https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=1200"
            alt="Chess Training"
            className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        </div>

        {/* Floating Card */}

        <div className="absolute left-4 bottom-4 md:-left-8 md:-bottom-8 bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-slate-100">

          <div className="grid grid-cols-2 gap-8">

            <div>
              <h3 className="text-3xl md:text-5xl font-black text-[#0066FF]">
                1200+
              </h3>

              <p className="text-xs uppercase tracking-widest text-slate-500 mt-2">
                Games Played
              </p>
            </div>

            <div>
              <h3 className="text-3xl md:text-5xl font-black text-[#d31d24]">
                98%
              </h3>

              <p className="text-xs uppercase tracking-widest text-slate-500 mt-2">
                Success Rate
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  </div>
</section>

      {/* 3. PROGRAM HIGHLIGHTS */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl text-center mb-16">
          <h2 className="text-4xl font-black uppercase italic tracking-tighter">Program <span className="text-[#0066FF]">Highlights</span></h2>
        </div>
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { t: "Professional Coaching", d: "One-on-one feedback loops.", icon: Users },
            { t: "Small Batch Size", d: "Strict 1:12 coach ratio.", icon: Target },
            { t: "Modern Equipment", d: "Digital boards & analysis softs.", icon: Zap },
            { t: "Match Practice", d: "Weekly internal league play.", icon: Trophy },
            { t: "Skill Tracking", d: "Monthly digital progress reports.", icon: BarChart3 },
            { t: "Tournament Exposure", d: "State & National level entries.", icon: Award },
          ].map((h, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 group hover:shadow-2xl transition-all">
              <h.icon className="text-[#d31d24] mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-black uppercase italic mb-2">{h.t}</h3>
              <p className="text-slate-500 text-sm">{h.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. AGE GROUPS & LEVELS */}
      <section className="py-24 container mx-auto px-6 max-w-5xl">
        <div className="bg-[#0a1128] rounded-[3rem] overflow-hidden shadow-2xl">
           <div className="p-12 text-center text-white border-b border-white/5">
              <h2 className="text-3xl font-black uppercase tracking-tight">Structured Growth Path</h2>
           </div>
           <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {levels.map((l, i) => (
                  <div key={i} className="text-center space-y-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-[#0066FF] transition-all">
                     <p className="text-[#d31d24] font-black uppercase text-[10px] tracking-widest">{l.age}</p>
                     <h4 className="text-white text-xl font-black italic uppercase">{l.level}</h4>
                     <p className="text-slate-400 text-[10px] font-medium leading-relaxed">{l.desc}</p>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* 5. WHAT STUDENTS WILL LEARN */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div>
              <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-10 leading-none">Curriculum <br /> <span className="text-[#d31d24]">Breakdown.</span></h2>
              <div className="space-y-6">
                {curriculum.map((c, i) => (
                  <div key={i} className="group border-l-4 border-slate-100 hover:border-[#0066FF] pl-6 transition-all">
                    <h4 className="text-lg font-black uppercase text-[#0a1128] mb-2">{c.title}</h4>
                    <div className="flex flex-wrap gap-2">
                       {c.points.map(p => <span key={p} className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{p} •</span>)}
                    </div>
                  </div>
                ))}
              </div>
           </div>
           <div className="p-12 bg-slate-50 rounded-[3rem] border border-slate-100">
              <BookOpen className="text-[#0066FF] mb-6" size={48} />
              <h3 className="text-2xl font-black uppercase italic mb-4">Beyond the Board</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                Our curriculum isn't just about pieces. We teach students to analyze patterns, manage their time under pressure, and think three steps ahead in life as well as on the board.
              </p>
           </div>
        </div>
      </section>

      {/* 7. WEEKLY TRAINING SCHEDULE */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
              <table className="w-full text-left">
                <thead className="bg-[#0a1128] text-white uppercase text-[10px] font-black tracking-widest">
                  <tr>
                    <th className="p-6">Training Days</th>
                    <th className="p-6">Time Slot</th>
                    <th className="p-6">Batch Category</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-bold">Mon - Wed - Fri</td>
                    <td className="p-6 text-[#0066FF] font-black">5:00 PM</td>
                    <td className="p-6 uppercase text-xs font-black">Beginner Elite</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-bold">Tue - Thu - Sat</td>
                    <td className="p-6 text-[#0066FF] font-black">6:30 PM</td>
                    <td className="p-6 uppercase text-xs font-black">Master Intermediate</td>
                  </tr>
                </tbody>
              </table>
           </div>
        </div>
      </section>

      {/* 11. ACHIEVEMENTS */}
      <section className="py-24 bg-[#0a1128] text-white">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { val: "25+", lab: "State Champions", icon: Trophy },
             { val: "150+", lab: "Gold Medals", icon: Medal },
             { val: "12", lab: "National Qualifiers", icon: Award },
             { val: "100%", lab: "Success Rate", icon: Star },
           ].map((s, i) => (
             <div key={i} className="text-center space-y-2">
                <s.icon className="mx-auto text-[#0066FF] mb-4" size={40} />
                <p className="text-5xl font-black italic tracking-tighter">{s.val}</p>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{s.lab}</p>
             </div>
           ))}
        </div>
      </section>

      {/* 14. FAQ */}
      <section className="py-24 container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-black uppercase text-center mb-12 italic tracking-tighter">Everything you <span className="text-[#0066FF]">Need to Know.</span></h2>
        <div className="space-y-4">
          {faqData.map((faq, i) => (
            <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden">
               <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
               >
                  <span className="font-black uppercase text-sm">{faq.q}</span>
                  {openFaq === i ? <Minus size={16} /> : <Plus size={16} />}
               </button>
               {openFaq === i && (
                 <div className="p-6 pt-0 bg-white text-slate-500 text-sm font-medium leading-relaxed">
                   {faq.a}
                 </div>
               )}
            </div>
          ))}
        </div>
      </section>

      {/* 15. FINAL CTA SECTION */}
      <section className="py-24 px-6">
         <div className="container mx-auto max-w-5xl bg-[#d31d24] rounded-[3.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 space-y-8">
               <h2 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-tight">Ready to master <br /> the next move?</h2>
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="px-12 py-5 bg-[#0a1128] text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#0066FF] transition-all shadow-xl">
                    Book Free Trial
                  </button>
                  <button className="px-12 py-5 bg-white text-[#d31d24] rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl">
                    Talk to Coach
                  </button>
               </div>
               <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em]">Contact Us: +91 72595 82089 • info@enzosports.com</p>
            </div>
         </div>
      </section>

    </div>
  );
}