'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function ManPowerSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const companies = [
    {
      name: 'Global HR Solutions',
      icon: '🌍',
      color: 'from-primary to-primary/80',
      description: 'International workforce management'
    },
    {
      name: 'TechStaff Recruitment',
      icon: '💻',
      color: 'from-secondary to-secondary/80',
      description: 'Skilled technical manpower'
    },
    {
      name: 'ProWorx Industrial',
      icon: '⚙️',
      color: 'from-accent to-accent/80',
      description: 'Factory & plant operations'
    },
    {
      name: 'Elite Workforce Group',
      icon: '👔',
      color: 'from-primary to-accent',
      description: 'Professional & management staff'
    },
    {
      name: 'Quality Labor Partners',
      icon: '🏗️',
      color: 'from-secondary to-primary',
      description: 'Logistics & supply chain'
    },
  ]

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/3 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold tracking-wider mb-6">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            TRUSTED PARTNERS
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-primary mb-6 leading-tight">
            Our Man Power
            <span className="block text-secondary">Supply Partners</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Strategic alliances with premier recruitment and staffing agencies to provide quality workforce solutions for all your operational needs.
          </p>
        </div>

        {/* Companies Grid */}
        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {companies.map((company, index) => (
            <div
              key={index}
              className="relative animate-fade-in-up"
            >
              {/* Card */}
              <div className="bg-white border-2 border-border rounded-2xl p-8 h-full flex flex-col shadow-sm">

                {/* Icon */}
                <div className="text-5xl mb-6 inline-block text-primary">
                  {company.icon}
                </div>

                {/* Company Name */}
                <h3 className="text-lg font-bold text-primary mb-2">
                  {company.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground flex-grow font-medium">
                  {company.description}
                </p>

                {/* CTA (always visible, optional) */}
                <div className="mt-6 pt-6 border-t border-border">
                  <a
                    href="#contact"
                    className="text-primary font-bold text-sm flex items-center gap-2"
                  >
                    Contact
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Main CTA Card */}
        <div className={`relative animate-fade-in-up stagger-4 transition-all duration-1000`}>
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-secondary rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>

          {/* Content Card */}
          <div className="relative bg-gradient-to-r from-primary to-primary/95 rounded-3xl p-12 md:p-16 border border-white/10 overflow-hidden group">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/20 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-full -ml-16 -mb-16 group-hover:scale-125 transition-transform duration-500"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold tracking-wider mb-6 border border-white/20">
                  <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
                  WORKFORCE SOLUTIONS
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Need Quality
                  <span className="block text-secondary">Workforce?</span>
                </h3>
                <p className="text-lg text-white/90 mb-8 font-medium leading-relaxed max-w-xl">
                  Connect with our network of premier staffing partners to fulfill all your human resource requirements with vetted, skilled professionals.
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-secondary text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-accent transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/40 group/btn"
                >
                  <span>Get Workforce Now</span>
                  <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </Link>
              </div>

              {/* Right side stats */}
              <div className="grid grid-cols-2 gap-6 flex-1">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:border-secondary/50 transition-all duration-300 hover:bg-white/15">
                  <p className="text-3xl font-bold text-secondary mb-2">1000+</p>
                  <p className="text-sm text-white/70 font-medium">Workers Available</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:border-secondary/50 transition-all duration-300 hover:bg-white/15">
                  <p className="text-3xl font-bold text-accent mb-2">50+</p>
                  <p className="text-sm text-white/70 font-medium">Staffing Partners</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:border-secondary/50 transition-all duration-300 hover:bg-white/15">
                  <p className="text-3xl font-bold text-secondary mb-2">24/7</p>
                  <p className="text-sm text-white/70 font-medium">Quick Deployment</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:border-secondary/50 transition-all duration-300 hover:bg-white/15">
                  <p className="text-3xl font-bold text-accent mb-2">100%</p>
                  <p className="text-sm text-white/70 font-medium">Vetted Staff</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
