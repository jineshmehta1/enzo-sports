"use client";
import React from 'react';
import { Award, Users, MapPin, Quote, ShieldCheck, Instagram, Linkedin, Mail } from 'lucide-react';

const FounderSection: React.FC = () => {
  // Brand Colors
  const navy = "#0a1128";
  const red = "#d31d24";
  const electricBlue = "#0066FF";

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* --- Visual Side: The Director's Portrait --- */}
          <div className="w-full lg:w-5/12 relative">
            <div className="relative z-10 group max-w-[450px] mx-auto lg:mx-0">
              {/* Back Decorative Frame - Hidden on smallest mobile to avoid clutter */}
              <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-full h-full border-2 border-slate-100 rounded-3xl md:rounded-[3.5rem] -z-10 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
              
              {/* Main Image Container */}
              <div className="relative aspect-[4/5] rounded-3xl md:rounded-[3.5rem] overflow-hidden shadow-2xl border-[6px] md:border-8 border-white">
                <img 
                  src="/prashant.png" 
                  alt="Prashanth M - Director"
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Bottom Label on Image */}
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 right-6">
                   <p className="text-white/60 text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-1 md:mb-2">Director's Office</p>
                   <h3 className="text-white text-2xl md:text-4xl font-black uppercase italic tracking-tighter">Prashanth M</h3>
                </div>
              </div>

              {/* Experience Badge - Responsive Positioning */}
              <div className="absolute -bottom-6 -right-4 md:-bottom-10 md:-right-10 bg-[#d31d24] text-white p-5 md:p-8 rounded-2xl md:rounded-[2.5rem] shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 z-20">
                <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest opacity-80 leading-none">Industry Expert</p>
                <div className="flex items-baseline gap-1 mt-1">
                    <p className="text-3xl md:text-5xl font-black italic leading-none">15</p>
                    <span className="text-xl md:text-2xl font-black italic">+</span>
                </div>
                <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest leading-none mt-1">Years Legacy</p>
              </div>
            </div>
          </div>

          {/* --- Content Side: The Visionary --- */}
          <div className="w-full lg:w-7/12 space-y-8 md:space-y-12 mt-10 lg:mt-0">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 md:w-12 bg-[#d31d24]" />
                <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-[#0066FF]">The Visionary</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-[#0a1128] leading-[1] md:leading-[0.9] uppercase italic tracking-tighter">
                Leadership Built <br className="hidden sm:block" />
                On <span className="text-[#d31d24] not-italic">Discipline.</span>
              </h2>

              <div className="relative pl-6 md:pl-10 border-l-4 border-slate-100">
                <Quote className="absolute top-0 left-[-1.2rem] md:left-[-1.5rem] text-[#0066FF] opacity-10 w-8 h-8 md:w-12 md:h-12" />
                <p className="text-lg md:text-2xl text-slate-600 font-bold italic leading-relaxed">
                  "At Enzo Elite, we don't just teach sports; we architect the next generation of intellectual and physical leaders. Excellence isn't a goal—it's our baseline."
                </p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6 text-slate-500 font-medium leading-relaxed text-sm md:text-base">
              <p>
                Prashanth M serves as the driving force behind Enzo Elite Sports. As a prominent <strong>Bangalore School Games Organiser</strong>, his influence extends across the regional athletic landscape, bringing a professional, tournament-grade standard to grassroots sports development.
              </p>
              <p>
                Under his leadership, Enzo Elite has evolved into a premier multisport ecosystem. His philosophy bridges the gap between raw kinetic energy and calculated strategic mastery.
              </p>
            </div>

            {/* Accreditations Grid - Responsive Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-red-100 transition-colors">
                <Award className="w-6 h-6 text-[#d31d24] shrink-0" />
                <div>
                  <h4 className="text-xs md:text-sm font-black text-[#0a1128] uppercase">Games Organiser</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Bangalore School Games</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-blue-100 transition-colors">
                <ShieldCheck className="w-6 h-6 text-[#0066FF] shrink-0" />
                <div>
                  <h4 className="text-xs md:text-sm font-black text-[#0a1128] uppercase">Certified Director</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Sports Management Elite</p>
                </div>
              </div>
            </div>

            {/* Call to Action / Socials - Stacks on mobile */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10 pt-8 border-t border-slate-100">
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-50 flex items-center justify-center text-[#0a1128] hover:bg-[#0066FF] hover:text-white transition-all shadow-sm">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-50 flex items-center justify-center text-[#0a1128] hover:bg-[#d31d24] hover:text-white transition-all shadow-sm">
                  <Instagram size={18} />
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#0066FF]">
                    <Mail size={18} />
                </div>
                <div className="flex flex-col">
                    <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">Connect Directly</p>
                    <p className="text-sm md:text-lg font-black text-[#0a1128] tracking-tight">director@enzosports.com</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FounderSection;