"use client";

import React from "react";
import SportPageLayout from "@/components/ui/sport-page-layout";
import SportBanner from "@/components/ui/sportsBanner";
import { ShieldCheck, Globe2, Heart, Trophy } from "lucide-react";

const levels = [
  {
    age: "4-7 Years",
    level: "Little Picassos",
    desc: "Finger painting, basic shapes and colors.",
    img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=600"
  },
  {
    age: "8-12 Years",
    level: "Sketchers",
    desc: "Pencil shading, perspective and watercolors.",
    img: "/art.jpg"
  },
  {
    age: "13-16 Years",
    level: "Creators",
    desc: "Acrylics, canvas work and basic sculpting.",
    img: "/canvas.jpeg"
  },
  {
    age: "17+ Years",
    level: "Visionaries",
    desc: "Portfolio development and advanced mixed media.",
    img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600"
  }
];

const curriculum = [
  {
    title: "Fundamentals of Drawing",
    points: ["Line & Shape", "Proportion", "Perspective"]
  },
  {
    title: "Color Theory",
    points: ["Mixing", "Harmonies", "Temperature"]
  },
  {
    title: "Painting Techniques",
    points: ["Brushwork", "Layering", "Texturing"]
  },
  {
    title: "Sculpture & 3D",
    points: ["Clay Modeling", "Armatures", "Origami"]
  },
  {
    title: "Art History & Appreciation",
    points: ["Movements", "Famous Artists", "Critique"]
  }
];

const stats = [
  { val: "200+", lab: "Young Artists" },
  { val: "500+", lab: "Artworks Made" },
  { val: "5", lab: "Exhibitions" },
  { val: "10+", lab: "Mediums Taught" }
];

const features = [
  {
    title: "Creative Studios",
    desc: "Inspiring, well-lit spaces designed for artists.",
    icon: ShieldCheck
  },
  {
    title: "Premium Materials",
    desc: "Access to high-quality paints, clays and canvases.",
    icon: Globe2
  },
  {
    title: "Exhibitions",
    desc: "Bi-annual art galleries showcasing student work.",
    icon: Heart
  },
  {
    title: "Diverse Mediums",
    desc: "Watercolors, acrylics, pottery, and mixed media.",
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

export default function ArtCraftProgramPage() {
  return (
    <div className="bg-white font-sans text-[#0a1128]">
      <SportBanner sportKey="art-and-craft" />
      <SportPageLayout
      sportKey="art-and-craft"
      themeColor="#FACC15"
      title="Art & Craft Program"
      description="Unleash creativity through painting, sculpting, and design. Where imagination meets technique."
      features={features}
      stats={stats}
      highlights={highlights}
      highlightGifs={highlightGifs}
      levels={levels}
      curriculum={curriculum}
      faqData={faqData}
      faqImage="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200"
      statsImage="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200"
    />
    </div>
  );
}
