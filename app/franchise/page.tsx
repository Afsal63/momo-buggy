"use client";

import { motion } from "framer-motion";

export default function FranchisePage() {
  return (
    <section className="min-h-screen bg-cream pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Growing Presence in India 🇮🇳
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            With 20+ active franchises — strongly rooted in Kerala and expanding next to Bangalore.
          </p>
        </div>

        {/* MAP FEEL ZONE */}
        <div className="relative rounded-3xl overflow-hidden p-10 bg-gradient-to-br from-white to-primary/5 shadow-lg">

          {/* SUBTLE DOT GRID BACKGROUND */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3AA1A6_1px,transparent_1px)] [background-size:22px_22px]" />

          {/* CONTENT */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

            {/* KERALA CLUSTER */}
            <div className="flex flex-col items-center">
              <h3 className="font-semibold mb-4 text-lg">Kerala</h3>

              <div className="grid grid-cols-5 gap-3">
                {Array.from({ length: 15 }).map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="w-3 h-3 rounded-full bg-green-500 animate-pulse"
                  />
                ))}
              </div>

              <p className="mt-4 text-sm text-gray-600">
                15+ Active Outlets
              </p>
            </div>

            {/* INDIA LABEL */}
            <div className="text-center">
              <p className="tracking-widest text-gray-400 text-sm">
                INDIA
              </p>
            </div>

            {/* BANGALORE UPCOMING */}
            <div className="flex flex-col items-center">
              <h3 className="font-semibold mb-4 text-lg">Bangalore</h3>

              <motion.span
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
                className="w-5 h-5 rounded-full bg-yellow-400"
              />

              <p className="mt-4 text-sm text-gray-600">
                Launching Soon
              </p>
            </div>
          </div>

          {/* LEGEND */}
          <div className="relative mt-10 flex justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500" />
              Active Franchise
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              Upcoming
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-primary rounded-3xl p-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bring MomoBuggy to Your City
          </h2>
          <p className="mb-8 max-w-xl mx-auto">
            Strong demand. Proven model. Growing brand.
            Apply now to become a franchise partner.
          </p>

           <button
    onClick={() =>
      window.open(
        "https://momo-buggy-form.vercel.app/",
        "_blank",
        "noopener,noreferrer"
      )
    } className="px-10 text-black py-4 bg-white text-primary rounded-full font-semibold hover:scale-105 transition">
            Apply for Franchise
          </button>
        </div>

      </div>
    </section>
  );
}