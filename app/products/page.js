"use client";

import { Suspense, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Gem,
  Handshake,
  PackageCheck,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import SBEnterpriseLogo from "@/components/SBEnterpriseLogo";

const servicesData = [
  {
    service_name: "Packaging Materials",
    tab: "packaging",
    icon: PackageCheck,
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
        image: "/EPEFoamRoll.jpg",
      },
    ],
  },
  {
    service_name: "Industrial Minerals",
    tab: "minerals",
    icon: Gem,
    type: "product",
    products: [
      { name: "Dolomite Powder", image: "/Dolomitepowder.jpeg" },
      { name: "Quartz", image: "/Quartz.jpeg" },
      { name: "Silica Sand", image: "/Silica.jpeg" },
    ],
  },
  {
    service_name: "Manpower Services",
    tab: "manpower",
    icon: UsersRound,
    type: "manpower",
    provider: "S B Enterprise",
    companies: [
      "Macawber Beekay Pvt Ltd",
      "Alstone Industries Pvt Ltd",
      "Om Logistics Supply Chain System",
      "Delhi Public World School",
      "Emerg Glass India Pvt Ltd",
    ],
  },
];

const manpowerStrengths = [
  "Skilled and unskilled manpower",
  "Factory and plant operations staff",
  "Logistics and packaging workforce",
  "Reliable deployment and support",
];

function getInitialTab(searchParams) {
  const service = searchParams.get("service") || searchParams.get("category");

  if (service === "manpower") return 2;
  if (["minerals", "sand", "dolomite", "quartz"].includes(service)) return 1;

  return 0;
}

function ProductsContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState(() => getInitialTab(searchParams));
  const currentService = servicesData[activeTab];

  const sendWhatsAppMessage = (productName, price) => {
    const phone = "919166416666";
    const message = `Hello, I want quotation for:
Product: ${productName}
${price ? `Price: Rs. ${price}` : ""}
Please share details and best price.`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-background to-white">
      <div className="absolute inset-x-0 top-0 h-[520px] bg-[url('/hero.png')] bg-cover bg-center opacity-[0.045]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10">
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-4 rounded-2xl border border-primary/10 bg-white p-3 shadow-xl shadow-primary/10">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeTab === index;

            return (
              <button
                key={service.tab}
                onClick={() => setActiveTab(index)}
                className={`inline-flex items-center gap-3 rounded-xl px-6 py-4 text-sm font-bold transition-all ${
                  isActive
                    ? service.type === "manpower"
                      ? "bg-[#137341] text-white shadow-lg shadow-[#137341]/20"
                      : "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive && service.type === "manpower" ? "text-[#f28a22]" : ""}`} />
                {service.service_name}
              </button>
            );
          })}
        </div>
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-24">
        {currentService.type === "product" && (
          <div>
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-secondary">
                  Samar Exports
                </p>
                <h2 className="mt-2 text-4xl font-bold text-primary">
                  {currentService.service_name}
                </h2>
              </div>
              <p className="max-w-xl text-sm font-medium leading-relaxed text-slate-600">
                Select any item and request a quotation directly on WhatsApp.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {currentService.products.map((product) => (
                <div
                  key={product.name}
                  className="group overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-lg shadow-primary/8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/15"
                >
                  <div className="relative h-64 bg-gradient-to-br from-slate-50 to-white">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-7 transition-transform duration-500 group-hover:scale-105"
                    />

                    {product.price && (
                      <div className="absolute right-4 top-4 rounded-full bg-[#137341] px-4 py-2 text-sm font-bold text-white shadow">
                        Rs. {product.price}
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary">
                      {product.name}
                    </h3>
                    {product.size && (
                      <p className="mt-2 text-sm font-medium text-slate-500">
                        Size: {product.size}
                      </p>
                    )}
                    <button
                      onClick={() => sendWhatsAppMessage(product.name, product.price)}
                      className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-primary px-5 py-3 font-bold text-white transition-all hover:bg-secondary hover:text-primary"
                    >
                      Get Quotation
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentService.type === "manpower" && (
          <div className="overflow-hidden rounded-3xl border border-[#137341]/15 bg-white shadow-2xl shadow-[#137341]/10">
            <div className="relative overflow-hidden bg-[#0d3f2b] p-8 text-white sm:p-12">
              <div className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-center opacity-10"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#0d3f2b] via-[#137341] to-[#f28a22]/45"></div>
              <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-white/10"></div>

              <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div className="flex flex-col items-start">
                  <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f6c48f]">
                    Manpower Solutions
                  </p>
                  <h2 className="mt-3 text-5xl font-extrabold leading-tight">
                    {currentService.provider}
                  </h2>
                  <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-white/85">
                    We provide skilled and unskilled manpower solutions to reputed organizations across multiple industries with reliability, discipline, and professionalism.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {manpowerStrengths.map((strength) => (
                    <div key={strength} className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur">
                      <CheckCircle2 className="mb-4 h-7 w-7 text-[#f28a22]" />
                      <p className="font-bold leading-relaxed">{strength}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <Handshake className="h-7 w-7 text-[#137341]" />
                  <h3 className="text-2xl font-bold text-primary">
                    Companies Served
                  </h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {currentService.companies.map((company) => (
                    <div
                      key={company}
                      className="flex items-center gap-4 rounded-2xl border border-[#137341]/10 bg-[#137341]/5 p-5 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                    >
                      <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-white text-[#137341] shadow-sm">
                        <Building2 size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">{company}</h4>
                        <p className="text-xs font-semibold uppercase tracking-wide text-[#137341]">
                          Manpower Provided
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-7">
                <ShieldCheck className="mb-5 h-10 w-10 text-[#137341]" />
                <h3 className="text-2xl font-bold text-primary">
                  Need Reliable Staff?
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-slate-600">
                  Share your manpower requirement and our team will connect with you for staff type, quantity, schedule, and deployment details.
                </p>
                <button
                  onClick={() => sendWhatsAppMessage("Manpower Requirement", "")}
                  className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#137341] px-7 py-4 font-bold text-white shadow-lg shadow-[#137341]/20 transition-all hover:bg-[#f28a22]"
                >
                  Request Manpower Service
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <a
        href="https://wa.me/919166416666"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#137341] px-6 py-4 text-white shadow-2xl transition hover:scale-105 hover:bg-[#f28a22]"
      >
        <span className="text-lg">Chat</span>
        <span className="hidden font-semibold sm:block">on WhatsApp</span>
      </a>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ProductsContent />
    </Suspense>
  );
}
