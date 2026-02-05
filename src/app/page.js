'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export default function Home() {
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Organic Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary-100/20 to-transparent rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="font-outfit font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
              Building the Future with{' '}
              <span className="bg-gradient-organic bg-clip-text text-transparent">
                AI
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-700 font-medium">
              AI Consultant at NextHuman
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-xl">
              Specializing in Natural Language Processing and Machine Learning solutions 
              that drive innovation and sustainability. Transforming complex challenges 
              into intelligent, eco-conscious solutions.
            </p>
            <div className="flex gap-4 pt-4">
              <a 
                href="/about" 
                className="px-8 py-4 bg-gradient-organic text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Learn More
                <span>→</span>
              </a>
              <a 
                href="/contact" 
                className="px-8 py-4 border-2 border-primary-500 text-primary-700 rounded-full font-semibold hover:bg-primary-50 hover:scale-105 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Rotating gradient border */}
              <div className="absolute inset-0 bg-gradient-organic rounded-full blur-xl opacity-50 green-glow"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-primary-100 shadow-2xl bg-gradient-soft ring-4 ring-primary-200/50">
                {/* Placeholder - replace with actual image */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-accent-100">
                  <div className="text-center">
                    <div className="text-8xl mb-4">👤</div>
                    <p className="text-neutral-600 font-medium">Your Photo Here</p>
                  </div>
                </div>
                {/* Uncomment when you add your image:
                <Image 
                  src="/images/profile.jpg" 
                  alt="Liang Telkamp" 
                  fill
                  className="object-cover"
                  priority
                />
                */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gradient-to-b from-white to-primary-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-outfit font-bold text-4xl md:text-5xl text-center mb-4 animate-on-scroll">
            <span className="bg-gradient-organic bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-center text-neutral-600 mb-12 max-w-2xl mx-auto animate-on-scroll">
            Combining cutting-edge AI technology with sustainable practices
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🤖',
                title: 'Artificial Intelligence',
                description: 'Advanced ML and deep learning solutions for real-world applications',
                tags: ['Machine Learning', 'Deep Learning', 'AI Strategy']
              },
              {
                icon: '💬',
                title: 'Natural Language Processing',
                description: 'State-of-the-art NLP systems for language understanding and generation',
                tags: ['NLP', 'LLMs', 'Text Analysis']
              },
              {
                icon: '💻',
                title: 'Full-Stack Development',
                description: 'Building scalable AI-powered applications from concept to deployment',
                tags: ['Python', 'React', 'Next.js']
              },
              {
                icon: '🌱',
                title: 'Sustainable AI',
                description: 'Developing eco-conscious AI solutions for a better tomorrow',
                tags: ['Green Tech', 'Ethics', 'Impact']
              }
            ].map((skill, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 border-l-4 border-l-primary-400 border-t border-r border-b border-neutral-200 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-100/50 transition-all duration-300 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="font-outfit font-bold text-xl mb-3 text-neutral-800">
                  {skill.title}
                </h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-primary-50 to-accent-50 text-primary-700 text-sm rounded-full border border-primary-300 hover:border-primary-400 hover:shadow-sm transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-outfit font-bold text-4xl md:text-5xl text-center mb-16 animate-on-scroll">
            <span className="bg-gradient-organic bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-accent-400"></div>

            <div className="space-y-12">
              {[
                {
                  company: 'NextHuman',
                  role: 'AI Consultant',
                  period: 'August 2024 - Present',
                  description: 'Leading AI consulting projects, implementing cutting-edge machine learning solutions, and driving innovation in sustainable AI practices.',
                  current: true
                },
                {
                  company: 'University of Amsterdam',
                  role: 'Teaching Assistant',
                  period: 'August 2022 - December 2024',
                  description: 'Mentored students in AI and computer science courses, developing strong communication and leadership skills while advancing research in NLP.',
                },
                {
                  company: 'University of Amsterdam',
                  role: 'Administrative Secretary',
                  period: 'September 2023 - September 2024',
                  description: 'Managed administrative operations while completing advanced studies in AI and Logic.',
                },
                {
                  company: 'StudentsPlus',
                  role: 'Tutor',
                  period: 'July 2019 - September 2021',
                  description: 'Provided personalized tutoring in mathematics and sciences, helping students achieve academic excellence.',
                },
              ].map((job, index) => (
                <div 
                  key={index}
                  className="relative pl-20 animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-gradient-organic border-4 border-white shadow-lg"></div>
                  
                  <div className="bg-white rounded-xl p-6 border border-neutral-200 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/30 transition-all duration-300 green-border-accent">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-outfit font-bold text-xl text-neutral-800">
                        {job.company}
                      </h3>
                      {job.current && (
                        <span className="px-3 py-1 bg-gradient-organic text-white text-xs rounded-full font-semibold">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="font-semibold text-primary-700 mb-1">{job.role}</p>
                    <p className="text-sm text-neutral-500 mb-3">{job.period}</p>
                    <p className="text-neutral-600 leading-relaxed">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-outfit font-bold text-4xl md:text-5xl mb-6 animate-on-scroll">
            Let's Build Something{' '}
            <span className="bg-gradient-organic bg-clip-text text-transparent">Amazing</span>
          </h2>
          <p className="text-xl text-neutral-700 mb-8 animate-on-scroll">
            Ready to transform your ideas into intelligent, sustainable solutions?
          </p>
          <a 
            href="/contact" 
            className="inline-block px-10 py-5 bg-gradient-organic text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-primary-300/50 hover:scale-105 transition-all duration-300 animate-on-scroll green-glow"
          >
            Start a Conversation →
          </a>
        </div>
      </section>
    </>
  )
}
