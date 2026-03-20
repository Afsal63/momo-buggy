"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-cream">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-black/5" />

      {/* Glow Orbs (reduced animation + blur) */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/15 rounded-full blur-xl" />

      {/* Grid (kept but optimized opacity) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-6 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative text-center md:text-left"
        >
          {/* Momo Image (no animation = better performance) */}
          <div className="absolute left-[-24px] md:left-[-80px] top-[10%] pointer-events-none opacity-15 md:opacity-20 -z-10">
            <Image
              src="/momo/momo.png"
              alt="Momo Decoration"
              width={320}
              height={320}
              sizes="(max-width: 768px) 150px, 320px"
              className="object-contain w-36 md:w-[320px]"
              priority
            />
          </div>

          {/* HEADLINE */}
          <h1 className="text-[3.3rem] md:text-6xl font-extrabold mb-6 leading-tight text-[#0F172A]">
            Build a{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#ECFEFF] via-white to-[#E6FFFA] bg-clip-text text-transparent">
                High-Growth
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-white/50 rounded-full" />
            </span>
            <br />
            Food Franchise{" "}
            <span className="bg-gradient-to-r from-[#ECFEFF] via-white to-[#E6FFFA] bg-clip-text text-transparent">
              Business
            </span>
          </h1>

          {/* TEXT */}
          <p className="text-[12px] md:text-xl text-gray-700 max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed">
            Join a fast-expanding Indian brand with
            <strong> 10+ profitable franchises</strong>, a structured model, and
            strong regional demand.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 justify-center md:justify-start flex-wrap">
            <a
              href="https://momo-buggy-form.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-4 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition">
                Apply for Franchise
              </button>
            </a>

            {/* <button className="px-8 py-4 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition">
              View Business Model
            </button> */}
          </div>
        </motion.div>

        {/* RIGHT STATS */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-10"
        >
          <div className="grid grid-cols-2 gap-10 text-center">
            {[
              { value: "10+", label: "Active Franchises" },
              { value: "15+", label: "Locations in Kerala" },
              { value: "Low", label: "Investment Model" },
              { value: "High", label: "Growth Potential" },
            ].map((item, i) => (
              <div
                key={i}
                className="transition transform hover:-translate-y-1"
              >
                <p className="text-4xl font-bold text-primary">{item.value}</p>
                <p className="text-sm text-gray-600 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
