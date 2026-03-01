"use client";

import PageHeader from "@/components/PageHeader";

export default function Contact() {
  const contactInfo = [
    {
      icon: "📧",
      title: "Email Us",
      details: "vikram.kd555@gmail.com",
      subtext: "We reply within 24 hours",
    },
    {
      icon: "📞",
      title: "Call Us",
      details: "9166416666 / 9376887777",
      subtext: "Mon - Sat | 9 AM - 7 PM",
    },
    {
      icon: "📍",
      title: "Location",
      details: "Kotputli, Rajasthan",
      subtext: "Click below to explore our location on the map",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="We’re here to help and answer any questions you may have"
      />

      {/* Contact Cards */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-border text-center hover:border-accent transition-all duration-300 hover:shadow-lg animate-fade-in-up"
              >
                <div className="text-5xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {info.title}
                </h3>
                <p className="text-lg font-semibold text-accent mb-2">
                  {info.details}
                </p>
                <p className="text-sm text-muted-foreground">{info.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in-up">
            <div className="p-8 text-center">
              <h2 className="text-3xl font-bold text-primary mb-3">
                Visit Our Location
              </h2>
              <p className="text-muted-foreground mb-6">
                Find us easily on Google Maps. Click below for navigation.
              </p>
            </div>

            {/* Google Map Embed */}
            <div className="h-[400px] w-full">
              <iframe
                src="https://maps.google.com/maps?q=27.811046600341797,76.23750305175781&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-muted-foreground mb-6">
            Call us directly or send an email. Our team will be happy to assist
            you.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:9166416666"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              Call Now
            </a>

            <a
              href="mailto:vikram.kd555@gmail.com"
              className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
