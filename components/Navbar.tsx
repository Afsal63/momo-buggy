"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Reels", path: "/reels" },
  { name: "About", path: "/about" },
  { name: "Franchise", path: "/franchise" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  console.log(pathname, "pathname");

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary/70 backdrop-blur-lg border-b border-white/10">
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
          {navLinks.map((link) => {
            const isActive =
              pathname === link.path || pathname.startsWith(link.path + "/");

            return (
              <Link
                key={link.name}
                href={link.path}
                className={`relative group text-sm tracking-widest transition ${
                  isActive ? "text-black" : "text-white"
                }`}
              >
                {link.name}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-accent transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle Menu"
        >
          <div className="flex flex-col justify-center gap-[5px]">
            <span
              className={`block h-[2px] w-6 bg-white transition ${open && "rotate-45 translate-y-[6px]"}`}
            />
            <span
              className={`block h-[2px] w-6 bg-white transition ${open && "opacity-0"}`}
            />
            <span
              className={`block h-[2px] w-6 bg-white transition ${open && "-rotate-45 -translate-y-[6px]"}`}
            />
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-primary/95 backdrop-blur-lg border-t border-white/10`}
      >
        <div className="flex flex-col px-6 py-6 space-y-6 text-white">
          {navLinks.map((link) => {
            const isActive =
              link.path === "/"
                ? pathname === "/"
                : pathname.startsWith(link.path);

            return (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setOpen(false)}
                className={`text-lg font-medium ${
                  isActive ? "text-accent" : ""
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
