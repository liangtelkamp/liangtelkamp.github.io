'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-md border-b border-neutral-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="group">
            <h1 className="text-2xl font-bold font-outfit bg-gradient-organic bg-clip-text text-green-600">
              Liang Telkamp
            </h1>
            <p className="text-sm text-neutral-600">AI Consultant</p>
          </Link>

          <nav>
            <ul className="flex gap-8">
              <li>
                <Link 
                  href="/" 
                  className="text-neutral-700 hover:text-primary-600 font-medium transition-colors relative group"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-organic group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-neutral-700 hover:text-primary-600 font-medium transition-colors relative group"
                >
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-organic group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-neutral-700 hover:text-primary-600 font-medium transition-colors relative group"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-organic group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
