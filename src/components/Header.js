'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'CV', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex flex-col">
          <span className="text-xl font-semibold text-slate-900 tracking-tight">
            Liang Telkamp
          </span>
          <span className="text-xs text-slate-500 font-medium">
            AI & Software Engineer
          </span>
        </Link>

        <nav>
          <ul className="flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = pathname === item.path
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`transition-colors py-1 ${
                      isActive
                        ? 'text-slate-900 font-semibold border-b-2 border-slate-900'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

