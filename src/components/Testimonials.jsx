function Testimonials() {
  const quotes = [
    "PixelCheck vond 16 spacing-fouten voordat mijn designer wakker werd.",
    "Onze QA-channel is ineens stil. Heerlijk.",
    "Ik vertrouw eindelijk mijn deploy-knop. (Bijna dan.)",
  ]

  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">Testimonials</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {quotes.map((q, i) => (
          <div key={i} className="rounded-xl border border-zinc-200 bg-white p-6">
            <p className="text-zinc-800">“{q}”</p>
            <div className="mt-4 h-6 w-24 rounded bg-zinc-100" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
