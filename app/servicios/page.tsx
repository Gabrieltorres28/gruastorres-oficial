import { MainLayout } from "@/components/layout/main-layout"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Cake as Crane, Shield, Wrench, Clock, CheckCircle, ArrowRight } from "lucide-react"

export default function ServiciosPage() {
  const services = [
    {
      icon: Crane,
      title: "Grúas Móviles",
      capacity: "5 - 500 toneladas",
      description:
        "Grúas móviles de última generación para obras civiles, industriales y montajes con radios extensos.",
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
      title: "Movimientos Pesados y Controlados",
      capacity: "Piezas únicas • Alto tonelaje",
      description:
        "Izajes críticos, giros y traslados de componentes pesados con planes de maniobra y supervisión integral.",
      features: [
        "Planificación de rigging y puntos de izaje",
        "Giros controlados con spreaders y ganchos giratorios",
        "Equipos de alta capacidad y lastre modular",
        "Supervisión técnica y checklists por fase",
        "Cumplimiento de normas IRAM / ASME",
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div key={index} className="group [perspective:1200px]">
                <div className="relative h-full min-h-[320px] w-full rounded-2xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:rotate-y-180">
                  {/* Front */}
                  <div className="absolute inset-0 bg-white rounded-2xl p-6 border border-slate-100 [backface-visibility:hidden] flex flex-col justify-between">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                        <Badge variant="secondary" className="mt-1">
                          {service.capacity}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    <div className="flex items-center justify-between text-sm text-green-600 font-semibold">
                      <span>Ver detalles</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 rounded-2xl bg-slate-900 text-white p-6 [backface-visibility:hidden] rotate-y-180 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <p className="text-sm uppercase tracking-[0.12em] text-green-300">Detalles del servicio</p>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                    <ul className="space-y-2 text-sm text-gray-100 flex-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex items-center justify-between text-sm text-green-300 font-semibold">
                      <span>Listo para tu próximo proyecto</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
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
