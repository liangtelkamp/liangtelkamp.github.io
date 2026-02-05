'use client'

import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 via-white to-accent-50"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-outfit font-bold text-5xl md:text-6xl mb-6 animate-fade-in">
            About <span className="bg-gradient-organic bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-700 font-medium mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            AI Consultant • Researcher • Innovator
          </p>
          <p className="text-lg text-neutral-600 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Passionate about leveraging AI to create sustainable, impactful solutions for tomorrow's challenges
          </p>
        </div>
      </section>

      {/* My Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-neutral-200 shadow-lg green-border-accent hover:shadow-xl hover:shadow-primary-100/30 transition-all duration-300 animate-on-scroll">
            <h2 className="font-outfit font-bold text-3xl mb-6 bg-gradient-organic bg-clip-text text-transparent">
              My Journey
            </h2>
            <div className="space-y-4 text-neutral-700 leading-relaxed text-lg">
              <p>
                I'm <strong className="text-primary-700">Liang Telkamp</strong>, an AI Consultant at{' '}
                <strong className="text-primary-700">NextHuman</strong>, where I specialize in developing 
                cutting-edge Natural Language Processing and Machine Learning solutions.
              </p>
              <p>
                My journey in AI began at the University of Amsterdam, where I completed dual master's degrees 
                in <strong className="text-primary-700">Artificial Intelligence</strong> and{' '}
                <strong className="text-primary-700">Logic</strong>. This unique combination gives me a 
                distinctive perspective on machine learning—blending practical application with rigorous 
                theoretical foundations.
              </p>
              <p>
                Today, I focus on creating <strong className="text-primary-700">sustainable AI solutions</strong> that 
                not only solve complex problems but also contribute to a more eco-conscious future. I believe 
                technology should serve humanity and our planet, driving innovation that matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-gradient-to-b from-white to-primary-50/30">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-outfit font-bold text-4xl text-center mb-16 animate-on-scroll">
            <span className="bg-gradient-organic bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <div className="space-y-8">
            {[
              {
                institution: 'University of Amsterdam',
                degree: 'MSc Artificial Intelligence & MSc Logic',
                period: '2023 - 2025',
                description: 'Dual master\'s degrees with specialization in Natural Language Processing and Machine Translation. Engaged in cutting-edge research while maintaining academic excellence.',
                highlights: ['Machine Learning', 'NLP', 'Formal Logic', 'Research Methods']
              },
              {
                institution: 'University of Amsterdam',
                degree: 'BSc Artificial Intelligence',
                period: '2020 - 2023',
                description: 'Comprehensive foundation in AI with a minor in Logic & Computability. Developed strong programming skills and theoretical understanding.',
                highlights: ['AI Fundamentals', 'Algorithms', 'Computability Theory', 'Data Structures']
              },
              {
                institution: 'Cygnus Gymnasium',
                degree: 'Pre-University Education',
                period: '2013 - 2019',
                description: 'Advanced secondary education with focus on Nature & Technology and Nature & Health.',
                highlights: ['Mathematics', 'Physics', 'Biology', 'Chemistry']
              }
            ].map((edu, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 border-l-4 border-l-primary-400 border-t border-r border-b border-neutral-200 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-100/50 transition-all duration-300 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="font-outfit font-bold text-2xl text-neutral-800 mb-1">
                      {edu.institution}
                    </h3>
                    <p className="text-primary-700 font-semibold text-lg">{edu.degree}</p>
                  </div>
                  <span className="text-neutral-500 font-medium mt-2 md:mt-0">{edu.period}</span>
                </div>
                <p className="text-neutral-600 mb-4 leading-relaxed">{edu.description}</p>
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((highlight, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium border border-primary-200"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-outfit font-bold text-4xl text-center mb-16 animate-on-scroll">
            <span className="bg-gradient-organic bg-clip-text text-transparent">
              Research & Interests
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '🌐',
                title: 'Natural Language Processing',
                description: 'Exploring advanced techniques in language understanding, generation, and translation to bridge linguistic and cultural gaps.'
              },
              {
                icon: '🔄',
                title: 'Machine Translation',
                description: 'Researching innovative approaches to automated translation systems with emphasis on accuracy and contextual understanding.'
              },
              {
                icon: '🧮',
                title: 'Logic in AI',
                description: 'Investigating the intersection of formal logic and AI, applying logical reasoning to enhance machine learning systems.'
              },
              {
                icon: '🌱',
                title: 'Sustainable AI',
                description: 'Developing eco-conscious AI solutions that minimize environmental impact while maximizing societal benefit.'
              }
            ].map((interest, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl p-8 border border-neutral-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {interest.icon}
                </div>
                <h3 className="font-outfit font-bold text-xl mb-3 text-neutral-800">
                  {interest.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-gradient-to-b from-white to-primary-50/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-outfit font-bold text-4xl text-center mb-16 animate-on-scroll">
            <span className="bg-gradient-organic bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                category: 'Programming Languages',
                skills: ['Python', 'JavaScript', 'C++', 'R', 'SQL']
              },
              {
                category: 'AI/ML Frameworks',
                skills: ['PyTorch', 'TensorFlow', 'scikit-learn', 'Hugging Face', 'LangChain']
              },
              {
                category: 'Web Technologies',
                skills: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'FastAPI']
              },
              {
                category: 'Tools & Platforms',
                skills: ['Git', 'Docker', 'Linux', 'AWS', 'Jupyter']
              },
              {
                category: 'Languages',
                skills: ['Dutch (Native)', 'English (Fluent)']
              },
              {
                category: 'Specializations',
                skills: ['NLP', 'Machine Learning', 'Deep Learning', 'Logic', 'Research']
              }
            ].map((skillSet, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 border border-neutral-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-outfit font-bold text-lg mb-4 text-neutral-800">
                  {skillSet.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillSet.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm border border-primary-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
