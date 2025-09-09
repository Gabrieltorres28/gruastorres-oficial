import { MainLayout } from "@/components/layout/main-layout"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react"

export default function ContactoPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Teléfono",
      primary: "+56 9 1234 5678",
      secondary: "Disponible 24/7 para emergencias",
      action: "Llamar Ahora",
    },
    {
      icon: Mail,
      title: "Email",
      primary: "contacto@atcconstrucciones.cl",
      secondary: "Respuesta en menos de 2 horas",
      action: "Enviar Email",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      primary: "+56 9 1234 5678",
      secondary: "Chat directo con nuestro equipo",
      action: "Abrir WhatsApp",
    },
  ]

  const offices = [
    {
      city: "Santiago",
      address: "Av. Industrial 1234, Quilicura",
      phone: "+56 2 2345 6789",
      email: "santiago@atcconstrucciones.cl",
      hours: "Lun-Vie: 8:00-18:00, Sáb: 8:00-14:00",
    },
    {
      city: "Concepción",
      address: "Av. Pedro Aguirre Cerda 567",
      phone: "+56 41 234 5678",
      email: "concepcion@atcconstrucciones.cl",
      hours: "Lun-Vie: 8:00-18:00, Sáb: 8:00-14:00",
    },
    {
      city: "Valparaíso",
      address: "Av. Argentina 890, Valparaíso",
      phone: "+56 32 234 5678",
      email: "valparaiso@atcconstrucciones.cl",
      hours: "Lun-Vie: 8:00-18:00",
    },
  ]

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-6">
              Estamos Aquí para Ayudarte
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contacto</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Nuestro equipo está listo para atender tus consultas y brindarte la mejor solución para tu proyecto
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Methods */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Otras Formas de Contacto</h2>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <Card key={index} className="border-0 shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                            <method.icon className="h-6 w-6 text-green-500" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-slate-900 mb-1">{method.title}</h3>
                            <div className="text-lg font-medium text-slate-900 mb-1">{method.primary}</div>
                            <div className="text-sm text-gray-600 mb-2">{method.secondary}</div>
                            <button className="text-green-500 hover:text-green-600 font-medium text-sm">
                              {method.action}
                            </button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Quick Response Promise */}
              <Card className="border-0 shadow-md bg-green-50">
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Respuesta Garantizada</h3>
                  <p className="text-gray-600 text-sm">
                    Nos comprometemos a responder todas las consultas en menos de 2 horas durante horario laboral
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nuestras Oficinas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Contamos con oficinas estratégicamente ubicadas para brindar cobertura nacional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-green-500" />
                    {office.city}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="font-medium text-slate-900 mb-1">Dirección:</div>
                    <div className="text-gray-600 text-sm">{office.address}</div>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900 mb-1">Teléfono:</div>
                    <div className="text-gray-600 text-sm">{office.phone}</div>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900 mb-1">Email:</div>
                    <div className="text-gray-600 text-sm">{office.email}</div>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900 mb-1 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-green-500" />
                      Horarios:
                    </div>
                    <div className="text-gray-600 text-sm">{office.hours}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50 border-l-4 border-red-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-red-800 mb-4">¿Tienes una Emergencia?</h2>
            <p className="text-red-700 mb-6">
              Para situaciones de emergencia, contamos con servicio 24/7 con tiempo de respuesta garantizado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold">
                Emergencias: +56 9 8765 4321
              </div>
              <div className="text-red-700 px-6 py-3">Respuesta en menos de 2 horas</div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
