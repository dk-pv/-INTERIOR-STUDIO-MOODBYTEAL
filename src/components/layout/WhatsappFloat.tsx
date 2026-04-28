"use client";

export default function WhatsappFloat() {
  const phoneNumber = "971502685369";
  const message = "Hi, I want to discuss a project";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6 right-6
        sm:bottom-8 sm:right-8
        md:bottom-10 md:right-10
        z-[999]
        group
      "
    >
      {/* ✨ Glow */}
      <div
        className="
          absolute inset-0
          blur-2xl
          opacity-70
          bg-[radial-gradient(circle,rgba(45,106,106,0.35)_0%,transparent_70%)]
          animate-[waGlow_3s_ease-in-out_infinite]
        "
      />

      {/* ✨ ICON ONLY (BIG) */}
      <img
        src="/icons/whatsapp.png"
        alt="Chat on WhatsApp"
        className="
          relative

          w-20 h-20
          sm:w-24 sm:h-24
          md:w-28 md:h-28
          lg:w-32 lg:h-32

          object-contain

          drop-shadow-[0_12px_40px_rgba(0,0,0,0.35)]

          animate-[waZoom_2.4s_ease-in-out_infinite]

          group-hover:scale-110
          group-hover:rotate-[4deg]

          transition-all duration-300 ease-out
        "
      />

      {/* Tooltip */}
      <span
        className="
          absolute right-full mr-3 top-1/2 -translate-y-1/2
          px-3 py-1.5
          rounded-md
          bg-[#0a0a0a]
          text-[#f5f4f0]
          text-[10px] sm:text-xs
          tracking-[0.2em]
          uppercase
          whitespace-nowrap
          opacity-0 translate-x-2
          group-hover:opacity-100 group-hover:translate-x-0
          transition-all duration-200 ease-out
          pointer-events-none
        "
      >
        Chat Now →
      </span>
    </a>
  );
}