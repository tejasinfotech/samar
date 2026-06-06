'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  const isActiveRoute = (href) => (
    href === '/' ? pathname === '/' : pathname.startsWith(href)
  )

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
                src="/newlogo.png"
                alt="Samar Export Logo"
                width={200}
                height={80}
                className=" w-[280px] h-[70px] object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-12">
            {navItems.map((item) => {
              const isActive = isActiveRoute(item.href)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-semibold relative group transition-colors duration-300 hover:text-primary ${
                    isActive ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-500 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              Get Quote
            </Link>
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
            {navItems.map((item, index) => {
              const isActive = isActiveRoute(item.href)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 font-semibold hover:text-primary hover:bg-background/50 rounded-lg transition-all animate-fade-in-left stagger-${index + 1} ${
                    isActive ? 'bg-primary/5 text-primary' : 'text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full mt-4 px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 text-center"
            >
              Get Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
