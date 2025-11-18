import { ScanEye, Ruler, MonitorSmartphone, Shapes } from "lucide-react"

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="group rounded-xl border border-zinc-200 p-6 bg-white hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.15)] transition">
    <div className="flex items-center gap-3">
      <div className="rounded-md bg-blue-50 border border-blue-200 p-2 text-blue-700">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-semibold text-zinc-900">{title}</h3>
    </div>
    <p className="mt-3 text-sm text-zinc-600">{desc}</p>
  </div>
)

function Features() {
  const items = [
    {
      icon: ScanEye,
      title: "Visual Diff Engine",
      desc: "Herken afwijkingen tussen design en productie. Tot op de pixel.",
    },
    {
      icon: Ruler,
      title: "Tailwind & Design Token Awareness",
      desc: "Spacing, fonts, grids — automatisch gecheckt zoals je designer ze bedoeld had.",
    },
    {
      icon: MonitorSmartphone,
      title: "Responsive Breakpoint Audit",
      desc: "Check alle viewports. Zie precies waar de layout begint te zweten.",
    },
    {
      icon: Shapes,
      title: "Component Detection",
      desc: "Herken kaarten, modals, knoppen en vergelijk ze met hun Figma-varianten.",
    },
  ]

  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">Features</h2>
        <p className="mt-3 text-zinc-600">Alles wat je verwacht. En net dat beetje extra.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((f) => (
          <Feature key={f.title} {...f} />
        ))}
      </div>
    </section>
  )
}

export default Features
