"use client";

import { useState } from "react";
import Image from "next/image";

const servicesData = [
  {
    service_name: "Packaging Materials",
    icon: "📦",
    products: [
      { name: "Hardwood Packaging Pallet", category: "Wooden Pallets", price: "550/piece", size: "1000X800X150 mm", image: "/HardwoodPackagingPallet.jpg" },
      { name: "Four Way Pine Wood Pallets", category: "Wooden Pallets", price: "1200/piece", size: "1200mm X 1000mm", image: "/FourWayPineWoodPallets.jpg" },
      { name: "Euro Wooden Pallet", category: "Wooden Pallets", price: "500/piece", size: "800 mm X 1200 mm", image: "/EuroWoodenPallet.jpg" },
      { name: "Industrial Plywood Pallets", category: "Wooden Pallets", price: "1350/piece", size: "1000 X800 X150", image: "/IndustrialPlywoodPallets.jpg" },
      // { name: "PET Strapping Roll", category: "Strapping Rolls", price: "100/kg", size: "100m X 12 mm", image: "/PETStrappingRoll.jpg" },
      { name: "PP Box Strapping Roll", category: "Strapping Rolls", price: "82/kg", size: "12mm width", image: "/PPBoxStrappingRoll.avif" },
      { name: "LLDPE Stretch Film Roll", category: "Stretch Film", price: "115/kg", size: "100m X 4 inch", image: "/LLDPEStretchFilmRoll.jpg" },
      { name: "EPE Foam Roll", category: "EPE Foam", price: "2000/roll", size: "200m X 4mm", image: "/EPEfoamRoll.jpg" },
    ],
  },
  {
    service_name: "Industrial Minerals",
    icon: "⛰️",
    products: [
      { name: "Dolomite", category: "Minerals", image: "/minerals.jpg" },
      { name: "Calcite", category: "Minerals", image: "/minerals.jpg" },
      { name: "Quartz", category: "Minerals", image: "/minerals.jpg" },
      { name: "Feldspar", category: "Minerals", image: "/minerals.jpg" },
      { name: "Silica Sand", category: "Minerals", image: "/minerals.jpg" },
    ],
  },
];

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const products = servicesData[activeTab].products;

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // WhatsApp Quote
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

      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute w-96 h-96 bg-indigo-500/30 blur-3xl top-0 left-0"></div>
        <div className="absolute w-96 h-96 bg-purple-500/30 blur-3xl bottom-0 right-0"></div>

        <div className="relative max-w-6xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Premium Industrial Products
          </h1>
          <p className="text-lg text-indigo-200 max-w-2xl mx-auto mb-10">
            Quality Packaging Materials & Industrial Minerals for your business
          </p>

       
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-wrap justify-center gap-4">
        {servicesData.map((service, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveTab(index);
              setSearchTerm("");
            }}
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

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product, i) => (
          <div
            key={i}
            className="group relative rounded-3xl overflow-hidden border border-white/20 bg-white/60 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition"></div>

              {/* Category */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold">
                {product.category}
              </div>

              {/* Price */}
              {product.price && (
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow">
                  ₹{product.price}
                </div>
              )}

              {/* Hover WhatsApp */}
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

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                {product.name}
              </h3>

              {product.size && (
                <p className="text-sm text-gray-500">
                  Size:{" "}
                  <span className="font-medium text-gray-700">
                    {product.size}
                  </span>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center pb-20">
          <h3 className="text-2xl font-bold text-gray-700">
            No products found
          </h3>
        </div>
      )}

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919166416666"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-2xl flex items-center gap-3 z-50"
      >
        <span className="text-xl">💬</span>
        <span className="hidden sm:block font-semibold">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
