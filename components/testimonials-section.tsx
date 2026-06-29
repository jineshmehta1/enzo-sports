"use client";

import React, { useRef } from "react";
import { 
  ArrowLeft, 
  ArrowRight, 
  Quote, 
  Star, 
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?q=80&w=200&auto=format&fit=crop", 
    name: "Tarun Aggarwal",
    role: "Father of student",
    text: "Exceptional. If you want your child to excel in sports, you should consider this academy. Prashanth sir is an expert in coaching kids to bring out their best.",
    rating: 5,
    accent: "#0066FF" 
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=200&auto=format&fit=crop", 
    name: "Shalini Kanth",
    role: "Father of Lavith (Age 7)",
    text: "Had a great experience with Coach Mr. Prashanth M sir. He's very passionate towards sports and extremely hardworking.",
    rating: 5,
    accent: "#d31d24" 
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop", 
    name: "Eshan Gupta",
    role: "Student",
    text: "Humble, kind, and truly dedicated. My child loves his classes—clear explanations, great patience, and real passion for chess. Amazing progress.",
    rating: 5,
    accent: "#0a1128" 
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=200&auto=format&fit=crop", 
    name: "Aarti Parmar",
    role: "Mother of Student",
    text: "Well-planned classes and individual detailed attention for overall development of the kid. Highly recommended!",
    rating: 5,
    accent: "#0066FF"
  },
];

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      // Adjust scroll distance based on screen width
      const scrollAmount = window.innerWidth < 768 ? 300 : 450;
      current.scrollBy({ 
        left: direction === "left" ? -scrollAmount : scrollAmount, 
        behavior: "smooth" 
      });
    }
  };

  return (
    <section className="relative py-12 md:py-24 bg-white overflow-hidden">
      
      {/* Background Decorative Large Quote (Subtle Watermark) */}
      <div className="absolute top-0 left-0 opacity-[0.02] pointer-events-none select-none translate-x-[-10%] translate-y-[-10%]">
        <Quote size={300} md-size={500} />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        
        {/* --- Responsive Header Section --- */}
        <div className="text-center lg:text-left mb-12 md:mb-20 space-y-4">
          <div className="flex items-center justify-center lg:justify-start gap-3">
             <div className="h-[2px] w-8 md:w-12 bg-[#d31d24]" />
             <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-[#0066FF]">The Enzo Family</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#0a1128] uppercase italic tracking-tighter leading-none">
            Voices of Our <br className="md:hidden" />
            <span className="text-[#d31d24] not-italic">Elite Community</span>
          </h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[9px] md:text-xs max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Real stories from athletes and parents on the path to performance excellence.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-start">
          
          {/* --- Left Column: Hero Message (Sticky on Desktop) --- */}
          <div className="w-full lg:w-1/3 space-y-6 md:space-y-10 lg:sticky lg:top-32">
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-black text-[#0a1128] leading-[1.1] relative z-10 uppercase italic">
                More than a game, <br />
                it's a <span className="text-[#0066FF] not-italic">Transformation</span> <br />
                we build together.
              </h3>
              <div className="w-12 h-1 md:w-20 md:h-2 bg-[#d31d24] mt-6 rounded-full" />
            </div>

            {/* Chess Piece Decoration - Responsive Visibility */}
            <div className="relative pt-6 hidden sm:block">
              <div className="absolute inset-0 bg-[#0066FF]/5 blur-3xl rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=400&auto=format&fit=crop" 
                alt="Strategy Mastery"
                className="w-32 md:w-86 h-auto object-contain relative z-10 drop-shadow-2xl"
              />
            </div>
          </div>

          {/* --- Right Column: Responsive Carousel --- */}
          <div className="w-full lg:w-2/3">
            <div 
                ref={scrollContainerRef}
                className="flex gap-4 md:gap-8 overflow-x-auto pb-10 px-2 snap-x snap-mandatory no-scrollbar touch-pan-x"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {testimonials.map((item) => (
                  <div 
                    key={item.id} 
                    className="relative flex-shrink-0 w-[85vw] sm:w-[350px] md:w-[420px] snap-start"
                  >
                    <div className="h-full bg-slate-50 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] flex flex-col border border-slate-100 relative group transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-slate-200">
                      
                      {/* Rating & Top Icon */}
                      <div className="flex justify-between items-center mb-6 md:mb-10">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center bg-white shadow-sm">
                           <Quote className="w-5 h-5 md:w-6 md:h-6" style={{ color: item.accent }} />
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber-400 fill-amber-400" />
                          ))}
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-slate-600 text-base md:text-xl leading-relaxed italic mb-8 md:mb-12 flex-grow font-medium">
                        "{item.text}"
                      </p>

                      {/* Author Card */}
                      <div className="flex items-center gap-4 pt-6 border-t border-slate-200/60">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-white shadow-md shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-[#0a1128] font-black uppercase tracking-tight text-sm md:text-lg">{item.name}</h4>
                          <p className="text-[#d31d24] text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] mt-0.5">{item.role}</p>
                        </div>
                      </div>

                      {/* Reference UI Design: Bottom Notch */}
                      <div 
                        className="absolute bottom-0 left-12 right-12 h-1.5 rounded-t-full transition-all duration-300 opacity-60 group-hover:opacity-100"
                        style={{ backgroundColor: item.accent }}
                      />
                      <div 
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 transition-all duration-300 opacity-60 group-hover:opacity-100"
                        style={{ backgroundColor: item.accent }}
                      />
                    </div>
                  </div>
                ))}
            </div>

            {/* Navigation UI: Centered on Mobile, End-aligned on Desktop */}
            <div className="flex justify-center lg:justify-end gap-4 mt-6">
              <button 
                onClick={() => scroll("left")}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0a1128] text-white flex items-center justify-center hover:bg-[#0066FF] transition-all shadow-xl active:scale-95"
                aria-label="Previous"
              >
                <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button 
                onClick={() => scroll("right")}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0a1128] text-white flex items-center justify-center hover:bg-[#0066FF] transition-all shadow-xl active:scale-95"
                aria-label="Next"
              >
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}