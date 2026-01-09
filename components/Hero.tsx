"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-cream">
      {/* BACKGROUND ELEMENTS */}
      {/* Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-black/5" />

      {/* Glow Orbs */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
      />

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-6 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative text-center md:text-left"
        >
          {/* MOMO CHARACTER – LEFT ONLY */}
          <motion.div
            className="absolute left-[-24px] md:left-[-80px] top-[10%]
               pointer-events-none opacity-15 md:opacity-20 -z-10"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/momo/momo.png"
              alt="Momo Decoration"
              width={320}
              height={320}
              className="object-contain w-36 md:w-[320px]"
              priority
            />
          </motion.div>

          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="
    text-[3.3rem]  md:text-6xl
    font-extrabold mb-6 leading-tight
    text-[#0F172A]
   
  "
          >
            Build a{" "}
            <span className="relative inline-block">
              <span
                className="bg-gradient-to-r from-[#ECFEFF] via-white to-[#E6FFFA]
                 bg-clip-text text-transparent"
              >
                High-Growth
              </span>
              <span
                className="absolute -bottom-1 left-0 w-full
                 h-[3px] bg-white/50 rounded-full"
              />
            </span>
            <br />
            Food Franchise{" "}
            
            <span
                className="bg-gradient-to-r from-[#ECFEFF] via-white to-[#E6FFFA]
                 bg-clip-text text-transparent"
              >
              Business
            </span>
            
          </motion.h1>

          <p
            className="text-[12px]  md:text-xl text-gray-700
                max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed"
          >
            Join a fast-expanding Indian brand with
            <strong> 10+ profitable franchises</strong>, a structured model, and
            strong regional demand.
          </p>

          <div className="flex gap-4 justify-center md:justify-start flex-wrap">
            <button
              className="px-8 py-4 bg-primary text-white rounded-full
      font-semibold hover:scale-105 transition"
            >
              Apply for Franchise
            </button>
            <button
              className="px-8 py-4 border border-primary text-primary
      rounded-full hover:bg-primary hover:text-white transition"
            >
              View Business Model
            </button>
          </div>
        </motion.div>

        {/* RIGHT – STATS BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-10"
        >
          <div className="grid grid-cols-2 gap-10 text-center">
            {[
              { value: "10+", label: "Active Franchises" },
              { value: "15+", label: "Locations in Kerala" },
              { value: "Low", label: "Investment Model" },
              { value: "High", label: "Growth Potential" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-4xl font-bold text-primary">{item.value}</p>
                <p className="text-sm text-gray-600 mt-2">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
