import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  ShieldCheck,
  UsersRound,
} from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const businessLinks = [
  { label: 'Packaging Materials', href: '/products?category=packaging' },
  { label: 'Industrial Minerals', href: '/products?category=minerals' },
  { label: 'Wooden Pallets', href: '/products?category=pallets' },
  { label: 'Wooden Boxes', href: '/products?category=wooden' },
  { label: 'Manpower Services', href: '/products?service=manpower' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#071d18] text-white">
      <div className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-center opacity-[0.035]"></div>
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl"></div>
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#f28a22]/10 blur-3xl"></div>
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1.1fr]">
          <div>
            <Link href="/" className="inline-flex rounded-2xl bg-white p-3 shadow-lg shadow-black/20">
              <Image
                src="/newlogo.png"
                alt="Samar Exports logo"
                width={260}
                height={90}
                className="h-16 w-56 object-contain"
              />
            </Link>

            <p className="mt-6 max-w-md text-sm font-medium leading-relaxed text-white/70">
              Premium packaging materials, industrial minerals, export products, and manpower support through Samar Exports and S B Enterprise.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <PackageCheck className="mb-3 h-6 w-6 text-secondary" />
                <p className="text-sm font-bold">Export Products</p>
                <p className="mt-1 text-xs text-white/60">Quality supply</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <UsersRound className="mb-3 h-6 w-6 text-[#f28a22]" />
                <p className="text-sm font-bold">Manpower</p>
                <p className="mt-1 text-xs text-white/60">S B Enterprise</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-secondary">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
                  >
                    <ArrowRight className="h-4 w-4 text-secondary opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-secondary">
              Business
            </h4>
            <ul className="space-y-3">
              {businessLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
                  >
                    <ArrowRight className="h-4 w-4 text-[#f28a22] opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-secondary">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="tel:9166416666"
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:border-secondary/40 hover:bg-white/8"
              >
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-secondary/15 text-secondary">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wide text-white/50">Phone</span>
                  <span className="mt-1 block font-bold text-white">9166416666 / 9376887777</span>
                </span>
              </a>

              <a
                href="mailto:vikram.kd555@gmail.com"
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:border-secondary/40 hover:bg-white/8"
              >
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-secondary/15 text-secondary">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wide text-white/50">Email</span>
                  <span className="mt-1 block break-all font-bold text-white">vikram.kd555@gmail.com</span>
                </span>
              </a>

              <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-secondary/15 text-secondary">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wide text-white/50">Location</span>
                  <span className="mt-1 block font-bold text-white">Keshwana, Kotputli</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                <ShieldCheck className="h-6 w-6" />
              </span>
              <div>
                <p className="font-bold">Trusted business support for exports and manpower.</p>
                <p className="text-sm text-white/60">Quality products, reliable service, and quick communication.</p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-secondary px-6 py-3 font-bold text-primary transition-all hover:bg-[#f28a22] hover:text-white"
            >
              Get Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-xs font-semibold text-white/50 md:flex-row">
          <p>&copy; 2026 Samar Exports. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link href="/products" className="transition-colors hover:text-secondary">Products</Link>
            <Link href="/products?service=manpower" className="transition-colors hover:text-secondary">Manpower</Link>
            <Link href="/contact" className="transition-colors hover:text-secondary">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
