"use client";

import React from "react";
import SportPageLayout from "@/components/ui/sport-page-layout";
import SportBanner from "@/components/ui/sportsBanner";
import { ShieldCheck, Globe2, Heart, Trophy } from "lucide-react";

const levels = [
  {
    age: "Kids (6-12)",
    level: "Sprouts",
    desc: "Fun animal poses and basic focus exercises.",
    img: "/sp.jpeg"
  },
  {
    age: "Teens (13-17)",
    level: "Balance",
    desc: "Flexibility, posture correction and stress relief.",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600"
  },
  {
    age: "Adults Beginner",
    level: "Foundation",
    desc: "Basic asanas, breath awareness and relaxation.",
    img: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=600"
  },
  {
    age: "Adults Advanced",
    level: "Flow",
    desc: "Vinyasa flows, advanced inversions and deep meditation.",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600"
  }
];

const curriculum = [
  {
    title: "Asana Practice",
    points: ["Standing Poses", "Seated Folds", "Backbends"]
  },
  {
    title: "Pranayama",
    points: ["Breath Control", "Kapalabhati", "Anulom Vilom"]
  },
  {
    title: "Meditation & Mindfulness",
    points: ["Yoga Nidra", "Focus Training", "Chanting"]
  },
  {
    title: "Anatomy & Alignment",
    points: ["Joint Safety", "Core Engagement", "Spinal Health"]
  },
  {
    title: "Yoga Philosophy",
    points: ["Yamas & Niyamas", "Mind-Body Connection", "Diet"]
  }
];

const stats = [
  { val: "350+", lab: "Yogis" },
  { val: "2", lab: "Zen Studios" },
  { val: "100%", lab: "Stress Reduced" },
  { val: "5+", lab: "Yoga Styles" }
];

const features = [
  {
    title: "Zen Environment",
    desc: "Peaceful, naturally lit studios with aromatherapy.",
    icon: ShieldCheck
  },
  {
    title: "Holistic Approach",
    desc: "Combining asanas, pranayama, and meditation.",
    icon: Globe2
  },
  {
    title: "Certified Gurus",
    desc: "Trained under traditional and modern yoga schools.",
    icon: Heart
  },
  {
    title: "Personalized Props",
    desc: "Blocks, straps and bolsters for safe alignment.",
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

export default function YogaProgramPage() {
  return (
    <div className="bg-white font-sans text-[#0a1128]">
      <SportBanner sportKey="yoga" />
      <SportPageLayout
      sportKey="yoga"
      themeColor="#10B981"
      title="Yoga Program"
      description="Ancient wisdom for modern wellness. Achieve physical flexibility, core strength, and mental clarity."
      features={features}
      stats={stats}
      highlights={highlights}
      highlightGifs={highlightGifs}
      levels={levels}
      curriculum={curriculum}
      faqData={faqData}
      faqImage="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200"
      statsImage="/yoga.jpeg"
    />
    </div>
  );
}
