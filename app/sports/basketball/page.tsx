"use client";

import React from "react";
import SportPageLayout from "@/components/ui/sport-page-layout";
import SportBanner from "@/components/ui/sportsBanner";
import { Target, Users, Zap, ShieldCheck, Trophy, BarChart3, Globe2, Heart } from "lucide-react";

const levels = [
  {
    age: "6-9 Years",
    level: "Rookies",
    desc: "Ball handling, layups and basic rules.",
    img: "https://images.unsplash.com/photo-1528659109033-68d7120db8aa?q=80&w=600"
  },
  {
    age: "10-13 Years",
    level: "Hustlers",
    desc: "Shooting form, team defense and spacing.",
    img: "https://images.unsplash.com/photo-1518428135898-356c28f3cb52?q=80&w=600"
  },
  {
    age: "14-16 Years",
    level: "Varsity",
    desc: "Advanced plays, perimeter defense and athleticism.",
    img: "https://images.unsplash.com/photo-1542652735873-fb2814816f1c?q=80&w=600"
  },
  {
    age: "17+ Years",
    level: "Pro Prep",
    desc: "College-level drills and intense scrimmages.",
    img: "https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=600"
  }
];

const curriculum = [
  {
    title: "Ball Handling",
    points: ["Crossovers", "Pound Dribbles", "Weak Hand"]
  },
  {
    title: "Shooting Mechanics",
    points: ["B.E.E.F. Form", "Catch & Shoot", "Off the Dribble"]
  },
  {
    title: "Defensive Principles",
    points: ["Stance", "Closeouts", "Help Defense"]
  },
  {
    title: "Offensive Concepts",
    points: ["Spacing", "Cutting", "Screening"]
  },
  {
    title: "Athleticism",
    points: ["Lateral Quickness", "Vertical Leap", "Stamina"]
  }
];

const stats = [
  { val: "400+", lab: "Hoopers" },
  { val: "3", lab: "Indoor Courts" },
  { val: "10k+", lab: "Shots Weekly" },
  { val: "100%", lab: "Effort Required" }
];

const features = [
  {
    title: "Hardwood Courts",
    desc: "Premium indoor courts for optimal bounce and grip.",
    icon: ShieldCheck
  },
  {
    title: "Shooting Machines",
    desc: "Automated rebounding for high-volume shooting practice.",
    icon: Globe2
  },
  {
    title: "Vertical Training",
    desc: "Plyometric programs to increase vertical leap.",
    icon: Heart
  },
  {
    title: "Game IQ",
    desc: "Pick-and-roll reads and defensive rotations.",
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

export default function BasketballProgramPage() {
  return (
    <div className="bg-white font-sans text-[#0a1128]">
      <SportBanner sportKey="basketball" />
      <SportPageLayout
      sportKey="basketball"
      themeColor="#FB923C"
      title="Basketball Program"
      description="Elite shooting mechanics, defensive strategy, and court vision for the modern player. Dominate the court."
      features={features}
      stats={stats}
      highlights={highlights}
      highlightGifs={highlightGifs}
      levels={levels}
      curriculum={curriculum}
      faqData={faqData}
      faqImage="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200"
      statsImage="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200"
    />
    </div>
  );
}
