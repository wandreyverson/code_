import { Star, ShoppingCart, Heart } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const supplements = [
  {
    id: 1,
    name: "Whey Protein Isolate",
    brand: "ProFit Nutrition",
    description: "25g protein per serving, fast-absorbing whey isolate",
    price: "$49.99",
    originalPrice: "$59.99",
    rating: 4.8,
    reviews: 1243,
    image: "/placeholder.svg?key=supp1",
    category: "Protein",
    bestseller: true,
    onSale: true,
  },
  {
    id: 2,
    name: "Pre-Workout Extreme",
    brand: "Energy Labs",
    description: "300mg caffeine, beta-alanine, and citrulline malate",
    price: "$39.99",
    rating: 4.7,
    reviews: 892,
    image: "/placeholder.svg?key=supp2",
    category: "Pre-Workout",
    bestseller: true,
    onSale: false,
  },
  {
    id: 3,
    name: "Creatine Monohydrate",
    brand: "Pure Strength",
    description: "5g pure micronized creatine per serving",
    price: "$24.99",
    rating: 4.9,
    reviews: 2156,
    image: "/placeholder.svg?key=supp3",
    category: "Performance",
    bestseller: true,
    onSale: false,
  },
  {
    id: 4,
    name: "BCAA Recovery Formula",
    brand: "Muscle Recovery Co",
    description: "2:1:1 ratio with added electrolytes",
    price: "$34.99",
    rating: 4.6,
    reviews: 678,
    image: "/placeholder.svg?key=supp4",
    category: "Recovery",
    bestseller: false,
    onSale: false,
  },
  {
    id: 5,
    name: "Multivitamin Elite",
    brand: "Vital Health",
    description: "Complete daily vitamin and mineral support",
    price: "$29.99",
    rating: 4.7,
    reviews: 1534,
    image: "/placeholder.svg?key=supp5",
    category: "Vitamins",
    bestseller: false,
    onSale: false,
  },
  {
    id: 6,
    name: "Thermogenic Fat Burner",
    brand: "Lean Body Labs",
    description: "Metabolism booster with green tea extract",
    price: "$44.99",
    originalPrice: "$54.99",
    rating: 4.5,
    reviews: 543,
    image: "/placeholder.svg?key=supp6",
    category: "Fat Burners",
    bestseller: false,
    onSale: true,
  },
  {
    id: 7,
    name: "Casein Protein Night",
    brand: "ProFit Nutrition",
    description: "Slow-release protein for overnight recovery",
    price: "$54.99",
    rating: 4.8,
    reviews: 876,
    image: "/placeholder.svg?key=supp7",
    category: "Protein",
    bestseller: false,
    onSale: false,
  },
  {
    id: 8,
    name: "Omega-3 Fish Oil",
    brand: "Pure Health",
    description: "1000mg EPA/DHA per serving",
    price: "$19.99",
    rating: 4.7,
    reviews: 1987,
    image: "/placeholder.svg?key=supp8",
    category: "Vitamins",
    bestseller: false,
    onSale: false,
  },
  {
    id: 9,
    name: "Glutamine Powder",
    brand: "Muscle Recovery Co",
    description: "5g L-Glutamine for muscle recovery",
    price: "$27.99",
    rating: 4.6,
    reviews: 432,
    image: "/placeholder.svg?key=supp9",
    category: "Recovery",
    bestseller: false,
    onSale: false,
  },
  {
    id: 10,
    name: "Mass Gainer Pro",
    brand: "Bulk Up Nutrition",
    description: "1250 calories, 50g protein per serving",
    price: "$64.99",
    rating: 4.5,
    reviews: 654,
    image: "/placeholder.svg?key=supp10",
    category: "Protein",
    bestseller: false,
    onSale: false,
  },
  {
    id: 11,
    name: "ZMA Sleep Support",
    brand: "Rest & Recover",
    description: "Zinc, magnesium, and vitamin B6 for better sleep",
    price: "$22.99",
    rating: 4.8,
    reviews: 789,
    image: "/placeholder.svg?key=supp11",
    category: "Recovery",
    bestseller: false,
    onSale: false,
  },
  {
    id: 12,
    name: "Nitric Oxide Booster",
    brand: "Pump Labs",
    description: "L-Arginine and L-Citrulline for enhanced pumps",
    price: "$37.99",
    rating: 4.6,
    reviews: 521,
    image: "/placeholder.svg?key=supp12",
    category: "Pre-Workout",
    bestseller: false,
    onSale: false,
  },
]

export function SupplementsStore() {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-2">All Supplements</h2>
            <p className="text-neutral-600">Showing {supplements.length} products</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {supplements.map((supplement) => (
            <Card key={supplement.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
              <div className="relative h-64 overflow-hidden bg-neutral-100">
                <img
                  src={supplement.image || "/placeholder.svg"}
                  alt={supplement.name}
                  className="w-full h-full object-cover"
                />
                {supplement.bestseller && (
                  <Badge className="absolute top-3 left-3 bg-orange-600 hover:bg-orange-700">Bestseller</Badge>
                )}
                {supplement.onSale && (
                  <Badge className="absolute top-3 right-3 bg-red-600 hover:bg-red-700">Sale</Badge>
                )}
                <Button variant="ghost" size="icon" className="absolute bottom-3 right-3 bg-white/90 hover:bg-white">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <CardContent className="p-5">
                <Badge variant="outline" className="mb-3 text-xs">
                  {supplement.category}
                </Badge>

                <p className="text-sm text-neutral-600 mb-1">{supplement.brand}</p>

                <h3 className="text-lg font-bold text-neutral-900 mb-2 text-balance">{supplement.name}</h3>

                <p className="text-sm text-neutral-600 mb-3 leading-relaxed">{supplement.description}</p>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
                    <span className="text-sm font-medium text-neutral-900">{supplement.rating}</span>
                  </div>
                  <span className="text-sm text-neutral-500">({supplement.reviews})</span>
                </div>

                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-bold text-orange-600">{supplement.price}</p>
                  {supplement.originalPrice && (
                    <p className="text-sm text-neutral-400 line-through">{supplement.originalPrice}</p>
                  )}
                </div>
              </CardContent>

              <CardFooter className="p-5 pt-0">
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
