import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

const supplements = [
  {
    id: 1,
    name: "Whey Protein Premium",
    price: "R$ 149,90",
    image: "/whey-protein-container.jpg",
    badge: "Mais vendido",
  },
  {
    id: 2,
    name: "Creatina Monohidratada",
    price: "R$ 89,90",
    image: "/creatine-supplement-container.jpg",
    badge: "Novo",
  },
  {
    id: 3,
    name: "BCAA 2:1:1",
    price: "R$ 79,90",
    image: "/bcaa-supplement-bottle.jpg",
    badge: "Promoção",
  },
  {
    id: 4,
    name: "Pré-Treino Extreme",
    price: "R$ 119,90",
    image: "/pre-workout-supplement.png",
    badge: "Destaque",
  },
]

export function SupplementsSection() {
  return (
    <section className="py-16 px-4">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Suplementos em <span className="text-secondary">Alta</span>
          </h2>
          <Button variant="ghost" className="text-secondary hover:text-secondary/80">
            Ver loja
          </Button>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {supplements.map((product) => (
            <Card
              key={product.id}
              className="flex-shrink-0 w-64 overflow-hidden bg-card border-border/50 hover:border-secondary/50 transition-all group"
            >
              <div className="relative h-64 overflow-hidden bg-muted/30 flex items-center justify-center">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {product.badge}
                  </span>
                </div>
              </div>
              <CardContent className="p-4 space-y-3">
                <h3 className="font-display font-semibold text-lg leading-tight">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-secondary">{product.price}</span>
                  <Button size="icon" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
