"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";

const reels = [
  { id: 1, title: "Crowd Pulling Momo Stall", image: "/reels/1.jpg" },
  { id: 2, title: "Night Sales Rush", image: "/reels/2.jpg" },
  { id: 3, title: "Customer Reactions", image: "/reels/3.jpg" },
  { id: 4, title: "Street Food Vibes", image: "/reels/4.jpg" },
  { id: 5, title: "Kerala Outlet Energy", image: "/reels/5.jpg" },
];



const INSTAGRAM_PROFILE = "https://www.instagram.com/momobuggy.in/";

export default function ReelsPage() {
  const openInstagram = () => {
    window.open(INSTAGRAM_PROFILE, "_blank", "noopener,noreferrer");
  };
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
          <p className="text-gray-900 max-w-xl mx-auto">
            A glimpse into how MomoBuggy attracts attention,
            footfall, and customers every single day.
          </p>
        </motion.div>

        {/* REELS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {reels.map((reel, i) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
               onClick={openInstagram}
              className="relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
            >
              {/* Reel Image */}
              <Image
                src={reel.image}
                alt={reel.title}
                fill
                className="object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transition group-hover:scale-110">
                  <Play className="w-6 h-6 text-white fill-white" />
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-3 left-3 right-3 text-sm font-semibold">
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
  <p className="text-gray-200 mb-6">
    Want this level of visibility for your outlet?
  </p>

  <button
    onClick={() =>
      window.open(
        "https://momo-buggy-form.vercel.app/",
        "_blank",
        "noopener,noreferrer"
      )
    }
    className="px-10 py-4 bg-black text-white rounded-full font-semibold hover:scale-105 transition"
  >
    Apply for Franchise
  </button>
</motion.div>

      </div>
    </section>
  );
}