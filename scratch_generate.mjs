import fs from 'fs';
import path from 'path';

const sports = [
  {
    id: "swimming",
    title: "Swimming",
    color: "#00E5FF",
    desc: "Dive into professional aquatic training. From basic strokes to competitive racing techniques, master the water with our certified coaches.",
    img: "https://images.unsplash.com/photo-1530549387633-f71f9911bc01?q=80&w=1200",
    features: [
      { title: "Olympic Standards", desc: "Train in our state-of-the-art temperature-controlled pools." },
      { title: "Stroke Correction", desc: "Advanced underwater cameras to perfect your technique." },
      { title: "Safety First", desc: "Certified lifeguards and strict safety protocols at all times." },
      { title: "Endurance Building", desc: "Specialized land and water conditioning." }
    ],
    levels: [
      { age: "3-5 Years", level: "Water Babies", desc: "Water familiarization and basic floating.", img: "https://images.unsplash.com/photo-1600965962102-9d260a71890d?q=80&w=600" },
      { age: "6-9 Years", level: "Learn to Swim", desc: "Freestyle, backstroke and water safety.", img: "https://images.unsplash.com/photo-1519315901367-f34f915de626?q=80&w=600" },
      { age: "10-14 Years", level: "Stroke Dev", desc: "Breaststroke, butterfly and dive starts.", img: "https://images.unsplash.com/photo-1560090995-01632a28895b?q=80&w=600" },
      { age: "15+ Years", level: "Competitive", desc: "Race pace training and advanced conditioning.", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600" }
    ],
    curriculum: [
      { title: "Water Safety & Confidence", points: ["Floating", "Treading Water", "Submersion"] },
      { title: "Stroke Mechanics", points: ["Body Position", "Kick Timing", "Arm Recovery"] },
      { title: "Breathing Techniques", points: ["Bilateral Breathing", "Rhythm", "Lung Capacity"] },
      { title: "Race Starts & Turns", points: ["Block Starts", "Flip Turns", "Relay Takeoffs"] },
      { title: "Endurance Training", points: ["Pacing", "Heart Rate Zones", "Dryland Exercises"] }
    ],
    schedule: [
      { days: "Mon - Wed - Fri", time: "6:00 AM", batch: "Competitive Squad" },
      { days: "Tue - Thu - Sat", time: "4:30 PM", batch: "Learn to Swim" }
    ],
    stats: [
      { val: "500+", lab: "Active Swimmers" },
      { val: "50m", lab: "Olympic Pool" },
      { val: "20+", lab: "State Medals" },
      { val: "100%", lab: "Safety Record" }
    ]
  },
  {
    id: "skating",
    title: "Skating",
    color: "#0066FF",
    desc: "Master the art of balance and high-velocity maneuvers on wheels. Learn from national-level champions.",
    img: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1200",
    features: [
      { title: "Pro Rink", desc: "Smooth, professional-grade synthetic skating surfaces." },
      { title: "Speed Training", desc: "Aerodynamic positioning and explosive start drills." },
      { title: "Agility Focus", desc: "Slalom and edge-work mastery." },
      { title: "Protective Gear", desc: "Strict adherence to safety equipment." }
    ],
    levels: [
      { age: "4-6 Years", level: "Rollers", desc: "Balance, posture and basic strides.", img: "https://images.unsplash.com/photo-1506544777-626a5c102a06?q=80&w=600" },
      { age: "7-10 Years", level: "Cruisers", desc: "Turning, stopping and basic crossovers.", img: "https://images.unsplash.com/photo-1520689914619-bc78b32367ea?q=80&w=600" },
      { age: "11-14 Years", level: "Speedsters", desc: "Advanced edges and speed generation.", img: "https://images.unsplash.com/photo-1596784860363-2bd13437efb9?q=80&w=600" },
      { age: "15+ Years", level: "Pro Racers", desc: "Inline speed skating and competition prep.", img: "https://images.unsplash.com/photo-1629858694084-26da89d8db12?q=80&w=600" }
    ],
    curriculum: [
      { title: "Fundamentals", points: ["Stance", "Weight Transfer", "Fall Safety"] },
      { title: "Edge Control", points: ["Inside Edges", "Outside Edges", "Parallel Turns"] },
      { title: "Speed Mechanics", points: ["Arm Swing", "Stride Length", "Sprint Starts"] },
      { title: "Advanced Maneuvers", points: ["Crossovers", "T-Stops", "Slalom Weaving"] },
      { title: "Race Tactics", points: ["Drafting", "Pacing", "Overtaking"] }
    ],
    schedule: [
      { days: "Mon - Wed - Fri", time: "5:30 PM", batch: "Beginner Kids" },
      { days: "Tue - Thu - Sat", time: "6:30 PM", batch: "Speed Academy" }
    ],
    stats: [
      { val: "300+", lab: "Skaters Trained" },
      { val: "10k", lab: "Sqft Pro Rink" },
      { val: "15", lab: "National Reps" },
      { val: "99%", lab: "Success Rate" }
    ]
  },
  {
    id: "football",
    title: "Football",
    color: "#4ADE80",
    desc: "Tactical discipline, teamwork, and professional ball control. Build your legacy on our FIFA-standard pitches.",
    img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200",
    features: [
      { title: "FIFA Standard Turf", desc: "Train on premium quality artificial grass." },
      { title: "Tactical Clinics", desc: "Video analysis and formation studies." },
      { title: "Strength & Conditioning", desc: "Football-specific fitness regimens." },
      { title: "League Matches", desc: "Regular competitive fixtures to test skills." }
    ],
    levels: [
      { age: "5-7 Years", level: "Kickstarters", desc: "Fun games, basic dribbling and coordination.", img: "https://images.unsplash.com/photo-1518091043644-c1d44570a2c9?q=80&w=600" },
      { age: "8-11 Years", level: "Development", desc: "Passing, shooting, and basic positional play.", img: "https://images.unsplash.com/photo-1538356111053-748a48e1acb8?q=80&w=600" },
      { age: "12-14 Years", level: "Academy", desc: "Tactical awareness and advanced ball control.", img: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=600" },
      { age: "15+ Years", level: "Elite Squad", desc: "Match fitness, systems of play and exposure.", img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600" }
    ],
    curriculum: [
      { title: "Technical Skills", points: ["First Touch", "Dribbling", "Passing Range"] },
      { title: "Tactical Awareness", points: ["Spatial Awareness", "Pressing", "Transitions"] },
      { title: "Physical Conditioning", points: ["Agility", "Sprint Speed", "Core Strength"] },
      { title: "Set Pieces", points: ["Corners", "Free Kicks", "Defensive Setup"] },
      { title: "Match Psychology", points: ["Decision Making", "Communication", "Leadership"] }
    ],
    schedule: [
      { days: "Mon - Wed - Fri", time: "4:00 PM", batch: "U-12 Academy" },
      { days: "Tue - Thu - Sat", time: "6:00 PM", batch: "Elite Squad" }
    ],
    stats: [
      { val: "800+", lab: "Players Enrolled" },
      { val: "2", lab: "FIFA Turfs" },
      { val: "50+", lab: "Trophies Won" },
      { val: "5", lab: "Scouted Pros" }
    ]
  },
  {
    id: "basketball",
    title: "Basketball",
    color: "#FB923C",
    desc: "Elite shooting mechanics, defensive strategy, and court vision for the modern player. Dominate the court.",
    img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200",
    features: [
      { title: "Hardwood Courts", desc: "Premium indoor courts for optimal bounce and grip." },
      { title: "Shooting Machines", desc: "Automated rebounding for high-volume shooting practice." },
      { title: "Vertical Training", desc: "Plyometric programs to increase vertical leap." },
      { title: "Game IQ", desc: "Pick-and-roll reads and defensive rotations." }
    ],
    levels: [
      { age: "6-9 Years", level: "Rookies", desc: "Ball handling, layups and basic rules.", img: "https://images.unsplash.com/photo-1528659109033-68d7120db8aa?q=80&w=600" },
      { age: "10-13 Years", level: "Hustlers", desc: "Shooting form, team defense and spacing.", img: "https://images.unsplash.com/photo-1518428135898-356c28f3cb52?q=80&w=600" },
      { age: "14-16 Years", level: "Varsity", desc: "Advanced plays, perimeter defense and athleticism.", img: "https://images.unsplash.com/photo-1542652735873-fb2814816f1c?q=80&w=600" },
      { age: "17+ Years", level: "Pro Prep", desc: "College-level drills and intense scrimmages.", img: "https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=600" }
    ],
    curriculum: [
      { title: "Ball Handling", points: ["Crossovers", "Pound Dribbles", "Weak Hand"] },
      { title: "Shooting Mechanics", points: ["B.E.E.F. Form", "Catch & Shoot", "Off the Dribble"] },
      { title: "Defensive Principles", points: ["Stance", "Closeouts", "Help Defense"] },
      { title: "Offensive Concepts", points: ["Spacing", "Cutting", "Screening"] },
      { title: "Athleticism", points: ["Lateral Quickness", "Vertical Leap", "Stamina"] }
    ],
    schedule: [
      { days: "Mon - Wed - Fri", time: "5:00 PM", batch: "Varsity Training" },
      { days: "Weekends", time: "8:00 AM", batch: "Skills Clinic" }
    ],
    stats: [
      { val: "400+", lab: "Hoopers" },
      { val: "3", lab: "Indoor Courts" },
      { val: "10k+", lab: "Shots Weekly" },
      { val: "100%", lab: "Effort Required" }
    ]
  },
  {
    id: "cricket",
    title: "Cricket",
    color: "#EF4444",
    desc: "Professional batting, bowling, and strategic gameplay designed for competitive tournament play.",
    img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1200",
    features: [
      { title: "Bowling Machines", desc: "Face up to 150kmph with variable swing and spin." },
      { title: "Turf Wickets", desc: "Train on match-simulation clay and grass pitches." },
      { title: "Video Analysis", desc: "Frame-by-frame biomechanical breakdown." },
      { title: "Match Simulations", desc: "Open net sessions with match-like pressure." }
    ],
    levels: [
      { age: "6-9 Years", level: "Grassroots", desc: "Basic grip, stance, and soft-ball cricket.", img: "https://images.unsplash.com/photo-1624526267942-ab0f0b080613?q=80&w=600" },
      { age: "10-13 Years", level: "Challengers", desc: "Hard-ball transition, basic bowling actions.", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=600" },
      { age: "14-16 Years", level: "State Prep", desc: "Advanced strokeplay and variations in bowling.", img: "https://images.unsplash.com/photo-1599304911299-813470817c91?q=80&w=600" },
      { age: "17+ Years", level: "Premier", desc: "Professional conditioning and tactical acumen.", img: "https://images.unsplash.com/photo-1589802829985-817e51171b92?q=80&w=600" }
    ],
    curriculum: [
      { title: "Batting Technique", points: ["Grip & Stance", "Footwork", "Shot Selection"] },
      { title: "Pace Bowling", points: ["Run-up", "Release Point", "Swing & Seam"] },
      { title: "Spin Bowling", points: ["Flight", "Turn", "Variations"] },
      { title: "Fielding & Fitness", points: ["Catching", "Throwing Accuracy", "Agility"] },
      { title: "Match Tactics", points: ["Field Placements", "Pacing an Innings", "Pressure Handling"] }
    ],
    schedule: [
      { days: "Tue - Thu - Sat", time: "4:00 PM", batch: "Junior Nets" },
      { days: "Mon - Wed - Fri", time: "4:00 PM", batch: "Senior Squad" }
    ],
    stats: [
      { val: "600+", lab: "Cricketers" },
      { val: "10", lab: "Practice Nets" },
      { val: "1st", lab: "League Rank" },
      { val: "12", lab: "State Players" }
    ]
  },
  {
    id: "chess",
    title: "Chess",
    color: "#8B5CF6",
    desc: "Battle of the minds. Deep strategic analysis and tactical mastery. Learn the game of kings from FIDE rated mentors.",
    img: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=1200",
    features: [
      { title: "FIDE Mentors", desc: "Learn directly from internationally rated masters." },
      { title: "Tactical Clinics", desc: "Deep dive into middle game combinations." },
      { title: "Digital Boards", desc: "Analyze games using standard AI engines." },
      { title: "Tournament Exposure", desc: "Regular internal and rated external events." }
    ],
    levels: [
      { age: "5-7 Years", level: "Beginner", desc: "Foundational moves and piece values.", img: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=600" },
      { age: "8-11 Years", level: "Intermediate", desc: "Basic tactics and opening principles.", img: "https://images.unsplash.com/photo-1560172655-e41c4eb82ba3?q=80&w=600" },
      { age: "12-14 Years", level: "Advanced", desc: "Middlegame strategy and positional play.", img: "https://images.unsplash.com/photo-1610620600115-4bfb44b8b6af?q=80&w=600" },
      { age: "15+ Years", level: "Master", desc: "Endgame mastery and tournament prep.", img: "https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?q=80&w=600" }
    ],
    curriculum: [
      { title: "Opening Principles", points: ["Center Control", "Piece Development", "King Safety"] },
      { title: "Tactical Motifs", points: ["Forks & Pins", "Skewer Attacks", "Discovery Checks"] },
      { title: "Middlegame Strategy", points: ["Pawn Structures", "Outpost Management", "Exchange Sacrifices"] },
      { title: "Endgame Mastery", points: ["Opposition", "King & Pawn Basics", "Rook Endgames"] },
      { title: "Mental Conditioning", points: ["Focus Training", "Time Management", "Resilience"] }
    ],
    schedule: [
      { days: "Mon - Wed - Fri", time: "5:00 PM", batch: "Beginner Elite" },
      { days: "Tue - Thu - Sat", time: "6:30 PM", batch: "Master Intermediate" }
    ],
    stats: [
      { val: "1200+", lab: "Games Played" },
      { val: "98%", lab: "Success Rate" },
      { val: "15", lab: "State Champs" },
      { val: "10+", lab: "FIDE Rated" }
    ]
  },
  {
    id: "music",
    title: "Music",
    color: "#EC4899",
    desc: "Instrumental mastery and vocal discipline. Express your soul through professional music education.",
    img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200",
    features: [
      { title: "Soundproof Studios", desc: "Acoustically treated rooms for perfect resonance." },
      { title: "Pro Instruments", desc: "Access to grand pianos, high-end guitars and kits." },
      { title: "Trinity Syllabus", desc: "Curriculum aligned with international grade exams." },
      { title: "Live Performances", desc: "Regular showcases in our in-house auditorium." }
    ],
    levels: [
      { age: "5-7 Years", level: "Little Notes", desc: "Rhythm basics, ear training and fun songs.", img: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=600" },
      { age: "8-12 Years", level: "Melody Makers", desc: "Reading sheet music and basic instrument skills.", img: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=600" },
      { age: "13-16 Years", level: "Harmonics", desc: "Advanced techniques, scales and band performance.", img: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=600" },
      { age: "17+ Years", level: "Maestros", desc: "Composition, improvisation and grade exams.", img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=600" }
    ],
    curriculum: [
      { title: "Music Theory", points: ["Sight Reading", "Scales & Modes", "Time Signatures"] },
      { title: "Instrumental Technique", points: ["Posture", "Finger Dexterity", "Tone Production"] },
      { title: "Ear Training", points: ["Pitch Recognition", "Intervals", "Chord Qualities"] },
      { title: "Performance Skills", points: ["Stage Presence", "Overcoming Nerves", "Ensemble Playing"] },
      { title: "Composition", points: ["Songwriting", "Arranging", "Digital Audio Basics"] }
    ],
    schedule: [
      { days: "Mon - Wed", time: "5:00 PM", batch: "Piano Grades" },
      { days: "Weekends", time: "10:00 AM", batch: "Band Practice" }
    ],
    stats: [
      { val: "250+", lab: "Musicians" },
      { val: "5", lab: "Instruments" },
      { val: "50+", lab: "Live Shows" },
      { val: "100%", lab: "Grade Pass Rate" }
    ]
  },
  {
    id: "dance",
    title: "Dance",
    color: "#F43F5E",
    desc: "Classical, contemporary, and urban styles. Develop rhythm, grace, and athletic agility.",
    img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200",
    features: [
      { title: "Sprung Floors", desc: "Professional dance flooring to protect joints." },
      { title: "Mirrored Studios", desc: "Wall-to-wall mirrors for perfect alignment check." },
      { title: "Versatile Styles", desc: "From Hip-Hop and Contemporary to Classical." },
      { title: "Choreography", desc: "Learn to create and perform original routines." }
    ],
    levels: [
      { age: "4-7 Years", level: "Tiny Toes", desc: "Creative movement and basic rhythm.", img: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=600" },
      { age: "8-12 Years", level: "Groovers", desc: "Technique foundations and routine memorization.", img: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=600" }, // reuse
      { age: "13-16 Years", level: "Rhythm Squad", desc: "Advanced choreography and expression.", img: "https://images.unsplash.com/photo-1535525153412-5a092c668b5a?q=80&w=600" },
      { age: "17+ Years", level: "Elite Crew", desc: "Performance companies and competition teams.", img: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=600" }
    ],
    curriculum: [
      { title: "Technique", points: ["Posture", "Extensions", "Isolations"] },
      { title: "Rhythm & Timing", points: ["Musicality", "Syncopation", "Phrasing"] },
      { title: "Flexibility & Strength", points: ["Core Control", "Splits", "Stamina"] },
      { title: "Choreography Retention", points: ["Memory Drills", "Transitions", "Formations"] },
      { title: "Expression", points: ["Facial Expressions", "Storytelling", "Stage Presence"] }
    ],
    schedule: [
      { days: "Tue - Thu", time: "6:00 PM", batch: "Urban Hip-Hop" },
      { days: "Weekends", time: "11:00 AM", batch: "Contemporary Core" }
    ],
    stats: [
      { val: "450+", lab: "Dancers" },
      { val: "4", lab: "Dance Styles" },
      { val: "10+", lab: "Crew Titles" },
      { val: "3", lab: "Pro Studios" }
    ]
  },
  {
    id: "art-and-craft",
    title: "Art & Craft",
    color: "#FACC15",
    desc: "Unleash creativity through painting, sculpting, and design. Where imagination meets technique.",
    img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200",
    features: [
      { title: "Creative Studios", desc: "Inspiring, well-lit spaces designed for artists." },
      { title: "Premium Materials", desc: "Access to high-quality paints, clays and canvases." },
      { title: "Exhibitions", desc: "Bi-annual art galleries showcasing student work." },
      { title: "Diverse Mediums", desc: "Watercolors, acrylics, pottery, and mixed media." }
    ],
    levels: [
      { age: "4-7 Years", level: "Little Picassos", desc: "Finger painting, basic shapes and colors.", img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=600" },
      { age: "8-12 Years", level: "Sketchers", desc: "Pencil shading, perspective and watercolors.", img: "https://images.unsplash.com/photo-1517598024396-46c53fb3afdc?q=80&w=600" },
      { age: "13-16 Years", level: "Creators", desc: "Acrylics, canvas work and basic sculpting.", img: "https://images.unsplash.com/photo-1546484396-fb3fade47ea1?q=80&w=600" },
      { age: "17+ Years", level: "Visionaries", desc: "Portfolio development and advanced mixed media.", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600" }
    ],
    curriculum: [
      { title: "Fundamentals of Drawing", points: ["Line & Shape", "Proportion", "Perspective"] },
      { title: "Color Theory", points: ["Mixing", "Harmonies", "Temperature"] },
      { title: "Painting Techniques", points: ["Brushwork", "Layering", "Texturing"] },
      { title: "Sculpture & 3D", points: ["Clay Modeling", "Armatures", "Origami"] },
      { title: "Art History & Appreciation", points: ["Movements", "Famous Artists", "Critique"] }
    ],
    schedule: [
      { days: "Wed - Fri", time: "4:30 PM", batch: "Canvas & Colors" },
      { days: "Sat - Sun", time: "10:00 AM", batch: "Pottery Basics" }
    ],
    stats: [
      { val: "200+", lab: "Young Artists" },
      { val: "500+", lab: "Artworks Made" },
      { val: "5", lab: "Exhibitions" },
      { val: "10+", lab: "Mediums Taught" }
    ]
  },
  {
    id: "yoga",
    title: "Yoga",
    color: "#10B981",
    desc: "Ancient wisdom for modern wellness. Achieve physical flexibility, core strength, and mental clarity.",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200",
    features: [
      { title: "Zen Environment", desc: "Peaceful, naturally lit studios with aromatherapy." },
      { title: "Holistic Approach", desc: "Combining asanas, pranayama, and meditation." },
      { title: "Certified Gurus", desc: "Trained under traditional and modern yoga schools." },
      { title: "Personalized Props", desc: "Blocks, straps and bolsters for safe alignment." }
    ],
    levels: [
      { age: "Kids (6-12)", level: "Sprouts", desc: "Fun animal poses and basic focus exercises.", img: "https://images.unsplash.com/photo-1522066898492-3a3fc429de0a?q=80&w=600" },
      { age: "Teens (13-17)", level: "Balance", desc: "Flexibility, posture correction and stress relief.", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600" },
      { age: "Adults Beginner", level: "Foundation", desc: "Basic asanas, breath awareness and relaxation.", img: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=600" },
      { age: "Adults Advanced", level: "Flow", desc: "Vinyasa flows, advanced inversions and deep meditation.", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600" }
    ],
    curriculum: [
      { title: "Asana Practice", points: ["Standing Poses", "Seated Folds", "Backbends"] },
      { title: "Pranayama", points: ["Breath Control", "Kapalabhati", "Anulom Vilom"] },
      { title: "Meditation & Mindfulness", points: ["Yoga Nidra", "Focus Training", "Chanting"] },
      { title: "Anatomy & Alignment", points: ["Joint Safety", "Core Engagement", "Spinal Health"] },
      { title: "Yoga Philosophy", points: ["Yamas & Niyamas", "Mind-Body Connection", "Diet"] }
    ],
    schedule: [
      { days: "Mon - Wed - Fri", time: "6:00 AM", batch: "Morning Flow" },
      { days: "Tue - Thu", time: "7:00 PM", batch: "Restorative Yin" }
    ],
    stats: [
      { val: "350+", lab: "Yogis" },
      { val: "2", lab: "Zen Studios" },
      { val: "100%", lab: "Stress Reduced" },
      { val: "5+", lab: "Yoga Styles" }
    ]
  }
];

const template = (sport) => `"use client";

import React, { useState } from "react";
import { 
  Trophy, Users, Target, ShieldCheck, Zap, BarChart3, 
  Plus, Minus, Star, Award, BookOpen, Globe2, Heart, Medal, ArrowRight, Play
} from "lucide-react";
import SportBanner from "@/components/ui/sportsBanner";

const levels = ${JSON.stringify(sport.levels, null, 2)};
const curriculum = ${JSON.stringify(sport.curriculum, null, 2)};
const schedule = ${JSON.stringify(sport.schedule, null, 2)};
const stats = ${JSON.stringify(sport.stats, null, 2)};
const features = ${JSON.stringify(sport.features, null, 2)};

const faqData = [
  { q: "Do I need prior experience?", a: "No. We have dedicated batches for absolute beginners where we teach everything from scratch." },
  { q: "What should I bring?", a: "Just comfortable sportswear and a water bottle. We provide all the specialized equipment needed for training." },
  { q: "What is the batch size?", a: "We maintain a strict low coach-to-student ratio to ensure personalized attention and safety." },
  { q: "Are there competition opportunities?", a: "Yes. Our students participate in regular internal showcases and external state/national tournaments." },
];

// High quality GIF placeholders for highlights
const highlightGifs = [
  "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
  "https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif",
  "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
  "https://media.giphy.com/media/26AHONQ79FdWZhAIw/giphy.gif",
  "https://media.giphy.com/media/l0HlSi3AIOM3fAhX2/giphy.gif",
  "https://media.giphy.com/media/3oEduUy2KjJbH30BNe/giphy.gif"
];

export default function ${sport.title.replace(/[^a-zA-Z]/g, '')}ProgramPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const themeColor = "${sport.color}";

  return (
    <div className="bg-white font-sans text-[#0a1128]">
      
      {/* 1. HERO BANNER */}
      <SportBanner sportKey="${sport.id}"/>

      {/* 2. WHY CHOOSE US */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
        <div className="relative container mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            
            {/* LEFT */}
            <div>
              <span className="inline-flex items-center rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[3px] mb-6" style={{ backgroundColor: \`\${themeColor}15\`, color: themeColor }}>
                Why Enzo ${sport.title}
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tight leading-[0.95]">
                Why Choose Our{" "}
                <span style={{ color: themeColor }}>
                  ${sport.title} Program?
                </span>
              </h2>
              <p className="mt-8 text-slate-600 text-lg leading-8 max-w-xl">
                ${sport.desc}
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mt-10">
                {features.map((item, i) => {
                  const icons = [ShieldCheck, Globe2, Heart, Trophy];
                  const Icon = icons[i % 4];
                  return (
                    <div key={i} className="group rounded-3xl border border-slate-200 bg-white p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: \`\${themeColor}15\` }}>
                        <Icon size={24} style={{ color: themeColor }} />
                      </div>
                      <h4 className="font-black uppercase text-sm">{item.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-500">{item.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* RIGHT (Bento Box Stats) */}
            <div className="relative w-full h-full min-h-[500px]">
               <div className="absolute top-0 right-0 w-[80%] h-[60%] rounded-[3rem] overflow-hidden shadow-2xl z-10 border-4 border-white">
                 <img src="${sport.img}" alt="${sport.title} Training" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/80 to-transparent p-8 flex flex-col justify-end">
                    <h3 className="text-4xl font-black text-white" style={{ color: themeColor }}>{stats[0].val}</h3>
                    <p className="text-white/80 uppercase tracking-widest text-xs font-bold">{stats[0].lab}</p>
                 </div>
               </div>
               
               <div className="absolute bottom-10 left-0 w-[60%] h-[40%] rounded-[3rem] overflow-hidden shadow-2xl z-20 border-4 border-white bg-[#0a1128] p-8 flex flex-col justify-center">
                    <h3 className="text-3xl font-black text-white">{stats[1].val}</h3>
                    <p className="text-white/60 uppercase tracking-widest text-[10px] font-bold mt-1">{stats[1].lab}</p>
               </div>
               
               <div className="absolute bottom-0 right-10 w-[45%] h-[35%] rounded-[2rem] overflow-hidden shadow-2xl z-30 border-4 border-white bg-white p-6 flex flex-col justify-center text-center">
                    <h3 className="text-3xl font-black" style={{ color: themeColor }}>{stats[3].val}</h3>
                    <p className="text-slate-500 uppercase tracking-widest text-[10px] font-bold mt-1">{stats[3].lab}</p>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. HIGHLIGHTS WITH GIFS */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl text-center mb-16">
          <h2 className="text-4xl font-black uppercase italic tracking-tighter">Program <span style={{ color: themeColor }}>Highlights</span></h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto font-medium">Experience training like never before with our cutting-edge facilities and methods.</p>
        </div>
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { t: "Pro Coaching", d: "One-on-one feedback loops." },
            { t: "Small Batches", d: "Strict attention to each student." },
            { t: "Modern Equipment", d: "Best in class facilities." },
            { t: "Match Practice", d: "Weekly internal sessions." },
            { t: "Skill Tracking", d: "Monthly digital progress reports." },
            { t: "Tournaments", d: "State & National level entries." },
          ].map((h, i) => (
            <div key={i} className="bg-white rounded-[2.5rem] border border-slate-100 group hover:shadow-2xl transition-all overflow-hidden flex flex-col">
              <div className="h-48 w-full bg-slate-100 relative overflow-hidden">
                 <img src={highlightGifs[i]} alt="GIF" className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>
              <div className="p-8 pt-4">
                <h3 className="text-xl font-black uppercase italic mb-2 group-hover:text-[var(--theme-c)] transition-colors" style={{ '--theme-c': themeColor } as any}>{h.t}</h3>
                <p className="text-slate-500 text-sm">{h.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. AGE GROUPS & LEVELS (IMAGE CARDS) */}
      <section className="py-24 container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
           <h2 className="text-4xl font-black uppercase tracking-tight italic">Structured <span style={{ color: themeColor }}>Growth Path</span></h2>
           <p className="text-slate-500 mt-4">A level for everyone. From beginners taking their first steps, to masters honing their craft.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {levels.map((l: any, i: number) => (
            <div key={i} className="relative group rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all h-[400px]">
               <img src={l.img} alt={l.level} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-[#0a1128]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
               
               <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="mb-auto inline-block self-start px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase tracking-widest">
                    {l.age}
                  </div>
                  <h4 className="text-white text-3xl font-black italic uppercase mb-3" style={{ color: i === levels.length - 1 ? themeColor : 'white' }}>
                    {l.level}
                  </h4>
                  <p className="text-slate-300 text-xs font-medium leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {l.desc}
                  </p>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CURRICULUM */}
      <section className="py-24 bg-[#0a1128] text-white">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-10 leading-none">Curriculum <br /> <span style={{ color: themeColor }}>Breakdown.</span></h2>
              <div className="space-y-6">
                {curriculum.map((c: any, i: number) => (
                  <div key={i} className="group border-l-4 border-white/10 pl-6 transition-all hover:border-[var(--hover-border)]" style={{ '--hover-border': themeColor } as any}>
                    <h4 className="text-lg font-black uppercase text-white mb-3 group-hover:text-[var(--hover-border)] transition-colors" style={{ '--hover-border': themeColor } as any}>{c.title}</h4>
                    <div className="flex flex-wrap gap-2">
                       {c.points.map((p: string) => <span key={p} className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full">{p}</span>)}
                    </div>
                  </div>
                ))}
              </div>
           </div>
           
           <div className="p-10 md:p-14 bg-white/5 backdrop-blur-lg rounded-[3rem] border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" style={{ backgroundColor: themeColor }} />
              <BookOpen size={48} className="mb-6 relative z-10" style={{ color: themeColor }} />
              <h3 className="text-3xl font-black uppercase italic mb-4 relative z-10">Beyond the Basics</h3>
              <p className="text-slate-400 leading-relaxed font-medium relative z-10">
                Our curriculum isn't just about physical repetition. We teach students to analyze patterns, manage their bodies under pressure, and build character through structured discipline.
              </p>
           </div>
        </div>
      </section>

      {/* 6. FAQ WITH IMAGE */}
      <section className="py-24 container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           
           <div className="order-2 lg:order-1 relative rounded-[3rem] overflow-hidden shadow-2xl h-[500px]">
             <img src="${sport.img}" alt="FAQ Background" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#0a1128]/80 to-transparent mix-blend-multiply" />
             <div className="absolute bottom-10 left-10 text-white max-w-sm">
                <h3 className="text-3xl font-black uppercase italic tracking-tighter">Still Have <span style={{ color: themeColor }}>Questions?</span></h3>
                <p className="text-slate-300 mt-2 text-sm">Our support team is available 24/7 to help you start your journey.</p>
             </div>
           </div>

           <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-black uppercase mb-10 italic tracking-tighter">Everything you <span style={{ color: themeColor }}>Need to Know.</span></h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                     <button 
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full p-6 text-left flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
                     >
                        <span className="font-black uppercase text-sm pr-4">{faq.q}</span>
                        <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: openFaq === i ? themeColor : '#f1f5f9', color: openFaq === i ? 'white' : '#64748b' }}>
                           {openFaq === i ? <Minus size={16} /> : <Plus size={16} />}
                        </div>
                     </button>
                     <div className={\`overflow-hidden transition-all duration-300 \${openFaq === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}\`}>
                       <div className="p-6 pt-0 bg-white text-slate-500 text-sm font-medium leading-relaxed border-t border-slate-50 mt-2">
                         {faq.a}
                       </div>
                     </div>
                  </div>
                ))}
              </div>
           </div>

        </div>
      </section>

      {/* 7. DOTTED CTA SECTION */}
      <section className="py-24 px-6">
         <div className="container mx-auto max-w-5xl">
            {/* The Dotted Wrapper */}
            <div className="p-3 rounded-[4rem]" style={{ border: \`3px dashed \${themeColor}\` }}>
               <div className="bg-[#0a1128] rounded-[3.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-20" style={{ backgroundColor: themeColor }} />
                  
                  <div className="relative z-10 space-y-10">
                     <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase italic tracking-tighter leading-tight">
                        Ready to master <br /> <span style={{ color: themeColor }}>the next level?</span>
                     </h2>
                     <div className="flex flex-col sm:flex-row justify-center gap-6">
                        {/* Dotted border button wrapper */}
                        <div className="p-1.5 rounded-2xl border-2 border-dashed border-white/30 hover:border-white transition-colors">
                           <button className="w-full sm:w-auto px-12 py-5 bg-white text-[#0a1128] rounded-xl font-black uppercase tracking-widest text-xs transition-all hover:scale-[0.98] flex items-center justify-center gap-2">
                             Book Free Trial <ArrowRight size={16} />
                           </button>
                        </div>
                        <div className="p-1.5 rounded-2xl border-2 border-dashed border-transparent hover:border-white/30 transition-colors">
                           <button className="w-full sm:w-auto px-12 py-5 bg-transparent border-2 border-white/20 text-white rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                             Talk to Coach
                           </button>
                        </div>
                     </div>
                     <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] mt-8">
                       Contact Us: +91 72595 82089 • info@enzosports.com
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
}
`;

const basePath = path.join(process.cwd(), 'app', 'sports');

sports.forEach(sport => {
  const dirPath = path.join(basePath, sport.id);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  const filePath = path.join(dirPath, 'page.tsx');
  fs.writeFileSync(filePath, template(sport));
  console.log(`Generated ${filePath}`);
});
