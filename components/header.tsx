"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"
import Image from "next/image"

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
    <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-slate-800 py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-green-500" />
                <span>+56 9 1234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-green-500" />
                <span>contacto@atcconstrucciones.cl</span>
              </div>
            </div>
            <div className="hidden md:block text-green-500 font-medium animate-pulse">
              Servicios 24/7 disponibles
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo oficial */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logoatc.png" // asegúrate que esté en /public/logo-atc.png
              alt="ATC Construcciones"
              width={70}
              height={70}
              priority
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transform group-hover:scale-105 group-hover:rotate-1 transition-transform duration-300"
            />
            <div className="hidden sm:block">
              <div className="text-lg sm:text-xl font-bold">ATC Construcciones</div>
              <div className="text-green-500 text-sm font-medium">Grúas TORRES</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-green-500 transition-all duration-200 font-medium hover:scale-105"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-green-500 hover:bg-green-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
              Solicitar Cotización
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-slate-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-700 animate-fadeIn">
            <nav className="flex flex-col space-y-4 items-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-green-500 transition-colors duration-200 font-medium text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-green-500 hover:bg-green-600 text-white mt-4 w-11/12 shadow-md hover:shadow-lg">
                Solicitar Cotización
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
