"use client";
import React, { useState, useEffect } from "react";
import { MenuIcon, XIcon, ArrowRightIcon, ChevronDownIcon, Trophy, Users } from "lucide-react";
import BookDemo from "./ui/bookDemo";

interface NavItem {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
}

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Indoor",
      href: "#",
      dropdown: [
        { name: "Chess", href: "/sports/chess" },
        { name: "Music", href: "/sports/music" },
        { name: "Dance", href: "/sports/dance" },
        { name: "Art & Craft", href: "/sports/art-and-craft" },
        { name: "Yoga", href: "/sports/yoga" },
      ],
    },
    {
      name: "Outdoor",
      href: "#",
      dropdown: [
        { name: "Swimming", href: "/sports/swimming" },
        { name: "Skating", href: "/sports/skating" },
        { name: "Football", href: "/sports/football" },
        { name: "Basketball", href: "/sports/basketball" },
        { name: "Cricket", href: "/sports/cricket" },
      ],
    },
    { name: "Coaches", href: "/coaches" },
    { name: "Achievements", href: "/achievements" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const electricBlue = "#0066FF";
  const navyBlue = "#0a1128";
  const enzoRed = "#d31d24";

  return (
    <>
      <header
        className={`fixed z-50 transition-all duration-500 left-0 right-0 ${
          scrolled
            ? "top-4 mx-4 md:mx-auto max-w-7xl rounded-2xl bg-white/90 backdrop-blur-xl shadow-2xl border border-blue-100"
            : "top-0 bg-transparent"
        }`}
      >
        <div className={`px-4 md:px-6 ${scrolled ? "py-1" : "py-4 max-w-[1440px] mx-auto"}`}>
          <div className="flex items-center justify-between">
            
            {/* --- Logo Area --- */}
            <a href="/" className="flex items-center group shrink-0">
              <div className={`relative transition-all duration-500 ${scrolled ? "w-24 h-12" : "w-32 h-16 md:w-48 md:h-20"}`}>
                <img
                  src="/enzo.png" 
                  alt="Enzo Elite Sports"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </a>

            {/* --- Central Navbar Pill (Desktop) --- */}
            <nav className="hidden xl:flex items-center gap-1 bg-slate-100/50 p-1.5 rounded-full border border-slate-200 shadow-inner">
              {navItems.map((item) => (
                <div 
                  key={item.name} 
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <button
                      className={`flex items-center gap-1 px-4 py-2 text-[13px] font-black uppercase tracking-tight transition-all rounded-full ${
                        activeDropdown === item.name 
                          ? "bg-[#0066FF] text-white shadow-lg shadow-blue-500/30" 
                          : "text-[#0a1128] hover:text-[#0066FF]"
                      }`}
                    >
                      {item.name}
                      <ChevronDownIcon className={`w-3.5 h-3.5 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="px-4 py-2 text-[13px] font-black uppercase tracking-tight text-[#0a1128] hover:text-[#0066FF] transition-all rounded-full relative group"
                    >
                      {item.name}
                      <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#0066FF] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </a>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 pt-3 w-48 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden py-2 ring-1 ring-black/5">
                        {item.dropdown.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            className="block px-6 py-2.5 text-[12px] font-bold text-[#0a1128] hover:bg-blue-50 hover:text-[#0066FF] transition-colors"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* --- Action Section --- */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsBookModalOpen(true)}
                className={`hidden lg:flex items-center gap-2 bg-[#d31d24] hover:bg-[#0a1128] text-white rounded-full font-black text-[10px] uppercase tracking-[0.15em] transition-all shadow-lg hover:-translate-y-0.5 active:scale-95 ${
                  scrolled ? "px-6 py-3" : "px-8 py-4"
                }`}
              >
                Join the Elite
                <ArrowRightIcon className="w-4 h-4" />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`xl:hidden p-3 rounded-full transition-all ${
                  isMobileMenuOpen ? "bg-[#d31d24] text-white rotate-90" : "bg-blue-50 text-[#0066FF] hover:bg-blue-100"
                }`}
              >
                {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* --- Mobile Full-Width Menu --- */}
        <div
          className={`xl:hidden absolute left-4 right-4 top-[calc(100%+12px)] bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-[90vh] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-10 pointer-events-none"
          }`}
        >
          <div className="p-6 space-y-2 overflow-y-auto max-h-[80vh]">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-slate-50 last:border-0 pb-2">
                {item.dropdown ? (
                  <div className="py-2">
                    <div className="px-4 mb-3 text-[11px] font-black uppercase tracking-widest text-[#0066FF]">
                      {item.name} Sports
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className="px-4 py-3 rounded-2xl bg-slate-50 text-xs font-extrabold text-[#0a1128] hover:bg-blue-50 active:bg-blue-100 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="flex items-center justify-between px-4 py-4 text-base font-black uppercase tracking-tighter text-[#0a1128] hover:text-[#0066FF]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                    {item.name === "Achievements" && <Trophy className="w-5 h-5 text-amber-500" />}
                    {item.name === "Coaches" && <Users className="w-5 h-5 text-[#0066FF]" />}
                  </a>
                )}
              </div>
            ))}
            <div className="pt-6 pb-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsBookModalOpen(true);
                }}
                className="block w-full text-center py-5 rounded-[1.5rem] bg-[#0a1128] text-white font-black uppercase tracking-widest text-xs hover:bg-[#d31d24] transition-colors"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Book Demo Modal */}
      <BookDemo 
        isOpen={isBookModalOpen} 
        onClose={() => setIsBookModalOpen(false)} 
      />
    </>
  );
};

export default Header;