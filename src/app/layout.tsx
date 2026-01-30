import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Dell'Amore | Restaurant Italian Autentic în Craiova",
  description: "Descoperă gustul autentic al Italiei la Dell'Amore! Pizza artizanală, paste proaspete, focaccia și deserturi delicioase în Cârcea-Craiova. Italia aproape de casă.",
  keywords: "restaurant italian, pizza Craiova, restaurant Cârcea, Dell'Amore, pizza artizanală, mâncare italiană, restaurant Dolj",
  openGraph: {
    title: "Dell'Amore | Restaurant Italian Autentic în Craiova",
    description: "Descoperă gustul autentic al Italiei! Pizza artizanală, paste proaspete și deserturi delicioase.",
    locale: 'ro_RO',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  )
}
