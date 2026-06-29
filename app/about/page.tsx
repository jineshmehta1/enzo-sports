import AboutBanner from "@/components/ui/AboutBanner";
import AboutSection from "@/components/ui/AboutSection";
import FaqSection from "@/components/stats-section";
import CoachCtaSection from "@/components/ui/CoachCtaSection";
import TestimonialsSection from "@/components/testimonials-section";
import AchievementsSection from "@/components/ui/achievements";
import TeamSection from "@/components/ui/team-section";
import FinalCTASection from "@/components/ui/final-cta-section";
import DemoBookingCTA from "@/components/demo-booking-cta";
import FounderSection from "@/components/ui/founder";
import MissionVision from "@/components/ui/mission";
import AchievementCarousel from "@/components/ui/achcar";
import WhoWeAre from "@/components/whoweare";
import WhyChooseEnzo from "@/components/ui/whychoose";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-0">
      <AboutBanner />
      <AboutSection />
      <FounderSection/>
      <MissionVision/>
      <WhyChooseEnzo/>
      <AchievementCarousel/>
      <FaqSection />
      <TestimonialsSection />
      <DemoBookingCTA />
    </div>
  );
}
