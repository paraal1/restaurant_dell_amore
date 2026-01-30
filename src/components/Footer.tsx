import { Heart, Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-italian-red">
                <svg width="40" height="40" viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="3"/>
                  <text x="50" y="58" textAnchor="middle" fontSize="24" fontFamily="serif" fontWeight="bold">DA</text>
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">Dell'Amore</h3>
                <p className="text-xs text-gray-400 tracking-wider uppercase">Ristorante Italiano</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Aducem gustul autentic al Italiei în inima Olteniei. 
              Pizza artizanală, paste proaspete și deserturi delicioase, 
              toate preparate cu dragoste.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-italian-red transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-italian-red transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Link-uri Rapide</h4>
            <ul className="space-y-2">
              {[
                { href: '#acasa', label: 'Acasă' },
                { href: '#meniu', label: 'Meniu' },
                { href: '#despre', label: 'Despre Noi' },
                { href: '#recenzii', label: 'Recenzii' },
                { href: '#contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-italian-red transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Program</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Luni - Joi</span>
                <span>11:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Vineri - Sâmbătă</span>
                <span>11:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Duminică</span>
                <span>11:00 - 23:00</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-italian-red/20 rounded-lg">
              <p className="text-xs text-italian-red">
                🍕 Livrare disponibilă în Craiova și împrejurimi!
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="text-italian-red flex-shrink-0 mt-0.5" />
                <span>Strada Principală, Nr. 100<br />Cârcea, Craiova, Dolj</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-italian-red flex-shrink-0" />
                <a href="tel:+40700000000" className="text-gray-400 hover:text-white transition-colors">
                  +40 700 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-italian-red flex-shrink-0" />
                <a href="mailto:contact@dellamore.ro" className="text-gray-400 hover:text-white transition-colors">
                  contact@dellamore.ro
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Italian Flag Stripe */}
      <div className="h-1 flex">
        <div className="flex-1 bg-italian-green" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-italian-red" />
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              © {currentYear} Dell'Amore Restaurant. Toate drepturile rezervate.
            </p>
            <p className="flex items-center gap-1">
              Făcut cu <Heart size={14} className="text-italian-red fill-italian-red" /> în Craiova
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
