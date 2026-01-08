"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const plates = [
  { id: "steam", name: "Steam Momos", img: "/hero/stem-momo1.png" },
  { id: "fried", name: "Fried Momos", img: "/hero/fried-momo.png" },
  { id: "paneer", name: "Paneer Momos", img: "/hero/stem-momo1.png" },
  { id: "dessert", name: "Dessert", img: "/hero/fried-momo.png" },
];

export default function Hero() {
  const [active, setActive] = useState(plates[0]);
  const indexRef = useRef(0);

  /* 🔁 AUTO ROTATE (VISIBLE NOW) */
  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % plates.length;
      setActive(plates[indexRef.current]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-cream flex items-center pt-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-5 text-black leading-tight">
            Every Bite <br />
            <span className="text-primary">Satisfies 😍</span>
          </h1>

          <p className="text-white max-w-md mx-auto md:mx-0 mb-7 text-sm sm:text-base">
            Premium street-style momos crafted for taste lovers.
            Built for scale. Loved everywhere.
          </p>

          {/* CTA */}
          <div className="flex gap-4 mb-8 justify-center md:justify-start flex-wrap">
            <button className="px-6 py-3 bg-primary text-white rounded-full font-semibold hover:scale-105 transition">
              Explore Menu
            </button>
            <button className="px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition">
              Watch Reels
            </button>
          </div>

          {/* CATEGORY SELECTOR */}
          <div className="flex gap-3 flex-wrap justify-center md:justify-start">
            {plates.map((item, i) => (
              <button
                key={item.id}
                onClick={() => {
                  indexRef.current = i; // sync auto-rotation
                  setActive(item);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition
                  ${
                    active.id === item.id
                      ? "bg-black text-white"
                      : "bg-white text-black hover:bg-primary/10"
                  }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-center mt-6 md:mt-0">

          {/* ROTATING RING (ALREADY OK – JUST MORE NOTICEABLE) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full border border-primary/30"
          />

          {/* IMAGE SWITCH */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative z-10"
            >
              <Image
                src={active.img}
                alt={active.name}
                width={380}
                height={380}
                className="w-[240px] sm:w-[260px] md:w-[380px] drop-shadow-2xl"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}