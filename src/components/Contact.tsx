'use client'

import { useState } from 'react'
import { Clock, Mail, MapPin, Phone, Send, Instagram, Facebook } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '2',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - in a real app, this would send data to a backend
    alert('Mulțumim pentru rezervare! Vă vom contacta în curând pentru confirmare.')
    setFormData({ name: '', email: '', phone: '', date: '', guests: '2', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-italian-red font-medium tracking-widest uppercase text-sm">
            Contattaci
          </span>
          <h2 className="section-title mt-2 text-gray-800">
            Rezervă o <span className="text-italian-red">Masă</span>
          </h2>
          <div className="italian-divider">
            <span className="text-2xl">📍</span>
          </div>
          <p className="section-subtitle">
            Te așteptăm cu preparate delicioase și o atmosferă primitoare.
            Rezervă acum pentru o experiență de neuitat!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div>
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-cream rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-italian-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-italian-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Adresă</h3>
                  <p className="text-gray-600 text-sm">
                    Strada Principală, Nr. 100<br />
                    Cârcea, Craiova<br />
                    Județul Dolj
                  </p>
                </div>
              </div>

              <div className="bg-cream rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-italian-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-italian-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Telefon</h3>
                  <a href="tel:+40700000000" className="text-italian-red hover:underline">
                    +40 700 000 000
                  </a>
                  <p className="text-gray-600 text-sm mt-1">
                    Pentru rezervări și comenzi
                  </p>
                </div>
              </div>

              <div className="bg-cream rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-italian-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-italian-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Program</h3>
                  <p className="text-gray-600 text-sm">
                    Luni - Joi: 11:00 - 22:00<br />
                    Vineri - Duminică: 11:00 - 23:00
                  </p>
                </div>
              </div>

              <div className="bg-cream rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-italian-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-italian-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <a href="mailto:contact@dellamore.ro" className="text-italian-red hover:underline text-sm">
                    contact@dellamore.ro
                  </a>
                  <p className="text-gray-600 text-sm mt-1">
                    Răspundem în 24h
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 lg:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45187.71693890143!2d23.730088849999998!3d44.3631799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4752d6f8f8e8b8b9%3A0x4f8b8b8b8b8b8b8b!2sCraiova%2C%20Romania!5e0!3m2!1sen!2sro!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locație Dell'Amore Restaurant"
              />
            </div>

            {/* Social Media */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <span className="text-gray-600 text-sm">Urmărește-ne:</span>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-italian-red/10 rounded-full flex items-center justify-center text-italian-red hover:bg-italian-red hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-italian-red/10 rounded-full flex items-center justify-center text-italian-red hover:bg-italian-red hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="bg-cream rounded-3xl p-8 shadow-lg">
            <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6 text-center">
              Formular de Rezervare
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nume complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ion Popescu"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-italian-red focus:ring-2 focus:ring-italian-red/20 outline-none transition-all"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@exemplu.ro"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-italian-red focus:ring-2 focus:ring-italian-red/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0700 000 000"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-italian-red focus:ring-2 focus:ring-italian-red/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Data și ora *
                  </label>
                  <input
                    type="datetime-local"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-italian-red focus:ring-2 focus:ring-italian-red/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                    Număr persoane *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-italian-red focus:ring-2 focus:ring-italian-red/20 outline-none transition-all bg-white"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'persoană' : 'persoane'}
                      </option>
                    ))}
                    <option value="10+">Mai mult de 10</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mesaj / Cerințe speciale
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Alergii alimentare, ocazie specială, preferințe..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-italian-red focus:ring-2 focus:ring-italian-red/20 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Trimite Rezervarea
              </button>

              <p className="text-xs text-gray-500 text-center">
                * Câmpuri obligatorii. Vă vom contacta pentru confirmare.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
