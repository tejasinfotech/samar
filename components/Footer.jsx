import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-primary to-primary/95 text-white mt-32 relative">
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="animate-fade-in-up md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="font-bold text-primary">S</span>
              </div>
              <div>
                <h3 className="text-lg font-bold leading-none">SAMAR</h3>
                <p className="text-xs text-secondary tracking-wider">EXPORTS</p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Premium industrial minerals and wooden products for global businesses. Trusted for 25+ years.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-all duration-300 text-sm">f</a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-all duration-300 text-sm">t</a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-all duration-300 text-sm">in</a>
            </div>
          </div>

          {/* Navigation */}
          <div className="animate-fade-in-up stagger-1">
            <h4 className="font-bold mb-6 text-sm tracking-wider">NAVIGATION</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-white/70 hover:text-secondary transition-colors duration-300 font-medium">Home</Link></li>
              <li><Link href="/products" className="text-white/70 hover:text-secondary transition-colors duration-300 font-medium">Products</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-secondary transition-colors duration-300 font-medium">Services</Link></li>
              <li><Link href="/about" className="text-white/70 hover:text-secondary transition-colors duration-300 font-medium">About Us</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-secondary transition-colors duration-300 font-medium">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="animate-fade-in-up stagger-2">
            <h4 className="font-bold mb-6 text-sm tracking-wider">PRODUCTS</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products?category=minerals" className="text-white/70 hover:text-secondary transition-colors duration-300 font-medium">Minerals</Link></li>
              <li><Link href="/products?category=sand" className="text-white/70 hover:text-secondary transition-colors duration-300 font-medium">Silica Sand</Link></li>
              <li><Link href="/products?category=dolomite" className="text-white/70 hover:text-secondary transition-colors duration-300 font-medium">Dolomite</Link></li>
              <li><Link href="/products?category=wooden" className="text-white/70 hover:text-secondary transition-colors duration-300 font-medium">Wooden Boxes</Link></li>
              <li><Link href="/products?category=pallets" className="text-white/70 hover:text-secondary transition-colors duration-300 font-medium">Pallets</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up stagger-3">
            <h4 className="font-bold mb-6 text-sm tracking-wider">CONTACT INFO</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-0.5">📧</span>
                <div>
                  <p className="text-white/70 font-medium">Email</p>
                  <a href="mailto:info@samarexports.com" className="text-secondary hover:text-accent transition-colors font-semibold">info@samarexports.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-0.5">📱</span>
                <div>
                  <p className="text-white/70 font-medium">Phone</p>
                  <a href="tel:+1234567890" className="text-secondary hover:text-accent transition-colors font-semibold">+1 (234) 567-890</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-0.5">📍</span>
                <div>
                  <p className="text-white/70 font-medium">Location</p>
                  <p className="text-secondary">Industrial District, Mumbai</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="animate-fade-in-up stagger-4">
            <h4 className="font-bold mb-6 text-sm tracking-wider">NEWSLETTER</h4>
            <p className="text-sm text-white/70 mb-4 font-medium">Subscribe for updates and offers</p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-secondary transition-colors"
              />
              <button
                type="submit"
                className="bg-secondary text-primary px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-accent transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/60 gap-6">
          <p>&copy; 2024 SAMAR EXPORTS. All rights reserved.</p>
          <div className="flex gap-6 flex-wrap justify-center">
            <Link href="#" className="hover:text-secondary transition-colors duration-300 font-medium">Privacy Policy</Link>
            <Link href="#" className="hover:text-secondary transition-colors duration-300 font-medium">Terms of Service</Link>
            <Link href="#" className="hover:text-secondary transition-colors duration-300 font-medium">Sitemap</Link>
            <Link href="#" className="hover:text-secondary transition-colors duration-300 font-medium">Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
