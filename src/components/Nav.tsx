'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className=" top-0 z-50 bg-black backdrop-blur-md  text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link
            href="/"
            className="group flex items-center flex-shrink-0 space-x-3"
            aria-label="Shieldify Home"
          >
            <motion.div
              initial={{ rotate: 0, scale: 1 }}
              whileHover={{ rotate: -5, scale: 1.06 }}
              transition={{ type: "spring", stiffness: 250, damping: 12 }}
              className="
      w-11 h-11
      flex items-center justify-center
      rounded-xl
      bg-gradient-to-br from-blue-700 via-blue-400 to-black
      border border-cyan-400/40
      shadow-[0_0_12px_rgba(59,130,246,0.45)]
      relative overflow-hidden
    "
            >
              {/* subtle inner glow */}
              <span className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-40 blur-md" />
              <span className="relative z-10 text-gray-900 font-black text-xl tracking-tight select-none">
                S
              </span>
            </motion.div>

            <span
              className="
      text-2xl font-extrabold tracking-tight
      bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-300
      bg-clip-text text-transparent
      drop-shadow
      group-hover:brightness-110 group-hover:scale-[1.04]
      transition-all duration-300
    "
            >
              Shieldify
            </span>
          </Link>

          <div className="hidden md:flex md:ml-10 md:space-x-8">
            {[
              { href: "/pricing", label: "Pricing" },
              { href: "/working", label: "How it Works?" },
              { href: "/setup", label: "Setup" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="
        relative inline-flex items-center px-2 pt-1 text-sm font-medium
        text-slate-200 transition-all duration-200
        hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 rounded
        after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0
        after:bg-gradient-to-r after:from-cyan-400 after:to-sky-400
        after:transition-all after:duration-300 hover:after:w-full
      "
              >
                {label}
              </Link>
            ))}
          </div>


          <div className="hidden md:flex md:items-center md:ml-6">
            <Link href="/get-started">
              <motion.button
                initial={{ scale: 1, opacity: 0.95 }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 28px rgba(34,211,238,0.8)",
                }}
                whileTap={{ scale: 0.95, opacity: 0.85 }}
                className="
        relative overflow-hidden
        flex items-center gap-3
        px-9 py-3
        rounded-xl
        font-semibold
        tracking-wide
        text-white
        bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-400
        shadow-[0_0_16px_rgba(34,211,238,0.4)]
        border border-cyan-300/40
        transition-all duration-300 ease-out
        backdrop-blur-md
        focus:outline-none focus:ring-2 focus:ring-cyan-300/50
      "
              >
                {/* inner sweeping beam */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] duration-700 ease-linear blur-sm" />

                {/* animated accent dots */}
                <span className="absolute top-0 left-0 w-1 h-1 bg-cyan-300 rounded-full animate-ping" />
                <span className="absolute bottom-0 right-0 w-1 h-1 bg-emerald-300 rounded-full animate-ping" />

                {/* icon */}
                <svg
                  className="w-5 h-5 text-cyan-100 drop-shadow-sm"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>

                <span className="relative z-10">Get Started</span>

                {/* bottom glow border */}
                <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60" />
              </motion.button>
            </Link>
          </div>



          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-md">
            <Link
              href="#pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#enterprise"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Enterprise
            </Link>
            <Link
              href="#resources"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
