import Link from "next/link"
import { Dumbbell, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TopBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Dumbbell className="h-8 w-8 text-primary" />
          <span className="font-display text-2xl font-bold tracking-tight">
            Fit<span className="text-primary">Power</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Início
          </Link>
          <Link href="/treinos" className="text-sm font-medium transition-colors hover:text-primary">
            Treinos
          </Link>
          <Link href="/equipamentos" className="text-sm font-medium transition-colors hover:text-primary">
            Equipamentos
          </Link>
          <Link href="/noticias" className="text-sm font-medium transition-colors hover:text-primary">
            Notícias
          </Link>
          <Link href="/suplementos" className="text-sm font-medium transition-colors hover:text-primary">
            Suplementos
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button className="hidden md:inline-flex bg-primary hover:bg-primary/90">Matricule-se</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
