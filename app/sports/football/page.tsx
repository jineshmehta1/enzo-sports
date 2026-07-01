"use client";

import React from "react";
import SportPageLayout from "@/components/ui/sport-page-layout";
import SportBanner from "@/components/ui/sportsBanner";
import { ShieldCheck, Globe2, Heart, Trophy } from "lucide-react";

const levels = [
  {
    age: "5-7 Years",
    level: "Kickstarters",
    desc: "Fun games, basic dribbling and coordination.",
    img: "/kick.jpg"
  },
  {
    age: "8-11 Years",
    level: "Development",
    desc: "Passing, shooting, and basic positional play.",
    img: "/dve.jpg"
  },
  {
    age: "12-14 Years",
    level: "Academy",
    desc: "Tactical awareness and advanced ball control.",
    img: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=600"
  },
  {
    age: "15+ Years",
    level: "Elite Squad",
    desc: "Match fitness, systems of play and exposure.",
    img: "/elite.jpeg"
  }
];

const curriculum = [
  {
    title: "Technical Skills",
    points: ["First Touch", "Dribbling", "Passing Range"]
  },
  {
    title: "Tactical Awareness",
    points: ["Spatial Awareness", "Pressing", "Transitions"]
  },
  {
    title: "Physical Conditioning",
    points: ["Agility", "Sprint Speed", "Core Strength"]
  },
  {
    title: "Set Pieces",
    points: ["Corners", "Free Kicks", "Defensive Setup"]
  },
  {
    title: "Match Psychology",
    points: ["Decision Making", "Communication", "Leadership"]
  }
];

const stats = [
  { val: "800+", lab: "Players Enrolled" },
  { val: "2", lab: "FIFA Turfs" },
  { val: "50+", lab: "Trophies Won" },
  { val: "5", lab: "Scouted Pros" }
];

const features = [
  {
    title: "FIFA Standard Turf",
    desc: "Train on premium quality artificial grass.",
    icon: ShieldCheck
  },
  {
    title: "Tactical Clinics",
    desc: "Video analysis and formation studies.",
    icon: Globe2
  },
  {
    title: "Strength & Conditioning",
    desc: "Football-specific fitness regimens.",
    icon: Heart
  },
  {
    title: "League Matches",
    desc: "Regular competitive fixtures to test skills.",
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

export default function FootballProgramPage() {
  return (
    <div className="bg-white font-sans text-[#0a1128]">
      <SportBanner sportKey="football" />
      <SportPageLayout
      sportKey="football"
      themeColor="#4ADE80"
      title="Football Program"
      description="Tactical discipline, teamwork, and professional ball control. Build your legacy on our FIFA-standard pitches."
      features={features}
      stats={stats}
      highlights={highlights}
      highlightGifs={highlightGifs}
      levels={levels}
      curriculum={curriculum}
      faqData={faqData}
      faqImage="/foot2.jpg"
      statsImage="/foot.jpg"
    />
    </div>
  );
}
