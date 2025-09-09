import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Política de Privacidad - ATC Construcciones",
  description: "Política de privacidad y protección de datos de ATC Construcciones - Grúas TORRES",
}

export default function PrivacidadPage() {
  return (
    <MainLayout>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-slate-900">Política de Privacidad</CardTitle>
                <p className="text-gray-600">Última actualización: 15 de enero de 2024</p>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">1. Información que Recopilamos</h2>
                <p className="text-gray-700 mb-4">
                  En ATC Construcciones recopilamos información personal cuando usted se pone en contacto con nosotros a
                  través de nuestro sitio web, incluyendo:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Nombre completo</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Número de teléfono</li>
                  <li>Nombre de la empresa</li>
                  <li>Información del proyecto o consulta</li>
                </ul>

                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">2. Uso de la Información</h2>
                <p className="text-gray-700 mb-4">Utilizamos su información personal para:</p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Responder a sus consultas y solicitudes de cotización</li>
                  <li>Proporcionar información sobre nuestros servicios</li>
                  <li>Mejorar nuestros servicios y experiencia del cliente</li>
                  <li>Cumplir con obligaciones legales y regulatorias</li>
                </ul>

                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">3. Protección de Datos</h2>
                <p className="text-gray-700 mb-6">
                  Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información
                  personal contra acceso no autorizado, alteración, divulgación o destrucción.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">4. Compartir Información</h2>
                <p className="text-gray-700 mb-6">
                  No vendemos, intercambiamos o transferimos su información personal a terceros sin su consentimiento,
                  excepto cuando sea necesario para proporcionar nuestros servicios o cumplir con la ley.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">5. Sus Derechos</h2>
                <p className="text-gray-700 mb-4">Usted tiene derecho a:</p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Acceder a su información personal</li>
                  <li>Rectificar información inexacta</li>
                  <li>Solicitar la eliminación de sus datos</li>
                  <li>Oponerse al procesamiento de sus datos</li>
                </ul>

                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">6. Contacto</h2>
                <p className="text-gray-700 mb-6">
                  Para ejercer sus derechos o realizar consultas sobre esta política, contáctenos en:
                  <br />
                  Email: privacidad@atcconstrucciones.cl
                  <br />
                  Teléfono: +56 9 1234 5678
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
