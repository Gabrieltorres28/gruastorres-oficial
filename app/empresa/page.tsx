import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Shield, Target, CheckCircle } from "lucide-react"

export default function EmpresaPage() {
  const values = [
    {
      icon: Shield,
      title: "Seguridad",
      description: "La seguridad es nuestra prioridad número uno en cada proyecto que realizamos.",
    },
    {
      icon: Award,
      title: "Excelencia",
      description: "Buscamos la excelencia operacional en cada servicio que brindamos a nuestros clientes.",
    },
    {
      icon: Users,
      title: "Compromiso",
      description: "Estamos comprometidos con el éxito de los proyectos de nuestros clientes.",
    },
    {
      icon: Target,
      title: "Precisión",
      description: "Ejecutamos cada operación con la máxima precisión y atención al detalle.",
    },
  ]

  const milestones = [
    { year: "2008", event: "Fundación de ATC Construcciones" },
    { year: "2012", event: "Primer contrato con Arauco" },
    { year: "2015", event: "Expansión de flota a 25 grúas" },
    { year: "2018", event: "Certificación ISO 9001:2015" },
    { year: "2020", event: "Lanzamiento marca Grúas TORRES" },
    { year: "2022", event: "Flota de 50+ grúas modernas" },
    { year: "2024", event: "Líder en servicios industriales" },
  ]

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-6">Nuestra Historia</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Acerca de ATC Construcciones</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Más de 15 años de experiencia en servicios de grúas industriales, construyendo relaciones sólidas con las
              principales empresas del país
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  ATC Construcciones nació en 2008 con la visión de brindar servicios de grúas industriales de la más
                  alta calidad. Fundada por Armando Torres, la empresa comenzó con un pequeño equipo y la determinación
                  de establecer nuevos estándares en el sector.
                </p>
                <p>
                  En 2020, lanzamos la marca Grúas TORRES para consolidar nuestra presencia en el mercado de servicios
                  especializados. Hoy, somos reconocidos como líderes en el sector, con una flota moderna de más de 50
                  grúas y un equipo de profesionales altamente capacitados.
                </p>
                <p>
                  Nuestro compromiso con la excelencia nos ha permitido establecer relaciones duraderas con empresas de
                  prestigio como Arauco, convirtiéndonos en su socio estratégico para proyectos industriales de gran
                  envergadura.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">En Números</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">15+</div>
                  <div className="text-sm text-gray-600">Años de Experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Proyectos Completados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Grúas en Flota</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Satisfacción Cliente</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nuestros Valores</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Los principios que guían cada decisión y acción en ATC Construcciones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <CardContent className="p-6">
                  <div className="bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nuestra Trayectoria</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hitos importantes en el crecimiento y desarrollo de ATC Construcciones
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold min-w-[80px] text-center">
                    {milestone.year}
                  </div>
                  <div className="flex items-center gap-3 flex-1">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{milestone.event}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-6 text-green-500">Nuestra Misión</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Brindar servicios de grúas industriales de excelencia, garantizando la seguridad, eficiencia y
                confiabilidad que nuestros clientes necesitan para el éxito de sus proyectos más importantes.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-6 text-green-500">Nuestra Visión</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Ser la empresa líder en servicios de grúas industriales en Chile, reconocida por nuestra innovación,
                calidad de servicio y compromiso con la excelencia operacional.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
