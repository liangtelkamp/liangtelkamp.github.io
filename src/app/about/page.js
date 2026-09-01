export default function About() {
  const experiences = [
    {
      company: 'NextHuman',
      role: 'AI Consultant',
      period: 'August 2025 – Present',
      description: 'Developing reliable, explainable AI applications and machine learning implementations for public sector clients.',
      current: true
    },
    {
      company: 'UN OCHA',
      role: 'Software Engineer Intern',
      period: 'September 2025 – September 2026',
      description: 'Supporting the HDX dev/design team in building an automated pipeline for detecting personal and sensitive data in humanitarian datasets. Evaluating Large Language Models (LLMs), contributing to infrastructure design, and developing dataset scanning tools.'
    },
    {
      company: 'Centrum Wiskunde & Informatica (CWI)',
      role: 'Thesis Intern',
      period: 'January 2025 – August 2025',
      description: 'Developed an LLM-powered framework for contextually sensitive data detection in tabular datasets for MSc thesis in AI, supervised by Dr. Madelon Hulsebos at the Database Architectures department.',
      award: '🏆 Thesis Award',
      thesisLink: 'https://scripties.uba.uva.nl/search?id=record_56810'
    },
    {
      company: 'University of Amsterdam',
      role: 'Administrative Secretary',
      period: 'September 2023 – September 2024',
      description: 'Managed administrative operations for academic programs while completing advanced studies in AI and Logic.'
    },
    {
      company: 'University of Amsterdam',
      role: 'Teaching Assistant',
      period: 'August 2022 – December 2024',
      description: 'Mentored students in artificial intelligence and computer science courses, leading lab sessions and grading coursework.'
    },
    {
      company: 'Faculty Student Council FNWI',
      role: 'Vice-Chair & Council Assistant',
      period: 'December 2021 – August 2023',
      description: 'Represented student body interests at the faculty level, improving study climate and engaging in strategic dialogues with faculty leadership.'
    }
  ]

  const education = [
    {
      institution: 'University of Amsterdam',
      degree: 'MSc Artificial Intelligence',
      period: '2023 – 2025',
      description: 'Master\'s degree specialized in Natural Language Processing, Formal Logic, and sensitive data detection. Conducted master thesis research at CWI.',
      highlights: ['Machine Learning', 'NLP', 'Formal Logic', 'Tabular PII Detection']
    },
    {
      institution: 'University of Amsterdam',
      degree: 'BSc Artificial Intelligence',
      period: '2020 – 2023',
      description: 'Foundational degree in AI with focus on computer science, algorithms, and logic & computability theory.',
      highlights: ['AI Fundamentals', 'Algorithms', 'Computability Theory', 'Data Structures']
    },
    {
      institution: 'Cygnus Gymnasium',
      degree: 'Pre-University Education (VWO)',
      period: '2013 – 2019',
      description: 'Secondary education with profiles in Nature & Technology and Nature & Health.',
      highlights: ['Mathematics', 'Physics', 'Biology', 'Chemistry']
    }
  ]

  const publications = [
    {
      year: '2026',
      title: 'Towards Contextual Sensitive Data Detection',
      authors: 'Liang Telkamp and Madelon Hulsebos',
      venue: 'In Findings of the Association for Computational Linguistics: EMNLP 2026',
      pdfLink: 'https://arxiv.org/pdf/2512.04120',
      codeLink: 'https://github.com/trl-lab/sensitive-data-detection',
      abstract: 'The emergence of open data portals necessitates more attention to protecting sensitive data before datasets get published and exchanged. To do so effectively, we observe the need to refine and broaden our definitions of sensitive data, and argue that the sensitivity of data depends on its context. Following this definition, we introduce a contextual data sensitivity framework building on two core concepts: 1) type contextualization, which considers the type of the data values at hand within the overall context of the dataset or document to assess their true sensitivity, and 2) domain contextualization, which assesses the sensitivity of data values informed by domain-specific information external to the dataset, such as geographic origin of a dataset. Experiments instrumented with language models confirm that: 1) type-contextualization significantly reduces the number of false positives for type-based sensitive data detection and reaches a recall of 94% compared to 63% with commercial tools, and 2) domain-contextualization leveraging sensitivity rule retrieval effectively grounds sensitive data detection in relevant context in non-standard data domains. A case study with humanitarian data experts also illustrates that contextgrounded explanations provide useful guidance in manual data auditing processes. We open-source the implementation of the mechanisms and annotated datasets at: https://github.com/trl-lab/sensitive-data-detection.'
    }
  ]

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      <div className="space-y-6">
        {/* Header */}
        <section>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            About Liang Telkamp
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mt-2">
            Software Engineer Intern at UN OCHA & AI Consultant at NextHuman. 
            Master of Science in Artificial Intelligence from the University of Amsterdam.
          </p>
        </section>

        {/* Bio / Journey */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-3">
            Background & Focus
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 leading-relaxed">
            <p>
              I am an AI consultant and software engineer specializing in public sector software solutions, <strong>Natural Language Processing</strong>, 
              <strong> Machine Learning</strong>, and <strong>Logic</strong>. 
              Currently, at <strong>UN OCHA</strong>, I assist the HDX dev/design team in engineering an automated pipeline 
              for scanning sensitive and personal data across humanitarian datasets.
            </p>
            <p>
              At <strong>NextHuman</strong>, I consult on AI solutions, evaluating machine learning models and implementing scalable technologies for clients. 
              My research background includes a Master’s thesis completed at <strong>Centrum Wiskunde & Informatica (CWI)</strong> under supervision of 
              Dr. Madelon Hulsebos, focused on LLM-driven contextual sensitive data detection in tabular data, which received a 
              <strong> Thesis Award</strong>.
            </p>
          </div>
        </section>
      </div>

      {/* Publications */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-3">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Publications
          </h2>
        </div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-lg p-6 space-y-3 shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-slate-700 font-medium">
                    {pub.authors}
                  </p>
                  <p className="text-xs text-slate-500 italic">
                    {pub.venue} ({pub.year})
                  </p>
                </div>
                <div className="flex items-center gap-3 flex-wrap text-xs font-medium">
                  {pub.pdfLink && (
                    <a
                      href={pub.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded hover:bg-emerald-100 transition-colors"
                    >
                      PDF ↗
                    </a>
                  )}
                  {pub.codeLink && (
                    <a
                      href={pub.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-slate-100 text-slate-700 border border-slate-200 rounded hover:bg-slate-200 transition-colors"
                    >
                      Code ↗
                    </a>
                  )}
                </div>
              </div>

              {pub.abstract && (
                <details className="mt-3 text-xs text-slate-600 border-t border-slate-100 pt-3 group">
                  <summary className="cursor-pointer font-medium text-slate-700 hover:text-slate-900 select-none">
                    Abstract
                  </summary>
                  <p className="mt-2 leading-relaxed bg-slate-50 p-4 rounded border border-slate-200">
                    {pub.abstract}
                  </p>
                </details>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Work & Research Experience */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-3">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Work & Research Experience
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Chronological overview of career and research appointments
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-lg p-6 border-accent-left shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-lg font-bold text-slate-900">
                    {exp.company}
                  </h3>
                  <span className="text-slate-400 font-normal">|</span>
                  <span className="text-slate-700 font-medium text-sm">
                    {exp.role}
                  </span>
                  {exp.current && (
                    <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold rounded">
                      Current
                    </span>
                  )}
                  {exp.award && (
                    <span className="px-2 py-0.5 bg-amber-50 text-amber-800 border border-amber-200 text-xs font-semibold rounded">
                      {exp.award}
                    </span>
                  )}
                </div>
                <span className="text-xs text-slate-500 font-mono">
                  {exp.period}
                </span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mt-2">
                {exp.description}
              </p>
              {exp.thesisLink && (
                <div className="mt-3">
                  <a
                    href={exp.thesisLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-medium text-emerald-700 hover:underline gap-1"
                  >
                    View Master Thesis Record ↗
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-3">
          Academic Education
        </h2>
        <div className="space-y-6">
          {education.map((item, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-lg p-6 space-y-3 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{item.institution}</h3>
                  <p className="text-emerald-800 font-medium text-sm">{item.degree}</p>
                </div>
                <span className="text-xs text-slate-500 font-mono">{item.period}</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.highlights.map((h, i) => (
                  <span key={i} className="px-2.5 py-0.5 bg-slate-100 text-slate-700 text-xs font-medium rounded">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

