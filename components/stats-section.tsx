"use client";
import React, { useState } from "react";
import { Plus, Minus, HelpCircle, Phone, Mail, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What age groups do you cater to?",
    answer: "We offer specialized programs for children as young as 5 years old up to competitive teenage athletes (18+). Our groups are strictly divided by both age and skill level to ensure optimal development and safety.",
  },
  {
    question: "Can my child enroll in multiple sports?",
    answer: "Absolutely. We encourage 'Multisport Development.' Our schedule is designed so that students can attend multiple programs, such as Skating and Chess or Soccer and Swimming, without overlapping slots.",
  },
  {
    question: "Do you provide equipment for the trial session?",
    answer: "Yes! For your first trial session, we provide all necessary equipment (skates, chess boards, soccer balls). If you choose to enroll, our coaches will provide a gear list tailored to your child's level.",
  },
  {
    question: "Who are the coaches at Enzo Elite Sports?",
    answer: "Our coaching staff consists of former national-level athletes, certified FIDE chess instructors, and professional physical educators. Every coach undergoes rigorous background checks and safety training.",
  },
  {
    question: "What is your refund policy for monthly memberships?",
    answer: "We offer flexible monthly billing. If you need to pause or cancel, simply notify us 7 days before the next billing cycle. We do not provide partial refunds for mid-month cancellations.",
  },
  {
    question: "Are there competitive opportunities and tournaments?",
    answer: "Yes. We regularly host internal leagues and sponsor our elite students for regional and national level tournaments in Chess, Skating, and Soccer to provide them with real competitive exposure.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Brand Colors
  const electricBlue = "#0066FF";
  const enzoRed = "#d31d24";
  const navyBlue = "#0a1128";

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* --- Left Column: Header & Support --- */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 md:w-12 bg-[#d31d24]" />
                <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-[#0066FF]">
                  Enzo Support
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#0a1128] leading-tight uppercase italic tracking-tighter">
                Frequently Asked <br />
                <span className="text-[#d31d24] not-italic">Questions</span>
              </h2>
              <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed max-w-md">
                Everything you need to know about joining the Enzo Elite family. If you don't find your answer here, our team is ready to help.
              </p>
            </div>

            {/* Red Theme Support Card - Responsive Padding */}
            <div className="p-6 md:p-8 bg-[#0a1128] rounded-[2rem] md:rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl border-b-8 border-[#d31d24]">
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#d31d24] rounded-2xl flex items-center justify-center shadow-lg shadow-red-600/30">
                  <HelpCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">Need More help?</h3>
                
                <div className="space-y-4">
                  <a href="tel:+917259582089" className="flex items-center gap-3 md:gap-4 group">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#0066FF] transition-colors shrink-0">
                        <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#0066FF] group-hover:text-white" />
                    </div>
                    <span className="text-xs md:text-sm font-bold tracking-tight">+91 7259582089</span>
                  </a>
                  <a href="mailto:enzosportsblr@gmail.com" className="flex items-center gap-3 md:gap-4 group">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#0066FF] transition-colors shrink-0">
                        <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#0066FF] group-hover:text-white" />
                    </div>
                    <span className="text-xs md:text-sm font-bold break-all tracking-tight">enzosportsblr@gmail.com</span>
                  </a>
                </div>

                <button className="w-full py-3.5 md:py-4 bg-[#d31d24] hover:bg-[#0066FF] text-white rounded-xl md:rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg shadow-red-600/20">
                    Download Brochure
                </button>
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 md:w-40 md:h-40 bg-[#d31d24]/10 rounded-full blur-3xl" />
            </div>
          </div>

          {/* --- Right Column: Accordion --- */}
          <div className="w-full lg:w-2/3 space-y-3 md:space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`group transition-all duration-300 border border-slate-100 ${
                    isOpen 
                      ? "bg-slate-50 rounded-2xl md:rounded-3xl p-5 md:p-8 border-l-4 md:border-l-8 border-l-[#d31d24] shadow-xl" 
                      : "bg-white p-4 md:p-6 hover:bg-slate-50 rounded-xl md:rounded-2xl"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                        <span className={`text-[10px] md:text-xs font-black shrink-0 ${isOpen ? "text-[#d31d24]" : "text-slate-300"}`}>
                            0{index + 1}
                        </span>
                        <span className={`text-sm sm:text-base md:text-xl font-black uppercase tracking-tight transition-colors pr-2 ${
                        isOpen ? "text-[#0a1128]" : "text-[#0a1128] group-hover:text-[#0066FF]"
                        }`}>
                        {faq.question}
                        </span>
                    </div>
                    <div className={`shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center transition-all ${
                      isOpen ? "bg-[#d31d24] text-white rotate-180 shadow-lg shadow-red-600/20" : "bg-slate-100 text-slate-400"
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4 md:w-5 md:h-5" /> : <Plus className="w-4 h-4 md:w-5 md:h-5" />}
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[300px] opacity-100 mt-4 md:mt-6" : "max-h-0 opacity-0"
                  }`}>
                    <div className="pl-6 md:pl-8 border-l border-slate-200">
                        <p className="text-slate-600 leading-relaxed font-medium text-xs md:text-base">
                        {faq.answer}
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-[#0066FF] font-black uppercase tracking-widest text-[9px] md:text-[10px] hover:translate-x-1 transition-transform cursor-pointer">
                            Learn More <ArrowRight className="w-2.5 h-2.5 md:w-3 md:h-3" />
                        </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;