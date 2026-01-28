"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Mail } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Flota", href: "/flota" },
    { name: "Industrias", href: "/industrias" },
    { name: "Empresa", href: "/empresa" },
    { name: "Colaboración Deportiva", href: "/mi-pasion" },
    { name: "Contacto", href: "/contacto" },
  ]

  return (
    <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-slate-800 py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="font-medium">info@gruastorres.com</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-gray-300">
                <span className="h-1 w-1 rounded-full bg-green-400" />
                <span className="font-semibold text-green-400">Movemos y elevamos cargas con precisión</span>
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
            {navigation.map((item) => {
              const isPassion = item.name === "Colaboración Deportiva"
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-all duration-200 font-medium hover:scale-105 ${
                    isPassion
                      ? "text-slate-900 bg-green-400 hover:bg-green-300 px-3 py-1 rounded-full shadow-sm shadow-green-500/30"
                      : "text-gray-300 hover:text-green-500"
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-green-500 hover:bg-green-600 text-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Link href="/contacto">Solicitar Cotización</Link>
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
              {navigation.map((item) => {
                const isPassion = item.name === "Colaboración Deportiva"
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`transition-colors duration-200 font-medium text-lg ${
                      isPassion
                        ? "text-slate-900 bg-green-400 hover:bg-green-300 px-3 py-2 rounded-full"
                        : "text-gray-300 hover:text-green-500"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <Button
                asChild
                className="bg-green-500 hover:bg-green-600 text-white mt-4 w-11/12 shadow-md hover:shadow-lg"
              >
                <Link href="/contacto">Solicitar Cotización</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>

    </header>
  )
}
