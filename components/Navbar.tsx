"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Reels", path: "/reels" },
  { name: "About", path: "/about" },
  { name: "Franchise", path: "/franchise" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-primary/70 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3 md:py-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo2.png"
            alt="MomoBuggy Logo"
            width={150}
            height={42}
            priority
            className="w-[115px] md:w-[150px] h-auto"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-white">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="relative group text-sm  tracking-widest"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="flex flex-col justify-center gap-[5px]">
            <span
              className={`block h-[2px] w-6 bg-white transition-transform duration-300 ${
                open && "rotate-45 translate-y-[6px]"
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-white transition-opacity duration-300 ${
                open && "opacity-0"
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-white transition-transform duration-300 ${
                open && "-rotate-45 -translate-y-[6px]"
              }`}
            />
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-primary/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-6 space-y-6 text-white">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}