"use client";

import React from "react";
import SportPageLayout from "@/components/ui/sport-page-layout";
import SportBanner from "@/components/ui/sportsBanner";
import { ShieldCheck, Globe2, Heart, Trophy } from "lucide-react";

const levels = [
  {
    age: "3-5 Years",
    level: "Water Babies",
    desc: "Water familiarization and basic floating.",
    img: "/babies.jpg"
  },
  {
    age: "6-9 Years",
    level: "Learn to Swim",
    desc: "Freestyle, backstroke and water safety.",
    img: "/learn.jpg"
  },
  {
    age: "10-14 Years",
    level: "Stroke Dev",
    desc: "Breaststroke, butterfly and dive starts.",
    img: "https://images.unsplash.com/photo-1560090995-01632a28895b?q=80&w=600"
  },
  {
    age: "15+ Years",
    level: "Competitive",
    desc: "Race pace training and advanced conditioning.",
    img: "/comp.webp"
  }
];

const curriculum = [
  {
    title: "Water Safety & Confidence",
    points: ["Floating", "Treading Water", "Submersion"]
  },
  {
    title: "Stroke Mechanics",
    points: ["Body Position", "Kick Timing", "Arm Recovery"]
  },
  {
    title: "Breathing Techniques",
    points: ["Bilateral Breathing", "Rhythm", "Lung Capacity"]
  },
  {
    title: "Race Starts & Turns",
    points: ["Block Starts", "Flip Turns", "Relay Takeoffs"]
  },
  {
    title: "Endurance Training",
    points: ["Pacing", "Heart Rate Zones", "Dryland Exercises"]
  }
];

const stats = [
  { val: "500+", lab: "Active Swimmers" },
  { val: "50m", lab: "Olympic Pool" },
  { val: "20+", lab: "State Medals" },
  { val: "100%", lab: "Safety Record" }
];

const features = [
  {
    title: "Olympic Standards",
    desc: "Train in our state-of-the-art temperature-controlled pools.",
    icon: ShieldCheck
  },
  {
    title: "Stroke Correction",
    desc: "Advanced underwater cameras to perfect your technique.",
    icon: Globe2
  },
  {
    title: "Safety First",
    desc: "Certified lifeguards and strict safety protocols at all times.",
    icon: Heart
  },
  {
    title: "Endurance Building",
    desc: "Specialized land and water conditioning.",
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

export default function SwimmingProgramPage() {
  return (
    <div className="bg-white font-sans text-[#0a1128]">
      <SportBanner sportKey="swimming" />
      <SportPageLayout
      sportKey="swimming"
      themeColor="#00E5FF"
      title="Swimming Program"
      description="Dive into professional aquatic training. From basic strokes to competitive racing techniques, master the water with our certified coaches."
      features={features}
      stats={stats}
      highlights={highlights}
      highlightGifs={highlightGifs}
      levels={levels}
      curriculum={curriculum}
      faqData={faqData}
      faqImage="https://images.unsplash.com/photo-1530549387633-f71f9911bc01?q=80&w=1200"
      statsImage="/a29.jpeg"
    />
    </div>
  );
}
