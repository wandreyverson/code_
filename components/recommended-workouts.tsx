import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, TrendingUp, Bookmark } from "lucide-react"

const workouts = [
  {
    id: 1,
    name: "Treino de Peito e Tríceps",
    image: "/man-doing-bench-press-in-gym.jpg",
    level: "Intermediário",
    duration: "45 min",
    muscles: "Peito, Tríceps",
  },
  {
    id: 2,
    name: "HIIT Queima Gordura",
    image: "/person-doing-high-intensity-interval-training.jpg",
    level: "Avançado",
    duration: "30 min",
    muscles: "Corpo todo",
  },
  {
    id: 3,
    name: "Costas e Bíceps",
    image: "/person-doing-pull-ups-in-gym.jpg",
    level: "Intermediário",
    duration: "50 min",
    muscles: "Costas, Bíceps",
  },
  {
    id: 4,
    name: "Pernas Completo",
    image: "/person-doing-squats-with-barbell.jpg",
    level: "Iniciante",
    duration: "40 min",
    muscles: "Pernas, Glúteos",
  },
]

export function RecommendedWorkouts() {
  return (
    <section className="py-16 px-4 bg-muted/20">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Treinos <span className="text-primary">Recomendados</span>
          </h2>
          <Button variant="ghost" className="text-primary hover:text-primary/80">
            Ver todos
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workouts.map((workout) => (
            <Card
              key={workout.id}
              className="overflow-hidden bg-card border-border/50 hover:border-primary/50 transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={workout.image || "/placeholder.svg"}
                  alt={workout.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-3 right-3 h-8 w-8 bg-background/80 hover:bg-background"
                >
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
              <CardContent className="p-4 space-y-3">
                <h3 className="font-display font-semibold text-lg leading-tight">{workout.name}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{workout.duration}</span>
                  <span className="mx-1">•</span>
                  <Badge variant="secondary" className="text-xs">
                    {workout.level}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <TrendingUp className="h-4 w-4" />
                  {workout.muscles}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
