"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#3AA1A6]">
      
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center"
      >
        <Image
          src="/momo/momo.png"   // or logo
          alt="Loading MomoBuggy"
          width={120}
          height={120}
          priority
        />

        <p className="mt-4 text-white text-sm tracking-wide opacity-80">
          Loading...
        </p>
      </motion.div>

    </div>
  );
}