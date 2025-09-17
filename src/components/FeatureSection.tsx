// src/components/FeaturesSlider.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Shield,
  Zap,
  Bot,
  Lock,
  Cloud,
  Activity,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";

// ======================
// Feature Data (must be before component)
// ======================
const features = [
  {
    id: 1,
    icon: <Shield className="w-full h-full" />,
    title: "Predictive AI Threat Detection",
    description:
      "Learns from billions of data points and **anticipates attacks before they happen**. Blocks suspicious traffic in under 50 ms.",
    gradient: "from-red-500 via-orange-500 to-yellow-500",
    bgGradient: "from-red-500/20 to-orange-500/10",
    accentColor: "text-red-400",
    stats: "50ms Response Time",
  },
  {
    id: 2,
    icon: <Zap className="w-full h-full" />,
    title: "Zero-Day Exploit Shield",
    description:
      "Harnesses behavior-based algorithms to **spot unknown vulnerabilities instantly**, protecting apps while vendors patch.",
    gradient: "from-purple-500 via-violet-500 to-indigo-500",
    bgGradient: "from-purple-500/20 to-indigo-500/10",
    accentColor: "text-purple-400",
    stats: "Real-time Protection",
  },
  {
    id: 3,
    icon: <Bot className="w-full h-full" />,
    title: "Adaptive DDoS & Bot Defense",
    description:
      "A distributed edge network that **absorbs floods, filters scrapers, and isolates malicious bots** — without hurting good users.",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    bgGradient: "from-emerald-500/20 to-cyan-500/10",
    accentColor: "text-emerald-400",
    stats: "Global Edge Network",
  },
  {
    id: 4,
    icon: <Lock className="w-full h-full" />,
    title: "Quantum-Grade Encryption",
    description:
      "Implements forward secrecy and **post-quantum algorithms** so your data remains secure even against future threats.",
    gradient: "from-blue-500 via-sky-500 to-cyan-500",
    bgGradient: "from-blue-500/20 to-cyan-500/10",
    accentColor: "text-blue-400",
    stats: "Future-Proof Security",
  },
  {
    id: 5,
    icon: <Cloud className="w-full h-full" />,
    title: "Frictionless Integration",
    description:
      "Install in one click across **AWS, Azure, GCP, Kubernetes, or bare metal** — no custom scripts or downtime.",
    gradient: "from-pink-500 via-rose-500 to-orange-500",
    bgGradient: "from-pink-500/20 to-orange-500/10",
    accentColor: "text-pink-400",
    stats: "One-Click Deploy",
  },
  {
    id: 6,
    icon: <Activity className="w-full h-full" />,
    title: "Live Attack Intelligence",
    description:
      "A cinematic dashboard with **real-time heatmaps, logs, and forensic replay** to understand every blocked attempt.",
    gradient: "from-yellow-500 via-amber-500 to-orange-500",
    bgGradient: "from-yellow-500/20 to-orange-500/10",
    accentColor: "text-yellow-400",
    stats: "Live Monitoring",
  },
  {
    id: 7,
    icon: <Award className="w-full h-full" />,
    title: "Enterprise Reliability & Compliance",
    description:
      "**99.99% uptime SLA**, ISO-27001/SOC2 certifications, and GDPR/HIPAA readiness keep you safe — and audit-proof.",
    gradient: "from-slate-400 via-gray-300 to-zinc-400",
    bgGradient: "from-slate-500/20 to-zinc-500/10",
    accentColor: "text-slate-300",
    stats: "99.99% Uptime SLA",
  },
];

// ======================
// Component
// ======================
const FeaturesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const currentFeature = features[currentSlide];

  // Auto-play logic
  useEffect(() => {
    if (isAutoPlay) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % features.length);
      }, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlay]);

  const goToSlide = (i: number) => {
    setCurrentSlide(i);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const nextSlide = () => goToSlide((currentSlide + 1) % features.length);
  const prevSlide = () =>
    goToSlide((currentSlide - 1 + features.length) % features.length);

  const formatDescription = (text: string) =>
    text.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-white">$1</span>');

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-16 bg-black overflow-hidden font-exo2">
      {/* Header */}
      <motion.div
        className="text-center mb-14 mt-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
          Enterprise Security Features
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          We believe security should be powerful yet effortless.
        </p>
      </motion.div>

      {/* Main slider */}
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-800">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${currentFeature.bgGradient} opacity-30 transition-all duration-1000`}
          />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-12 lg:p-16 min-h-[600px]">
            {/* Left content */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="flex items-center justify-between">
                <div
                  className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${currentFeature.gradient} text-black font-bold text-sm`}
                >
                  #{currentFeature.id.toString().padStart(2, "0")}
                </div>
                <div
                  className={`${currentFeature.accentColor} font-mono text-sm font-medium`}
                >
                  {currentFeature.stats}
                </div>
              </div>

              <h3 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                {currentFeature.title}
              </h3>

              <div
                className="text-xl lg:text-2xl text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: formatDescription(currentFeature.description),
                }}
              />
            </div>

            {/* Right icon */}
            <div className="flex items-center justify-center relative">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div
                  className={`w-80 h-80 rounded-full border-2 border-gradient-to-r ${currentFeature.gradient} opacity-20 animate-pulse`}
                />
                <div
                  className={`absolute w-96 h-96 rounded-full border border-gradient-to-r ${currentFeature.gradient} opacity-10 animate-ping`}
                />
              </motion.div>

              <motion.div
                className={`w-48 h-48 ${currentFeature.accentColor}`}
                initial={{ rotate: -10, scale: 0.9 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                {currentFeature.icon}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={prevSlide}
            className="flex items-center justify-center w-14 h-14 bg-gray-800 hover:bg-gray-700 rounded-full transition"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <div className="flex space-x-3">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentSlide
                    ? `bg-gradient-to-r ${currentFeature.gradient} scale-125`
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="flex items-center justify-center w-14 h-14 bg-gray-800 hover:bg-gray-700 rounded-full transition"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="mt-6 w-full bg-gray-800 rounded-full h-1 overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${currentFeature.gradient} transition-all`}
            style={{
              width: `${((currentSlide + 1) / features.length) * 100}%`,
            }}
          />
        </div>
      </motion.div>

      {/* Mini grid */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {features.map((feature, i) => (
          <button
            key={feature.id}
            onClick={() => goToSlide(i)}
            className={`p-4 rounded-xl transition-all duration-300 ${
              i === currentSlide
                ? `bg-gradient-to-br ${feature.bgGradient} border-2 border-white/20 scale-105`
                : "bg-gray-900 hover:bg-gray-800 border border-gray-700"
            }`}
          >
            <div
              className={`w-8 h-8 ${feature.accentColor} mx-auto mb-2 transition-transform ${
                i === currentSlide ? "scale-110" : ""
              }`}
            >
              {feature.icon}
            </div>
            <div className="text-xs text-gray-400 font-medium text-center">
              {feature.title.split(" ").slice(0, 2).join(" ")}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSlider;
