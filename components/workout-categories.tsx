import { Dumbbell, Heart, Zap, Target, Flame, Trophy } from "lucide-react"
import { Card } from "@/components/ui/card"

const categories = [
  { icon: Dumbbell, name: "Musculação", color: "text-primary" },
  { icon: Heart, name: "Cardio", color: "text-secondary" },
  { icon: Zap, name: "HIIT", color: "text-primary" },
  { icon: Target, name: "Funcional", color: "text-secondary" },
  { icon: Flame, name: "CrossFit", color: "text-primary" },
  { icon: Trophy, name: "Performance", color: "text-secondary" },
]

export function WorkoutCategories() {
  return (
    <section className="py-16 px-4">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
          Categorias de <span className="text-primary">Treino</span>
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category) => (
            <Card
              key={category.name}
              className="flex-shrink-0 w-40 p-6 bg-card hover:bg-card/80 border-border/50 cursor-pointer transition-all hover:scale-105 hover:border-primary/50"
            >
              <category.icon className={`h-12 w-12 mb-4 ${category.color}`} />
              <h3 className="font-display font-semibold text-lg">{category.name}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
