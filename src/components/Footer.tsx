'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const GalaxyFooter = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => { // Add type
      const rect = document.getElementById('footer-container')?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const footerElement = document.getElementById('footer-container');
    footerElement?.addEventListener('mousemove', handleMouseMove);

    return () => {
      footerElement?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  type LinkComponentProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
  };

  const LinkComponent = ({ href, children, className = "" }: LinkComponentProps) => (
    <Link 
      href={href} 
      className={`group relative text-sm text-gray-400 hover:text-white transition-all duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -skew-x-12" />
    </Link>
  );

  return (
    <footer 
      id="footer-container"
      className="relative bg-black text-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
       

       

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridFloat 20s linear infinite',
          }}
        />

        {/* Subtle Noise Texture */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto py-20 px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-8">
            <div className="group cursor-pointer">
              {/* Enhanced Logo */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-white via-gray-300 to-gray-500 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                    <span className="text-black font-black text-2xl tracking-tighter">S</span>
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 w-14 h-14 bg-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                </div>
                <div>
                  <h2 className="text-3xl font-black tracking-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                    Shieldify
                  </h2>
                  <div className="text-xs font-mono text-gray-500 tracking-widest uppercase">
                    Enterprise Security
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                AI-powered Web Application Firewall for{' '}
                <span className="font-bold text-white">24/7 server protection</span>
              </p>
              
              {/* Status Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse" />
                <span className="text-emerald-400 text-xs font-mono tracking-wider">
                  SYSTEM OPERATIONAL
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 pt-4">
              {['Twitter', 'LinkedIn', 'GitHub'].map((platform, index) => (
                <button
                  key={platform}
                  className="group w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white hover:border-white transition-all duration-300 flex items-center justify-center"
                >
                  <div className="w-5 h-5 bg-gray-400 group-hover:bg-black rounded transition-colors duration-300" />
                </button>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-12">
            {/* Solutions */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white tracking-wide uppercase relative">
                <span className="relative z-10">Solutions</span>
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-white to-gray-500" />
              </h3>
              <ul className="space-y-4">
                {[
                  { name: 'Pricing', href: '/pricing' },
                  { name: 'How it Works?', href: '/working' },
                  { name: 'Setup Guide', href: '/setup' },
                  { name: 'Documentation', href: '/docs' },
                ].map((item, index) => (
                  <li key={index}>
                    <LinkComponent href={item.href}>
                      {item.name}
                    </LinkComponent>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white tracking-wide uppercase relative">
                <span className="relative z-10">Company</span>
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-white to-gray-500" />
              </h3>
              <ul className="space-y-4">
                {[
                  { name: 'About Us', href: '#developer-team' },
                  { name: 'Social Media', href: '/social' },
                
                ].map((item, index) => (
                  <li key={index}>
                    <LinkComponent href={item.href}>
                      {item.name}
                    </LinkComponent>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Legal */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white tracking-wide uppercase relative">
                <span className="relative z-10">Support</span>
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-white to-gray-500" />
              </h3>
              <ul className="space-y-4">
                {[
                  { name: 'Privacy Policy', href: '/privacy' },
                  { name: 'Terms of Service', href: '/terms' },
                  { name: 'Security', href: '/security' },
                 
                ].map((item, index) => (
                  <li key={index}>
                    <LinkComponent href={item.href}>
                      {item.name}
                    </LinkComponent>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">Get In Touch</h4>
              <div className="space-y-3">
                <LinkComponent 
                  href="tel:+917016870163" 
                  className="flex items-center space-x-3 text-base"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  <span>+91 12345678910</span>
                </LinkComponent>
                <LinkComponent 
                  href="mailto:malay.raval11@gmail.com" 
                  className="flex items-center space-x-3 text-base"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">📧</span>
                  </div>
                  <span>abc-Shieldify@gmail.com</span>
                </LinkComponent>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">Stay Updated</h4>
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300"
                />
                <button className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>&copy; 2025 Shieldify, Inc. All rights reserved.</span>
              <div className="hidden md:flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="font-mono text-xs">v2.1.0</span>
              </div>
            </div>
            
            {/* Performance Stats */}
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
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 right-2 opacity-0 transition-opacity duration-300 z-20">
        <a href="http://dnsexit.com"><img src="http://dnsexit.com/images/dns2.gif" className="border=0" /></a>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gridFloat {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes particleFloat {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
            opacity: 0.3; 
          }
          50% { 
            transform: translateY(-10px) scale(1.2); 
            opacity: 1; 
          }
        }

        .animate-particle {
          animation: particleFloat 4s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default GalaxyFooter;