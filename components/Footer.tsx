"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#1F5F63] to-[#0E3E42] text-white pt-16 pb-8 px-6 overflow-hidden">
      <motion.div
        className="absolute right-[-20px] md:right-12 bottom-[-20px] md:bottom-6 pointer-events-none
             opacity-15 md:opacity-20"
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
          className="object-contain w-40 md:w-[320px]"
        />

        {/* Soft fade overlay for premium blend */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E3E42] via-transparent to-transparent" />
      </motion.div>
      {/* TOP DIVIDER GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* BRAND */}
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start mb-4">
            <Image
              src="/logo2.png"
              alt="MomoBuggy Logo"
              width={140}
              height={40}
            />
          </div>

          <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
            MomoBuggy is a fast-growing Indian food franchise brand, empowering
            young entrepreneurs with a scalable business model.
          </p>
        </div>

        {/* QUICK INFO */}
        <div className="text-center">
          <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>

          <p className="text-gray-400 text-sm mb-2">
            Franchise & Business Enquiries
          </p>

       <p className="text-sm text-gray-300">
  📞{" "}
  <a
    href="tel:+918848381118"
    className="hover:text-white transition"
  >
    +91 8848381118
  </a>
</p>

<p className="text-sm text-gray-300 mt-1">
  ✉️{" "}
  <a
    href="mailto:momobuggy111@gmail.com"
    className="hover:text-white transition"
  >
    momobuggy111@gmail.com
  </a>
</p>
        </div>

        {/* SOCIAL ICONS */}
        <div className="text-center md:text-right">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>

          <div className="flex justify-center md:justify-end gap-4">
            {/* WHATSAPP */}
            <motion.a
              whileHover={{ scale: 1.15 }}
              href="https://wa.me/918848381118"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition"
            >
              <Image
                src="/icons/whatsapp.png"
                alt="WhatsApp"
                width={22}
                height={22}
                className="object-contain"
              />
            </motion.a>

            {/* INSTAGRAM */}
            <motion.a
              whileHover={{ scale: 1.15 }}
              href="https://www.instagram.com/momobuggy.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition"
            >
              <Image
                src="/icons/Instagram.png"
                alt="Instagram"
                width={22}
                height={22}
                className="object-contain"
              />
            </motion.a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-14 text-center text-gray-500 text-xs border-t border-white/10 pt-6">
        © 2026 MomoBuggy. All Rights Reserved.
      </div>
    </footer>
  );
}
