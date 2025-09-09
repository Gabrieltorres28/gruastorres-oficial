"use client"

import Image from "next/image"
import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Cake as Crane, Gauge, Ruler, Shield } from "lucide-react"

export default function FlotaPage() {
  // >>> Simulación de tu flota real con fotos en /public <<<
  const cranes = [
    {
      category: "Camiones con Grúa Articulada",
      cranes: [
        {
          model: "Iveco + Grúa Articulada",
          capacity: "16 ton",
          reach: "18 m",
          year: "2020",
          image: "/fondohome.png",
        },
        {
          model: "Iveco + Grúa Articulada (Industrial)",
          capacity: "20 ton",
          reach: "22 m",
          year: "2021",
          image: "/fondo1.png",
        },
        {
          model: "Iveco + Ferrioli Castiglione",
          capacity: "16 ton",
          reach: "16 m",
          year: "2019",
          image: "/originalhome.png",
        },
        {
          model: "Iveco + Grúa (Galpón)",
          capacity: "18 ton",
          reach: "20 m",
          year: "2020",
          image: "/services2.png",
        },
      ],
    },
    {
      category: "Grúas Móviles Todoterreno",
      cranes: [
        {
          model: "Grúa Móvil RT (Telescópica)",
          capacity: "50 ton",
          reach: "40 m",
          year: "2022",
          image: "/home3.png",
        },
      ],
    },
  ]

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-6">Flota Moderna</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestra Flota</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Equipos certificados, operados por profesionales y listos para tu obra.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">50+</div>
              <div className="text-gray-600">Grúas Disponibles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">500</div>
              <div className="text-gray-600">Toneladas Máx.</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">80 m</div>
              <div className="text-gray-600">Alcance Máximo</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">2023</div>
              <div className="text-gray-600">Modelos Recientes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Categories con fotos desde /public */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {cranes.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
                  {category.category}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.cranes.map((crane, craneIndex) => (
                    <Card
                      key={craneIndex}
                      className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <CardHeader className="pb-0">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="bg-green-500/10 w-10 h-10 rounded-lg flex items-center justify-center">
                            <Crane className="h-5 w-5 text-green-500" />
                          </div>
                          <Badge variant="secondary">{crane.year}</Badge>
                        </div>
                        <CardTitle className="text-lg text-slate-900">{crane.model}</CardTitle>
                      </CardHeader>

                      {/* Imagen principal */}
                      <div className="px-6 pt-4">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                          <Image
                            src={crane.image}
                            alt={crane.model}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 hover:scale-105"
                            priority={categoryIndex === 0 && craneIndex < 2}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                          <div className="absolute bottom-2 left-2 text-white/90 text-xs md:text-sm bg-black/40 backdrop-blur-sm px-2 py-1 rounded">
                            {crane.capacity} • {crane.reach}
                          </div>
                        </div>
                      </div>

                      <CardContent>
                        <div className="mt-4 space-y-3">
                          <div className="flex items-center gap-2">
                            <Gauge className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-gray-600">Capacidad: {crane.capacity}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Ruler className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-gray-600">Alcance: {crane.reach}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-gray-600">Certificada y asegurada</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Necesitás información específica?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Te ayudamos a elegir el equipo ideal según carga, radio y condiciones de obra.
          </p>
          <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
            Consultar Disponibilidad
          </Button>
        </div>
      </section>
    </MainLayout>
  )
}
