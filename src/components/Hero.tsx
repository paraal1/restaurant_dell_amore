import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="acasa"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), 
            url('https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')`
        }}
      />
      
      {/* Italian Flag Accent */}
      <div className="absolute top-0 left-0 right-0 h-2 flex">
        <div className="flex-1 bg-italian-green" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-italian-red" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        {/* Decorative Element */}
        <div className="mb-6 animate-float">
          <span className="text-6xl">🍕</span>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl tracking-[0.3em] uppercase mb-4 text-cream-dark">
          Benvenuti a
        </p>

        {/* Main Title */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Dell'<span className="text-italian-red">Amore</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl font-light mb-4 italic font-serif">
          Italia aproape de casă
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-200 leading-relaxed">
          Descoperă gustul autentic al Italiei în inima Olteniei. 
          Pizza artizanală, paste proaspete și deserturi delicioase, 
          preparate cu dragoste și ingrediente de cea mai bună calitate.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#meniu" className="btn-primary text-lg">
            Vezi Meniul
          </a>
          <a href="#contact" className="btn-secondary text-lg">
            Rezervă o Masă
          </a>
        </div>

        {/* Location Badge */}
        <div className="mt-12 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
          <svg className="w-5 h-5 text-italian-red" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-medium">Cârcea – Craiova, Dolj</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#meniu"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll to menu"
      >
        <ChevronDown size={40} />
      </a>

      {/* Decorative Corner Elements */}
      <div className="absolute top-20 left-8 w-24 h-24 border-l-2 border-t-2 border-white/20 hidden lg:block" />
      <div className="absolute bottom-20 right-8 w-24 h-24 border-r-2 border-b-2 border-white/20 hidden lg:block" />
    </section>
  )
}
