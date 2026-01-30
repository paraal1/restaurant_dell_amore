import { Award, Heart, Utensils, Users } from 'lucide-react'

const features = [
  {
    icon: Utensils,
    title: 'Ingrediente Premium',
    description: 'Folosim doar ingrediente proaspete și de cea mai înaltă calitate, multe importate direct din Italia.'
  },
  {
    icon: Heart,
    title: 'Gătit cu Pasiune',
    description: 'Fiecare preparat este creat cu dragoste și dedicare, respectând rețetele tradiționale italiene.'
  },
  {
    icon: Users,
    title: 'Atmosferă Familială',
    description: 'Un loc primitor pentru familii, cupluri și prieteni, unde te simți ca acasă.'
  },
  {
    icon: Award,
    title: 'Calitate Garantată',
    description: 'Suntem mândri de recenziile pozitive și de clienții fideli care revin mereu.'
  }
]

export default function About() {
  return (
    <section id="despre" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop"
                  alt="Interior restaurant"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1579684947550-22e945225d9a?w=400&h=400&fit=crop"
                  alt="Pizza pregătită"
                  className="rounded-2xl shadow-lg w-full h-56 object-cover"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=400&h=400&fit=crop"
                  alt="Bucătar preparând pizza"
                  className="rounded-2xl shadow-lg w-full h-56 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop"
                  alt="Masă aranjată"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-italian-red text-white p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="text-center">
                <span className="block text-4xl font-serif font-bold">5+</span>
                <span className="text-sm">Ani de<br/>Excelență</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-italian-red font-medium tracking-widest uppercase text-sm">
              La Nostra Storia
            </span>
            <h2 className="section-title text-left mt-2 mb-6 text-gray-800">
              Povestea <span className="text-italian-red">Dell'Amore</span>
            </h2>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Dell'Amore s-a născut din dorința de a aduce gustul autentic al Italiei 
              în inima Olteniei. Numele nostru, care înseamnă „al iubirii" în italiană, 
              reflectă pasiunea cu care pregătim fiecare preparat și dragostea pentru 
              tradiția culinară italiană.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-8">
              Situați în zona Cârcea, la marginea Craiovei, oferim o oază de liniște 
              și savoare, unde poți evada din agitația zilnică și te poți bucura de 
              preparate autentice într-o atmosferă caldă și primitoare. Fiecare pizza 
              este coaptă în cuptorul nostru tradițional, iar ingredientele sunt 
              selecționate cu grijă pentru a-ți oferi o experiență de neuitat.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-italian-red/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-italian-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
