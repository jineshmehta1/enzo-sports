"use client";

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  MessageSquare, 
  Clock,
  ShieldCheck,
  User,
  Activity
} from 'lucide-react';

const ContactSection: React.FC = () => {
  // 1. State for form inputs
  const [formData, setFormData] = useState({
    parentName: "",
    athleteName: "",
    athleteAge: "",
    email: "",
    phone: "",
    sport: "Skating",
    message: "",
  });

  // 2. Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 3. Handle WhatsApp Submission
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*Elite Performance Inquiry - ENZO SPORTS*%0A` +
      `-------------------------------------------%0A` +
      `*Parent Name:* ${formData.parentName}%0A` +
      `*Athlete Name:* ${formData.athleteName}%0A` +
      `*Athlete Age:* ${formData.athleteAge}%0A` +
      `*Interest:* ${formData.sport}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Message:* ${formData.message}%0A` +
      `-------------------------------------------`;

    const whatsappUrl = `https://wa.me/917259582089?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-50 rounded-full blur-[100px] opacity-60 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-red-50 rounded-full blur-[100px] opacity-40 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* --- MAIN CONTACT CARD --- */}
        <div className="flex flex-col lg:flex-row rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(10,17,40,0.12)] border border-slate-100 bg-white">
          
          {/* LEFT: BRAND INFO */}
          <div className="w-full lg:w-[40%] bg-[#0a1128] p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden flex flex-col justify-between">
            {/* Speed Line Overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <path d="M0,400 L400,0 M100,400 L400,100 M-100,400 L400,-100" stroke="white" strokeWidth="30" fill="none" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[2px] w-10 bg-[#d31d24]" />
                <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] text-[#0066FF]">Direct Access</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-6 leading-[1]">
                Get In <br /> <span className="text-[#0066FF] not-italic">Touch.</span>
              </h2>
              
              <p className="text-slate-400 font-medium text-sm sm:text-base mb-10 leading-relaxed max-w-md">
                Have questions about our elite programs? Our coordinators are ready to help you plan your child's athletic journey.
              </p>

              <div className="space-y-6 md:space-y-8">
                {/* Contact Items */}
                <a href="tel:+917259582089" className="flex items-center gap-5 group">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#d31d24] group-hover:border-[#d31d24] transition-all">
                    <Phone className="w-5 h-5 text-[#d31d24] group-hover:text-white" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-0.5">Call Director</span>
                    <p className="text-base sm:text-lg font-bold">+91 72595 82089</p>
                  </div>
                </a>

                <a href="mailto:enzosportsblr@gmail.com" className="flex items-center gap-5 group">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#0066FF] group-hover:border-[#0066FF] transition-all">
                    <Mail className="w-5 h-5 text-[#0066FF] group-hover:text-white" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-0.5">Official Email</span>
                    <p className="text-base sm:text-lg font-bold break-all">enzosportsblr@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-5 group">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-0.5">Location</span>
                    <p className="text-base sm:text-lg font-bold leading-tight">Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 mt-12 pt-8 border-t border-white/5 flex items-center gap-3">
              <ShieldCheck className="text-[#0066FF] w-5 h-5 animate-pulse" />
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Official School Games Organiser Venue</p>
            </div>
          </div>

          {/* RIGHT: SUBMISSION FORM */}
          <div className="w-full lg:w-[60%] p-6 sm:p-10 md:p-16 bg-white">
            <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl font-black text-[#0a1128] uppercase tracking-tight mb-2">Registration Inquiry</h3>
                <p className="text-slate-400 text-sm font-medium italic">Your inquiry will be directly forwarded to our Head Coach.</p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-4 md:space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-1.5">
                      <User size={12} className="text-[#d31d24]" /> Parent Name *
                    </label>
                    <input name="parentName" value={formData.parentName} onChange={handleChange} className="enzo-input" placeholder="Full Name" required />
                </div>
                <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-1.5">
                      <Activity size={12} className="text-[#0066FF]" /> Athlete Name *
                    </label>
                    <input name="athleteName" value={formData.athleteName} onChange={handleChange} className="enzo-input" placeholder="Student Name" required />
                </div>
                <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Athlete Age *</label>
                    <input name="athleteAge" type="number" value={formData.athleteAge} onChange={handleChange} className="enzo-input" placeholder="e.g. 10" required />
                </div>
                <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone / WhatsApp *</label>
                    <input name="phone" type="tel" value={formData.phone} onChange={handleChange} className="enzo-input" placeholder="+91" required />
                </div>
                
                <div className="md:col-span-2 space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Program of Interest</label>
                    <select name="sport" value={formData.sport} onChange={handleChange} className="enzo-input appearance-none bg-[#f8fafc]">
                        <option>Skating</option>
                        <option>Chess</option>
                        <option>Swimming</option>
                        <option>Soccer</option>
                        <option>Basketball</option>
                        <option>General Inquiry</option>
                    </select>
                </div>

                <div className="md:col-span-2 space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Additional Message (Optional)</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} className="enzo-input resize-none h-24 md:h-32" placeholder="Tell us about your child's goals..." />
                </div>
              </div>

              <button
                type="submit"
                className="group w-full md:w-auto bg-[#d31d24] hover:bg-[#0a1128] text-white font-black uppercase tracking-widest text-[11px] py-5 px-12 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-red-600/20 active:scale-95 mt-4"
              >
                Send Inquiry to Coach
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* --- MAP & AVAILABILITY GRID --- */}
        <div className="mt-12 sm:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* GOOGLE MAP CARD */}
            <div className="lg:col-span-2">
                <div className="w-full h-[300px] sm:h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border-4 md:border-8 border-slate-50 relative group">
                    <iframe
                        title="Enzo Elite Sports Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.926154942944!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670cdc965c3%3A0x7d59ed00263f03b!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                        className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-1000"
                        loading="lazy"
                    />
                </div>
            </div>
            
            {/* AVAILABILITY CARD */}
            <div className="bg-[#0066FF] rounded-[2rem] p-8 md:p-10 text-white flex flex-col justify-center space-y-6 md:space-y-8 shadow-2xl relative overflow-hidden min-h-[300px]">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Clock size={100} />
                </div>
                <div className="relative z-10">
                    <h4 className="text-xl sm:text-2xl font-black uppercase italic tracking-tighter mb-6 leading-tight">Training <br /> Windows</h4>
                    <ul className="space-y-4">
                        {[
                          { days: "Mon - Fri", time: "4 PM - 8 PM" },
                          { days: "Saturday", time: "9 AM - 6 PM" },
                          { days: "Sunday", time: "Tournament Focus", accent: true },
                        ].map((slot, i) => (
                          <li key={i} className="flex justify-between items-center border-b border-white/10 pb-2">
                              <span className="text-[10px] font-black uppercase tracking-widest opacity-60">{slot.days}</span>
                              <span className={`font-bold text-sm sm:text-base ${slot.accent ? "text-[#0a1128]" : ""}`}>{slot.time}</span>
                          </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-[#0a1128]/20 p-4 rounded-xl flex items-center gap-4 border border-white/5">
                    <MessageSquare className="w-6 h-6 text-white" />
                    <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest leading-tight">Elite Support: <br /> <span className="text-white">Active WhatsApp Desk</span></p>
                </div>
            </div>
        </div>
      </div>

      {/* Styled-JSX for Form Elements */}
      <style jsx>{`
        .enzo-input {
          width: 100%;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 0.85rem 1.25rem;
          border-radius: 1rem;
          font-weight: 700;
          color: #0a1128;
          font-size: 0.875rem;
          transition: all 0.3s;
        }
        .enzo-input:focus {
          outline: none;
          background: white;
          border-color: #0066FF;
          box-shadow: 0 10px 20px -5px rgba(0, 102, 255, 0.1);
        }
        @media (max-width: 640px) {
          .enzo-input {
            padding: 0.75rem 1rem;
            font-size: 0.8125rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;