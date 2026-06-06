export default function SBEnterpriseLogo({ className = '' }) {
  return (
    <div
      className={`relative flex aspect-square items-center justify-center overflow-hidden rounded-full border-2 border-slate-950 bg-white shadow-sm ${className}`}
      aria-label="S B Enterprises logo"
    >
      <div className="absolute left-[8%] top-[22%] h-[18%] w-[82%] -rotate-12 rounded-full border-t-[7px] border-[#137341]"></div>
      <div className="absolute bottom-[18%] right-[10%] h-[18%] w-[72%] -rotate-12 rounded-full border-b-[7px] border-[#f28a22]"></div>
      <div className="absolute inset-x-[18%] top-[34%] flex items-center justify-center">
        <span className="font-serif text-[clamp(2rem,6vw,4.5rem)] font-bold italic leading-none tracking-tight">
          <span className="text-[#f28a22]">S</span>
          <span className="-ml-3 text-[#137341]">B</span>
        </span>
      </div>
      <div className="absolute bottom-[13%] left-1/2 -translate-x-1/2 text-center text-[clamp(0.55rem,1.5vw,0.95rem)] font-black uppercase tracking-[0.24em] text-[#137341]">
        Enterprise
      </div>
    </div>
  )
}
