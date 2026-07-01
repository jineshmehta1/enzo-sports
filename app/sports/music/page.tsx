"use client";

import React from "react";
import SportPageLayout from "@/components/ui/sport-page-layout";
import SportBanner from "@/components/ui/sportsBanner";
import { ShieldCheck, Globe2, Heart, Trophy } from "lucide-react";

const levels = [
  {
    age: "5-7 Years",
    level: "Little Notes",
    desc: "Rhythm basics, ear training and fun songs.",
    img: "/begi.jpeg"
  },
  {
    age: "8-12 Years",
    level: "Melody Makers",
    desc: "Reading sheet music and basic instrument skills.",
    img: "/inter.jpeg"
  },
  {
    age: "13-16 Years",
    level: "Harmonics",
    desc: "Advanced techniques, scales and band performance.",
    img: "/adv.webp"
  },
  {
    age: "17+ Years",
    level: "Maestros",
    desc: "Composition, improvisation and grade exams.",
    img: "/adv.jpeg"
  }
];

const curriculum = [
  {
    title: "Music Theory",
    points: ["Sight Reading", "Scales & Modes", "Time Signatures"]
  },
  {
    title: "Instrumental Technique",
    points: ["Posture", "Finger Dexterity", "Tone Production"]
  },
  {
    title: "Ear Training",
    points: ["Pitch Recognition", "Intervals", "Chord Qualities"]
  },
  {
    title: "Performance Skills",
    points: ["Stage Presence", "Overcoming Nerves", "Ensemble Playing"]
  },
  {
    title: "Composition",
    points: ["Songwriting", "Arranging", "Digital Audio Basics"]
  }
];

const stats = [
  { val: "250+", lab: "Musicians" },
  { val: "5", lab: "Instruments" },
  { val: "50+", lab: "Live Shows" },
  { val: "100%", lab: "Grade Pass Rate" }
];

const features = [
  {
    title: "Soundproof Studios",
    desc: "Acoustically treated rooms for perfect resonance.",
    icon: ShieldCheck
  },
  {
    title: "Pro Instruments",
    desc: "Access to grand pianos, high-end guitars and kits.",
    icon: Globe2
  },
  {
    title: "Trinity Syllabus",
    desc: "Curriculum aligned with international grade exams.",
    icon: Heart
  },
  {
    title: "Live Performances",
    desc: "Regular showcases in our in-house auditorium.",
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
const levelImages = [
  "/begi.jpeg",
  "/inter.jpeg",
  "/adv.webp",
  "/adv.jpeg",
];

export default function MusicProgramPage() {
  return (
    <div className="bg-white font-sans text-[#0a1128]">
      <SportBanner sportKey="music" />
      <SportPageLayout
      sportKey="music"
      themeColor="#EC4899"
      title="Music Program"
      description="Instrumental mastery and vocal discipline. Express your soul through professional music education."
      features={features}
      stats={stats}
      highlights={highlights}
      highlightGifs={highlightGifs}
      levels={levels}
      curriculum={curriculum}
      faqData={faqData}
      levelImages={levelImages}  
      faqImage="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200"
      statsImage="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200"
    />
    </div>
  );
}
