import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const articles = [
  {
    id: 1,
    title: "10 Essential Supplements for Muscle Growth",
    excerpt:
      "A comprehensive guide to the most effective supplements backed by scientific research for building lean muscle mass.",
    category: "Nutrition",
    author: "Mike Johnson",
    date: "March 12, 2024",
    readTime: "6 min",
    image: "/placeholder.svg?key=article1",
  },
  {
    id: 2,
    title: "How to Break Through Training Plateaus",
    excerpt: "Expert strategies to overcome stagnation and continue making progress when your gains have stalled.",
    category: "Training",
    author: "Coach Alex Rivera",
    date: "March 10, 2024",
    readTime: "7 min",
    image: "/placeholder.svg?key=article2",
  },
  {
    id: 3,
    title: "The Ultimate Guide to Meal Prep for Athletes",
    excerpt: "Save time and stay on track with your nutrition goals using these proven meal preparation strategies.",
    category: "Nutrition",
    author: "Chef Maria Santos",
    date: "March 8, 2024",
    readTime: "10 min",
    image: "/placeholder.svg?key=article3",
  },
  {
    id: 4,
    title: "Recovery Techniques Used by Pro Athletes",
    excerpt:
      "Learn the advanced recovery methods that professional athletes use to maximize performance and prevent injury.",
    category: "Recovery",
    author: "Dr. James Chen",
    date: "March 5, 2024",
    readTime: "8 min",
    image: "/placeholder.svg?key=article4",
  },
  {
    id: 5,
    title: "Building a Home Gym on a Budget",
    excerpt:
      "Get the most bang for your buck with this guide to creating an effective home gym without breaking the bank.",
    category: "Equipment",
    author: "Tom Anderson",
    date: "March 3, 2024",
    readTime: "5 min",
    image: "/placeholder.svg?key=article5",
  },
  {
    id: 6,
    title: "The Role of Sleep in Muscle Recovery",
    excerpt: "Understanding how quality sleep impacts your training results and what you can do to optimize your rest.",
    category: "Recovery",
    author: "Dr. Emily White",
    date: "March 1, 2024",
    readTime: "6 min",
    image: "/placeholder.svg?key=article6",
  },
  {
    id: 7,
    title: "Cardio vs. Strength Training: Finding Balance",
    excerpt:
      "Discover how to structure your training program to include both cardio and strength work for optimal results.",
    category: "Training",
    author: "Coach David Lee",
    date: "February 28, 2024",
    readTime: "7 min",
    image: "/placeholder.svg?key=article7",
  },
  {
    id: 8,
    title: "Pre-Workout Nutrition: What Really Works",
    excerpt: "Science-backed recommendations for fueling your workouts and maximizing performance in the gym.",
    category: "Nutrition",
    author: "Nutritionist Lisa Brown",
    date: "February 25, 2024",
    readTime: "5 min",
    image: "/placeholder.svg?key=article8",
  },
  {
    id: 9,
    title: "Mobility Training for Better Performance",
    excerpt:
      "Why mobility work is crucial for injury prevention and how to incorporate it into your routine effectively.",
    category: "Training",
    author: "Coach Rachel Green",
    date: "February 22, 2024",
    readTime: "6 min",
    image: "/placeholder.svg?key=article9",
  },
]

export function NewsGrid() {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 mb-2">Latest Articles</h2>
          <p className="text-neutral-600">Expert insights and practical advice for your fitness journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-orange-600 hover:bg-orange-700">{article.category}</Badge>
              </div>

              <CardContent className="p-5">
                <h3 className="text-xl font-bold text-neutral-900 mb-3 text-balance leading-snug">{article.title}</h3>

                <p className="text-neutral-600 text-sm leading-relaxed mb-4">{article.excerpt}</p>

                <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500">
                  <div className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{article.readTime} read</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-5 pt-0">
                <Button variant="ghost" className="w-full text-orange-600 hover:text-orange-700 hover:bg-orange-50">
                  Read Article
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
