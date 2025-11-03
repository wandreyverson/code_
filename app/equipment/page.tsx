import { TopBar } from "@/components/top-bar"
import { EquipmentHero } from "@/components/equipment-hero"
import { EquipmentCategories } from "@/components/equipment-categories"
import { EquipmentCatalog } from "@/components/equipment-catalog"
import { Footer } from "@/components/footer"
import { FloatingChat } from "@/components/floating-chat"

export default function EquipmentPage() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <main>
        <EquipmentHero />
        <EquipmentCategories />
        <EquipmentCatalog />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  )
}
