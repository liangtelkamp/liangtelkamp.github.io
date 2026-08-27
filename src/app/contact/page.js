export default function Contact() {
  const contactInfo = [
    {
      title: 'Email',
      subtitle: 'Primary contact point',
      link: 'mailto:telkampliang@gmail.com',
      linkText: 'telkampliang@gmail.com'
    },
    {
      title: 'LinkedIn',
      subtitle: 'Professional profile',
      link: 'https://linkedin.com/in/liangtelkamp',
      linkText: 'linkedin.com/in/liangtelkamp'
    },
    {
      title: 'GitHub',
      subtitle: 'Source code & projects',
      link: 'https://github.com/liangtelkamp',
      linkText: 'github.com/liangtelkamp'
    }
  ]

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
      {/* Header */}
      <section className="border-b border-slate-200 pb-8 space-y-3">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
          Contact
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
          Get in touch for research collaborations, technical inquiries, or consulting opportunities.
        </p>
      </section>

      <div className="max-w-2xl space-y-6">

          <div className="space-y-4">
            {contactInfo.map((method, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-lg p-5 hover:border-slate-300 transition-colors shadow-xs"
              >
                <h3 className="font-semibold text-slate-900 text-base">
                  {method.title}
                </h3>
                <p className="text-xs text-slate-500 mb-2">{method.subtitle}</p>
                <a
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-emerald-800 font-medium text-sm hover:underline"
                >
                  {method.linkText} ↗
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>
  )
}

