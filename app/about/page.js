import PageHeader from '@/components/PageHeader'
import Link from 'next/link'

export const metadata = {
  title: 'About Us | Industrial Minerals & Wooden Products',
  description: 'Learn about our company, mission, values, and commitment to quality',
}

export default function About() {
  const timeline = [
    { year: '2009', event: 'Company Founded', description: 'Started with a vision to supply quality industrial minerals' },
    { year: '2014', event: 'Expanded Product Line', description: 'Added wooden boxes and pallets to our portfolio' },
    { year: '2018', event: 'International Growth', description: 'Began exporting to international markets' },
    { year: '2024', event: 'Market Leader', description: 'Serving 500+ clients globally with premium products' },
  ]

  const team = [
    { name: 'John Anderson', role: 'Founder & CEO', experience: '25+ years' },
    { name: 'Sarah Chen', role: 'Operations Manager', experience: '18+ years' },
    { name: 'Michael Torres', role: 'Quality Assurance', experience: '15+ years' },
    { name: 'Emma Wilson', role: 'Business Development', experience: '12+ years' },
  ]

  return (
    <div>
      <PageHeader 
        title="About Our Company" 
        subtitle="Building trust through quality, reliability, and exceptional service"
      />

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Our Story
              </span>
              <h2 className="text-4xl font-bold text-primary mb-6">
                15 Years of Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 2009, we started with a simple mission: to supply high-quality industrial minerals and wooden products to businesses across the globe. What began as a small operation has grown into a trusted partner for hundreds of clients.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our commitment to quality, reliability, and exceptional customer service has been the foundation of our success. We continuously invest in technology, training, and infrastructure to maintain our position as an industry leader.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we're proud to be recognized for our premium products, ethical practices, and dedication to sustainable solutions for the industrial sector.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-white animate-scale-in">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-6 text-center animate-fade-in-up stagger-1">
                  <p className="text-4xl font-bold mb-2">500+</p>
                  <p className="text-sm">Satisfied Clients</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6 text-center animate-fade-in-up stagger-2">
                  <p className="text-4xl font-bold mb-2">50+</p>
                  <p className="text-sm">Product Types</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6 text-center animate-fade-in-up stagger-3">
                  <p className="text-4xl font-bold mb-2">25+</p>
                  <p className="text-sm">Countries Served</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6 text-center animate-fade-in-up stagger-4">
                  <p className="text-4xl font-bold mb-2">100%</p>
                  <p className="text-sm">Quality Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center animate-fade-in-up">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To be the leading supplier of premium industrial minerals and wooden products, delivering exceptional value and service to customers worldwide.
              </p>
            </div>
            <div className="text-center animate-fade-in-up stagger-1">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To innovate and expand our product offerings while maintaining the highest standards of quality and sustainability.
              </p>
            </div>
            <div className="text-center animate-fade-in-up stagger-2">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Values</h3>
              <p className="text-muted-foreground">
                Integrity, quality, reliability, and customer satisfaction guide every decision and action we take.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4 animate-fade-in-up">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in-up stagger-1">
              Milestones in our growth and success
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`flex gap-6 items-start animate-fade-in-up stagger-${(index % 5) + 1}`}
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-lg bg-accent text-white flex items-center justify-center font-bold text-lg">
                    {item.year}
                  </div>
                </div>
                <div className="flex-grow pt-2 bg-white rounded-lg p-6 border border-border">
                  <h3 className="text-2xl font-bold text-primary mb-2">{item.event}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4 animate-fade-in-up">
              Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up stagger-1">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg p-6 border border-border text-center hover:border-accent transition-all duration-300 hover:shadow-lg animate-fade-in-up stagger-${(index % 5) + 1}`}
              >
                <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name[0]}
                </div>
                <h3 className="text-lg font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-accent font-semibold text-sm mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">
            Partner With Us
          </h2>
          <p className="text-xl opacity-90 mb-8 animate-fade-in-up stagger-1">
            Join hundreds of satisfied clients who trust us for their industrial mineral and wooden product needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-secondary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-accent transition-all duration-300 hover:shadow-lg animate-fade-in-up stagger-2"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
