import { Star, ShoppingCart, Info } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const equipment = [
  {
    id: 1,
    name: "Olympic Barbell Set",
    category: "Strength",
    price: "$299.99",
    rating: 4.8,
    reviews: 342,
    image: "/olympic-barbell.png",
    inStock: true,
    featured: true,
  },
  {
    id: 2,
    name: "Adjustable Dumbbells 5-52.5 lbs",
    category: "Strength",
    price: "$349.99",
    rating: 4.9,
    reviews: 521,
    image: "/adjustable-dumbbells.jpg",
    inStock: true,
    featured: true,
  },
  {
    id: 3,
    name: "Commercial Treadmill Pro",
    category: "Cardio",
    price: "$1,899.99",
    rating: 4.7,
    reviews: 189,
    image: "/commercial-treadmill.jpg",
    inStock: true,
    featured: false,
  },
  {
    id: 4,
    name: "Power Rack with Pull-up Bar",
    category: "Strength",
    price: "$599.99",
    rating: 4.9,
    reviews: 267,
    image: "/power-rack-squat-cage.jpg",
    inStock: true,
    featured: true,
  },
  {
    id: 5,
    name: "Rowing Machine Air Resistance",
    category: "Cardio",
    price: "$899.99",
    rating: 4.8,
    reviews: 412,
    image: "/rowing-machine.jpg",
    inStock: true,
    featured: false,
  },
  {
    id: 6,
    name: "Kettlebell Set 10-50 lbs",
    category: "Functional",
    price: "$249.99",
    rating: 4.7,
    reviews: 298,
    image: "/kettlebell-set.jpg",
    inStock: true,
    featured: false,
  },
  {
    id: 7,
    name: "Adjustable Weight Bench",
    category: "Strength",
    price: "$279.99",
    rating: 4.6,
    reviews: 445,
    image: "/adjustable-weight-bench.jpg",
    inStock: true,
    featured: false,
  },
  {
    id: 8,
    name: "Assault Bike Pro",
    category: "Cardio",
    price: "$799.99",
    rating: 4.8,
    reviews: 156,
    image: "/assault-bike.jpg",
    inStock: false,
    featured: false,
  },
  {
    id: 9,
    name: "Resistance Bands Set",
    category: "Accessories",
    price: "$39.99",
    rating: 4.5,
    reviews: 892,
    image: "/resistance-bands-exercise.png",
    inStock: true,
    featured: false,
  },
  {
    id: 10,
    name: "Foam Roller & Massage Kit",
    category: "Recovery",
    price: "$59.99",
    rating: 4.7,
    reviews: 634,
    image: "/foam-roller-massage.jpg",
    inStock: true,
    featured: false,
  },
  {
    id: 11,
    name: "Cable Machine Dual Stack",
    category: "Strength",
    price: "$1,499.99",
    rating: 4.9,
    reviews: 123,
    image: "/cable-machine-gym.jpg",
    inStock: true,
    featured: true,
  },
  {
    id: 12,
    name: "Battle Ropes 1.5 inch",
    category: "Functional",
    price: "$89.99",
    rating: 4.6,
    reviews: 201,
    image: "/battle-ropes.jpg",
    inStock: true,
    featured: false,
  },
]

export function EquipmentCatalog() {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-2">Equipment Catalog</h2>
            <p className="text-neutral-600">Showing {equipment.length} products</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {equipment.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
              <div className="relative h-64 overflow-hidden bg-neutral-100">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
                {item.featured && (
                  <Badge className="absolute top-3 left-3 bg-orange-600 hover:bg-orange-700">Featured</Badge>
                )}
                {!item.inStock && <Badge className="absolute top-3 right-3 bg-neutral-600">Out of Stock</Badge>}
              </div>

              <CardContent className="p-5">
                <Badge variant="outline" className="mb-3 text-xs">
                  {item.category}
                </Badge>

                <h3 className="text-lg font-bold text-neutral-900 mb-2 text-balance">{item.name}</h3>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
                    <span className="text-sm font-medium text-neutral-900">{item.rating}</span>
                  </div>
                  <span className="text-sm text-neutral-500">({item.reviews} reviews)</span>
                </div>

                <p className="text-2xl font-bold text-orange-600">{item.price}</p>
              </CardContent>

              <CardFooter className="p-5 pt-0 flex gap-2">
                <Button className="flex-1 bg-orange-600 hover:bg-orange-700" disabled={!item.inStock}>
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {item.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
                <Button variant="outline" size="icon">
                  <Info className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
