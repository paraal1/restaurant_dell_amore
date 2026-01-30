# Dell'Amore - Restaurant Italian Autentic 🍕🇮🇹

Website modern pentru restaurantul Dell'Amore, un restaurant cu specific italian situat în zona Cârcea – Craiova, județul Dolj.

## Caracteristici

- **Design Modern Italian** - Culori calde (roșu, verde, alb, tonuri de lemn)
- **Responsive** - Optimizat pentru toate dispozitivele
- **Performanță** - Construit cu Next.js pentru încărcare rapidă
- **SEO Optimizat** - Metadate complete pentru motoarele de căutare
- **Animații Subtile** - Tranziții și efecte elegante

## Secțiuni

1. **Hero** - Prezentare cu imagine de fundal și mesaj de bun venit
2. **Meniu** - Categorii interactive (Pizza, Panini, Calzone, Mediteraneene, Deserturi)
3. **Despre Noi** - Povestea restaurantului și caracteristici
4. **Testimoniale** - Recenzii de la clienți cu carusel
5. **Contact** - Formular de rezervare, hartă, informații de contact

## Tehnologii

- [Next.js 14](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Stilizare utility-first
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Lucide Icons](https://lucide.dev/) - Iconițe moderne

## Instalare

```bash
# Clonează repository-ul
git clone <repo-url>

# Navighează în folder
cd restaurant_dell_amore

# Instalează dependențele
npm install

# Pornește serverul de dezvoltare
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000) în browser.

## Deploy pe Vercel

Acest proiect este optimizat pentru deploy pe [Vercel](https://vercel.com/).

```bash
# Instalează Vercel CLI (opțional)
npm i -g vercel

# Deploy
vercel
```

Sau conectează-ți repository-ul GitHub direct în dashboard-ul Vercel pentru deploy automat.

## Structura Proiectului

```
restaurant_dell_amore/
├── src/
│   ├── app/
│   │   ├── globals.css    # Stiluri globale
│   │   ├── layout.tsx     # Layout principal
│   │   └── page.tsx       # Pagina principală
│   └── components/
│       ├── Header.tsx     # Navigație
│       ├── Hero.tsx       # Secțiune hero
│       ├── Menu.tsx       # Meniu restaurant
│       ├── About.tsx      # Despre noi
│       ├── Testimonials.tsx # Recenzii
│       ├── Contact.tsx    # Contact & rezervări
│       └── Footer.tsx     # Footer
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Personalizare

### Culori
Editează `tailwind.config.js` pentru a modifica paleta de culori:
- `italian-red` - Roșu principal
- `italian-green` - Verde italian
- `cream` - Fundal cremos
- `gold` - Accent auriu

### Meniu
Editează array-ul `menuData` din `src/components/Menu.tsx` pentru a actualiza preparatele.

### Informații Contact
Actualizează detaliile în `src/components/Contact.tsx` și `src/components/Footer.tsx`.

## Licență

© 2024 Dell'Amore Restaurant. Toate drepturile rezervate.
