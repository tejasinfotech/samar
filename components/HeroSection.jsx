'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-background to-white flex items-center overflow-hidden pt-10">
      {/* Premium decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent/3 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-xs font-bold tracking-wider animate-fade-in-up">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                GLOBAL EXPORT LEADER
              </div>
            </div>

            <h1 className="text-6xl  font-bold text-primary mb-8 leading-tight animate-fade-in-up stagger-1" style={{ letterSpacing: '-0.02em' }}>
              Export Quality
              <span className="block text-secondary">Minerals & Wood</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed animate-fade-in-up stagger-2 font-medium">
              We're the trusted supplier for premium industrial minerals, silica sand, dolomite chips, wooden boxes, and hardwood pallets. Serving global markets with uncompromising quality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up stagger-3">
              <Link
                href="/products"
                className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg font-bold text-center group overflow-hidden relative hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Products
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </span>
              </Link>
              <button className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold hover:bg-primary/5 transition-all duration-300">
                Get Quote
              </button>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-3 gap-4 animate-fade-in-up stagger-4 pt-8 border-t border-border">
              <div className="pt-8">
                <p className="text-3xl font-bold text-primary mb-2">500+</p>
                <p className="text-sm text-muted-foreground font-medium">Global Clients</p>
              </div>
              <div className="pt-8">
                <p className="text-3xl font-bold text-secondary mb-2">25+</p>
                <p className="text-sm text-muted-foreground font-medium">Years Experience</p>
              </div>
              <div className="pt-8">
                <p className="text-3xl font-bold text-accent mb-2">100%</p>
                <p className="text-sm text-muted-foreground font-medium">Quality Assured</p>
              </div>
            </div>
          </div>

          {/* Right Premium Visual */}
          <div className={`transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative h-96 flex items-center justify-center">
              {/* Main gradient card */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90 rounded-3xl shadow-2xl animate-scale-in"></div>
              
              {/* Content overlay */}
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-12 text-white">
                <div className="text-center">
                  {/* <svg className="w-24 h-24 mx-auto mb-8 opacity-90" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="1.5" opacity="0.4"/>
                    <circle cx="50" cy="50" r="35" fill="none" stroke="white" strokeWidth="1.5" opacity="0.3"/>
                    <text x="50" y="60" fontSize="40" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="serif">S</text>
                    <path d="M 65 38 L 72 28 L 67 35 L 67 50" fill="none" stroke="#8db5a0" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg> */}
                  <h3 className="text-3xl font-bold mb-4">Premium Export Quality</h3>
                  <p className="text-white/80 font-medium mb-8">ISO Certified • Global Standards</p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-10">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                      <p className="text-sm font-semibold mb-2">Minerals</p>
                      <p className="text-xs text-white/70">Dolomite, Silica Sand</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                      <p className="text-sm font-semibold mb-2">Wood Products</p>
                      <p className="text-xs text-white/70">Pallets, Boxes</p>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
