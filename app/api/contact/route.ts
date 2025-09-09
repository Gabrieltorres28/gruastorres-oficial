import { type NextRequest, NextResponse } from "next/server"

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

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.serviceType || !body.message) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }

    if (!body.acceptTerms) {
      return NextResponse.json({ error: "Debes aceptar los términos y condiciones" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Formato de email inválido" }, { status: 400 })
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM
    // 4. Send auto-response email

    // For now, we'll just log the submission
    console.log("Nueva solicitud de contacto:", {
      timestamp: new Date().toISOString(),
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company,
      serviceType: body.serviceType,
      projectType: body.projectType,
      urgency: body.urgency,
      message: body.message,
    })

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json(
      {
        success: true,
        message: "Solicitud recibida correctamente. Nos pondremos en contacto contigo pronto.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
