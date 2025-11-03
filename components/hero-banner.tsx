import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroBanner() {
  return (
    <section className="relative h-[600px] md:h-[700px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
      <img
        src="/modern-gym-interior-with-equipment-and-dramatic-li.jpg"
        alt="Academia FitPower"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-20 container h-full flex flex-col justify-center px-4 md:px-8">
        <div className="max-w-2xl space-y-6">
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-balance">
            Supere seus <span className="text-primary">limites</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty">
            Transforme seu corpo e mente com treinos personalizados, equipamentos de ponta e suporte profissional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg">
              Matricule-se agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              Conheça a academia
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
