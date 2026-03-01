"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ManPowerSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const companies = [
    {
      name: "Fosroc Chemicals Pvt Ltd",
      icon: "🌍",
      description: "International workforce management",
    },
    {
      name: "Virsun Industries",
      icon: "💻",
      description: "Skilled technical manpower",
    },
    {
      name: "Macawber Beekay Pvt Ltd",
      icon: "⚙️",
      description: "Factory & plant operations",
    },
    {
      name: "Emerg Glass India Pvt Ltd",
      icon: "👔",
      description: "Professional & management staff",
    },
    {
      name: "Pidilite Manufacturing Limited",
      icon: "🏗️",
      description: "Logistics & supply chain workforce",
    },
  ];

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Decorative Blur Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold tracking-wider mb-6">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            TRUSTED CLIENTS
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6 leading-tight">
            Samar Exports
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            We provide reliable and skilled manpower solutions to reputed
            organizations across multiple industries with professionalism and
            efficiency.
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-20">
          {companies.map((company, index) => (
            <div
              key={index}
              className="group bg-white border border-border rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="text-4xl mb-5 text-primary group-hover:scale-110 transition">
                {company.icon}
              </div>

              {/* Company Name */}
              <h3 className="text-lg font-semibold text-primary mb-2 leading-snug">
                {company.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {company.description}
              </p>

              {/* Contact Link */}
              <div className="mt-6 pt-4 border-t border-border">
                <a
                  href="/contact"
                  className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Contact
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Main CTA Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-20"></div>

          <div className="relative bg-gradient-to-r from-primary to-primary/95 rounded-3xl p-12 md:p-16 text-white overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              {/* Left Content */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold tracking-wider mb-6 border border-white/20">
                  WORKFORCE SOLUTIONS
                </div>

                <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Need Skilled & Reliable Workforce?
                </h3>

                <p className="text-white/90 mb-8 leading-relaxed max-w-xl">
                  Connect with us to fulfill your manpower requirements with
                  professionally vetted and experienced staff ready for
                  immediate deployment.
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-secondary text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent transition-all duration-300 hover:shadow-lg"
                >
                  Get Workforce Now
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>

              {/* Right Stats */}
              <div className="grid grid-cols-2 gap-6 flex-1">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                  <p className="text-3xl font-bold text-secondary mb-2">
                    1000+
                  </p>
                  <p className="text-sm text-white/80">
                    Workers Available
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                  <p className="text-3xl font-bold text-accent mb-2">
                    50+
                  </p>
                  <p className="text-sm text-white/80">
                    Partner Companies
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                  <p className="text-3xl font-bold text-secondary mb-2">
                    24/7
                  </p>
                  <p className="text-sm text-white/80">
                    Quick Deployment
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                  <p className="text-3xl font-bold text-accent mb-2">
                    100%
                  </p>
                  <p className="text-sm text-white/80">
                    Verified Staff
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}