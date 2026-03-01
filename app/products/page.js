"use client";

import { useState } from "react";
import Image from "next/image";
import { Building2 } from "lucide-react";

const servicesData = [
  {
    service_name: "Packaging Materials",
    icon: "📦",
    type: "product",
    products: [
      {
        name: "Hardwood Packaging Pallet",
        price: "550/piece",
        size: "1000X800X150 mm",
        image: "/HardwoodPackagingPallet.jpg",
      },
      {
        name: "Four Way Pine Wood Pallets",
        price: "1200/piece",
        size: "1200mm X 1000mm",
        image: "/FourWayPineWoodPallets.jpg",
      },
      {
        name: "Euro Wooden Pallet",
        price: "500/piece",
        size: "800 mm X 1200 mm",
        image: "/EuroWoodenPallet.jpg",
      },
      {
        name: "Industrial Plywood Pallets",
        price: "1350/piece",
        size: "1000 X800 X150",
        image: "/IndustrialPlywoodPallets.jpg",
      },
      {
        name: "PP Box Strapping Roll",
        price: "82/kg",
        size: "12mm width",
        image: "/PPBoxStrappingRoll.avif",
      },
      {
        name: "LLDPE Stretch Film Roll",
        price: "115/kg",
        size: "100m X 4 inch",
        image: "/LLDPEStretchFilmRoll.jpg",
      },
      {
        name: "EPE Foam Roll",
        price: "2000/roll",
        size: "200m X 4mm",
        image: "/EPEfoamRoll.jpg",
      },
    ],
  },
  {
    service_name: "Industrial Minerals",
    icon: "⛰️",
    type: "product",
    products: [
      { name: "Dolomite Powder", image: "/Dolomitepowder.jpeg" },
      { name: "Quartz", image: "/Quartz.jpeg" },
      { name: "Silica Sand", image: "/Silica.jpeg" },
    ],
  },
  {
    service_name: "Manpower Services",
    icon: "👷",
    type: "manpower",
    provider: "S.B. Enterprises",
    companies: [
      "Macawber Beekay Pvt Ltd",
      "Alstone Industries Pvt Ltd",
      "Om Logistics Supply Chain System",
      "Delhi Public World School",
      "Emerg Glass India Pvt Ltd",
    ],
  },
];

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const currentService = servicesData[activeTab];

  const sendWhatsAppMessage = (productName, price) => {
    const phone = "919166416666";
    const message = `Hello, I want quotation for:
Product: ${productName}
${price ? `Price: ₹${price}` : ""}
Please share details and best price.`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100 overflow-hidden">

      {/* Decorative Background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>

      {/* Hero Section */}
      <div className="relative py-28 bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-800 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Premium Industrial Solutions
          </h1>

          <p className="text-lg text-indigo-200 tracking-wide">
            High-Quality Packaging • Industrial Minerals • Reliable Manpower Services
          </p>

          <div className="mt-8">
            <button className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
              Explore Services
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-14 flex flex-wrap justify-center gap-5">
        {servicesData.map((service, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-md border ${
              activeTab === index
                ? "bg-indigo-600 text-white shadow-xl scale-105 border-indigo-600"
                : "bg-white/70 text-gray-700 hover:shadow-lg hover:scale-105 border-gray-200"
            }`}
          >
            <span className="mr-2">{service.icon}</span>
            {service.service_name}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 pb-20">

        {/* Product Grid */}
        {currentService.type === "product" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentService.products.map((product, i) => (
              <div
                key={i}
                className="group rounded-3xl overflow-hidden bg-white/80 backdrop-blur-md border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                <div className="relative h-64 bg-gradient-to-br from-gray-50 to-indigo-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6"
                  />

                  {product.price && (
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow">
                      ₹{product.price}
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                    <button
                      onClick={() =>
                        sendWhatsAppMessage(product.name, product.price)
                      }
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-xl transition transform hover:scale-110"
                    >
                      Get Quotation
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800">
                    {product.name}
                  </h3>

                  {product.size && (
                    <p className="text-sm text-gray-500 mt-2">
                      Size: {product.size}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Manpower Section */}
        {currentService.type === "manpower" && (
          <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-100 md:p-12 p-6">

            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-indigo-700">
                {currentService.provider}
              </h2>
              <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
              <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
                We provide skilled and unskilled manpower solutions to reputed
                organizations across multiple industries with reliability and professionalism.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {currentService.companies.map((company, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-5 p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center group-hover:scale-110 transition">
                    <Building2 size={24} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800">{company}</h4>
                    <p className="text-xs text-gray-500">Manpower Provided</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => sendWhatsAppMessage("Manpower Requirement", "")}
                className="mt-12 bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-full font-semibold shadow-xl transition hover:scale-105"
              >
                Request Manpower Service
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919166416666"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 z-50 animate-pulse hover:animate-none hover:scale-110 transition"
      >
        💬 <span className="hidden sm:block font-semibold">Chat on WhatsApp</span>
      </a>

    </div>
  );
}