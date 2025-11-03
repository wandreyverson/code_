import { TopBar } from "@/components/top-bar"
import { NewsHero } from "@/components/news-hero"
import { FeaturedArticle } from "@/components/featured-article"
import { NewsGrid } from "@/components/news-grid"
import { Footer } from "@/components/footer"
import { FloatingChat } from "@/components/floating-chat"

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <main>
        <NewsHero />
        <FeaturedArticle />
        <NewsGrid />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  )
}
