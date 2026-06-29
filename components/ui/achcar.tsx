"use client";
import React from "react";
import { Trophy, Medal, Star } from "lucide-react";

const AchievementCarousel: React.FC = () => {
  // Array of your achievement images (1.jpeg - 10.jpeg)
  const row1 = ["138.jpeg", "132.jpeg", "131.jpeg", "123.jpeg", "105.jpeg","a1.jpeg", "85.jpeg","42.jpeg", "16.jpeg"];
  const row2 = ["a26.jpeg", "a20.jpeg", "a15.jpeg", "a6.jpeg", "s3.jpeg","61.jpeg", "75.jpeg","60.jpeg", "56.jpeg"];

  return (
    <section className="py-10 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        {/* --- Section Header --- */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex items-center gap-3">
            <Trophy className="text-[#d31d24] w-5 h-5" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0066FF]">
              Victory Gallery
            </span>
            <Trophy className="text-[#d31d24] w-5 h-5" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#0a1128] uppercase italic tracking-tighter">
            Our Hall of <span className="text-[#0066FF] not-italic">Champions</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#d31d24] rounded-full" />
        </div>
      </div>

      {/* --- Marquee Container --- */}
      <div className="flex flex-col gap-6">
        
        {/* ROW 1: Moving Left */}
        <div className="relative flex overflow-x-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-6 py-4">
            {[...row1, ...row1].map((img, idx) => (
              <div key={idx} className="relative w-[300px] md:w-[400px] aspect-video shrink-0 group">
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#0066FF] rounded-2xl transition-all duration-500 z-20" />
                <img
                  src={`/${img}`}
                  alt="Achievement"
                  className="w-full h-full object-cover rounded-2xl shadow-xl  group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#d31d24] p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-30">
                  <Medal className="text-white w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Moving Right */}
        <div className="relative flex overflow-x-hidden">
          <div className="flex animate-marquee-reverse whitespace-nowrap gap-6 py-4">
            {[...row2, ...row2].map((img, idx) => (
              <div key={idx} className="relative w-[300px] md:w-[400px] aspect-video shrink-0 group">
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#d31d24] rounded-2xl transition-all duration-500 z-20" />
                <img
                  src={`/${img}`}
                  alt="Achievement"
                  className="w-full h-full object-cover rounded-2xl shadow-lg group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#0066FF] p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-30">
                  <Star className="text-white w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* --- Inline Styles for Animation --- */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
        .animate-marquee:hover, .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default AchievementCarousel;