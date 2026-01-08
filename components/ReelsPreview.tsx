"use client";
import { motion } from "framer-motion";

export default function ReelsPreview() {
  return (
    <section className="bg-cream py-20">
      <h2 className="text-4xl font-bold text-center mb-12">Viral Reels</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="h-80 bg-black rounded-2xl flex items-center justify-center text-white"
          >
            Reel Thumbnail
          </motion.div>
        ))}
      </div>
    </section>
  );
}