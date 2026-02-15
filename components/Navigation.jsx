'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            <div className=" flex items-center justify-center">
              <Image
                src="/logo.webp"
                alt="Samar Export Logo"
                width={200}
                height={80}
                className="w-32 sm:w-36 md:w-40 h-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-foreground relative group transition-colors duration-300 hover:text-primary"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-500 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-slide-in-down border-t border-border">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 text-foreground font-semibold hover:text-primary hover:bg-background/50 rounded-lg transition-all animate-fade-in-left stagger-${index + 1}`}
              >
                {item.label}
              </Link>
            ))}
            <button className="w-full mt-4 px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300">
              Get Quote
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
