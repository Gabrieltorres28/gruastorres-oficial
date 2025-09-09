import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

export const metadata: Metadata = {
  title: "ATC Construcciones - Grúas TORRES | Servicios de Grúas Industriales",
  description:
    "ATC Construcciones ofrece servicios especializados de grúas industriales bajo la marca Grúas TORRES. Soluciones profesionales para grandes empresas como Arauco.",
  keywords: "grúas industriales, construcción, ATC Construcciones, Grúas TORRES, servicios industriales, Arauco",
  authors: [{ name: "ATC Construcciones" }],
  creator: "ATC Construcciones",
  publisher: "ATC Construcciones",
  robots: "index, follow",
  openGraph: {
    title: "ATC Construcciones - Grúas TORRES",
    description: "Servicios especializados de grúas industriales para grandes empresas",
    type: "website",
    locale: "es_ES",
    siteName: "ATC Construcciones",
  },
  twitter: {
    card: "summary_large_image",
    title: "ATC Construcciones - Grúas TORRES",
    description: "Servicios especializados de grúas industriales para grandes empresas",
  },
  alternates: {
    canonical: "https://atcconstrucciones.cl",
  },
  generator: "v0.app",
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ATC Construcciones",
  alternateName: "Grúas TORRES",
  url: "https://atcconstrucciones.cl",
  logo: "https://atcconstrucciones.cl/logo.png",
  description:
    "Servicios especializados de grúas industriales con más de 15 años de experiencia. Soluciones confiables para grandes empresas.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Industrial 1234",
    addressLocality: "Santiago",
    addressRegion: "Región Metropolitana",
    addressCountry: "CL",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+56-9-1234-5678",
    contactType: "customer service",
    availableLanguage: "Spanish",
  },
  sameAs: ["https://www.linkedin.com/company/atc-construcciones"],
  serviceArea: {
    "@type": "Country",
    name: "Chile",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Grúas Industriales",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Grúas Móviles",
          description: "Servicios de grúas móviles de 5 a 500 toneladas",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Grúas Torre",
          description: "Grúas torre para construcción en altura",
        },
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Toaster />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
