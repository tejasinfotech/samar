"use client";

import { useState } from "react";
import Image from "next/image";
import { Building2 } from "lucide-react";

const servicesData = [
  // ================= Packaging =================
  {
    service_name: "Packaging Materials",
    icon: "📦",
    type: "product",
    products: [
      {
        name: "Hardwood Packaging Pallet",
        category: "Wooden Pallets",
        price: "550/piece",
        size: "1000X800X150 mm",
        image: "/HardwoodPackagingPallet.jpg",
      },
      {
        name: "Four Way Pine Wood Pallets",
        category: "Wooden Pallets",
        price: "1200/piece",
        size: "1200mm X 1000mm",
        image: "/FourWayPineWoodPallets.jpg",
      },
      {
        name: "Euro Wooden Pallet",
        category: "Wooden Pallets",
        price: "500/piece",
        size: "800 mm X 1200 mm",
        image: "/EuroWoodenPallet.jpg",
      },
      {
        name: "Industrial Plywood Pallets",
        category: "Wooden Pallets",
        price: "1350/piece",
        size: "1000 X800 X150",
        image: "/IndustrialPlywoodPallets.jpg",
      },
      {
        name: "PP Box Strapping Roll",
        category: "Strapping Rolls",
        price: "82/kg",
        size: "12mm width",
        image: "/PPBoxStrappingRoll.avif",
      },
      {
        name: "LLDPE Stretch Film Roll",
        category: "Stretch Film",
        price: "115/kg",
        size: "100m X 4 inch",
        image: "/LLDPEStretchFilmRoll.jpg",
      },
      {
        name: "EPE Foam Roll",
        category: "EPE Foam",
        price: "2000/roll",
        size: "200m X 4mm",
        image: "/EPEfoamRoll.jpg",
      },
    ],
  },

  // ================= Minerals =================
  {
    service_name: "Industrial Minerals",
    icon: "⛰️",
    type: "product",
    products: [
      { name: "Dolomite Powder", category: "Minerals", image: "/Dolomitepowder.jpeg" },
      { name: "Quartz", category: "Minerals", image: "/Quartz.jpeg" },
      { name: "Silica Sand", category: "Minerals", image: "/Silica.jpeg" },
    ],
  },

  // ================= Manpower =================
  {
    service_name: "S.B. Enterprises",
    icon: "👷",
    type: "manpower",
    products: [
      { name: "Macawber Beekay Pvt Ltd" },
      { name: "Alstone Industries Pvt Ltd" },
      { name: "Om Logistics Supply Chain System" },
      { name: "Delhi Public World School" },
      { name: "Emerg Glass India Pvt Ltd" },
    ],
  },
];

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState(0);

  const currentService = servicesData[activeTab];
  const products = currentService.products;

  const sendWhatsAppMessage = (productName, price) => {
    const phone = "919166416666";
    const message = `Hello,

I want quotation for:

Product: ${productName}
${price ? `Price: ₹${price}` : ""}

Please share details and best price.`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      
      {/* Hero */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white text-center">
        <h1 className="text-5xl font-extrabold mb-4">
          Premium Industrial Services
        </h1>
        <p className="text-indigo-200">
          Packaging | Minerals | Manpower Services
        </p>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-wrap justify-center gap-4">
        {servicesData.map((service, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 rounded-full font-semibold transition ${
              activeTab === index
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-white text-gray-700 border hover:shadow"
            }`}
          >
            {service.icon} {service.service_name}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, i) => (
          <div
            key={i}
            className="group rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            {/* ========== PRODUCT CARDS ========== */}
            {currentService.type === "product" && (
              <>
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />

                  {product.price && (
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      ₹{product.price}
                    </div>
                  )}

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <button
                      onClick={() =>
                        sendWhatsAppMessage(product.name, product.price)
                      }
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-xl"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800">
                    {product.name}
                  </h3>

                  {product.size && (
                    <p className="text-sm text-gray-500 mt-1">
                      Size: {product.size}
                    </p>
                  )}
                </div>
              </>
            )}

            {/* ========== MANPOWER CARDS ========== */}
            {currentService.type === "manpower" && (
              <div className="p-8 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                  <Building2 size={40} className="text-indigo-600" />
                </div>

                <h3 className="text-lg font-bold text-gray-800">
                  {product.name}
                </h3>

                <p className="text-sm text-indigo-600 mt-2 font-medium">
                  Manpower services provided by S.B. Enterprises
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919166416666"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-2xl flex items-center gap-3 z-50"
      >
        💬 <span className="hidden sm:block">Chat on WhatsApp</span>
      </a>
    </div>
  );
}