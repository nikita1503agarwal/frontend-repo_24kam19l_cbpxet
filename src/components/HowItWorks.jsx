import { Figma, GitBranch, Bolt } from "lucide-react"

function Step({ icon: Icon, title, desc, index }) {
  return (
    <div className="relative rounded-xl border border-zinc-200 bg-white p-6">
      <div className="absolute -top-3 -left-3 rounded-full bg-blue-600 text-white w-8 h-8 flex items-center justify-center font-semibold shadow">
        {index}
      </div>
      <div className="flex items-center gap-3">
        <div className="rounded-md bg-blue-50 border border-blue-200 p-2 text-blue-700">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-semibold text-zinc-900">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-zinc-600">{desc}</p>
    </div>
  )
}

function HowItWorks() {
  const steps = [
    {
      icon: Figma,
      title: "Koppel je Figma-file",
      desc: "Verbind je ontwerpbron. Wij doen de rest.",
    },
    {
      icon: GitBranch,
      title: "Koppel je Git repo of staging URL",
      desc: "Elke push, elke deploy. Wij kijken mee.",
    },
    {
      icon: Bolt,
      title: "PixelCheck analyseert elke wijziging automatisch",
      desc: "Je krijgt alerts voordat de designer ze ziet. Je weet zelf waarom dat handig is.",
    },
  ]

  return (
    <section id="how" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">Hoe het werkt</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {steps.map((s, i) => (
          <Step key={s.title} index={i + 1} {...s} />
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
