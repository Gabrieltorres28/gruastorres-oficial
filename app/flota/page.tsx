import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Cake as Crane, Gauge, Ruler, Shield } from "lucide-react"

export default function FlotaPage() {
  const cranes = [
    {
      category: "Grúas Móviles Ligeras",
      cranes: [
        { model: "Liebherr LTM 1030-2.1", capacity: "30 ton", reach: "40m", year: "2022" },
        { model: "Grove GMK3050-1", capacity: "50 ton", reach: "44m", year: "2021" },
        { model: "Tadano ATF 60G-3", capacity: "60 ton", reach: "48m", year: "2023" },
      ],
    },
    {
      category: "Grúas Móviles Medianas",
      cranes: [
        { model: "Liebherr LTM 1100-4.2", capacity: "100 ton", reach: "60m", year: "2022" },
        { model: "Grove GMK4100L-1", capacity: "100 ton", reach: "58m", year: "2021" },
        { model: "Tadano ATF 130G-5", capacity: "130 ton", reach: "68m", year: "2023" },
      ],
    },
    {
      category: "Grúas Móviles Pesadas",
      cranes: [
        { model: "Liebherr LTM 1200-5.1", capacity: "200 ton", reach: "72m", year: "2022" },
        { model: "Grove GMK5250L", capacity: "250 ton", reach: "70m", year: "2021" },
        { model: "Tadano ATF 400G-6", capacity: "400 ton", reach: "68m", year: "2023" },
      ],
    },
    {
      category: "Grúas Torre",
      cranes: [
        { model: "Potain MDT 219", capacity: "10 ton", reach: "65m", year: "2022" },
        { model: "Liebherr 200 EC-H 10", capacity: "16 ton", reach: "70m", year: "2021" },
        { model: "Potain MDT 389", capacity: "18 ton", reach: "75m", year: "2023" },
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
              Contamos con más de 50 grúas de última generación, mantenidas bajo los más altos estándares de calidad y
              seguridad
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
              <div className="text-3xl font-bold text-green-500 mb-2">80m</div>
              <div className="text-gray-600">Alcance Máximo</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">2023</div>
              <div className="text-gray-600">Modelos Recientes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {cranes.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">{category.category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.cranes.map((crane, craneIndex) => (
                    <Card
                      key={craneIndex}
                      className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="bg-green-500/10 w-10 h-10 rounded-lg flex items-center justify-center">
                            <Crane className="h-5 w-5 text-green-500" />
                          </div>
                          <Badge variant="secondary">{crane.year}</Badge>
                        </div>
                        <CardTitle className="text-lg text-slate-900">{crane.model}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
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
          <h2 className="text-3xl font-bold mb-4">¿Necesitas información específica de alguna grúa?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Nuestro equipo técnico puede ayudarte a seleccionar el equipo ideal para tu proyecto
          </p>
          <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
            Consultar Disponibilidad
          </Button>
        </div>
      </section>
    </MainLayout>
  )
}
