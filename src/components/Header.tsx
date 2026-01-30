'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#acasa', label: 'Acasă' },
    { href: '#meniu', label: 'Meniu' },
    { href: '#despre', label: 'Despre Noi' },
    { href: '#recenzii', label: 'Recenzii' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#acasa" className="flex items-center gap-2">
            <div className={`transition-all duration-300 ${isScrolled ? 'text-italian-red' : 'text-white'}`}>
              <svg width="50" height="50" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="3"/>
                <text x="50" y="58" textAnchor="middle" fontSize="24" fontFamily="serif" fontWeight="bold">DA</text>
              </svg>
            </div>
            <div className={`hidden sm:block transition-all duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              <h1 className="font-serif text-2xl font-bold leading-tight">Dell'Amore</h1>
              <p className="text-xs tracking-widest uppercase">Ristorante Italiano</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`font-medium transition-colors duration-300 hover:text-italian-red ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+40700000000"
              className={`flex items-center gap-2 font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-italian-red' : 'text-white hover:text-cream'
              }`}
            >
              <Phone size={18} />
              <span>Rezervări</span>
            </a>
            <a href="#contact" className="btn-primary text-sm">
              Rezervă Masă
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 animate-fade-in-up">
            <ul className="flex flex-col items-center gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 font-medium hover:text-italian-red transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary text-sm inline-block"
                >
                  Rezervă Masă
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
