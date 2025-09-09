import Link from "next/link"
import { MainLayout } from "@/components/layout/main-layout"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <MainLayout>
      <section className="py-20 bg-gray-50 min-h-[60vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-6xl font-bold text-green-500 mb-4">404</div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Página No Encontrada</h1>
            <p className="text-xl text-gray-600 mb-8">Lo sentimos, la página que buscas no existe o ha sido movida.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Ir al Inicio
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contacto">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Contactar Soporte
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
