"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";

const reels = [
  {
    image: "/reels/1.jpg",
    link: "https://www.instagram.com/momobuggy.in/",
  },
  {
    image: "/reels/2.jpg",
    link: "https://www.instagram.com/momobuggy.in/",
  },
  {
    image: "/reels/3.jpg",
    link: "https://www.instagram.com/momobuggy.in/",
  },
];

export default function ReelsPreview() {
  return (
    <section className="bg-[#5fa6ab] py-20">
      <h2 className="text-4xl font-extrabold text-center mb-14 text-black">
        Viral Reels
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {reels.map((reel, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => window.open(reel.link, "_blank")}
            className="relative aspect-[9/16] rounded-3xl overflow-hidden cursor-pointer group shadow-xl"
          >
            {/* Reel Image */}
            <Image
              src={reel.image}
              alt={`Reel ${i + 1}`}
              fill
              className="object-cover"
              priority={i === 0}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Play Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="backdrop-blur-md bg-white/20 p-6 rounded-full border border-white/30 transition group-hover:scale-110">
                <Play className="w-10 h-10 text-white fill-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}