import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Exo_2 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
})

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "FitPower - Academia e Performance",
  description: "Supere seus limites com FitPower",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${exo2.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
