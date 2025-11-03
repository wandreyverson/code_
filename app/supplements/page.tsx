import { TopBar } from "@/components/top-bar"
import { SupplementsHero } from "@/components/supplements-hero"
import { SupplementsCategories } from "@/components/supplements-categories"
import { SupplementsStore } from "@/components/supplements-store"
import { Footer } from "@/components/footer"
import { FloatingChat } from "@/components/floating-chat"

export default function SupplementsPage() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <main>
        <SupplementsHero />
        <SupplementsCategories />
        <SupplementsStore />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  )
}
