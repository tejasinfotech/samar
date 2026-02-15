export default function PageHeader({ title, subtitle }) {
  return (
    <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 animate-fade-in-down">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl opacity-90 max-w-2xl mx-auto animate-fade-in-up stagger-1">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
