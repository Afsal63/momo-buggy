"use client";

import { motion } from "framer-motion";

const reels = [
  { id: 1, title: "Crowd Pulling Momo Stall" },
  { id: 2, title: "Night Sales Rush" },
  { id: 3, title: "Customer Reactions" },
  { id: 4, title: "Street Food Vibes" },
  { id: 5, title: "Kerala Outlet Energy" },
  { id: 6, title: "Viral Selling Moment" },
];

export default function ReelsPage() {
  return (
    <section className="min-h-screen bg-[#3AA1A6] text-white pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Reels. Our Reach.
          </h1>
          <p className="text-gray-800 max-w-xl mx-auto">
            A glimpse into how MomoBuggy attracts attention,
            footfall, and customers every single day.
          </p>
        </motion.div>

        {/* REELS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

          {reels.map((reel, i) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-to-b from-neutral-800 to-neutral-900 cursor-pointer"
            >
              {/* FAKE REEL PREVIEW */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-600 text-sm">
                  Reel Preview
                </span>
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition" />

              {/* PLAY ICON */}
              <div className="absolute inset-0 flex items-center justify-center opacity-80">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                  ▶
                </div>
              </div>

              {/* BOTTOM CAPTION */}
              <div className="absolute bottom-3 left-3 right-3 text-sm font-medium">
                {reel.title}
              </div>
            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 mb-6">
            Want this level of visibility for your outlet?
          </p>
          <button className="px-10 py-4 bg-primary text-white rounded-full font-semibold hover:scale-105 transition">
            Apply for Franchise
          </button>
        </motion.div>

      </div>
    </section>
  );
}