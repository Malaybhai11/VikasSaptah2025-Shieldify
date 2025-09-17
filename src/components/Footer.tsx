'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';

// ===== Helper for footer links =====
const LinkComponent = ({
  href,
  children,
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <Link
    href={href}
    className={`group relative text-sm text-gray-400 hover:text-blue-400 transition-all duration-300 ${className}`}
  >
    <span className="relative z-10">{children}</span>
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -skew-x-12" />
  </Link>
);

const GalaxyFooter = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  
  // === Fade + slight lift when in view ===
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  return (
    <footer
      id="footer-container"
      className="relative bg-black text-white overflow-hidden font-exo2"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(37,99,235,0.05), transparent 70%)`,
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto py-20 px-6 lg:px-8">
        {/* === Top Grid === */}
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-16">
          {/* ===== Brand block ===== */}
          <motion.div
            className="lg:col-span-1 space-y-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="relative">
                <motion.div
                  className="w-14 h-14 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-2xl"
                  whileHover={{ scale: 1.1, rotate: 4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="text-white font-black text-2xl tracking-tighter">
                    S
                  </span>
                </motion.div>
                <div className="absolute inset-0 w-14 h-14 bg-blue-500/30 rounded-2xl blur-xl" />
              </div>
              <div>
                <h2 className="text-3xl font-black tracking-tight bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
                  Shieldify
                </h2>
                <div className="text-xs font-mono text-gray-500 tracking-widest uppercase">
                  Enterprise Security
                </div>
              </div>
            </div>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              variants={fadeUp}
              custom={1}
            >
              AI-powered Web Application Firewall for{' '}
              <span className="font-bold text-blue-400">
                24/7 server protection
              </span>
            </motion.p>

            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse" />
              <span className="text-emerald-400 text-xs font-mono tracking-wider">
                SYSTEM OPERATIONAL
              </span>
            </div>

            <div className="flex space-x-3">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.15, rotate: 3 }}
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm"
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ===== Link columns ===== */}
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Solutions',
                links: [
                  { name: 'Pricing', href: '/pricing' },
                  { name: 'How it Works?', href: '/working' },
                  { name: 'Setup Guide', href: '/setup' },
                  { name: 'Documentation', href: '/docs' },
                ],
              },
              {
                title: 'Company',
                links: [
                  { name: 'About Us', href: '#developer-team' },
                  { name: 'Social Media', href: '/social' },
                ],
              },
              {
                title: 'Support',
                links: [
                  { name: 'Privacy Policy', href: '/privacy' },
                  { name: 'Terms of Service', href: '/terms' },
                  { name: 'Security', href: '/security' },
                ],
              },
            ].map((section, idx) => (
              <motion.div
                key={section.title}
                className="space-y-6"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={idx + 1}
              >
                <h3 className="text-lg font-bold text-white tracking-wide uppercase relative">
                  <span className="relative z-10">{section.title}</span>
                  <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-transparent" />
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <LinkComponent href={link.href}>{link.name}</LinkComponent>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* === Contact & Newsletter === */}
        <motion.div
          className="mt-16 pt-8 border-t border-blue-500/20 grid md:grid-cols-2 gap-8 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={3}
        >
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <LinkComponent
                href="tel:+911234567890"
                className="flex items-center space-x-3 text-base"
              >
                <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  📞
                </div>
                <span>+91 1234567890</span>
              </LinkComponent>
              <LinkComponent
                href="mailto:abc@shieldify.com"
                className="flex items-center space-x-3 text-base"
              >
                <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  📧
                </div>
                <span>abc@shieldify.com</span>
              </LinkComponent>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white">Stay Updated</h4>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-blue-500/5 border border-blue-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:bg-blue-500/10 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-600 transition-all shadow-lg"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* === Bottom bar === */}
        <motion.div
          className="mt-16 pt-8 border-t border-blue-500/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={4}
        >
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>&copy; 2025 Shieldify, Inc. All rights reserved.</span>
            <div className="hidden md:flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="font-mono text-xs">v2.1.0</span>
            </div>
          </div>
          <div className="flex items-center space-x-6 text-xs font-mono text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <span>&lt;50ms Response</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full" />
              <span>Enterprise Ready</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default GalaxyFooter;
