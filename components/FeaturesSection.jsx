export default function FeaturesSection() {
  const features = [
    {
      icon: '⚡',
      title: 'Premium Quality',
      description: 'ISO certified minerals and hardwood products meeting international export standards.',
    },
    {
      icon: '🚀',
      title: 'Express Delivery',
      description: 'Fast logistics to 50+ countries with real-time tracking and documentation.',
    },
    {
      icon: '💎',
      title: 'Competitive Rates',
      description: 'Factory-direct pricing with volume discounts for bulk orders.',
    },
    {
      icon: '👥',
      title: 'Expert Team',
      description: 'Dedicated account managers and technical specialists available 24/7.',
    },
    {
      icon: '🌐',
      title: 'Global Network',
      description: 'Established relationships and reliable shipping across all continents.',
    },
    {
      icon: '✔️',
      title: 'Certified',
      description: 'Full compliance with international quality and export certifications.',
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/3 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-xs font-bold tracking-wider mb-6">
            <span className="w-2 h-2 bg-secondary rounded-full"></span>
            OUR ADVANTAGES
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-5 leading-tight">
            Why Export With
            <span className="block text-secondary">SAMAR</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
            We&apos;ve built our reputation on reliability, quality, and customer-first service across 25+ years of global trade.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative animate-fade-in-up stagger-${(index % 5) + 1}`}
            >
              {/* Background card */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-background rounded-2xl border border-border group-hover:border-secondary/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-secondary/10"></div>
              
              {/* Content */}
              <div className="relative p-8 h-full flex flex-col">
                <div className="text-4xl mb-5 group-hover:scale-125 transition-transform duration-500 transform group-hover:-translate-y-1">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-medium flex-grow leading-relaxed">
                  {feature.description}
                </p>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
