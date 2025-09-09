import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Términos y Condiciones - ATC Construcciones",
  description: "Términos y condiciones de servicio de ATC Construcciones - Grúas TORRES",
}

export default function TerminosPage() {
  return (
    <MainLayout>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-slate-900">Términos y Condiciones</CardTitle>
                <p className="text-gray-600">Última actualización: 15 de enero de 2024</p>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">1. Aceptación de Términos</h2>
                <p className="text-gray-700 mb-6">
                  Al acceder y utilizar los servicios de ATC Construcciones, usted acepta estar sujeto a estos términos
                  y condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros
                  servicios.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">2. Servicios</h2>
                <p className="text-gray-700 mb-4">
                  ATC Construcciones, operando bajo la marca Grúas TORRES, proporciona servicios de:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Alquiler y operación de grúas móviles</li>
                  <li>Servicios de grúas torre</li>
                  <li>Montaje industrial especializado</li>
                  <li>Transporte de equipos pesados</li>
                  <li>Servicios de emergencia 24/7</li>
                </ul>

                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">3. Responsabilidades del Cliente</h2>
                <p className="text-gray-700 mb-4">El cliente se compromete a:</p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Proporcionar información precisa sobre el proyecto</li>
                  <li>Garantizar condiciones seguras de trabajo en el sitio</li>
                  <li>Cumplir con todas las regulaciones locales aplicables</li>
                  <li>Pagar los servicios según los términos acordados</li>
                </ul>

                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">4. Seguridad y Responsabilidad</h2>
                <p className="text-gray-700 mb-6">
                  ATC Construcciones mantiene seguros completos y cumple con todas las normativas de seguridad
                  aplicables. La responsabilidad se limita según los términos del contrato específico de cada proyecto.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">5. Cotizaciones y Precios</h2>
                <p className="text-gray-700 mb-6">
                  Todas las cotizaciones son válidas por 30 días desde su emisión. Los precios pueden variar según las
                  condiciones específicas del proyecto, ubicación y urgencia del servicio.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">6. Cancelaciones</h2>
                <p className="text-gray-700 mb-6">
                  Las cancelaciones deben notificarse con al menos 24 horas de anticipación. Cancelaciones tardías
                  pueden estar sujetas a cargos según el contrato específico.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">7. Contacto</h2>
                <p className="text-gray-700 mb-6">
                  Para consultas sobre estos términos, contáctenos en:
                  <br />
                  Email: legal@atcconstrucciones.cl
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
