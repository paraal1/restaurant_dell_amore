'use client'

import { useState } from 'react'
import { Flame, Leaf, Star } from 'lucide-react'

type MenuItem = {
  name: string
  description: string
  price: string
  image: string
  tags?: ('popular' | 'vegetarian' | 'spicy')[]
}

type MenuCategory = {
  id: string
  name: string
  icon: string
  items: MenuItem[]
}

const menuData: MenuCategory[] = [
  {
    id: 'pizza',
    name: 'Pizza Artizanală',
    icon: '🍕',
    items: [
      {
        name: 'Margherita Classica',
        description: 'Sos de roșii San Marzano, mozzarella fior di latte, busuioc proaspăt, ulei de măsline extra virgin',
        price: '32',
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
        tags: ['popular', 'vegetarian']
      },
      {
        name: 'Quattro Formaggi',
        description: 'Mozzarella, gorgonzola, parmezan, fontina, oregano',
        price: '42',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop',
        tags: ['vegetarian']
      },
      {
        name: 'Diavola',
        description: 'Sos de roșii, mozzarella, salam picant calabrese, ardei iute, ulei chili',
        price: '38',
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop',
        tags: ['spicy', 'popular']
      },
      {
        name: 'Prosciutto e Funghi',
        description: 'Sos de roșii, mozzarella, prosciutto cotto, ciuperci champignon, parmezan',
        price: '40',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
        tags: ['popular']
      },
      {
        name: 'Capricciosa',
        description: 'Sos de roșii, mozzarella, șuncă, ciuperci, anghinare, măsline, ouă',
        price: '44',
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
      },
      {
        name: 'Tonno e Cipolla',
        description: 'Sos de roșii, mozzarella, ton premium, ceapă roșie, capere',
        price: '42',
        image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&h=300&fit=crop',
      },
    ]
  },
  {
    id: 'panini',
    name: 'Panini & Focaccia',
    icon: '🥪',
    items: [
      {
        name: 'Panino Italiano',
        description: 'Prosciutto crudo, mozzarella di bufala, roșii uscate, rucola, pesto',
        price: '28',
        image: 'https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=400&h=300&fit=crop',
        tags: ['popular']
      },
      {
        name: 'Panino Caprese',
        description: 'Mozzarella proaspătă, roșii, busuioc, ulei de măsline, oțet balsamic',
        price: '24',
        image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&h=300&fit=crop',
        tags: ['vegetarian']
      },
      {
        name: 'Focaccia Rosmarino',
        description: 'Focaccia proaspătă cu rozmarin, sare grosieră și ulei de măsline extra virgin',
        price: '18',
        image: 'https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=400&h=300&fit=crop',
        tags: ['vegetarian']
      },
      {
        name: 'Focaccia Farcita',
        description: 'Focaccia umplută cu prosciutto, mozzarella, roșii cherry și rucola',
        price: '32',
        image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop',
      },
    ]
  },
  {
    id: 'calzone',
    name: 'Calzone',
    icon: '🥟',
    items: [
      {
        name: 'Calzone Classico',
        description: 'Umplut cu ricotta, mozzarella, șuncă, ciuperci, sos de roșii',
        price: '38',
        image: 'https://images.unsplash.com/photo-1536964549204-cce9eab227bd?w=400&h=300&fit=crop',
        tags: ['popular']
      },
      {
        name: 'Calzone Vegetariano',
        description: 'Ricotta, spanac, mozzarella, roșii uscate, parmezan',
        price: '36',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop',
        tags: ['vegetarian']
      },
      {
        name: 'Calzone Piccante',
        description: 'Salam picant, ardei iuți, mozzarella, sos arrabiata',
        price: '40',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
        tags: ['spicy']
      },
    ]
  },
  {
    id: 'mediteranean',
    name: 'Preparate Mediteraneene',
    icon: '🫒',
    items: [
      {
        name: 'Bruschette Miste',
        description: 'Trio de bruschette: roșii și busuioc, prosciutto și rucola, gorgonzola și nuci',
        price: '26',
        image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop',
        tags: ['popular']
      },
      {
        name: 'Antipasto della Casa',
        description: 'Selecție de brânzeturi italiene, mezeluri fine, măsline, roșii uscate',
        price: '48',
        image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400&h=300&fit=crop',
      },
      {
        name: 'Insalata Cesare',
        description: 'Salată verde, crutoane, parmezan, sos Caesar, pui la grătar',
        price: '32',
        image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
      },
      {
        name: 'Carpaccio di Manzo',
        description: 'Felii subțiri de vită, rucola, parmezan, ulei de trufe',
        price: '44',
        image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&h=300&fit=crop',
      },
    ]
  },
  {
    id: 'dolci',
    name: 'Deserturi',
    icon: '🍰',
    items: [
      {
        name: 'Pizza Nutella',
        description: 'Aluat de pizza dulce, Nutella, banane caramelizate, frișcă, alune',
        price: '28',
        image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400&h=300&fit=crop',
        tags: ['popular']
      },
      {
        name: 'Tiramisù della Casa',
        description: 'Rețetă tradițională cu mascarpone, espresso, pișcoturi și cacao',
        price: '24',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
        tags: ['popular']
      },
      {
        name: 'Panna Cotta',
        description: 'Cremă de vanilie Bourbon cu sos de fructe de pădure',
        price: '22',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop',
        tags: ['vegetarian']
      },
      {
        name: 'Cannoli Siciliani',
        description: 'Tuburi crocante umplute cu cremă de ricotta, fistic și ciocolată',
        price: '26',
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop',
      },
    ]
  },
]

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('pizza')

  const activeItems = menuData.find(cat => cat.id === activeCategory)?.items || []

  return (
    <section id="meniu" className="py-20 bg-white pizza-pattern">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-italian-red font-medium tracking-widest uppercase text-sm">
            Il Nostro Menu
          </span>
          <h2 className="section-title mt-2 text-gray-800">
            Delicii <span className="text-italian-red">Italiene</span>
          </h2>
          <div className="italian-divider">
            <span className="text-2xl">🇮🇹</span>
          </div>
          <p className="section-subtitle">
            Fiecare preparat este o călătorie culinară în Italia, 
            gătit cu pasiune și ingrediente proaspete, selecționate cu grijă.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-italian-red text-white shadow-lg'
                  : 'bg-cream hover:bg-cream-dark text-gray-700'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span className="hidden sm:inline">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeItems.map((item, index) => (
            <div
              key={item.name}
              className="menu-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {/* Tags */}
                {item.tags && (
                  <div className="absolute top-3 left-3 flex gap-2">
                    {item.tags.includes('popular') && (
                      <span className="bg-gold text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <Star size={12} fill="currentColor" />
                        Popular
                      </span>
                    )}
                    {item.tags.includes('vegetarian') && (
                      <span className="bg-italian-green text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <Leaf size={12} />
                        Vegetarian
                      </span>
                    )}
                    {item.tags.includes('spicy') && (
                      <span className="bg-italian-red text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <Flame size={12} />
                        Picant
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <span className="text-italian-red font-bold text-xl">
                    {item.price} lei
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Toate preparatele pot fi personalizate conform preferințelor tale.
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Comandă Acum
          </a>
        </div>
      </div>
    </section>
  )
}
