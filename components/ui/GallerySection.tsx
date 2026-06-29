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
  Flame
} from "lucide-react";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  span?: string;
}

const categories = [
  { id: "all", name: "All Moments", icon: Camera },
  { id: "tournaments", name: "Championships", icon: Trophy },
  { id: "training", name: "Elite Training", icon: Flame },
  { id: "certificates", name: "Achievements", icon: Medal },
  { id: "events", name: "Events", icon: Zap },
];

// --- DATA GENERATOR ---
// This generates the array for 1.jpeg - 109.jpeg and a1.jpeg - a30.jpeg
const generateGalleryData = (): GalleryImage[] => {
  const images: GalleryImage[] = [];
  const catKeys = ["tournaments", "training", "certificates", "events"];

  // Generate 1-109
  for (let i = 1; i <= 109; i++) {
    const cat = catKeys[i % catKeys.length];
    images.push({
      id: `img-${i}`,
      src: `/${i}.jpeg`,
      alt: `Enzo Elite Moment ${i}`,
      category: cat,
      title: `${cat.charAt(0).toUpperCase() + cat.slice(1)} Highlights`,
      description: "Capturing the spirit of athletic excellence and discipline.",
      // Adding Bento Grid spans to specific indices for visual rhythm
      span: i % 12 === 0 ? "md:col-span-2 md:row-span-2" : i % 7 === 0 ? "md:col-span-2 md:row-span-1" : "md:col-span-1 md:row-span-1"
    });
  }

  // Generate a1-a30
  for (let i = 1; i <= 30; i++) {
    const cat = catKeys[(i + 2) % catKeys.length];
    images.push({
      id: `img-a${i}`,
      src: `/a${i}.jpeg`,
      alt: `Enzo Elite Action a${i}`,
      category: cat,
      title: "Pro Action Series",
      description: "On-field performance and strategic mastery in action.",
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

  const openLightbox = (image: GalleryImage) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);
  
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
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* --- Header & Enhanced Filter --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="text-center lg:text-left space-y-4">
            <div className="flex items-center justify-center lg:justify-start gap-3">
               <div className="h-[2px] w-12 bg-[#d31d24]" />
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0066FF]">The Visual Archive</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#0a1128] uppercase italic tracking-tighter leading-none">
              Captured <span className="text-[#0066FF] not-italic">Victory.</span>
            </h2>
          </div>

          {/* Luxury Categories Tabs */}
          <div className="flex flex-wrap justify-center gap-2 bg-slate-50 p-2 rounded-[2rem] border border-slate-100 shadow-inner">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-[#0a1128] text-white shadow-xl scale-105"
                    : "text-slate-400 hover:text-[#0a1128]"
                }`}
              >
                <cat.icon className="w-3.5 h-3.5" />
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* --- Dynamic Bento Grid --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 auto-rows-[180px] md:auto-rows-[240px]">
          {filteredImages.map((image) => (
            <div 
              key={image.id}
              className={`group relative rounded-[2rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700 ${selectedCategory === 'all' ? image.span : 'col-span-1 row-span-1'}`}
              onClick={() => openLightbox(image)}
            >
              {/* Image with subtle zoom on hover */}
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />

              {/* High-Contrast Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-8">
                 <span className="text-[9px] font-black text-[#d31d24] uppercase tracking-[0.3em] mb-2">
                   {categories.find(c => c.id === image.category)?.name}
                 </span>
                 <h3 className="text-white text-lg md:text-xl font-black uppercase tracking-tight leading-none">
                    {image.title}
                 </h3>
                 <p className="text-slate-400 text-xs mt-3 line-clamp-2 font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                   {image.description}
                 </p>
              </div>

              {/* Corner Brand Accent */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all">
                 <Camera className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* --- Empty State --- */}
        {filteredImages.length === 0 && (
          <div className="text-center py-32">
             <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="text-slate-200" size={32} />
             </div>
             <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No moments found in this category.</p>
          </div>
        )}

      </div>

      {/* --- Elite Lightbox Modal --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a1128]/98 backdrop-blur-xl p-4 md:p-10 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Controls */}
          <button onClick={closeLightbox} className="absolute top-8 right-8 text-white/40 hover:text-[#d31d24] transition-colors z-[110]">
            <X className="w-10 h-10" />
          </button>

          <button 
            className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-all z-[110]"
            onClick={(e) => navigateImage('prev', e)}
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <button 
            className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-all z-[110]"
            onClick={(e) => navigateImage('next', e)}
          >
             <ChevronRight className="w-12 h-12" />
          </button>

          {/* Content Wrapper */}
          <div 
            className="bg-white rounded-[3rem] overflow-hidden shadow-2xl max-w-6xl w-full max-h-[90vh] flex flex-col md:flex-row relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* View Side */}
            <div className="w-full md:w-2/3 bg-[#050a18] flex items-center justify-center">
               <img 
                 src={selectedImage.src} 
                 alt={selectedImage.alt} 
                 className="max-h-[50vh] md:max-h-full w-full object-contain"
               />
            </div>

            {/* Info Side */}
            <div className="w-full md:w-1/3 p-10 md:p-16 bg-white flex flex-col justify-center border-l border-slate-50">
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-[#0066FF] rounded-full text-[10px] font-black uppercase tracking-widest mb-6 self-start">
                {categories.find(c => c.id === selectedImage.category)?.name}
              </span>
              <h3 className="text-3xl md:text-5xl font-black text-[#0a1128] uppercase italic tracking-tighter mb-6 leading-none">
                {selectedImage.title}
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">
                {selectedImage.description}
              </p>
              
              <div className="mt-12 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-[#d31d24]/10 flex items-center justify-center text-[#d31d24]">
                      <Trophy size={14} />
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0a1128]">Enzo Elite Records</span>
                </div>
              </div>
            </div>
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