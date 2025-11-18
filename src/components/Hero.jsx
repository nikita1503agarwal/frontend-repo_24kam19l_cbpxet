import { ArrowRight, PlayCircle } from "lucide-react"

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.04),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(500px_200px_at_50%_-10%,rgba(59,130,246,0.15),transparent)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-28 pb-12">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600 bg-white/70 backdrop-blur">
            PixelCheck · minimal tool, maximal certainty
          </span>

          <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight text-zinc-900">
            Pixel-perfect isn’t a feeling. It’s a check.
          </h1>

          <p className="mt-5 max-w-2xl text-zinc-600 text-lg">
            PixelCheck vergelijkt automatisch je live site met je Figma-design. Geen gokwerk, geen micromanagement.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <a href="#pricing" className="group inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-5 py-3 font-semibold shadow-sm hover:bg-blue-700 transition">
              Try free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#how" className="inline-flex items-center justify-center rounded-lg border border-zinc-200 px-5 py-3 font-semibold text-zinc-900 hover:bg-zinc-50 transition">
              <PlayCircle className="mr-2 h-5 w-5 text-blue-600" />
              See how it works
            </a>
          </div>
        </div>

        {/* mockup */}
        <div className="mt-16 rounded-2xl border border-zinc-200 bg-white p-4 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)]">
          {/* window controls */}
          <div className="flex items-center gap-2 pb-3 border-b border-zinc-100">
            <div className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
            <div className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
            <div className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
          </div>

          <div className="grid grid-cols-12 gap-4 pt-4">
            {/* Left: Visual diff */}
            <div className="col-span-12 lg:col-span-6">
              <div className="relative h-64 rounded-xl border border-zinc-200 bg-[conic-gradient(from_180deg_at_50%_50%,#e5e7eb_0%,#f8fafc_25%,#e5e7eb_50%,#f8fafc_75%,#e5e7eb_100%)] overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-6 opacity-20">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className="border border-zinc-300/30" />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-lg bg-blue-50 text-blue-600 px-3 py-1 text-sm font-medium border border-blue-200 shadow-sm">
                    visual diff
                  </div>
                </div>
              </div>
              <p className="mt-2 text-sm text-zinc-500">Visuele diff met highlights op afwijkingen.</p>
            </div>
            {/* Right: Figma + flags */}
            <div className="col-span-12 lg:col-span-6 space-y-4">
              <div className="h-40 rounded-xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-white flex items-center justify-center">
                <span className="text-zinc-600 text-sm">Figma preview</span>
              </div>
              <div className="h-24 rounded-xl border border-zinc-200 bg-white p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-zinc-700">Error flags</span>
                  <span className="text-xs rounded-full bg-blue-50 text-blue-600 px-2 py-0.5 border border-blue-200">16</span>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {['Spacing','Font','Color','Breakpoint','Grid','Radius'].map((t) => (
                    <div key={t} className="text-xs rounded-md bg-zinc-50 border border-zinc-200 px-2 py-1 text-zinc-600">{t}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
