import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-32 bg-gradient-to-br from-primary via-primary to-primary/95 text-white relative overflow-hidden">
      {/* Premium decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-8 inline-block animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold tracking-wider border border-white/20">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              READY TO GROW YOUR BUSINESS?
            </div>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in-up stagger-1 leading-tight">
            Partner With
            <span className="block text-secondary">SAMAR EXPORTS</span>
          </h2>

          <p className="text-lg text-white/90 mb-12 max-w-3xl mx-auto animate-fade-in-up stagger-2 font-medium leading-relaxed">
            Get premium industrial minerals and wooden products delivered to your door. Our expert team is ready to provide tailored solutions for your business needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up stagger-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-primary px-10 py-4 rounded-lg font-bold hover:bg-accent transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/40 text-center group"
            >
              Get Your Quote Today
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-10 py-4 rounded-lg font-bold hover:bg-white hover:text-primary transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m0 0l8-4m0 0l8 4m-8-4v10m0 0l-8 4m8-4l8 4"></path>
              </svg>
              Browse All Products
            </Link>
          </div>

          {/* Trust Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up stagger-4 pt-8 border-t border-white/20">
            <div className="group relative">
              <div className="absolute inset-0 bg-white/5 rounded-xl blur-xl group-hover:bg-white/10 transition-all duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-secondary/50 transition-all duration-300">
                <p className="text-3xl font-bold text-secondary mb-2">50+</p>
                <p className="text-sm text-white/70 font-medium">Countries Served</p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-white/5 rounded-xl blur-xl group-hover:bg-white/10 transition-all duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-secondary/50 transition-all duration-300">
                <p className="text-3xl font-bold text-secondary mb-2">1000+</p>
                <p className="text-sm text-white/70 font-medium">Products Shipped Monthly</p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-white/5 rounded-xl blur-xl group-hover:bg-white/10 transition-all duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-secondary/50 transition-all duration-300">
                <p className="text-3xl font-bold text-secondary mb-2">24/7</p>
                <p className="text-sm text-white/70 font-medium">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
