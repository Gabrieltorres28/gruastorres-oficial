import { MainLayout } from "@/components/layout/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cake as Crane, Shield, Wrench, Clock, CheckCircle, ArrowRight } from "lucide-react"

export default function ServiciosPage() {
  const services = [
    {
      icon: Crane,
      title: "Grúas Móviles",
      capacity: "5 - 500 toneladas",
      description:
        "Grúas móviles de última generación para proyectos de construcción, montaje industrial y obras civiles.",
      features: [
        "Capacidades desde 5 hasta 500 toneladas",
        "Alcances de hasta 80 metros",
        "Operadores certificados",
        "Mantenimiento preventivo riguroso",
        "Disponibilidad 24/7",
      ],
    },
    {
      icon: Shield,
      title: "Grúas Torre",
      capacity: "Hasta 32 toneladas",
      description: "Grúas torre para construcción en altura con máxima precisión y seguridad en espacios reducidos.",
      features: [
        "Capacidades hasta 32 toneladas",
        "Alturas de trabajo hasta 80m",
        "Montaje y desmontaje especializado",
        "Certificaciones de seguridad",
        "Supervisión técnica permanente",
      ],
    },
    {
      icon: Wrench,
      title: "Montaje Industrial",
      capacity: "Proyectos complejos",
      description: "Servicios especializados de montaje para equipos industriales pesados y estructuras metálicas.",
      features: [
        "Montaje de estructuras metálicas",
        "Instalación de equipos industriales",
        "Proyectos llave en mano",
        "Ingeniería de montaje",
        "Cumplimiento normativo estricto",
      ],
    },
    {
      icon: Clock,
      title: "Servicios de Emergencia",
      capacity: "Respuesta inmediata",
      description: "Atención 24/7 para situaciones de emergencia y proyectos urgentes con respuesta garantizada.",
      features: [
        "Disponibilidad 24 horas",
        "Respuesta en menos de 2 horas",
        "Equipo de emergencia dedicado",
        "Cobertura nacional",
        "Soporte técnico especializado",
      ],
    },
  ]

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-6">Servicios Especializados</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Servicios</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ofrecemos una gama completa de servicios de grúas industriales con los más altos estándares de calidad y
              seguridad
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {service.capacity}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas una cotización personalizada?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Nuestro equipo técnico está listo para evaluar tu proyecto y ofrecerte la mejor solución
          </p>
          <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
            <a href="/contacto">
              Solicitar Cotización
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </MainLayout>
  )
}
