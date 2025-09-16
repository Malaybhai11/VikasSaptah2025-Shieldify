"use client";

import React, { useState, useEffect } from 'react';
import { Check, Sparkles, Star, Zap, Crown, Gift } from 'lucide-react';

// Define the type for a particle
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
  shape: 'circle' | 'star';
};

const PricingPage = () => {
  // Use the Particle type for state
  const [particles, setParticles] = useState<Particle[]>([]);
  const [showCelebration, setShowCelebration] = useState(true);

  useEffect(() => {
    // Create realistic particle explosion
    const createParticles = () => {
      const newParticles = [];
      const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#FF69B4', '#00CED1', '#FFD700', '#FF1493'];
      
      // Create multiple explosion points
      const explosions = [
        { x: 20, y: 30 },
        { x: 80, y: 25 },
        { x: 50, y: 15 },
        { x: 30, y: 60 },
        { x: 70, y: 55 }
      ];

      explosions.forEach((explosion, explosionIndex) => {
        for (let i = 0; i < 25; i++) {
          const angle = (Math.PI * 2 * i) / 25;
          const velocity = 3 + Math.random() * 4;
          const size = 3 + Math.random() * 8;
          
          newParticles.push({
            id: `${explosionIndex}-${i}`,
            x: explosion.x,
            y: explosion.y,
            vx: Math.cos(angle) * velocity,
            vy: Math.sin(angle) * velocity,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: size,
            life: 1,
            decay: 0.02 + Math.random() * 0.02,
            gravity: 0.05 + Math.random() * 0.03,
            shape: (Math.random() > 0.5 ? 'circle' : 'star') as 'circle' | 'star'
          });
        }
      });

      // Add streaming particles
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: `stream-${i}`,
          x: Math.random() * 100,
          y: -5,
          vx: (Math.random() - 0.5) * 2,
          vy: 2 + Math.random() * 3,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 2 + Math.random() * 4,
          life: 1,
          decay: 0.01,
          gravity: 0.02,
          shape: 'circle' as 'circle'
        });
      }

      setParticles(newParticles);
    };

    createParticles();

    // Animate particles
    const animationInterval = setInterval(() => {
      setParticles(prevParticles => 
        prevParticles.map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          vy: particle.vy + particle.gravity,
          life: particle.life - particle.decay
        })).filter(particle => particle.life > 0 && particle.y < 110)
      );
    }, 16);

    // Stop celebration after 6 seconds
    const celebrationTimer = setTimeout(() => {
      setShowCelebration(false);
      setParticles([]);
    }, 6000);

    return () => {
      clearInterval(animationInterval);
      clearTimeout(celebrationTimer);
    };
  }, []);

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
        "Community Support"
      ],
      cta: "Start Protection",
      description: "Complete server protection, completely free!"
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
        "Audit Logs & Compliance"
      ],
      cta: "Coming Soon",
      description: "For high-traffic applications",
      comingSoon: true
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
        "24/7 Phone Support"
      ],
      cta: "Contact Sales",
      description: "Enterprise-grade security solution",
      comingSoon: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0), radial-gradient(circle at 75px 75px, white 1px, transparent 0)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Celebration Particles */}
      {showCelebration && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute transition-opacity duration-300"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                opacity: particle.life,
                transform: `translate(-50%, -50%)`
              }}
            >
              {particle.shape === 'star' ? (
                <div 
                  className="relative"
                  style={{
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    color: particle.color
                  }}
                >
                  <Star className="w-full h-full fill-current" />
                </div>
              ) : (
                <div
                  className="rounded-full"
                  style={{
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    backgroundColor: particle.color,
                    boxShadow: `0 0 ${particle.size * 2}px ${particle.color}50`
                  }}
                ></div>
              )}
            </div>
          ))}
          

        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                SHIELDIFY
              </span>{' '}
              is FREE!
            </h1>
          </div>
          
          <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-3 rounded-full inline-block text-lg font-bold mb-6">
            🛡️ Launch Special: Full AI Protection Free!
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Protect your servers with <strong>AI-powered Web Application Firewall</strong> technology! 
            Simply point your domain to our protection servers and get instant defense against XSS, SQL injection, DDoS, and more.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] ${
                plan.popular
                  ? 'bg-gradient-to-br from-purple-600 to-blue-600 shadow-2xl shadow-purple-500/30 ring-2 ring-yellow-400'
                  : plan.comingSoon
                  ? 'bg-slate-800/80 backdrop-blur-sm border border-slate-700'
                  : 'bg-slate-800/60 backdrop-blur-sm border border-slate-600 hover:border-slate-500'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold flex items-center">
                    <Crown className="w-4 h-4 mr-1" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm mb-6 text-gray-300">
                  {plan.description}
                </p>
                
                <div className="mb-8">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  {plan.period !== 'forever' && plan.period !== 'contact us' && (
                    <span className="text-lg text-gray-400">
                      /{plan.period}
                    </span>
                  )}
                  {plan.period === 'forever' && (
                    <div className="text-sm text-yellow-300 mt-2 font-medium">
                      Actually forever! 🔥
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                        plan.popular ? 'text-yellow-400' : 'text-green-400'
                      }`} />
                      <span className="text-sm text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-yellow-400 text-slate-900 hover:bg-yellow-300 shadow-lg hover:shadow-xl'
                      : plan.comingSoon
                      ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                  disabled={plan.comingSoon}
                >
                  {plan.popular && <Zap className="w-5 h-5 inline mr-2" />}
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-800/80 to-purple-800/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-purple-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Secure Your Servers Today! 🛡️
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Don't leave your servers vulnerable to cyber attacks. Get enterprise-grade AI protection 
              free during our launch. Just update your DNS settings and you're protected in minutes!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                🛡️ Setup Protection Now
              </button>
              <button className="border border-slate-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-800/50 transition-all duration-300">
                📊 View Live Demo
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-left">
              <h4 className="font-bold text-white mb-2">How does Shieldify protect my server?</h4>
              <p className="text-gray-300 text-sm">
                Shieldify acts as a reverse proxy. You point your domain to our servers, and we filter all traffic before sending clean requests to your origin server.
              </p>
            </div>
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-left">
              <h4 className="font-bold text-white mb-2">What types of attacks does it block?</h4>
              <p className="text-gray-300 text-sm">
                XSS, SQL injection, DDoS, bot attacks, and other common web application vulnerabilities using advanced AI pattern recognition.
              </p>
            </div>
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-left">
              <h4 className="font-bold text-white mb-2">How easy is the setup?</h4>
              <p className="text-gray-300 text-sm">
                Simply update your domain's DNS settings to point to our protection servers. Takes less than 5 minutes and no server changes needed.
              </p>
            </div>
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-left">
              <h4 className="font-bold text-white mb-2">Will it affect my server performance?</h4>
              <p className="text-gray-300 text-sm">
                Shieldify is optimized for minimal latency. Most requests are processed in under 10ms with no noticeable impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;