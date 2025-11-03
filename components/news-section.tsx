import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

const news = [
  {
    id: 1,
    title: "Novas Aulas de CrossFit Disponíveis",
    summary: "Confira os horários das novas turmas de CrossFit com instrutores certificados.",
    image: "/crossfit-class-with-people-training.jpg",
    date: "15 Jan 2025",
    category: "Aulas",
  },
  {
    id: 2,
    title: "Dicas de Nutrição para Ganho de Massa",
    summary: "Aprenda como otimizar sua dieta para maximizar os resultados na musculação.",
    image: "/healthy-meal-prep.png",
    date: "12 Jan 2025",
    category: "Nutrição",
  },
]

export function NewsSection() {
  return (
    <section className="py-16 px-4 bg-muted/20">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Últimas <span className="text-primary">Notícias</span>
          </h2>
          <Button variant="ghost" className="text-primary hover:text-primary/80">
            Ver todas
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {news.map((article) => (
            <Card
              key={article.id}
              className="overflow-hidden bg-card border-border/50 hover:border-primary/50 transition-all group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary px-3 py-1 rounded-full text-xs font-semibold">{article.category}</span>
                </div>
              </div>
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <h3 className="font-display font-bold text-xl leading-tight">{article.title}</h3>
                <p className="text-muted-foreground text-pretty">{article.summary}</p>
                <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                  Ler mais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
