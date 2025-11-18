function Persona({ title, desc }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.15)] transition">
      <h3 className="font-semibold text-zinc-900">{title}</h3>
      <p className="mt-2 text-sm text-zinc-600">{desc}</p>
    </div>
  )
}

function ForWho() {
  const personas = [
    {
      title: "Front-end developers",
      desc: "Minder micromanagement, minder QA-hel.",
    },
    {
      title: "Designers",
      desc: "Nooit meer “die spacing klopt niet”.",
    },
    {
      title: "Agencies",
      desc: "Consistentie over 20+ projecten.",
    },
  ]

  return (
    <section id="for-who" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">Voor wie?</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {personas.map((p) => (
          <Persona key={p.title} {...p} />
        ))}
      </div>
    </section>
  )
}

export default ForWho
