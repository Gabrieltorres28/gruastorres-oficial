"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Flota", href: "/flota" },
    { name: "Industrias", href: "/industrias" },
    { name: "Empresa", href: "/empresa" },
    { name: "Contacto", href: "/contacto" },
  ]

  return (
    <header className="bg-slate-900 text-white shadow-lg">
      {/* Top contact bar */}
      <div className="bg-slate-800 py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-green-500" />
                <span>+56 9 1234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-green-500" />
                <span>contacto@atcconstrucciones.cl</span>
              </div>
            </div>
            <div className="hidden md:block text-green-500 font-medium">Servicios 24/7 disponibles</div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-green-500 p-2 rounded-lg">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-slate-900 font-bold text-lg">ATC</span>
              </div>
            </div>
            <div>
              <div className="text-xl font-bold">ATC Construcciones</div>
              <div className="text-green-500 text-sm font-medium">Grúas TORRES</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-green-500 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-green-500 hover:bg-green-600 text-white">Solicitar Cotización</Button>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-700">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-green-500 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-green-500 hover:bg-green-600 text-white mt-4 w-full">Solicitar Cotización</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
