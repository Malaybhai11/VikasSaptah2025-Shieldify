"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Star, Zap, Crown } from "lucide-react";

// ------------------ Particle Type ------------------
type Particle = {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  life: number;
  decay: number;
  gravity: number;
  shape: "circle" | "star";
};

// ------------------ Main Component ------------------
const PricingPage = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [showCelebration, setShowCelebration] = useState(true);

  // ---------- Particle Effect ----------
  useEffect(() => {
    const createParticles = () => {
      const newParticles: Particle[] = [];
      const colors = ["#38bdf8", "#0ea5e9", "#1e3a8a", "#facc15", "#f97316"];

      const explosions = [
        { x: 20, y: 30 },
        { x: 80, y: 25 },
        { x: 50, y: 15 },
        { x: 30, y: 60 },
        { x: 70, y: 55 },
      ];

      explosions.forEach((explosion, explosionIndex) => {
        for (let i = 0; i < 25; i++) {
          const angle = (Math.PI * 2 * i) / 25;
          const velocity = 3 + Math.random() * 3;
          const size = 3 + Math.random() * 6;
          newParticles.push({
            id: `${explosionIndex}-${i}`,
            x: explosion.x,
            y: explosion.y,
            vx: Math.cos(angle) * velocity,
            vy: Math.sin(angle) * velocity,
            color: colors[Math.floor(Math.random() * colors.length)],
            size,
            life: 1,
            decay: 0.02 + Math.random() * 0.02,
            gravity: 0.05,
            shape: Math.random() > 0.5 ? "circle" : "star",
          });
        }
      });

      // soft falling stars
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: `stream-${i}`,
          x: Math.random() * 100,
          y: -5,
          vx: (Math.random() - 0.5) * 1,
          vy: 2 + Math.random() * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 2 + Math.random() * 4,
          life: 1,
          decay: 0.01,
          gravity: 0.02,
          shape: "circle",
        });
      }

      setParticles(newParticles);
    };

    createParticles();

    const animationInterval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + p.gravity,
            life: p.life - p.decay,
          }))
          .filter((p) => p.life > 0 && p.y < 110)
      );
    }, 16);

    const celebrationTimer = setTimeout(() => {
      setShowCelebration(false);
      setParticles([]);
    }, 6000);

    return () => {
      clearInterval(animationInterval);
      clearTimeout(celebrationTimer);
    };
  }, []);

  // ---------- Pricing Plans ----------
  const plans = [
    {
      name: "Shield Basic",
      price: "$0",
      period: "forever",
      popular: true,
      features: [
        "AI-Powered WAF Protection",
        "Real-time Threat Detection",
        "Basic Attack Blocking (XSS, SQL Injection)",
        "24/7 Server Monitoring",
        "Easy DNS Setup",
        "Basic Analytics Dashboard",
        "Email Security Alerts",
        "Community Support",
      ],
      cta: "Start Protection",
      description: "Complete server protection, completely free!",
    },
    {
      name: "Shield Pro",
      price: "$49",
      period: "month",
      popular: false,
      features: [
        "Everything in Shield Basic",
        "Advanced ML Threat Analysis",
        "DDoS Protection & Rate Limiting",
        "Custom Security Rules",
        "Advanced Analytics & Reports",
        "White-label Integration",
        "Priority Support",
        "Audit Logs & Compliance",
      ],
      cta: "Coming Soon",
      description: "For high-traffic applications",
      comingSoon: true,
    },
    {
      name: "Shield Enterprise",
      price: "Custom",
      period: "contact us",
      popular: false,
      features: [
        "Everything in Shield Pro",
        "Multi-region Deployment",
        "Custom AI Model Training",
        "SIEM System Integration",
        "Dedicated Security Engineer",
        "SLA Guarantee (99.9%)",
        "On-premise Deployment",
        "24/7 Phone Support",
      ],
      cta: "Contact Sales",
      description: "Enterprise-grade security solution",
      comingSoon: true,
    },
  ];

  // ---------- Scroll Animations ----------
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#020617] to-[#0f172a] relative overflow-hidden font-exo2">
      {/* Particle Stars */}
      {showCelebration && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                opacity: p.life,
                transform: "translate(-50%, -50%)",
              }}
            >
              {p.shape === "star" ? (
                <Star
                  className="w-full h-full"
                  style={{
                    width: `${p.size}px`,
                    height: `${p.size}px`,
                    color: p.color,
                  }}
                />
              ) : (
                <div
                  className="rounded-full"
                  style={{
                    width: `${p.size}px`,
                    height: `${p.size}px`,
                    backgroundColor: p.color,
                    boxShadow: `0 0 ${p.size * 2}px ${p.color}50`,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              SHIELDIFY
            </span>{" "}
            is FREE!
          </h1>
          <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-3 rounded-full inline-block text-lg font-bold my-6">
            🛡️ Launch Special: Full AI Protection Free!
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Protect your servers with{" "}
            <strong>AI-powered Web Application Firewall</strong> technology! No
            purple — just stealth black & electric blue ⚡
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] ${
                plan.popular
                  ? "bg-gradient-to-br from-blue-700 to-blue-800 shadow-xl"
                  : "bg-slate-900/70 border border-slate-700"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center">
                    <Crown className="w-4 h-4 mr-1" />
                    MOST POPULAR
                  </div>
                </div>
              )}
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm mb-6 text-gray-300">{plan.description}</p>
                <div className="mb-8">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  {plan.period !== "forever" && plan.period !== "contact us" && (
                    <span className="text-lg text-gray-400">/{plan.period}</span>
                  )}
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check
                        className={`w-5 h-5 mr-3 mt-0.5 ${
                          plan.popular ? "text-yellow-400" : "text-sky-400"
                        }`}
                      />
                      <span className="text-sm text-gray-300">{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  disabled={plan.comingSoon}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition hover:scale-105 ${
                    plan.popular
                      ? "bg-yellow-400 text-black"
                      : plan.comingSoon
                      ? "bg-slate-800 text-gray-500 cursor-not-allowed"
                      : "bg-blue-700 text-white hover:bg-blue-600"
                  }`}
                >
                  {plan.popular && <Zap className="w-5 h-5 inline mr-2" />}
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-16 bg-slate-900/70 border border-slate-800 rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Secure Your Servers Today! 🛡️
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            Get enterprise-grade AI protection free during our launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-sky-400 hover:to-blue-500">
              🛡️ Setup Protection Now
            </button>
            <button className="border border-slate-600 text-white px-8 py-4 rounded-xl hover:bg-slate-800">
              📊 View Live Demo
            </button>
          </div>
        </motion.div>

        <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6 }}
  className="mt-16 text-center"
>
  <h3 className="text-2xl font-bold text-white mb-8">
    Frequently Asked Questions
  </h3>

  <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
    <div className="bg-slate-900/70 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-left">
      <h4 className="font-bold text-white mb-2">
        How does Shieldify protect my server?
      </h4>
      <p className="text-gray-300 text-sm">
        Shieldify acts as a reverse proxy. You point your domain to our servers,
        and we filter all traffic before sending clean requests to your origin
        server.
      </p>
    </div>
    <div className="bg-slate-900/70 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-left">
      <h4 className="font-bold text-white mb-2">
        What types of attacks does it block?
      </h4>
      <p className="text-gray-300 text-sm">
        XSS, SQL injection, DDoS, bot attacks, and other common web application
        vulnerabilities using advanced AI pattern recognition.
      </p>
    </div>
    <div className="bg-slate-900/70 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-left">
      <h4 className="font-bold text-white mb-2">
        How easy is the setup?
      </h4>
      <p className="text-gray-300 text-sm">
        Simply update your domain's DNS settings to point to our protection
        servers. Takes less than 5 minutes and no server changes needed.
      </p>
    </div>
    <div className="bg-slate-900/70 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-left">
      <h4 className="font-bold text-white mb-2">
        Will it affect my server performance?
      </h4>
      <p className="text-gray-300 text-sm">
        Shieldify is optimized for minimal latency. Most requests are processed
        in under 10 ms with no noticeable impact.
      </p>
    </div>
  </div>
</motion.section>
      </div>
    </div>
  );
};

export default PricingPage;
