import Link from 'next/link'

export default function CategoriesSection() {
  const categories = [
    {
      title: 'Industrial Minerals',
      description: 'Dolomite, Calcite, Barytes, Quartz, Feldspar, and Soapstone',
      color: 'from-primary to-primary/70',
      icon: '⛏️',
      link: '/products?category=minerals',
    },
    {
      title: 'Silica Sand',
      description: 'High-quality silica sand for various industrial applications',
      color: 'from-secondary to-secondary/70',
      icon: '🏜️',
      link: '/products?category=sand',
    },
    {
      title: 'Dolomite Products',
      description: 'Premium dolomite chips and powder for construction and industry',
      color: 'from-accent to-accent/70',
      icon: '💎',
      link: '/products?category=dolomite',
    },
    {
      title: 'Wooden Boxes',
      description: 'Custom and standard wooden boxes for packaging and storage',
      color: 'from-primary/80 to-primary/60',
      icon: '📦',
      link: '/products?category=wooden',
    },
    {
      title: 'Pine & Hardwood Pallets',
      description: 'Durable pallets and carrets for shipping and storage solutions',
      color: 'from-secondary/80 to-secondary/60',
      icon: '🪵',
      link: '/products?category=pallets',
    },
    {
      title: 'Ply Boxes',
      description: 'Versatile ply boxes for industrial and commercial applications',
      color: 'from-accent/80 to-accent/60',
      icon: '📮',
      link: '/products?category=ply',
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-background to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/3 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold tracking-wider mb-6">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            PRODUCT RANGE
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-primary mb-6 leading-tight">
            Complete Export
            <span className="block text-secondary">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            From premium industrial minerals to quality wooden packaging solutions
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.link}
              className={`group relative animate-fade-in-up stagger-${(index % 5) + 1} overflow-hidden rounded-2xl cursor-pointer`}
            >
              {/* Background gradient card */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} transition-all duration-500 group-hover:scale-105`}></div>
              
              {/* Overlay glow on hover */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>

              {/* Content */}
              <div className="relative p-10 h-full flex flex-col text-white min-h-64">
                <div className="text-6xl mb-6 group-hover:scale-125 group-hover:-rotate-6 transition-all duration-500 inline-block transform">
                  {category.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 leading-tight">
                  {category.title}
                </h3>
                
                <p className="text-sm opacity-90 mb-8 flex-grow font-medium">
                  {category.description}
                </p>
                
                <div className="inline-flex items-center gap-2 text-sm font-bold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Explore Range</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </div>
              </div>

              {/* Decorative circle */}
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
