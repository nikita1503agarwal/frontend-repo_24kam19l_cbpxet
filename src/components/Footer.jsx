function Footer() {
  const links = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Docs', href: '#' },
    { label: 'Changelog', href: '#' },
    { label: 'Privacy', href: '#' },
    { label: 'Contact', href: '#' },
  ]

  return (
    <footer className="border-t border-zinc-200 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded bg-zinc-900" />
          <span className="font-semibold text-zinc-900">PixelCheck</span>
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-600">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-zinc-900 transition">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default Footer
