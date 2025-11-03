import { TopBar } from "@/components/top-bar"
import { HeroBanner } from "@/components/hero-banner"
import { WorkoutCategories } from "@/components/workout-categories"
import { RecommendedWorkouts } from "@/components/recommended-workouts"
import { EquipmentSection } from "@/components/equipment-section"
import { NewsSection } from "@/components/news-section"
import { SupplementsSection } from "@/components/supplements-section"
import { Footer } from "@/components/footer"
import { FloatingChat } from "@/components/floating-chat"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <main>
        <HeroBanner />
        <WorkoutCategories />
        <RecommendedWorkouts />
        <EquipmentSection />
        <NewsSection />
        <SupplementsSection />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  )
}
