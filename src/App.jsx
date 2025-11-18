import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import ForWho from './components/ForWho'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* navbar */}
      <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded bg-zinc-900" />
            <span className="font-semibold">PixelCheck</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-600">
            <a href="#features" className="hover:text-zinc-900">Features</a>
            <a href="#how" className="hover:text-zinc-900">How it works</a>
            <a href="#for-who" className="hover:text-zinc-900">For who</a>
            <a href="#pricing" className="hover:text-zinc-900">Pricing</a>
            <a href="#testimonials" className="hover:text-zinc-900">Stories</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#pricing" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm font-medium hover:bg-zinc-50">Sign in</a>
            <a href="#pricing" className="rounded-lg bg-blue-600 text-white px-3 py-1.5 text-sm font-medium hover:bg-blue-700">Try free</a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <ForWho />
        <Pricing />
        <Testimonials />
      </main>

      <Footer />
    </div>
  )
}

export default App
