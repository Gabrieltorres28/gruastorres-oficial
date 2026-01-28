import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Factory, Building, Zap, Truck, TreePine, Wrench } from "lucide-react"

export default function IndustriasPage() {
  const industries = [
    {
      icon: TreePine,
      title: "Forestal y Celulosa",
      description:
        "Servicios especializados para la industria forestal, incluyendo montaje de equipos de procesamiento y estructuras industriales.",
      clients: ["Arauco", "CMPC", "Masisa"],
      services: [
        "Montaje de equipos de celulosa",
        "Instalación de estructuras",
        "Mantenimiento industrial",
        "Proyectos de expansión",
      ],
    },
    {
      icon: Factory,
      title: "Manufactura Industrial",
      description:
        "Soluciones integrales para plantas manufactureras, desde montaje de líneas de producción hasta mantenimiento de equipos.",
      clients: ["Empresas Manufactureras", "Plantas de Producción"],
      services: [
        "Montaje de líneas de producción",
        "Instalación de maquinaria pesada",
        "Relocación de equipos",
        "Proyectos de modernización",
      ],
    },
    {
      icon: Building,
      title: "Construcción y Obras Civiles",
      description:
        "Servicios de grúas para proyectos de construcción de gran envergadura, edificios industriales y obras de infraestructura.",
      clients: ["Constructoras", "Desarrolladores Inmobiliarios"],
      services: [
        "Construcción de edificios",
        "Obras de infraestructura",
        "Montaje de estructuras metálicas",
        "Proyectos residenciales",
      ],
    },
    {
      icon: Zap,
      title: "Energía y Utilities",
      description:
        "Apoyo especializado para proyectos de generación eléctrica, subestaciones y infraestructura energética.",
      clients: ["Empresas Eléctricas", "Generadoras"],
      services: [
        "Montaje de torres eléctricas",
        "Instalación de transformadores",
        "Proyectos solares y eólicos",
        "Mantenimiento de subestaciones",
      ],
    },
    {
      icon: Truck,
      title: "Logística y Transporte",
      description: "Servicios para centros de distribución, puertos y terminales de carga con equipos especializados.",
      clients: ["Puertos", "Centros de Distribución"],
      services: [
        "Montaje de grúas portuarias",
        "Instalación de sistemas de carga",
        "Infraestructura logística",
        "Equipos de manipulación",
      ],
    },
   
  ]

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-6">Experiencia Sectorial</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industrias que Servimos</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Más de 30 años de experiencia atendiendo las necesidades específicas de diferentes sectores industriales
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <industry.icon className="h-6 w-6 text-green-500" />
                    </div>
                    <CardTitle className="text-xl text-slate-900">{industry.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-600 mb-6">{industry.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-2">Clientes Destacados:</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.clients.map((client, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {client}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Servicios:</h4>
                    <ul className="space-y-1">
                      {industry.services.map((service, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <div className="w-1 h-1 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Client Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Cliente Destacado: Arauco</h2>
            <div className="bg-slate-900 p-8 rounded-2xl text-white">
              <p className="text-lg mb-6">
                "Hemos trabajado con ATC Construcciones en múltiples proyectos de expansión y mantenimiento. Su
                capacidad técnica y compromiso con la seguridad los convierte en nuestro socio estratégico de
                confianza."
              </p>
              <div className="text-green-500 font-semibold">Arauco S.A. - Gerencia de Operaciones</div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
