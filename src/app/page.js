import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-20">
      {/* Hero Section */}
      <section className="pt-6 pb-10 border-b-0 grid md:grid-cols-3 gap-10 items-center">
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
    </div>
  )
}

