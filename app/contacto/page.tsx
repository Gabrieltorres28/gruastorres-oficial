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
      city: "Puerto Piray, Misiones (Argentina)",
      address: "Calle Alem (ex Colón), CP 3381",
      phone: "+54 376 4 154 154",
      email: "contacto@gruastorres.com",
      hours: "Lun-Vie: 8:00-18:00, Sáb: 8:00-13:00",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3545.8399399014226!2d-54.715!3d-26.459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f897d6b7c3d2c5%3A0x0000000000000000!2sPuerto%20Piray%2C%20Misiones!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar",
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nuestra Oficina</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Operamos desde Puerto Piray, Misiones (Argentina) para coordinar todas las maniobras y atención 24/7.
            </p>
          </div>

          {offices.map((office, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch border border-gray-100 rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-8 bg-white">
                <Card className="border-0 shadow-none">
                  <CardHeader>
                    <CardTitle className="text-2xl text-slate-900 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-green-500" />
                      {office.city}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="font-medium text-slate-900 mb-1">Dirección</div>
                      <div className="text-gray-700">{office.address}</div>
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 mb-1">Teléfono</div>
                      <div className="text-gray-700">{office.phone}</div>
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 mb-1">Email</div>
                      <div className="text-gray-700">{office.email}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-green-500" />
                      <div className="text-gray-700 text-sm">{office.hours}</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="relative min-h-[320px] bg-gray-100">
                <iframe
                  title={`Mapa ${office.city}`}
                  src={office.mapSrc}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          ))}
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
