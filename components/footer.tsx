"use client";

import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  ArrowUp,
  MessageCircle,
  MapPin,
  ChevronRight,
  ShieldCheck
} from "lucide-react";

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const internalLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Coaches", href: "/coaches" },
    { name: "Achievements", href: "/achievements" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  // Updated based on Header
  const indoorSports = [
    { name: "Chess", href: "/sports/chess" },
    { name: "Music", href: "/sports/music" },
    { name: "Dance", href: "/sports/dance" },
    { name: "Art & Craft", href: "/sports/art-and-craft" },
    { name: "Yoga", href: "/sports/yoga" },
  ];

  // Updated based on Header
  const outdoorSports = [
    { name: "Skating", href: "/sports/skating" },
    { name: "Football", href: "/sports/football" },
    { name: "Swimming", href: "/sports/swimming" },
    { name: "Basketball", href: "/sports/basketball" },
    { name: "Cricket", href: "/sports/cricket" },
  ];

  return (
    <footer className="relative bg-[#0a1128] text-white overflow-hidden font-sans border-t border-white/5">
      
      {/* Background Aesthetic Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
         <svg viewBox="0 0 400 400" className="w-full h-full">
            <path d="M0,400 L400,0 M100,400 L400,100 M200,400 L400,200" stroke="white" strokeWidth="20" fill="none" />
         </svg>
      </div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#d31d24]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
               <img src="/enzo.png" alt="Enzo Elite Sports" className="h-14 w-auto object-contain " />
               <p className="text-slate-400 text-sm leading-relaxed mt-4">
                 India's premier multisport academy dedicated to technical mastery, character building, and elite performance.
               </p>
            </div>

            <div className="flex gap-3">
                {[Facebook, Instagram, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#0066FF] transition-all duration-300">
                    <Icon size={18} />
                  </a>
                ))}
            </div>

            <div className="pt-2 flex items-center gap-2 text-[#d31d24]">
                <ShieldCheck size={20} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Certified Elite Academy</span>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
             <h4 className="text-sm font-black uppercase tracking-[0.3em] text-[#0066FF] mb-8">
               Quick Links
             </h4>
             <ul className="space-y-4">
                {internalLinks.map(link => (
                   <li key={link.name}>
                      <a href={link.href} className="group flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-bold">
                         <ChevronRight size={14} className="text-[#d31d24] group-hover:translate-x-1 transition-transform" />
                         {link.name}
                      </a>
                   </li>
                ))}
             </ul>
          </div>

          {/* Column 3: Sports Categories (Synchronized with Header) */}
          <div>
             <h4 className="text-sm font-black uppercase tracking-[0.3em] text-[#d31d24] mb-8">
               Our Programs
             </h4>
             <div className="space-y-6">
                <div>
                    <p className="text-[10px] font-black uppercase text-slate-500 mb-3 tracking-widest">Indoor Disciplines</p>
                    <div className="flex flex-wrap gap-2">
                        {indoorSports.map(s => (
                            <a key={s.name} href={s.href} className="text-[11px] font-bold px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#0066FF] border border-white/10 transition-colors">
                                {s.name}
                            </a>
                        ))}
                    </div>
                </div>
                <div>
                    <p className="text-[10px] font-black uppercase text-slate-500 mb-3 tracking-widest">Outdoor Disciplines</p>
                    <div className="flex flex-wrap gap-2">
                        {outdoorSports.map(s => (
                            <a key={s.name} href={s.href} className="text-[11px] font-bold px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#d31d24] border border-white/10 transition-colors">
                                {s.name}
                            </a>
                        ))}
                    </div>
                </div>
             </div>
          </div>

          {/* Column 4: Contact (Updated for Bangalore) */}
          <div>
             <h4 className="text-sm font-black uppercase tracking-[0.3em] text-[#0066FF] mb-8">
               Connect
             </h4>
             <div className="space-y-5">
                <a href="tel:+917259582089" className="flex items-start gap-4 group">
                    <div className="mt-1 w-8 h-8 rounded-lg bg-[#d31d24]/20 flex items-center justify-center text-[#d31d24] group-hover:bg-[#d31d24] group-hover:text-white transition-all">
                        <Phone size={14} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase text-slate-500">Admissions</p>
                        <p className="text-sm font-bold">+91 7259582089</p>
                    </div>
                </a>
                <a href="mailto:enzosportsblr@gmail.com" className="flex items-start gap-4 group">
                    <div className="mt-1 w-8 h-8 rounded-lg bg-[#0066FF]/20 flex items-center justify-center text-[#0066FF] group-hover:bg-[#0066FF] group-hover:text-white transition-all">
                        <Mail size={14} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase text-slate-500">Official Email</p>
                        <p className="text-sm font-bold">enzosportsblr@gmail.com</p>
                    </div>
                </a>
                <div className="flex items-start gap-4">
                    <div className="mt-1 w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400">
                        <MapPin size={14} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase text-slate-500">Academy Hub</p>
                        <p className="text-xs font-medium text-slate-300 leading-relaxed">
                            Bangalore, Karnataka <br /> India
                        </p>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                   © {new Date().getFullYear()} <span className="text-white">Enzo Elite Sports</span>. All rights reserved.
                </p>
                <p className="text-[10px] text-slate-600 mt-2 uppercase tracking-tighter">
                    Crafted by{" "}
                    <a 
                        href="https://wa.me/917851988964" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-[#0066FF] transition-colors font-black"
                    >
                        JINESH MEHTA
                    </a>
                </p>
              </div>
              
            </div>
        </div>
      </div>

      {/* Floating WhatsApp Action */}
      <a
         href="https://wa.me/917259582089"
         target="_blank"
         rel="noopener noreferrer"
         className="fixed bottom-8 left-8 z-[60] flex items-center gap-3 bg-[#25D366] text-white px-5 py-4 rounded-2xl shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
      >
         <div className="relative">
            <MessageCircle size={24} fill="currentColor" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
         </div>
         <div className="flex flex-col leading-none">
            <span className="text-[9px] font-black uppercase tracking-widest opacity-80 uppercase">Elite Desk</span>
            <span className="font-black text-sm uppercase tracking-tight">Chat Now</span>
         </div>
      </a>

      {/* Top Scroll Button */}
      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-8 right-8 z-[60] p-4 bg-[#d31d24] text-white rounded-2xl shadow-2xl 
          transition-all duration-500 transform hover:-translate-y-2
          ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'}
        `}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} strokeWidth={3} />
      </button>

    </footer>
  );
}