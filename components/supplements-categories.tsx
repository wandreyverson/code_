"use client"

import { useState } from "react"
import { Pill, Zap, Droplet, Apple, Moon, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "all", name: "All Products", icon: Pill },
  { id: "protein", name: "Protein", icon: Droplet },
  { id: "pre-workout", name: "Pre-Workout", icon: Zap },
  { id: "vitamins", name: "Vitamins", icon: Apple },
  { id: "recovery", name: "Recovery", icon: Moon },
  { id: "fat-burners", name: "Fat Burners", icon: Flame },
]

export function SupplementsCategories() {
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
