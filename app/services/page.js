import Link from 'next/link'
import PageHeader from '@/components/PageHeader'

export const metadata = {
  title: 'Services | Industrial Minerals & Wooden Products',
  description: 'Our comprehensive services including bulk supply, custom packaging, logistics, and technical support',
}

export default function Services() {
  const services = [
    {
      icon: '🏭',
      title: 'Bulk Supply Solutions',
      description: 'Large-scale industrial minerals supply with customized order specifications and volume discounts.',
      features: ['Custom quantities', 'Flexible delivery', 'Volume pricing', 'Long-term contracts'],
    },
    {
      icon: '📦',
      title: 'Custom Packaging',
      description: 'Tailored wooden boxes and packaging solutions designed to meet your exact requirements.',
      features: ['Custom sizes', 'Branding options', 'Eco-friendly materials', 'Quality assurance'],
    },
    {
      icon: '🚚',
      title: 'Logistics & Delivery',
      description: 'Efficient delivery network with tracking and flexible scheduling options available.',
      features: ['Real-time tracking', 'Fast delivery', 'Safe handling', 'Insurance options'],
    },
    {
      icon: '🔬',
      title: 'Quality Testing',
      description: 'Comprehensive quality analysis and certification for all mineral products.',
      features: ['Lab analysis', 'Certifications', 'Purity testing', 'Documentation'],
    },
    {
      icon: '🤝',
      title: 'Consulting & Support',
      description: 'Expert guidance on product selection, application, and industry best practices.',
      features: ['Technical advice', 'Product guidance', 'Application support', 'Training'],
    },
    {
      icon: '♻️',
      title: 'Sustainable Solutions',
      description: 'Eco-friendly products and packaging options for environmentally conscious businesses.',
      features: ['Green materials', 'Recycling support', 'Sustainability reports', 'Carbon neutral'],
    },
  ]

  return (
    <div>
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive solutions for all your industrial mineral and wooden product needs"
      />

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-8 border border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 group cursor-pointer animate-fade-in-up stagger-${(index % 5) + 1}`}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4 animate-fade-in-up">
              How We Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up stagger-1">
              Our streamlined process ensures quick, efficient service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Inquiry', description: 'Contact us with your requirements' },
              { step: '2', title: 'Quote', description: 'Receive competitive pricing' },
              { step: '3', title: 'Order', description: 'Confirm and process your order' },
              { step: '4', title: 'Delivery', description: 'Fast and secure delivery' },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative animate-fade-in-up stagger-${(index % 5) + 1}`}
              >
                <div className="bg-white rounded-lg p-6 border border-border text-center">
                  <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-accent/30 -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">
            Ready to Get Started?
          </h2>
          <p className="text-xl opacity-90 mb-8 animate-fade-in-up stagger-1">
            Contact us today to discuss how our services can meet your business needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-secondary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-accent transition-all duration-300 hover:shadow-lg animate-fade-in-up stagger-2"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  )
}
