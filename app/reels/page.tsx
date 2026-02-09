"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Instagram } from "lucide-react";

const reels = [
  { id: 1, title: "Crowd Pulling Momo Stall", image: "/reels/1.jpg" },
  { id: 2, title: "Night Sales Rush", image: "/reels/2.jpg" },
  { id: 3, title: "Customer Reactions", image: "/reels/3.jpg" },
  { id: 4, title: "Street Food Vibes", image: "/reels/4.jpg" },
  { id: 5, title: "Kerala Outlet Energy", image: "/reels/5.jpg" },
  { id: 6, title: "Live Counter Action", image: "/reels/6.jpg" },
];

const INSTAGRAM_PROFILE = "https://www.instagram.com/momobuggy.in/";

export default function ReelsPage() {
  const openInstagram = () => {
    window.open(INSTAGRAM_PROFILE, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#3AA1A6] via-[#2c7f83] to-[#0f3d40] text-white pt-32 pb-24 px-4 md:px-8 overflow-hidden">
      {/* Ambient Blur */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-black/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-5">
            Our Reels.
            <span className="block text-white/90">Real Crowd. Real Sales.</span>
          </h1>

          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            See how MomoBuggy creates buzz, pulls crowds,
            and converts views into daily footfall.
          </p>
        </motion.div>

        {/* REELS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {reels.map((reel, i) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -10 }}
              onClick={openInstagram}
              className="relative aspect-[9/16] rounded-3xl overflow-hidden cursor-pointer group bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl"
            >
              {/* Image */}
              <Image
                src={reel.image}
                alt={reel.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-2xl"
                >
                  <Play className="w-7 h-7 text-white fill-white" />
                </motion.div>
              </div>

              {/* Instagram Badge */}
              <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md rounded-full p-2">
                <Instagram className="w-4 h-4 text-white" />
              </div>

              {/* Caption */}
              {/* <div className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white/90">
                {reel.title}
              </div> */}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <p className="text-white/80 mb-8 text-lg">
            Want this kind of visibility for your outlet?
          </p>

          <button
            onClick={() =>
              window.open(
                "https://momo-buggy-form.vercel.app/",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="px-12 py-5 rounded-full bg-black text-white font-bold text-lg shadow-2xl hover:scale-105 hover:bg-white hover:text-black transition-all"
          >
            Apply for Franchise 🚀
          </button>
        </motion.div>
      </div>
    </section>
  );
}