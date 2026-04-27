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
        bottom-6 right-5
        sm:bottom-8 sm:right-6
        md:bottom-10 md:right-10
        lg:bottom-12 lg:right-12
        z-[999]
        group
      "
    >
      {/* Icon only — no background shell */}
      <img
        src="/icons/whatsapp.png"
        alt="Chat on WhatsApp"
        className="
          w-20 h-20
          sm:w-24 sm:h-24
          md:w-28 md:h-28
          lg:w-32 lg:h-32
          object-contain
          drop-shadow-[0_8px_24px_rgba(0,0,0,0.30)]
          transition-all duration-300 ease-out
          group-hover:scale-110
          group-hover:drop-shadow-[0_12px_32px_rgba(0,0,0,0.40)]
          group-active:scale-95
        "
      />

      {/* Tooltip label */}
      <span
        className="
          absolute right-full mr-3 top-1/2 -translate-y-1/2
          px-3 py-1.5
          rounded-lg
          bg-white
          text-[#111]
          text-xs sm:text-sm
          font-medium
          whitespace-nowrap
          shadow-md
          opacity-0 translate-x-2
          group-hover:opacity-100 group-hover:translate-x-0
          transition-all duration-200 ease-out
          pointer-events-none
          select-none
        "
      >
        Chat with us
        <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-white" />
      </span>
    </a>
  );
}