"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fade",
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailto = `mailto:your@email.com?subject=Project Inquiry&body=
Name: ${form.name}
Email: ${form.email}
Message: ${form.message}`;

    window.location.href = mailto;
  };

  return (
    <main ref={containerRef} className="bg-[#f9f8f6] text-black">
      
      {/* ─── HERO ─── */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 md:px-16 text-center">
        <div className="max-w-3xl space-y-6">
          
          <h1 className="fade text-5xl md:text-6xl font-semibold leading-tight">
            Define Your Space
          </h1>

          <p className="fade text-gray-600 text-lg md:text-xl">
            Share your vision with us. We’ll translate it into a refined,
            functional, and emotionally resonant space.
          </p>

        </div>
      </section>

      {/* ─── MAIN SPLIT SECTION ─── */}
      <section className="grid md:grid-cols-2 min-h-[80vh]">
        
        {/* LEFT: VISUAL */}
        <div className="relative hidden md:block">
          <Image
            src="/images/contact.jpg"
            alt="Interior"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute bottom-10 left-10 text-white max-w-md space-y-4">
            <h2 className="fade text-2xl md:text-3xl font-medium leading-snug">
              Every project begins with a conversation.
            </h2>
            <p className="fade text-sm text-gray-200">
              Let’s explore how your space can reflect clarity, balance,
              and intention.
            </p>
          </div>
        </div>

        {/* RIGHT: FORM */}
        <div className="flex items-center justify-center px-6 md:px-16 py-16 bg-white">
          
          <div className="w-full max-w-md space-y-10">
            
            <h2 className="fade text-3xl font-semibold">
              Start a Project
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* NAME */}
              <div className="flex flex-col gap-2 fade">
                <label className="text-sm text-gray-500">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="border-b border-gray-300 focus:border-black outline-none py-3 text-lg transition"
                  placeholder="Your name"
                />
              </div>

              {/* EMAIL */}
              <div className="flex flex-col gap-2 fade">
                <label className="text-sm text-gray-500">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="border-b border-gray-300 focus:border-black outline-none py-3 text-lg transition"
                  placeholder="you@example.com"
                />
              </div>

              {/* MESSAGE */}
              <div className="flex flex-col gap-2 fade">
                <label className="text-sm text-gray-500">
                  Project Details
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="border-b border-gray-300 focus:border-black outline-none py-3 text-lg resize-none transition"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="fade mt-6 px-8 py-4 bg-black text-white text-sm tracking-widest uppercase hover:bg-gray-800 transition w-full"
              >
                Send Inquiry
              </button>

            </form>

          </div>
        </div>

      </section>

      {/* ─── FOOTER STATEMENT ─── */}
      <section className="py-24 px-6 md:px-16 text-center bg-[#f9f8f6]">
        <h2 className="fade text-2xl md:text-4xl font-medium leading-relaxed max-w-3xl mx-auto">
          Thoughtful design starts with understanding.
        </h2>
      </section>

    </main>
  );
}