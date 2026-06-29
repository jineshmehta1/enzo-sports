"use client";

import React from "react";
import SportPageLayout from "@/components/ui/sport-page-layout";
import SportBanner from "@/components/ui/sportsBanner";
import { ShieldCheck, Globe2, Heart, Trophy } from "lucide-react";

const levels = [
  { age: "5-7 Years", level: "Beginner", desc: "Foundational moves and piece values." },
  { age: "8-11 Years", level: "Foundation", desc: "Basic tactics and opening principles." },
  { age: "12-14 Years", level: "Intermediate", desc: "Middlegame strategy and positional play." },
  { age: "15+ Years", level: "Advanced", desc: "Endgame mastery and tournament prep." },
];

const curriculum = [
  { title: "Opening Principles", points: ["Center Control", "Piece Development", "King Safety"] },
  { title: "Tactical Motifs", points: ["Forks & Pins", "Skewer Attacks", "Discovery Checks"] },
  { title: "Middlegame Strategy", points: ["Pawn Structures", "Outpost Management", "Exchange Sacrifices"] },
  { title: "Endgame Mastery", points: ["Opposition", "King & Pawn Basics", "Rook Endgames"] },
  { title: "Mental Conditioning", points: ["Focus Training", "Time Management", "Resilience"] },
];

const faqData = [
  { q: "Do I need prior experience?", a: "No. We have dedicated batches for absolute beginners where we teach everything from scratch." },
  { q: "What should I bring?", a: "We provide professional tournament-grade chess sets. Just bring a notebook and a focused mind." },
  { q: "What is the batch size?", a: "We maintain a strict 1:12 coach-to-student ratio to ensure personalized attention." },
  { q: "Are there competition opportunities?", a: "Yes. Our students participate in weekly internal leagues and monthly state/national tournaments." },
];

const stats = [
  { val: "1200+", lab: "Games Played" },
  { val: "98%", lab: "Success Rate" },
  { val: "25+", lab: "State Champions" }
];

const features = [
  { title: "Certified Coaches", desc: "Learn from experienced FIDE-rated professionals.", icon: ShieldCheck },
  { title: "International Curriculum", desc: "Structured training based on global standards.", icon: Globe2 },
  { title: "Positive Environment", desc: "Safe, motivating and student-focused learning.", icon: Heart },
  { title: "Tournament Exposure", desc: "Regular internal & external chess competitions.", icon: Trophy }
];

const highlights = [
  { t: "Professional Coaching", d: "One-on-one feedback loops." },
  { t: "Small Batch Size", d: "Strict 1:12 coach ratio." },
  { t: "Modern Equipment", d: "Digital boards & analysis softs." },
  { t: "Match Practice", d: "Weekly internal league play." },
  { t: "Skill Tracking", d: "Monthly digital progress reports." },
  { t: "Tournament Exposure", d: "State & National level entries." },
];

export default function ChessProgramPage() {
  return (
    <div className="bg-white font-sans text-[#0a1128]">
      <SportBanner sportKey="chess" />
      <SportPageLayout
      sportKey="chess"
      themeColor="#0066FF"
      title="Chess Program"
      description="At Enzo Elite Sports, chess is far more than a board game. We develop analytical thinking, decision making, concentration, patience and confidence through structured coaching by experienced FIDE-rated instructors."
      features={features}
      stats={stats}
      highlights={highlights}
      levels={levels}
      curriculum={curriculum}
      curriculumDesc="Our curriculum isn't just about pieces. We teach students to analyze patterns, manage their time under pressure, and think three steps ahead in life as well as on the board."
      faqData={faqData}
      faqImage="https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=1200"
      statsImage="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=1200"
    />
    </div>
  );
}