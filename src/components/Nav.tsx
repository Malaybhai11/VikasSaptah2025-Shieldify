'use client';

import { useState, useEffect } from 'react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`z-50 backdrop-blur-xl text-white transition-all duration-700 ease-out 
    }`}>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-2 left-10 w-2 h-2 bg-blue-400/30 rounded-full animate-ping"></div>
        <div className="absolute top-4 right-20 w-1 h-1 bg-cyan-300/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-2 left-1/3 w-1.5 h-1.5 bg-blue-500/25 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <a
            href="/"
            className="group flex items-center flex-shrink-0 space-x-3 animate-fade-in"
            aria-label="Shieldify Home"
          >
            <div className="flex items-center space-x-2">
              {/* Shield Icon */}
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-lg shadow-lg group-hover:shadow-blue-500/50 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6">
                  
                  {/* Rotating ring animation */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 rounded-lg opacity-0 group-hover:opacity-100 animate-spin-slow transition-opacity duration-300"></div>
                  
                  <svg className="relative z-10 w-5 h-5 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                
                {/* Pulsing indicator */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse border border-black">
                  <div className="absolute inset-0.5 bg-green-300 rounded-full animate-ping"></div>
                </div>
                
                {/* Glowing aura */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </div>
              
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-blue-300 to-slate-100 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-blue-200 group-hover:to-white transition-all duration-500 group-hover:scale-105 animate-gradient-x">
                Shieldify
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {[
              { href: "/pricing", label: "Pricing" },
              { href: "/working", label: "How it Works" },
              { href: "/setup", label: "Setup" },
            ].map(({ href, label }, index) => (
              <a
                key={href}
                href={href}
                className="relative group px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 rounded-lg hover:bg-slate-800/50 overflow-hidden animate-slide-down"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                {/* Morphing background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-cyan-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-lg"></div>
                
                <span className="relative z-10 transform group-hover:scale-105 transition-transform duration-200">{label}</span>
                
                {/* Animated underline */}
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                {/* Floating particles on hover */}
                <div className="absolute top-1 left-2 w-1 h-1 bg-blue-400/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300"></div>
                <div className="absolute top-1 right-2 w-1 h-1 bg-cyan-400/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300 delay-100"></div>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex md:items-center animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
            <a href="/get-started">
              <button className="relative group overflow-hidden px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-cyan-600 text-white text-sm font-semibold rounded-lg border border-blue-500/30 shadow-lg hover:shadow-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                
                {/* Multiple shine effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-45 from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-200"></div>
                
                {/* Pulsing border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-30 animate-pulse transition-opacity duration-300"></div>
                
                <span className="relative flex items-center gap-2 transform group-hover:scale-105 transition-transform duration-200">
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  Get Started
                </span>
                
                {/* Glowing dots */}
                <div className="absolute top-0 left-0 w-1 h-1 bg-cyan-300 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-1 h-1 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300 delay-150"></div>
              </button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-slate-600 transition-all duration-300 group"
              aria-label="Toggle menu"
            >
              {/* Animated hamburger */}
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''} group-hover:bg-blue-400`}></span>
                <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'mt-1'} group-hover:bg-blue-400`}></span>
                <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'mt-1'} group-hover:bg-blue-400`}></span>
              </div>
              
              {/* Click ripple effect */}
              <div className="absolute inset-0 rounded-lg bg-blue-500/20 transform scale-0 group-active:scale-100 transition-transform duration-200"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
        isMenuOpen 
          ? 'max-h-96 opacity-100 translate-y-0' 
          : 'max-h-0 opacity-0 -translate-y-4'
      }`}>
        <div className="bg-slate-900/98 backdrop-blur-xl border-t border-slate-700/50 shadow-2xl">
          <div className="px-4 py-4 space-y-2">
            {[
              { href: "/pricing", label: "Pricing" },
              { href: "/working", label: "How it Works" },
              { href: "/setup", label: "Setup" },
            ].map(({ href, label }, index) => (
              <a
                key={href}
                href={href}
                className="block px-4 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-300 transform hover:translate-x-2 hover:scale-105 animate-slide-in-left group"
                onClick={() => setIsMenuOpen(false)}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                <span className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {label}
                  <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            ))}
            
            <div className="pt-4 border-t border-slate-700/50 animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
              <a href="/get-started">
                <button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg border border-blue-500/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  <span className="relative flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    Get Started
                  </span>
                  
                  {/* Glowing border effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-40 animate-pulse transition-opacity duration-300 -z-10"></div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out; }
        .animate-slide-down { animation: slide-down 0.6s ease-out; }
        .animate-slide-in-left { animation: slide-in-left 0.6s ease-out; }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }
        .animate-gradient-x { 
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </nav>
  );
};

export default Nav;