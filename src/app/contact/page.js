'use client'

import { useEffect } from 'react'

export default function Contact() {
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
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 via-white to-accent-50"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-outfit font-bold text-5xl md:text-6xl mb-6 animate-fade-in">
            Let's <span className="bg-gradient-organic bg-clip-text text-green-600">Connect</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-700 font-medium mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Open to Collaborations & Opportunities
          </p>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Whether you have a question, want to discuss a project, or explore collaboration opportunities, 
            I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Methods & Form */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="font-outfit font-bold text-3xl mb-8 animate-on-scroll">
                <span className="bg-gradient-organic bg-clip-text text-green-600">
                  Get in Touch
                </span>
              </h2>

              {[
                {
                  icon: '✉️',
                  title: 'Email',
                  subtitle: 'Best way to reach me',
                  link: 'mailto:telkampliang@gmail.com',
                  linkText: 'telkampliang@gmail.com'
                },
                {
                  icon: '💼',
                  title: 'LinkedIn',
                  subtitle: 'Connect professionally',
                  link: 'https://linkedin.com/in/liangtelkamp',
                  linkText: 'linkedin.com/in/liangtelkamp'
                },
                {
                  icon: '💻',
                  title: 'GitHub',
                  subtitle: 'Check out my code',
                  link: 'https://github.com/liangtelkamp',
                  linkText: 'github.com/liangtelkamp'
                },
                {
                  icon: '🏢',
                  title: 'Company',
                  subtitle: 'AI Consultant at',
                  link: 'https://nexthuman.nl',
                  linkText: 'NextHuman Consulting'
                }
              ].map((method, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-6 bg-white rounded-xl border-l-4 border-l-primary-400 border-t border-r border-b border-neutral-200 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/30 transition-all duration-300 animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-organic rounded-xl flex items-center justify-center text-3xl shadow-md">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-neutral-800 mb-1">
                      {method.title}
                    </h3>
                    <p className="text-sm text-neutral-600 mb-2">{method.subtitle}</p>
                    <a 
                      href={method.link}
                      target={method.link.startsWith('http') ? '_blank' : undefined}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                    >
                      {method.linkText}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="animate-on-scroll">
              <h2 className="font-outfit font-bold text-3xl mb-8">
                <span className="bg-gradient-organic bg-clip-text text-green-600">
                  Send a Message
                </span>
              </h2>

              <form 
                action="mailto:telkampliang@gmail.com" 
                method="post" 
                encType="text/plain"
                className="bg-white rounded-xl p-8 border border-neutral-200 shadow-lg space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-neutral-800 font-semibold mb-2">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-neutral-800 font-semibold mb-2">
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-neutral-800 font-semibold mb-2">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    required
                    placeholder="Collaboration Opportunity"
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-neutral-800 font-semibold mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required
                    rows="6"
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-organic text-green-600 rounded-lg font-semibold hover:shadow-xl hover:shadow-primary-300/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 green-glow"
                >
                  Send Message
                  <span>→</span>
                </button>

                <p className="text-sm text-neutral-500 text-center">
                  Note: This will open your email client. You can also email me directly at{' '}
                  <a href="mailto:telkampliang@gmail.com" className="text-primary-600 hover:text-primary-700">
                    telkampliang@gmail.com
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-neutral-200 shadow-lg text-center animate-on-scroll">
            <h2 className="font-outfit font-bold text-3xl mb-6 bg-gradient-organic bg-clip-text text-green-600">
              Current Availability
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6 max-w-2xl mx-auto">
              I'm currently working as an AI Consultant at NextHuman, developing innovative AI solutions. 
              I'm open to discussing research collaborations, consulting opportunities, and interesting AI projects.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-organic text-green-600 rounded-full font-semibold shadow-md">
              <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
              Available for Opportunities
            </div>
            <p className="text-sm text-neutral-600 mt-6">
              Response time: typically within 24-48 hours
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
