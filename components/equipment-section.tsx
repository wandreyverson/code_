import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const equipment = [
  {
    id: 1,
    name: "Esteiras Profissionais",
    image: "/modern-treadmill-in-gym.jpg",
    description: "20 esteiras de última geração",
  },
  {
    id: 2,
    name: "Equipamentos de Musculação",
    image: "/weight-training-equipment-in-gym.jpg",
    description: "Aparelhos para todos os grupos musculares",
  },
  {
    id: 3,
    name: "Área de Peso Livre",
    image: "/free-weights-dumbbells-and-barbells.jpg",
    description: "Halteres, barras e anilhas",
  },
  {
    id: 4,
    name: "Zona Funcional",
    image: "/functional-training-area-with-kettlebells.jpg",
    description: "Espaço para treinos funcionais",
  },
]

export function EquipmentSection() {
  return (
    <section className="py-16 px-4">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Nossos <span className="text-primary">Equipamentos</span>
          </h2>
          <Button variant="ghost" className="text-primary hover:text-primary/80">
            Ver todos
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipment.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden bg-card border-border/50 hover:border-secondary/50 transition-all group cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4 space-y-2">
                <h3 className="font-display font-semibold text-lg">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
