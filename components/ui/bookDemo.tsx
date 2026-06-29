"use client";

import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Trophy, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Star,
  X,
  MessageSquare
} from 'lucide-react';

interface BookDemoProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookDemo: React.FC<BookDemoProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    athleteName: "",
    athleteAge: "",
    phone: "",
    sport: "Skating",
    preferredSlot: "Evening (4 PM - 7 PM)",
  });

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Trial Session Booking - ENZO ELITE*%0A` +
      `-------------------------------------------%0A` +
      `*Parent:* ${formData.parentName}%0A` +
      `*Athlete:* ${formData.athleteName} (Age: ${formData.athleteAge})%0A` +
      `*Sport:* ${formData.sport}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Preferred Slot:* ${formData.preferredSlot}%0A` +
      `-------------------------------------------`;

    const whatsappUrl = `https://wa.me/917259582089?text=${message}`;
    window.open(whatsappUrl, "_blank");
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-2 sm:p-4 lg:p-6 transition-all duration-300">
      {/* Dynamic Blur Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0a1128]/80 backdrop-blur-md animate-in fade-in duration-500" 
        onClick={onClose} 
      />
      
      {/* Modal Container */}
      <div className="relative bg-white rounded-2xl md:rounded-[2rem] md:rounded-3xl md:rounded-[3rem] w-full max-w-5xl max-h-[92vh] overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-300">
        
        {/* Close Button - Optimized for Mobile Thumb Reach */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-8 md:right-8 z-50 p-2 md:p-3 rounded-full bg-slate-100/80 hover:bg-[#d31d24] hover:text-white transition-all duration-300"
        >
          <X className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Scrollable Content Area */}
        <div className="overflow-y-auto custom-scrollbar">
          <div className="p-6 md:p-12 lg:p-16">
            
            {/* Header Section */}
            <div className="text-center mb-10 md:mb-14 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-100">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#0a1128]">The Enzo Standard</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-black text-[#0a1128] uppercase italic tracking-tighter leading-none">
                Start Your <span className="text-[#d31d24]">Elite Journey</span>
              </h1>
              <p className="text-slate-500 font-bold max-w-xl mx-auto uppercase tracking-tight text-[11px] md:text-xs">
                Schedule a professional skill assessment & experience the performance ecosystem first-hand.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
              
              {/* --- 1. THE FORM SIDE --- */}
              <div className="flex-grow bg-white rounded-2xl md:rounded-[2rem] p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-50">
                {!isSubmitted ? (
                  <form onSubmit={handleWhatsAppSubmit} className="space-y-6 md:space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                      
                      {/* Inputs with Icons */}
                      {[
                        { name: "parentName", label: "Parent Name", icon: User, placeholder: "Full Name", type: "text" },
                        { name: "athleteName", label: "Athlete Name", icon: Trophy, placeholder: "Student Name", type: "text" },
                        { name: "athleteAge", label: "Athlete Age", icon: Calendar, placeholder: "Age (e.g. 12)", type: "number" },
                        { name: "phone", label: "WhatsApp Number", icon: Phone, placeholder: "+91", type: "tel" },
                      ].map((field) => (
                        <div key={field.name} className="space-y-2">
                          <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                            <field.icon size={14} className="text-[#0066FF]" /> {field.label} *
                          </label>
                          <input 
                            name={field.name}
                            type={field.type}
                            required 
                            onChange={handleChange} 
                            className="enzo-input" 
                            placeholder={field.placeholder} 
                          />
                        </div>
                      ))}

                      {/* Select Fields */}
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                          <ShieldCheck size={14} className="text-[#d31d24]" /> Select Sport *
                        </label>
                        <select name="sport" onChange={handleChange} className="enzo-input appearance-none bg-[#f8fafc]">
                          <option>Skating</option>
                          <option>Chess</option>
                          <option>Swimming</option>
                          <option>Soccer</option>
                          <option>Basketball</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                          <Clock size={14} className="text-[#0066FF]" /> Preferred Slot
                        </label>
                        <select name="preferredSlot" onChange={handleChange} className="enzo-input appearance-none bg-[#f8fafc]">
                          <option>Morning (9 AM - 12 PM)</option>
                          <option>Evening (4 PM - 7 PM)</option>
                          <option>Weekends (All Day)</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button 
                        type="submit" 
                        className="group w-full flex items-center justify-center gap-4 bg-[#d31d24] hover:bg-[#0a1128] text-white py-5 md:py-6 rounded-2xl font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-500 shadow-xl shadow-red-600/20 hover:-translate-y-1 active:scale-95"
                      >
                        Claim Free Assessment
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </button>
                      <p className="text-center text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-4">
                        Instant confirmation will be sent to your WhatsApp
                      </p>
                    </div>
                  </form>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12 md:py-20 space-y-6">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 animate-bounce">
                      <CheckCircle2 size={48} />
                    </div>
                    <h2 className="text-3xl font-black text-[#0a1128] uppercase italic tracking-tighter">Booking Sent!</h2>
                    <p className="text-slate-500 text-sm font-medium max-w-xs leading-relaxed">
                      We've opened WhatsApp to finalize your session. Our head coach will confirm your slot shortly.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)} 
                      className="text-[#0066FF] font-black uppercase text-[10px] tracking-widest border-b-2 border-[#0066FF]"
                    >
                      Change Details
                    </button>
                  </div>
                )}
              </div>

              {/* --- 2. THE SIDEBAR SIDE --- */}
              <div className="lg:w-[320px] shrink-0 flex flex-col gap-6">
                {/* Trust Info Card */}
                <div className="bg-[#0a1128] rounded-2xl md:rounded-[2rem] p-8 text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#0066FF]/20 rounded-full blur-3xl" />
                  <h3 className="text-lg font-black uppercase italic tracking-tighter mb-6 relative z-10">Direct Support</h3>
                  
                  <div className="space-y-6 relative z-10">
                    <a href="tel:7259582089" className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d31d24] group-hover:bg-[#d31d24] group-hover:text-white transition-all">
                        <Phone size={18} />
                      </div>
                      <div>
                        <p className="text-[9px] font-black uppercase text-slate-500 tracking-widest leading-none mb-1">Call Support</p>
                        <p className="text-sm font-bold">72595 82089</p>
                      </div>
                    </a>

                    <a href="mailto:enzosportsblr@gmail.com" className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#0066FF] group-hover:bg-[#0066FF] group-hover:text-white transition-all">
                        <Mail size={18} />
                      </div>
                      <div>
                        <p className="text-[9px] font-black uppercase text-slate-500 tracking-widest leading-none mb-1">Email Admissions</p>
                        <p className="text-sm font-bold truncate max-w-[140px]">enzosportsblr@gmail.com</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Benefits List Card */}
                <div className="bg-slate-50 rounded-2xl md:rounded-[2rem] p-8 border border-slate-100 flex-grow">
                  <div className="flex items-center gap-2 mb-6">
                    <MessageSquare size={16} className="text-[#0066FF]" />
                    <h3 className="text-[11px] font-black uppercase text-[#0a1128] tracking-widest">Assessment Goals:</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Skill Baseline Analysis",
                      "Physical Agility Check",
                      "Coach Meet & Greet",
                      "Gear & Schedule Guide"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-[#0066FF] shrink-0 mt-0.5" />
                        <span className="text-xs font-bold text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .enzo-input {
          width: 100%;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 0.875rem 1.25rem;
          border-radius: 1rem;
          font-weight: 700;
          color: #0a1128;
          font-size: 0.85rem;
          transition: all 0.3s;
        }
        .enzo-input:focus {
          outline: none;
          background: white;
          border-color: #0066FF;
          box-shadow: 0 10px 30px -10px rgba(0, 102, 255, 0.15);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default BookDemo;