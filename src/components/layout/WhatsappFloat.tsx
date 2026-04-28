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
        bottom-4 right-4
        sm:bottom-5 sm:right-5
        md:bottom-6 md:right-6
        lg:bottom-8 lg:right-8
        z-[999]
        group
      "
    >
      <div
        className="
    absolute inset-0 rounded-full
    blur-lg opacity-0
    transition-all duration-300 ease-out
    group-hover:opacity-100
    bg-[radial-gradient(circle,rgba(37,211,102,0.28)_0%,transparent_70%)]
  "
      />
      <img
        src="/icons/whatsapp.png"
        alt="Chat on WhatsApp"
        className="
    w-14 h-14
    sm:w-16 sm:h-16
    md:w-18 md:h-18
    lg:w-20 lg:h-20
    object-contain

    drop-shadow-[0_5px_18px_rgba(0,0,0,0.25)]

    animate-[whatsappPulse_3s_ease-in-out_infinite]

    hover:animate-none
    hover:scale-105

    transition-all duration-300 ease-out
  "
      />

      {/* Tooltip label */}
      <span
        className="
          absolute right-full mr-2 top-1/2 -translate-y-1/2
          px-2.5 py-1
           rounded-lg
          bg-white
          text-[#111]
          text-[10px] sm:text-xs
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
