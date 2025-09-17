// components/FeaturesSection.tsx
"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  Cpu,
  Server,
  Github,
  MessageCircle,
} from "lucide-react";

export default function FeaturesSection() {
  return (
    // === Main wrapper ===
    <section className="bg-black text-gray-200 py-24 overflow-hidden font-exo2">
      {/* === Layout container === */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-3 gap-14">
        {/* ===============================
            LEFT COLUMN (headline + bullets)
        ================================ */}
        <motion.div
          // Start slightly left & transparent
          initial={{ opacity: 0, x: -40 }}
          // Animate when scrolled into view
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-8"
        >
          {/* Section heading */}
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight font-orbitron">
            Real-Time Protection
            <span className="block text-blue-500 font-orbitron">Without Compromise</span>
          </h2>

          {/* Intro paragraph */}
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            <strong className="text-gray-100">Shieldify</strong> is an AI-powered
            Web Application Firewall that protects your apps and APIs in real
            time. Stop exploits, block bots, and keep latency ultra-low — all
            with one simple deployment.
          </p>

          {/* === Features list === */}
          <motion.ul
            // Stagger animation for children
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } },
            }}
            className="grid sm:grid-cols-2 gap-6 mt-8"
          >
            {/* Individual feature items */}
            {[
              { Icon: Shield, text: "Continuous AI threat detection" },
              { Icon: Zap, text: "Blocks attacks before they hit" },
              { Icon: Cpu, text: "Optimized for low latency" },
              { Icon: Server, text: "Deploy anywhere: cloud, VPS, or bare-metal" },
            ].map(({ Icon, text }) => (
              <motion.li
                key={text}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="flex items-start gap-3 group"
              >
                {/* Small icon */}
                <Icon className="h-6 w-6 text-blue-500 transition-transform duration-300 group-hover:scale-110" />
                {/* Feature text */}
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  {text}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* ==============================
            RIGHT COLUMN (Integrations box)
        =============================== */}
        <motion.aside
          // Start slightly below & transparent
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          // Clean floating look: just black + border
          className="rounded-xl border border-blue-800/40 p-8 bg-black"
        >
          {/* Box heading */}
          <h3 className="text-2xl font-semibold text-white mb-4">
            Integrations
          </h3>

          {/* Short description */}
          <p className="text-gray-400 text-sm mb-8">
            Plug Shieldify into your CI/CD pipeline or run it with Docker,
            Kubernetes, or bare metal. Simple setup, rock-solid security.
          </p>

          {/* Buttons for actions */}
          <div className="flex flex-col gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
            >
              <Github className="h-5 w-5" />
              GitHub Repository
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-green-600 hover:bg-green-700 text-white font-medium transition"
            >
              <MessageCircle className="h-5 w-5" />
              Join Our Discord
            </motion.a>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
