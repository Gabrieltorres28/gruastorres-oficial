"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Send } from "lucide-react"

interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  serviceType: string
  projectType: string
  message: string
  urgency: string
  acceptTerms: boolean
}

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    projectType: "",
    message: "",
    urgency: "",
    acceptTerms: false,
  })

  const handleInputChange = (field: keyof ContactFormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.acceptTerms) {
      toast({
        title: "Error",
        description: "Debes aceptar los términos y condiciones",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "¡Mensaje enviado!",
          description: "Nos pondremos en contacto contigo en las próximas 2 horas.",
        })
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          serviceType: "",
          projectType: "",
          message: "",
          urgency: "",
          acceptTerms: false,
        })
      } else {
        throw new Error("Error al enviar el mensaje")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Por favor intenta nuevamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-slate-900">Solicitar Cotización</CardTitle>
        <p className="text-gray-600">Completa el formulario y nuestro equipo técnico se pondrá en contacto contigo</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre Completo *</Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Tu nombre completo"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="tu@empresa.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono *</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+56 9 1234 5678"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Empresa</Label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                placeholder="Nombre de tu empresa"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="serviceType">Tipo de Servicio *</Label>
              <Select required onValueChange={(value) => handleInputChange("serviceType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un servicio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gruas-moviles">Grúas Móviles</SelectItem>
                  <SelectItem value="gruas-torre">Grúas Torre</SelectItem>
                  <SelectItem value="montaje-industrial">Montaje Industrial</SelectItem>
                  <SelectItem value="transporte-especializado">Transporte Especializado</SelectItem>
                  <SelectItem value="servicio-emergencia">Servicio de Emergencia</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="urgency">Urgencia del Proyecto</Label>
              <Select onValueChange={(value) => handleInputChange("urgency", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona urgencia" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inmediata">Inmediata (24-48 horas)</SelectItem>
                  <SelectItem value="urgente">Urgente (1 semana)</SelectItem>
                  <SelectItem value="normal">Normal (2-4 semanas)</SelectItem>
                  <SelectItem value="planificado">Planificado (1+ mes)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="projectType">Tipo de Proyecto</Label>
            <Input
              id="projectType"
              type="text"
              value={formData.projectType}
              onChange={(e) => handleInputChange("projectType", e.target.value)}
              placeholder="Ej: Construcción industrial, montaje de equipos, etc."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Descripción del Proyecto *</Label>
            <Textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Describe tu proyecto, capacidades requeridas, ubicación, fechas estimadas, etc."
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={formData.acceptTerms}
              onCheckedChange={(checked) => handleInputChange("acceptTerms", checked as boolean)}
            />
            <Label htmlFor="terms" className="text-sm text-gray-600">
              Acepto los{" "}
              <a href="/terminos" className="text-green-500 hover:text-green-600">
                términos y condiciones
              </a>{" "}
              y{" "}
              <a href="/privacidad" className="text-green-500 hover:text-green-600">
                política de privacidad
              </a>
            </Label>
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-green-500 hover:bg-green-600 text-white"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Enviar Solicitud
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
