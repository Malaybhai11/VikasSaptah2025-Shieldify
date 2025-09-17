'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// helper for fade-up animation
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, delay },
});

export default function WorkingPage() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // parallax for hero gradient
  useEffect(() => {
    const handler = (e: MouseEvent) =>
      setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-600 selection:text-white relative overflow-hidden font-exo2">
      {/* floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#0ff4,transparent_1px)] bg-[size:60px_60px] opacity-10 animate-[pulse_5s_ease-in-out_infinite]" />
      </div>

      {/* ================= Hero ================= */}
      <section className="relative py-28 px-4 overflow-hidden">
        <motion.div
          style={{
            transform: `translate(${(mouse.x - 0.5) * 20}px, ${(mouse.y - 0.5) * 20}px)`,
          }}
          className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent "
        />
        <div className="max-w-6xl mx-auto relative">
          <motion.div {...fadeUp(0)} className="text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-800 bg-clip-text text-transparent">
              How Shieldify Works
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              AI-powered protection that learns and adapts to keep your applications secure
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= What is a WAF ================= */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp(0.1)} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What is a Web Application Firewall?</h2>
            <p className="text-xl text-gray-300">
              A WAF creates a shield between a web application and the Internet, protecting against common attacks.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp(0.2)}>
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">The Shieldify Difference</h3>
              <p className="text-gray-300 mb-4">
                A Web Application Firewall (WAF) helps protect web applications by filtering and monitoring HTTP traffic
                between a web application and the Internet. It protects against XSS, CSRF, file inclusion, and SQL injection.
              </p>
              <p className="text-gray-300 mb-4">
                Shieldify operates as a reverse proxy, filtering malicious requests before they reach your app.
              </p>
              <p className="text-gray-300">
                Our WAF uses adaptive rules to identify and block malicious traffic. During attacks, it can instantly apply
                rate limiting and protective measures.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp(0.3)}
              whileHover={{ rotateY: 6, rotateX: -6, scale: 1.03 }}
              className="relative group rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 shadow-lg transition-transform"
            >
              <div className="space-y-6">
                {[
                  { color: 'bg-red-500', text: 'Internet', delay: 0 },
                  { color: 'bg-yellow-500', text: 'Shieldify WAF (AI Analysis)', delay: 0.15 },
                  { color: 'bg-green-500', text: 'Customer Server', delay: 0.3 },
                ].map((node, i) => (
                  <motion.div
                    key={node.text}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: node.delay, duration: 0.6 }}
                    className="flex items-center space-x-4"
                  >
                    <div className={`w-3 h-3 rounded-full ${node.color}`} />
                    <span>{node.text}</span>
                  </motion.div>
                ))}
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-ping" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-400 rounded-full animate-ping" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= Security Models ================= */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900/40">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp(0.1)} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Security Models</h2>
            <p className="text-xl text-gray-300">Two approaches to web application security</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Blocklist (Negative Security)',
                color: 'red',
                desc: 'Blocks known attack patterns but needs frequent updates and may miss zero-day exploits.',
                bullets: [
                  'Blocks known attack patterns',
                  'Needs updates for new threats',
                  'May allow zero-day attacks',
                ],
              },
              {
                title: 'Allowlist (Positive Security)',
                color: 'green',
                desc: 'Allows only trusted traffic; excellent for unknown threats but needs careful tuning.',
                bullets: ['Only allows known good traffic', 'Great vs unknown threats', 'Requires careful configuration'],
              },
            ].map((m, i) => (
              <motion.div
                key={m.title}
                {...fadeUp(0.2 + i * 0.1)}
                whileHover={{ scale: 1.05 }}
                className={`p-8 rounded-2xl bg-gradient-to-br from-${m.color}-500/10 to-transparent border border-${m.color}-500/30 backdrop-blur-md`}
              >
                <h3 className={`text-2xl font-semibold mb-6 text-${m.color}-400`}>{m.title}</h3>
                <p className="text-gray-300 mb-6">{m.desc}</p>
                <ul className="space-y-3">
                  {m.bullets.map(b => (
                    <li key={b} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-${m.color}-400 rounded-full`} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Why Shieldify is Greatest ================= */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp(0.1)} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Shieldify is Greatest</h2>
            <p className="text-xl text-gray-300">Unmatched accuracy through machine learning and continuous adaptation</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Machine Learning Models',
                iconColor: 'from-cyan-400 to-blue-500',
                text: 'text-cyan-400',
                desc: 'AI models learn from each interaction, continuously improving accuracy.',
              },
              {
                title: 'Self-Learning Algorithms',
                iconColor: 'from-purple-400 to-pink-500',
                text: 'text-purple-400',
                desc: 'Algorithms adapt to your traffic, telling humans from bots with precision.',
              },
              {
                title: 'Continuous Adaptation',
                iconColor: 'from-green-400 to-emerald-500',
                text: 'text-green-400',
                desc: 'Protection evolves with new threats and traffic changes.',
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                {...fadeUp(0.2 + i * 0.1)}
                whileHover={{ scale: 1.07, rotate: 1 }}
                className="text-center p-8 rounded-2xl border border-gray-700/40 bg-gradient-to-br from-gray-800/10 to-gray-900/10 backdrop-blur-md"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${card.iconColor} rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl`}
                >
                  <span className="text-white text-2xl">★</span>
                </div>
                <h3 className={`text-2xl font-semibold mb-4 ${card.text}`}>{card.title}</h3>
                <p className="text-gray-300">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Cloud-Based WAF ================= */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp(0.1)} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Cloud-Based Protection</h2>
            <p className="text-xl text-gray-300">The advantages of cloud-based WAF implementation</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Easy Implementation',
                color: 'blue',
                desc: 'Just change DNS records—no hardware or complex setup required.',
              },
              {
                title: 'Always Updated',
                color: 'purple',
                desc: 'Automatic updates defend against the newest threats without manual work.',
              },
              {
                title: 'Scalable Protection',
                color: 'green',
                desc: 'Handles DDoS spikes gracefully, scaling to meet demand.',
              },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                {...fadeUp(0.2 + i * 0.1)}
                whileHover={{ scale: 1.06 }}
                className={`text-center p-8 rounded-2xl bg-gradient-to-br from-${c.color}-400/10 to-${c.color}-600/10 border border-${c.color}-500/30 backdrop-blur-md`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br from-${c.color}-400 to-${c.color}-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow`}
                >
                  <span className="text-white text-2xl">☁</span>
                </div>
                <h3 className={`text-xl font-semibold mb-4 text-${c.color}-400`}>{c.title}</h3>
                <p className="text-gray-300">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
