import { Dumbbell, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50 py-12 px-4">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="font-display text-2xl font-bold">
                Fit<span className="text-primary">Power</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground text-pretty">
              Transforme seu corpo e mente com a melhor academia da região.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/treinos" className="text-muted-foreground hover:text-primary transition-colors">
                  Treinos
                </Link>
              </li>
              <li>
                <Link href="/equipamentos" className="text-muted-foreground hover:text-primary transition-colors">
                  Equipamentos
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="text-muted-foreground hover:text-primary transition-colors">
                  Notícias
                </Link>
              </li>
              <li>
                <Link href="/suplementos" className="text-muted-foreground hover:text-primary transition-colors">
                  Suplementos
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>(11) 9999-9999</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>contato@fitpower.com</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>Av. Paulista, 1000 - São Paulo, SP</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg">Redes Sociais</h3>
            <div className="flex gap-3">
              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-muted hover:bg-primary transition-colors flex items-center justify-center"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-muted hover:bg-primary transition-colors flex items-center justify-center"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-muted hover:bg-primary transition-colors flex items-center justify-center"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 FitPower. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
