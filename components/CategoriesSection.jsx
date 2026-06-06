import Link from 'next/link'
import {
  ArrowRight,
  Award,
  Boxes,
  CheckCircle2,
  Clock3,
  Factory,
  Gem,
  Globe2,
  PackageCheck,
  PackageOpen,
  ShieldCheck,
  UsersRound,
} from 'lucide-react'
import SBEnterpriseLogo from './SBEnterpriseLogo'

export default function CategoriesSection() {
  const productHighlights = [
    {
      title: 'Industrial Minerals',
      icon: Gem,
      link: '/products?category=minerals',
    },
    {
      title: 'Wooden Pallets',
      icon: PackageCheck,
      link: '/products?category=pallets',
    },
    {
      title: 'Wooden & Ply Boxes',
      icon: Boxes,
      link: '/products?category=wooden',
    },
    {
      title: 'Export Packaging',
      icon: Globe2,
      link: '/products?category=ply',
    },
  ]

  const manpowerServices = [
    'Skilled and unskilled manpower',
    'Factory and plant operations staff',
    'Logistics and support workforce',
    'Quick deployment for business needs',
  ]

  const trustPoints = [
    {
      title: 'Trusted Business Group',
      description: 'Reliable service you can count on',
      icon: ShieldCheck,
    },
    {
      title: 'Quality Assurance',
      description: 'Committed to high standards',
      icon: Award,
    },
    {
      title: 'Experienced Team',
      description: 'Skilled professionals at work',
      icon: UsersRound,
    },
    {
      title: 'Timely Support',
      description: 'Quick response, always',
      icon: Clock3,
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-background to-white py-16 sm:py-20">
      <div className="absolute inset-x-0 top-0 h-96 bg-[url('/hero.png')] bg-cover bg-center opacity-[0.035]"></div>
      <div className="absolute left-8 top-28 hidden h-20 w-20 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg ring-1 ring-primary/5 lg:flex">
        <PackageOpen className="h-9 w-9" />
      </div>
      <div className="absolute right-10 top-28 hidden h-20 w-20 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg ring-1 ring-primary/5 lg:flex">
        <UsersRound className="h-9 w-9" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-4xl text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-6xl">
            Samar Exports
            <span className="block text-secondary">& S B Enterprise</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg font-medium leading-relaxed text-slate-600">
            Two clear services under one trusted business group: products from Samar Exports and manpower support from S B Enterprise.
          </p>
          <div className="mx-auto mt-6 flex h-1 w-28 overflow-hidden rounded-full bg-primary">
            <span className="w-1/2 bg-secondary"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="relative min-h-[390px] overflow-hidden rounded-2xl border border-primary/10 bg-white p-7 shadow-xl shadow-primary/10 sm:p-8">
            <div className="relative z-10 max-w-md">
              <div className="mb-5 inline-flex items-center gap-3 rounded-full bg-slate-100 px-5 py-3 text-xs font-bold tracking-wide text-primary">
                <PackageOpen className="h-5 w-5" />
                PRODUCT SUPPLY
              </div>

              <h3 className="mb-4 text-3xl font-bold text-primary">
                Samar Exports
              </h3>
              <p className="mb-6 text-base font-medium leading-relaxed text-slate-600">
                Supplies industrial minerals, wooden pallets, wooden boxes, ply boxes, and export packaging products for industrial and commercial use.
              </p>

              <div className="mb-6 grid max-w-xl grid-cols-2 overflow-hidden rounded-xl border border-slate-200 bg-white/85 shadow-sm backdrop-blur sm:grid-cols-4">
                {productHighlights.map((item) => {
                  const Icon = item.icon

                  return (
                    <Link
                      key={item.title}
                      href={item.link}
                      className="group flex min-h-24 flex-col items-center justify-center gap-2 border-b border-r border-slate-200 px-3 py-4 text-center last:border-r-0 hover:bg-slate-50 sm:border-b-0"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/8 text-primary transition-transform group-hover:scale-110">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="text-sm font-bold leading-tight text-primary">
                        {item.title}
                      </span>
                    </Link>
                  )
                })}
              </div>

              <Link
                href="/products"
                className="inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-secondary hover:text-primary"
              >
                View Products
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="relative min-h-[390px] overflow-hidden rounded-2xl bg-[#0d3f2b] p-7 text-white shadow-xl shadow-[#137341]/20 sm:p-8">
        

            <div className="relative z-10 max-w-xl">
              <div className="mb-5 flex items-center gap-4">
                <div className="inline-flex items-center gap-3 rounded-full bg-white/12 px-5 py-3 text-xs font-bold tracking-wide text-white ring-1 ring-white/15">
                  <UsersRound className="h-5 w-5 text-[#f28a22]" />
                  MANPOWER SOLUTIONS
                </div>
              </div>

              <h3 className="mb-4 text-3xl font-bold">
                S B Enterprise
              </h3>
              <p className="mb-6 max-w-lg text-base font-medium leading-relaxed text-white/90">
                Provides reliable manpower support for factories, plants, logistics, packaging, and other business operations.
              </p>

              <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {manpowerServices.map((service) => (
                  <div key={service} className="flex items-start gap-3 text-sm font-semibold leading-relaxed text-white/95">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#f28a22]" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/products?service=manpower"
                className="inline-flex items-center gap-3 rounded-xl bg-[#f28a22] px-8 py-4 text-base font-bold text-white shadow-lg shadow-black/10 transition-all hover:bg-white hover:text-[#137341]"
              >
                View Manpower
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-xl shadow-primary/10 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => {
            const Icon = point.icon

            return (
              <div key={point.title} className="flex items-center gap-5 border-b border-primary/10 p-7 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0">
                <span className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-slate-100 text-primary">
                  <Icon className="h-7 w-7" />
                </span>
                <div>
                  <h4 className="font-bold text-primary">
                    {point.title}
                  </h4>
                  <p className="mt-1 text-sm font-medium text-slate-600">
                    {point.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
