"use client"

import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MessageCircle } from "lucide-react"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <a
        href="https://wa.me/5493751415454?text=Hola%2C%20quiero%20una%20cotizaci%C3%B3n%20con%20el%20jefe"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-4 sm:right-6 z-40 inline-flex items-center gap-2 rounded-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 shadow-lg shadow-green-500/30 transition-transform hover:translate-y-[-2px]"
        aria-label="Chatear por WhatsApp con el jefe"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="text-sm font-semibold hidden sm:inline">WhatsApp</span>
      </a>
      <Footer />
    </div>
  )
}
