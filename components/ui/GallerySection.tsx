"use client";
import React, { useState, useMemo } from "react";
import { 
  Camera, 
  Trophy, 
  Medal, 
  Zap, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Flame,
  Maximize2
} from "lucide-react";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  span?: string;
}

const categories = [
  { id: "all", name: "All Moments", icon: Camera },
  { id: "tournaments", name: "Championships", icon: Trophy },
  { id: "training", name: "Elite Training", icon: Flame },
  { id: "certificates", name: "Achievements", icon: Medal },
  { id: "events", name: "Events", icon: Zap },
];

const generateGalleryData = (): GalleryImage[] => {
  const images: GalleryImage[] = [];
  const catKeys = ["tournaments", "training", "certificates", "events"];

  // Generate 1-109
  for (let i = 1; i <= 109; i++) {
    images.push({
      id: `img-${i}`,
      src: `/${i}.jpeg`,
      alt: `Moment ${i}`,
      category: catKeys[i % catKeys.length],
      span: i % 12 === 0 ? "md:col-span-2 md:row-span-2" : i % 7 === 0 ? "md:col-span-2 md:row-span-1" : "md:col-span-1 md:row-span-1"
    });
  }

  // Generate a1-a30
  for (let i = 1; i <= 30; i++) {
    images.push({
      id: `img-a${i}`,
      src: `/a${i}.jpeg`,
      alt: `Action a${i}`,
      category: catKeys[(i + 2) % catKeys.length],
      span: i % 5 === 0 ? "md:col-span-2 md:row-span-1" : "md:col-span-1 md:row-span-1"
    });
  }
  return images;
};

const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  const allImages = useMemo(() => generateGalleryData(), []);

  const filteredImages = selectedCategory === "all" 
    ? allImages 
    : allImages.filter(img => img.category === selectedCategory);

  const navigateImage = (direction: 'next' | 'prev', e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredImages.length 
      : (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* --- Minimal Filter Header --- */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="flex items-center gap-3">
             <div className="w-10 h-[2px] bg-[#d31d24]" />
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0a1128]">Gallery Showcase</span>
          </div>

          <div className="flex flex-wrap justify-center gap-2 bg-slate-50 p-1.5 rounded-full border border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-[#0a1128] text-white shadow-lg"
                    : "text-slate-400 hover:text-[#0a1128]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* --- Image Only Grid --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[220px]">
          {filteredImages.map((image) => (
            <div 
              key={image.id}
              className={`group relative rounded-2xl md:rounded-[2rem] overflow-hidden cursor-pointer bg-slate-100 border border-slate-50 transition-all duration-700 hover:shadow-2xl ${selectedCategory === 'all' ? image.span : 'col-span-1 row-span-1'}`}
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />

              {/* Minimalist Hover Overlay */}
              <div className="absolute inset-0 bg-[#0a1128]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                 <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-500">
                    <Maximize2 size={20} />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Minimalist Lightbox --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#0a1128] p-4 md:p-12 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          {/* Controls */}
          <button onClick={() => setSelectedImage(null)} className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors z-[1100]">
            <X className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          <button 
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-all z-[1100] p-4"
            onClick={(e) => navigateImage('prev', e)}
          >
            <ChevronLeft className="w-10 h-10 md:w-16 md:h-16" />
          </button>

          <button 
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-all z-[1100] p-4"
            onClick={(e) => navigateImage('next', e)}
          >
             <ChevronRight className="w-10 h-10 md:w-16 md:h-16" />
          </button>

          {/* Main Image Container */}
          <div 
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt="Elite Moment" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl shadow-black/50 animate-in zoom-in-95 duration-300"
            />
          </div>
        </div>
      )}

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default GallerySection;