import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-neutral-100 to-primary-50 border-t border-neutral-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-outfit font-bold text-lg mb-4 bg-gradient-organic bg-clip-text text-green-600">
              Liang Telkamp
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              AI Consultant at NextHuman, specializing in Natural Language Processing 
              and Machine Learning solutions for a sustainable future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-neutral-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-600 hover:text-primary-600 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-600 hover:text-primary-600 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-600 hover:text-primary-600 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-neutral-800 mb-4">Connect</h3>
            <div className="flex gap-4">
              <a 
                href="mailto:telkampliang@gmail.com" 
                className="w-12 h-12 rounded-full bg-gradient-organic flex items-center justify-center text-green-600 hover:scale-110 transition-transform shadow-md"
                title="Email"
              >
                ✉️
              </a>
              <a 
                href="https://github.com/liangtelkamp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-organic flex items-center justify-center text-green-600 hover:scale-110 transition-transform shadow-md"
                title="GitHub"
              >
                💻
              </a>
              <a 
                href="https://linkedin.com/in/liangtelkamp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-organic flex items-center justify-center text-green-600 hover:scale-110 transition-transform shadow-md"
                title="LinkedIn"
              >
                💼
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-neutral-200 text-center">
          <p className="text-neutral-600 text-sm">
            © {new Date().getFullYear()} Liang Telkamp. All rights reserved. | 
            <Link href="/contact" className="text-primary-600 hover:text-primary-700 ml-1">
              Get in Touch
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
