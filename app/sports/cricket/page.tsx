"use client";

import React from "react";
import SportPageLayout from "@/components/ui/sport-page-layout";
import SportBanner from "@/components/ui/sportsBanner";
import { ShieldCheck, Globe2, Heart, Trophy } from "lucide-react";

const levels = [
  {
    age: "6-9 Years",
    level: "Grassroots",
    desc: "Basic grip, stance, and soft-ball cricket.",
    img: "/cric1.jpeg"
  },
  {
    age: "10-13 Years",
    level: "Challengers",
    desc: "Hard-ball transition, basic bowling actions.",
    img: "/cric2.webp"
  },
  {
    age: "14-16 Years",
    level: "State Prep",
    desc: "Advanced strokeplay and variations in bowling.",
    img: "/cric3.jpeg"
  },
  {
    age: "17+ Years",
    level: "Premier",
    desc: "Professional conditioning and tactical acumen.",
    img: "/cric4.jpg"
  }
];

const curriculum = [
  {
    title: "Batting Technique",
    points: ["Grip & Stance", "Footwork", "Shot Selection"]
  },
  {
    title: "Pace Bowling",
    points: ["Run-up", "Release Point", "Swing & Seam"]
  },
  {
    title: "Spin Bowling",
    points: ["Flight", "Turn", "Variations"]
  },
  {
    title: "Fielding & Fitness",
    points: ["Catching", "Throwing Accuracy", "Agility"]
  },
  {
    title: "Match Tactics",
    points: ["Field Placements", "Pacing an Innings", "Pressure Handling"]
  }
];

const stats = [
  { val: "600+", lab: "Cricketers" },
  { val: "10", lab: "Practice Nets" },
  { val: "1st", lab: "League Rank" },
  { val: "12", lab: "State Players" }
];

const features = [
  {
    title: "Bowling Machines",
    desc: "Face up to 150kmph with variable swing and spin.",
    icon: ShieldCheck
  },
  {
    title: "Turf Wickets",
    desc: "Train on match-simulation clay and grass pitches.",
    icon: Globe2
  },
  {
    title: "Video Analysis",
    desc: "Frame-by-frame biomechanical breakdown.",
    icon: Heart
  },
  {
    title: "Match Simulations",
    desc: "Open net sessions with match-like pressure.",
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
  "/prof.jpg",
  "/small.jpg",
  "/creative.png",
  "/focus.png",
  "/skill.png",
  "/tour.jpg"
];

export default function CricketProgramPage() {
  return (
    <div className="bg-white font-sans text-[#0a1128]">
      <SportBanner sportKey="cricket" />
      <SportPageLayout
      sportKey="cricket"
      themeColor="#EF4444"
      title="Cricket Program"
      description="Professional batting, bowling, and strategic gameplay designed for competitive tournament play."
      features={features}
      stats={stats}
      highlights={highlights}
      highlightGifs={highlightGifs}
      levels={levels}
      curriculum={curriculum}
      faqData={faqData}
      faqImage="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1200"
      statsImage="/acad.jpeg"
    />
    </div>
  );
}
