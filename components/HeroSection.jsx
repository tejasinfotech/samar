
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const isLoaded = true;

  return (
    <section className="relative min-h-[720px] bg-gradient-to-b from-background via-white to-white flex items-center overflow-hidden pt-8">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-xs font-bold tracking-wider">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                GLOBAL INDUSTRIAL SUPPLIER
              </div>
            </div>

            <h1
              className="text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Packing Wood,
              <span className="block text-secondary">
                Industrial Minerals & Manpower
              </span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Your trusted partner for premium industrial minerals, packing wood
              solutions, and skilled manpower supply. Delivering quality
              materials, reliable workforce, and customized solutions for
              industries across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/products"
                className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
              >
                Explore Products
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold hover:bg-primary/5 transition-all duration-300"
              >
                Get Quote
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Projects Delivered
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-secondary">10+</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Years Experience
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-accent">100%</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Customer Satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* Right Premium Image */}
          <div
            className={`hidden lg:flex justify-center items-center transition-all duration-1000 delay-200 ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative w-full max-w-[500px] h-[650px]">

              {/* Glow Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-[40px] blur-3xl scale-105"></div>

              {/* Main Card */}
              <div className="relative h-full rounded-[40px] overflow-hidden bg-white border border-slate-100 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">

                <Image
                  src="/manimage.png"
                  alt="Packing Wood, Industrial Minerals & Manpower"
                  fill
                  priority
                  className="object-cover "
                />
              </div>

              {/* Floating Decorations */}
              <div className="absolute -top-8 -right-8 w-28 h-28 bg-secondary/20 rounded-full blur-2xl"></div>

              <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-primary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}