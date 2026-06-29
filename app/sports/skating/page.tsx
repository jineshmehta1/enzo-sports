"use client";

import React from "react";
import SportPageLayout from "@/components/ui/sport-page-layout";
import SportBanner from "@/components/ui/sportsBanner";
import { ShieldCheck, Globe2, Heart, Trophy } from "lucide-react";

const levels = [
  {
    age: "4-6 Years",
    level: "Rollers",
    desc: "Balance, posture and basic strides.",
    img: "https://images.unsplash.com/photo-1506544777-626a5c102a06?q=80&w=600"
  },
  {
    age: "7-10 Years",
    level: "Cruisers",
    desc: "Turning, stopping and basic crossovers.",
    img: "https://images.unsplash.com/photo-1520689914619-bc78b32367ea?q=80&w=600"
  },
  {
    age: "11-14 Years",
    level: "Speedsters",
    desc: "Advanced edges and speed generation.",
    img: "https://images.unsplash.com/photo-1596784860363-2bd13437efb9?q=80&w=600"
  },
  {
    age: "15+ Years",
    level: "Pro Racers",
    desc: "Inline speed skating and competition prep.",
    img: "https://images.unsplash.com/photo-1629858694084-26da89d8db12?q=80&w=600"
  }
];

const curriculum = [
  {
    title: "Fundamentals",
    points: ["Stance", "Weight Transfer", "Fall Safety"]
  },
  {
    title: "Edge Control",
    points: ["Inside Edges", "Outside Edges", "Parallel Turns"]
  },
  {
    title: "Speed Mechanics",
    points: ["Arm Swing", "Stride Length", "Sprint Starts"]
  },
  {
    title: "Advanced Maneuvers",
    points: ["Crossovers", "T-Stops", "Slalom Weaving"]
  },
  {
    title: "Race Tactics",
    points: ["Drafting", "Pacing", "Overtaking"]
  }
];

const stats = [
  { val: "300+", lab: "Skaters Trained" },
  { val: "10k", lab: "Sqft Pro Rink" },
  { val: "15", lab: "National Reps" },
  { val: "99%", lab: "Success Rate" }
];

const features = [
  {
    title: "Pro Rink",
    desc: "Smooth, professional-grade synthetic skating surfaces.",
    icon: ShieldCheck
  },
  {
    title: "Speed Training",
    desc: "Aerodynamic positioning and explosive start drills.",
    icon: Globe2
  },
  {
    title: "Agility Focus",
    desc: "Slalom and edge-work mastery.",
    icon: Heart
  },
  {
    title: "Protective Gear",
    desc: "Strict adherence to safety equipment.",
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

export default function SkatingProgramPage() {
  return (
    <div className="bg-white font-sans text-[#0a1128]">
      <SportBanner sportKey="skating" />
      <SportPageLayout
      sportKey="skating"
      themeColor="#0066FF"
      title="Skating Program"
      description="Master the art of balance and high-velocity maneuvers on wheels. Learn from national-level champions."
      features={features}
      stats={stats}
      highlights={highlights}
      highlightGifs={highlightGifs}
      levels={levels}
      curriculum={curriculum}
      faqData={faqData}
      faqImage="https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1200"
      statsImage="https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1200"
    />
    </div>
  );
}
