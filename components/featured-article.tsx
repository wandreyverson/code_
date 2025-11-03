import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function FeaturedArticle() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Badge className="mb-6 bg-orange-600 hover:bg-orange-700">Featured Article</Badge>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?key=featured-news"
              alt="Featured article"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <Badge variant="outline" className="mb-4">
              Training Science
            </Badge>

            <h2 className="text-4xl font-bold text-neutral-900 mb-4 text-balance">
              The Science Behind Progressive Overload: Why It Works
            </h2>

            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              Discover the physiological mechanisms that make progressive overload the cornerstone of muscle growth and
              strength development. Learn how to apply this principle effectively in your training routine for maximum
              results.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Dr. Sarah Mitchell</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>March 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 min read</span>
              </div>
            </div>

            <Button className="bg-orange-600 hover:bg-orange-700">
              Read Full Article
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
