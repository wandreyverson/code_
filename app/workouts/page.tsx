import { TopBar } from "@/components/top-bar"
import { WorkoutsHero } from "@/components/workouts-hero"
import { WorkoutsFilters } from "@/components/workouts-filters"
import { WorkoutsGrid } from "@/components/workouts-grid"
import { Footer } from "@/components/footer"
import { FloatingChat } from "@/components/floating-chat"

export default function WorkoutsPage() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <main>
        <WorkoutsHero />
        <WorkoutsFilters />
        <WorkoutsGrid />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  )
}
