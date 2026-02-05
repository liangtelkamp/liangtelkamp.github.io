import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata = {
  title: 'Liang Telkamp - AI Consultant',
  description: 'AI Consultant at NextHuman specializing in Natural Language Processing and Machine Learning',
  keywords: ['AI Consultant', 'Machine Learning', 'NLP', 'NextHuman', 'Artificial Intelligence'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
