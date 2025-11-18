function PricingCard({ name, price, note, highlight }) {
  return (
    <div className={`rounded-2xl border p-6 bg-white ${highlight ? 'border-blue-600 ring-4 ring-blue-600/10' : 'border-zinc-200'}`}>
      <h3 className="text-lg font-semibold text-zinc-900">{name}</h3>
      <div className="mt-3 flex items-end gap-1">
        <span className="text-3xl font-bold text-zinc-900">{price}</span>
        {price !== 'op aanvraag' && <span className="text-zinc-500">/mnd</span>}
      </div>
      <ul className="mt-4 space-y-2 text-sm text-zinc-600">
        <li>Automatische checks</li>
        <li>Figma + Git integraties</li>
        <li>Alerts & rapporten</li>
      </ul>
      <a href="#" className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 font-semibold transition ${highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border border-zinc-200 hover:bg-zinc-50'}`}>
        Start
      </a>
      {note && <p className="mt-3 text-xs text-zinc-500">{note}</p>}
    </div>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">Prijzen</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <PricingCard name="Individueel" price="€19" note="Maandelijks opzegbaar. Geen gedoe." />
        <PricingCard name="Agency" price="€79" highlight />
        <PricingCard name="Enterprise" price="op aanvraag" />
      </div>
    </section>
  )
}

export default Pricing
