import { MainLayout } from "@/components/layout/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cake as Crane, Shield, Clock, Users, CheckCircle, Star, ArrowRight, Phone } from "lucide-react"

export default function HomePage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-6">
              Más de 30 años de experiencia
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Soluciones de <span className="text-green-500">Grúas Industriales</span> de Clase Mundial
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto text-pretty">
              ATC Construcciones opera bajo la marca Grúas TORRES, ofreciendo servicios especializados de grúas para
              grandes empresas como Arauco. Confiabilidad y seguridad garantizadas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg">
                <a href="/contacto">
                  Solicitar Cotización
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una gama completa de servicios de grúas industriales para satisfacer las necesidades más
              exigentes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Crane,
                title: "Grúas Móviles",
                description: "Grúas móviles de alta capacidad para proyectos de construcción y montaje industrial",
              },
              {
                icon: Shield,
                title: "Grúas Torre",
                description: "Grúas torre para construcción en altura con máxima seguridad y precisión",
              },
              {
                icon: Users,
                title: "Montaje Industrial",
                description: "Servicios especializados de montaje para equipos industriales pesados",
              },
              {
                icon: Clock,
                title: "Servicio 24/7",
                description: "Disponibilidad completa para emergencias y proyectos urgentes",
              },
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">¿Por qué elegir Grúas TORRES?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Somos el socio confiable para grandes empresas que requieren servicios de grúas de la más alta calidad y
                seguridad.
              </p>

              <div className="space-y-4">
                {[
                  "Más de 30 años de experiencia en el sector industrial",
                  "Flota moderna y certificada con mantenimiento riguroso",
                  "Operadores altamente capacitados y certificados",
                  "Cobertura nacional con respuesta rápida",
                  "Seguros completos y cumplimiento normativo",
                  "Clientes de prestigio como Arauco confían en nosotros",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl text-white">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-green-500 mb-2">500+</div>
                <div className="text-lg">Proyectos Completados</div>
              </div>

              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-500">30+</div>
                  <div className="text-sm text-gray-300">Años de Experiencia</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-500">24/7</div>
                  <div className="text-sm text-gray-300">Disponibilidad</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-500">100%</div>
                  <div className="text-sm text-gray-300">Seguridad</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-500">4+</div>
                  <div className="text-sm text-gray-300">Grúas Disponibles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-slate-900 mb-8 text-balance">
              "ATC Construcciones ha sido nuestro socio estratégico en múltiples proyectos industriales. Su
              profesionalismo y confiabilidad son excepcionales."
            </blockquote>
            <div className="text-lg text-gray-600">
              <div className="font-semibold">Gerente de Operaciones</div>
              <div>Arauco S.A.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para tu próximo proyecto?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo para una cotización personalizada y descubre por qué las grandes empresas confían en
            Grúas TORRES.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg">
              <a href="/contacto">Solicitar Cotización Gratuita</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg bg-transparent"
            >
              <a href="/flota">Ver Nuestra Flota</a>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
