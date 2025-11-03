"use client"

import { useState } from "react"
import { Dumbbell, Heart, Bike, Weight, Ruler, Timer } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "all", name: "All Equipment", icon: Dumbbell },
  { id: "strength", name: "Strength", icon: Weight },
  { id: "cardio", name: "Cardio", icon: Heart },
  { id: "functional", name: "Functional", icon: Bike },
  { id: "accessories", name: "Accessories", icon: Ruler },
  { id: "recovery", name: "Recovery", icon: Timer },
]

export function EquipmentCategories() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <section className="bg-white border-b border-neutral-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {categories.map((category) => {
            const Icon = category.icon
            const isActive = activeCategory === category.id

            return (
              <Button
                key={category.id}
                variant={isActive ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={
                  isActive
                    ? "bg-orange-600 hover:bg-orange-700 whitespace-nowrap"
                    : "whitespace-nowrap hover:bg-neutral-50"
                }
              >
                <Icon className="h-4 w-4 mr-2" />
                {category.name}
              </Button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
