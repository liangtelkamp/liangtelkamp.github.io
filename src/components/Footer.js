import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-20 text-slate-600 text-sm">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="font-semibold text-slate-900">Liang Telkamp</p>
          <p className="text-xs text-slate-500">
            Software Engineer Intern @ UN OCHA | AI Consultant @ NextHuman
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href="mailto:telkampliang@gmail.com"
            className="hover:text-slate-900 transition-colors"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/liangtelkamp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/liangtelkamp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors"
          >
            GitHub
          </a>
        </div>

        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} Liang Telkamp
        </p>
      </div>
    </footer>
  )
}

