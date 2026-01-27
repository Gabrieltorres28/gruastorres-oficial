import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logoatc.png"
                alt="ATC Construcciones"
                width={70}
                height={70}
                className="h-12 sm:h-14 md:h-16 w-auto object-contain"
              />
              <div>
                <div className="text-lg font-bold">ATC Construcciones</div>
                <div className="text-green-500 text-sm font-medium">Grúas TORRES</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Especialistas en servicios de grúas industriales con base en Misiones, Argentina. Soluciones confiables
              para grandes empresas.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-500">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servicios" className="text-gray-400 hover:text-green-500 transition-colors">
                  Grúas Móviles
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-400 hover:text-green-500 transition-colors">
                  Grúas Torre
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-400 hover:text-green-500 transition-colors">
                  Montaje Industrial
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-400 hover:text-green-500 transition-colors">
                  Transporte Especializado
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-500">Contacto</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-400">+54 9 3751 415454</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-400">contacto@atcconstrucciones.cl</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Puerto Piray, Misiones
                  <br />
                  Argentina
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-500">Horarios</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  <div>Lun - Vie: 8:00 - 18:00</div>
                  <div>Sáb: 8:00 - 14:00</div>
                  <div className="text-green-500 font-medium mt-1">Emergencias 24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">© 2024 ATC Construcciones. Todos los derechos reservados.</div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacidad" className="text-gray-400 hover:text-green-500 transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="text-gray-400 hover:text-green-500 transition-colors">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
