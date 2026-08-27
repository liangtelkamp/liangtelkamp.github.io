import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-20">
      {/* Hero Section */}
      <section className="pt-6 pb-10 border-b border-slate-200 grid md:grid-cols-3 gap-10 items-center">
        <div className="md:col-span-2 space-y-5">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Liang Telkamp
            </h1>
            <p className="text-lg font-medium text-emerald-800">
              AI Consultant @ NextHuman | Software Engineer Intern @ UN OCHA
            </p>
          </div>
          <p className="text-slate-600 leading-relaxed max-w-2xl">
            AI Consultant specializing in public sector software solutions, Natural Language Processing, Machine Learning, and sensitive data governance. MSc in Artificial Intelligence from the University of Amsterdam with research experience at Centrum Wiskunde & Informatica (CWI).
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-slate-900 text-white rounded-md font-medium text-sm hover:bg-slate-800 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/about"
              className="px-5 py-2.5 bg-white text-slate-700 border border-slate-300 rounded-md font-medium text-sm hover:bg-slate-50 transition-colors"
            >
              View CV
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
            <Image
              src="/images/profile_photo.jpeg"
              alt="Liang Telkamp"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Publication */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-3 flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Featured Publication
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Latest peer-reviewed research in Natural Language Processing & Sensitive Data
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs font-semibold text-emerald-800 hover:underline hidden sm:block"
          >
            View in CV →
          </Link>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 space-y-4 shadow-xs border-accent-left">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div className="space-y-1.5">
              <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold rounded">
                EMNLP 2026
              </span>
              <h3 className="text-xl font-bold text-slate-900 leading-snug pt-1">
                Towards Contextual Sensitive Data Detection
              </h3>
              <p className="text-sm font-medium text-slate-700">
                Liang Telkamp and Madelon Hulsebos
              </p>
              <p className="text-xs text-slate-500 italic">
                In Findings of the Association for Computational Linguistics: EMNLP 2026
              </p>
            </div>

            <div className="flex items-center gap-3 flex-wrap text-xs font-medium shrink-0 pt-1">
              <a
                href="https://arxiv.org/pdf/2512.04120"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-900 text-white rounded hover:bg-slate-800 transition-colors flex items-center gap-1.5"
              >
                PDF Paper ↗
              </a>
              <a
                href="https://github.com/trl-lab/sensitive-data-detection"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-100 text-slate-700 border border-slate-300 rounded hover:bg-slate-200 transition-colors flex items-center gap-1.5"
              >
                GitHub Code ↗
              </a>
            </div>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed pt-2 border-t border-slate-100">
            Introduces a contextual data sensitivity framework leveraging Large Language Models to evaluate type and domain contextualization for sensitive data detection in tabular datasets.
          </p>
        </div>
      </section>
    </div>
  )
}

