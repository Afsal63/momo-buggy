"use client";
import { motion } from "framer-motion";

export default function FranchiseCTA() {
  return (
    <section className="bg-primary py-24 text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className=" text-4xl md:text-5xl font-bold text-white mb-6"
      >
        Own a MomoBuggy Franchise
      </motion.h2>

      <button className="mt-6 px-10 py-4 bg-white text-primary font-semibold rounded-full hover:scale-110 transition">
        Apply Now
      </button>
    </section>
  );
}