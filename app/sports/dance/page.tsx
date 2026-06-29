"use client";

import React from "react";
import SportPageLayout from "@/components/ui/sport-page-layout";
import SportBanner from "@/components/ui/sportsBanner";
import { ShieldCheck, Globe2, Heart, Trophy } from "lucide-react";

const levels = [
  {
    age: "4-7 Years",
    level: "Tiny Toes",
    desc: "Creative movement and basic rhythm.",
    img: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=600"
  },
  {
    age: "8-12 Years",
    level: "Groovers",
    desc: "Technique foundations and routine memorization.",
    img: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=600"
  },
  {
    age: "13-16 Years",
    level: "Rhythm Squad",
    desc: "Advanced choreography and expression.",
    img: "https://images.unsplash.com/photo-1535525153412-5a092c668b5a?q=80&w=600"
  },
  {
    age: "17+ Years",
    level: "Elite Crew",
    desc: "Performance companies and competition teams.",
    img: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=600"
  }
];

const curriculum = [
  {
    title: "Technique",
    points: ["Posture", "Extensions", "Isolations"]
  },
  {
    title: "Rhythm & Timing",
    points: ["Musicality", "Syncopation", "Phrasing"]
  },
  {
    title: "Flexibility & Strength",
    points: ["Core Control", "Splits", "Stamina"]
  },
  {
    title: "Choreography Retention",
    points: ["Memory Drills", "Transitions", "Formations"]
  },
  {
    title: "Expression",
    points: ["Facial Expressions", "Storytelling", "Stage Presence"]
  }
];

const stats = [
  { val: "450+", lab: "Dancers" },
  { val: "4", lab: "Dance Styles" },
  { val: "10+", lab: "Crew Titles" },
  { val: "3", lab: "Pro Studios" }
];

const features = [
  {
    title: "Sprung Floors",
    desc: "Professional dance flooring to protect joints.",
    icon: ShieldCheck
  },
  {
    title: "Mirrored Studios",
    desc: "Wall-to-wall mirrors for perfect alignment check.",
    icon: Globe2
  },
  {
    title: "Versatile Styles",
    desc: "From Hip-Hop and Contemporary to Classical.",
    icon: Heart
  },
  {
    title: "Choreography",
    desc: "Learn to create and perform original routines.",
    icon: Trophy
  }
];

const faqData = [
  { q: "Do I need prior experience?", a: "No. We have dedicated batches for absolute beginners where we teach everything from scratch." },
  { q: "What should I bring?", a: "Just comfortable sportswear and a water bottle. We provide all the specialized equipment needed for training." },
  { q: "What is the batch size?", a: "We maintain a strict low coach-to-student ratio to ensure personalized attention and safety." },
  { q: "Are there competition opportunities?", a: "Yes. Our students participate in regular internal showcases and external state/national tournaments." },
];

const highlights = [
  { t: "Pro Coaching", d: "One-on-one feedback loops." },
  { t: "Small Batches", d: "Strict attention to each student." },
  { t: "Modern Equipment", d: "Best in class facilities." },
  { t: "Match Practice", d: "Weekly internal sessions." },
  { t: "Skill Tracking", d: "Monthly digital progress reports." },
  { t: "Tournaments", d: "State & National level entries." },
];

const highlightGifs = [
  "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
  "https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif",
  "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
  "https://media.giphy.com/media/26AHONQ79FdWZhAIw/giphy.gif",
  "https://media.giphy.com/media/l0HlSi3AIOM3fAhX2/giphy.gif",
  "https://media.giphy.com/media/3oEduUy2KjJbH30BNe/giphy.gif"
];

export default function DanceProgramPage() {
  return (
    <div className="bg-white font-sans text-[#0a1128]">
      <SportBanner sportKey="dance" />
      <SportPageLayout
      sportKey="dance"
      themeColor="#F43F5E"
      title="Dance Program"
      description="Classical, contemporary, and urban styles. Develop rhythm, grace, and athletic agility."
      features={features}
      stats={stats}
      highlights={highlights}
      highlightGifs={highlightGifs}
      levels={levels}
      curriculum={curriculum}
      faqData={faqData}
      faqImage="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200"
      statsImage="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200"
    />
    </div>
  );
}
