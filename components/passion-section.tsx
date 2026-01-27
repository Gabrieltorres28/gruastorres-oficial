import Image from "next/image"
import "./passion-section.css"

type PassionItem = {
  src: string
  alt: string
  titulo?: string
  detalle?: string
}

export function PassionSection() {
  const items: PassionItem[] = [
    {
      src: "/WhatsApp%20Image%202026-01-27%20at%2014.30.12.jpeg",
      alt: "TC Cuatromil exhibido en paddock",
      titulo: "Presentación previa",
      detalle: "Auto listo, motorhome.",
    },
    {
      src: "/WhatsApp%20Image%202026-01-27%20at%2014.30.14.jpeg",
      alt: "Equipo de TC Cuatromil trabajando sobre el auto",
      titulo: "Trazado en curva",
      detalle: "Tomando la curva.",
    },
    {
      src: "/WhatsApp%20Image%202026-01-27%20at%2014.30.18.jpeg",
      alt: "TC Cuatromil lanzado en recta",
      titulo: "Equipo de TC Cuatromil trabajando sobre el auto",
      detalle: "Trabajo en boxes.",
    },
    {
      src: "/WhatsApp%20Image%202026-01-27%20at%2014.30.20.jpeg",
      alt: "TC Cuatromil doblando en curva",
      titulo: "Preparado para la largar",
      detalle: "Todo listo",
    },
    {
      src: "/WhatsApp%20Image%202026-01-27%20at%2014.30.25.jpeg",
      alt: "Detalle frontal del TC Cuatromil",
      titulo: "Podio 2022",
      detalle: "Lucas Torres se consagra como campeón.",
    },
  ]

  const layout = [
    { span: "lg:col-span-7 lg:row-span-2", aspect: "aspect-[16/10]" },
    { span: "lg:col-span-5 lg:row-span-2", aspect: "aspect-[4/5]" },
    { span: "lg:col-span-4", aspect: "aspect-[4/3]" },
    { span: "lg:col-span-4", aspect: "aspect-[4/3]" },
    { span: "lg:col-span-4", aspect: "aspect-[4/3]" },
  ]

  const sponsors = [
    { id: 1, logo: "/logoatc.png", name: "ATC Construcciones" },
    { id: 2, logo: "/Captura%20desde%202026-01-27%2015-18-46.png", name: "G&M Ferretería" },
    { id: 3, logo: "/Captura%20desde%202026-01-27%2015-27-34.png", name: "ServIndus Montajes" },
    { id: 4, logo: "/Captura%20desde%202026-01-27%2015-30-23.png", name: "Super Montecarlo" },
    { id: 5, logo: "/Captura%20desde%202026-01-27%2015-31-29.png", name: "Luis Alberto Hofbauer" },
    { id: 6, logo: "/Captura%20desde%202026-01-27%2015-33-09.png", name: "Arauco Carbono Neutral" },
  ]

  return (
    <section id="mi-pasion" className="bg-slate-950 text-white border-t border-slate-800">
      <div className="container mx-auto px-4 py-14 space-y-12">
        {/* Hero storytelling */}
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900/90 p-6 sm:p-8">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-green-400 font-semibold">
                <span className="h-2 w-2 rounded-full bg-green-500 shadow shadow-green-500/60" />
                Mi pasión · TC Cuatro Mil
              </div>
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/70">
                  <Image src="/logoatc.png" alt="ATC Construcciones" fill className="object-contain p-3 sm:p-4" sizes="140px" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold leading-tight">Grúas Torres Competición</h1>
                  <p className="text-slate-300 text-sm">Preparación, precisión y equipo trasladados a la pista.</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-3 text-sm text-slate-200">
                <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 px-3 py-3">
                  <p className="text-xs text-slate-400">Categoría</p>
                  <p className="font-semibold">TC Cuatro Mil</p>
                </div>
                <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 px-3 py-3">
                  <p className="text-xs text-slate-400">Foco</p>
                  <p className="font-semibold">Track days & setup</p>
                </div>
                <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 px-3 py-3">
                  <p className="text-xs text-slate-400">Equipo</p>
                  <p className="font-semibold">Grúas Torres</p>
                </div>
              </div>
            </div>

            <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60">
              <Image
                src="/WhatsApp%20Image%202026-01-27%20at%2014.52.10.jpeg"
                alt="TC Cuatromil en pista"
                fill
                className="object-cover object-[50%_28%] sm:object-[50%_24%]"
                sizes="720px"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/55 via-slate-900/25 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/70 backdrop-blur px-4 py-3 rounded-lg text-sm text-gray-100 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-green-400 shadow shadow-green-500/70" />
                “La misma disciplina que llevamos a pista la usamos en cada proyecto.”
              </div>
            </div>
          </div>
        </div>

        {/* Sponsors */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Sponsors</h2>
            <span className="text-xs text-gray-400">Los que confían en nuestro trabajo</span>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-4">
            <div className="flex gap-4 min-w-[200%] animate-[marquee_26s_linear_infinite] whitespace-nowrap">
              {[...sponsors, ...sponsors].map((sponsor, idx) => (
                <div
                  key={`${sponsor.id}-${idx}`}
                  className="relative h-20 sm:h-24 w-40 sm:w-48 shrink-0 rounded-xl border border-slate-800 bg-slate-900/80 overflow-hidden"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain p-4 sm:p-6"
                    sizes="180px"
                  />
                  <div className="absolute inset-0 bg-slate-950/10" />
                  <div className="absolute bottom-2 left-2 right-2 text-[11px] text-center text-gray-300 px-2 py-1 bg-slate-950/60 rounded">
                    {sponsor.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Photo story grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Galería de pista</h2>
            <span className="text-xs text-gray-400">Recorrido visual de la jornada</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 auto-rows-[180px] gap-5">
            {items.map((item, idx) => {
              const span = layout[idx]?.span ?? "lg:col-span-4"
              const aspect = layout[idx]?.aspect ?? "aspect-[4/3]"
              return (
                <article
                  key={item.alt + idx}
                  className={`group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-2xl ${span}`}
                >
                  <div className={`${aspect} w-full`}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                      sizes="620px"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent opacity-95" />
                  <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-green-400 font-semibold">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</p>
                    <h3 className="text-lg font-semibold">{item.titulo ?? "Título de la foto"}</h3>
                    <p className="text-sm text-gray-200/90 leading-relaxed">
                      {item.detalle ?? "Agrega aquí la historia o detalle técnico de esta toma."}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        {/* Timeline for texto largo */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Bitácora rápida</h2>
          <div className="space-y-4 border-l border-slate-800 pl-6">
            {[
              "Warm-up: checklist de seguridad y presiones.",
              "Manga 1: ritmo de referencia y ajuste de convergencia.",
              "Manga 2: gestión térmica y estrategia de tracción.",
              "Post: repaso de datos y plan de mejoras.",
            ].map((entry, idx) => (
              <div key={idx} className="relative">
                <span className="absolute -left-[0.95rem] top-1.5 h-3 w-3 rounded-full bg-green-500 shadow shadow-green-500/40" />
                <p className="text-gray-300 text-sm leading-relaxed">{entry}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
