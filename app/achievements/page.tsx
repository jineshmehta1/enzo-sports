import AchievementCarousel from "@/components/ui/achcar";
import AchievementCTA from "@/components/ui/achcta";
import AchievementsBanner from "@/components/ui/AchievementsBanner";
import AchievementsSection from "@/components/ui/AchievementsSection";
export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-0">
      <AchievementsBanner />
      <AchievementsSection/>
      <AchievementCarousel/>
      <AchievementCTA/>
    </div>
  );
}
