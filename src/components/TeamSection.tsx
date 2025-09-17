'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

// Professional team data structure
const teamMembers = [
  {
    name: 'Malay Raval',
    role: 'Lead Developer',
    email: 'malay.raval@company.com',
    id: 1,
    department: 'Engineering',
    accentColor: '#0EA5E9' // Sky blue
  },
  {
    name: 'Bhagirathsinh Rana',
    role: 'Security Specialist', 
    email: 'bhagirathsinh.rana@company.com',
    id: 2,
    department: 'Security',
    accentColor: '#8B5CF6' // Violet
  },
  {
    name: 'Vivek Pankhaniya',
    role: 'AI/ML Engineer',
    email: 'vivek.pankhaniya@company.com',
    id: 3,
    department: 'AI Research',
    accentColor: '#10B981' // Emerald
  },
  {
    name: 'Dev Patel',
    role: 'Frontend Developer',
    email: 'dev.patel@company.com',
    id: 4,
    department: 'Engineering',
    accentColor: '#F59E0B' // Amber
  },
  {
    name: 'Tisha Daudra',
    role: 'UI/UX Designer',
    email: 'tisha.daudra@company.com',
    id: 5,
    department: 'Design',
    accentColor: '#EC4899' // Pink
  },
  {
    name: 'Khushi Bosamiya',
    role: 'Project Manager',
    email: 'khushi.bosamiya@company.com',
    id: 6,
    department: 'Operations',
    accentColor: '#6366F1' // Indigo
  },
];

const TeamSection = () => {
  // State management for professional interactions
  const [activeGroup, setActiveGroup] = useState(0);
  const [focusedMember, setFocusedMember] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef(null);

  // Advanced scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const headerY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  // Team grouping logic
  const teamGroups = [teamMembers.slice(0, 3), teamMembers.slice(3, 6)];
  const currentTeam = teamGroups[activeGroup];

  // Professional auto-rotation with smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveGroup(prev => prev === 0 ? 1 : 0);
        setIsTransitioning(false);
      }, 200);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Sophisticated animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95,
      filter: "blur(4px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 25,
        duration: 0.8
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      filter: "blur(2px)",
      transition: { 
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  // Professional group switching function
  const switchGroup = (groupIndex) => {
    if (groupIndex !== activeGroup && !isTransitioning) {
      setIsTransitioning(true);
      setFocusedMember(null);
      setTimeout(() => {
        setActiveGroup(groupIndex);
        setIsTransitioning(false);
      }, 150);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-black relative overflow-hidden py-24"
    >
      {/* Pure black background with minimal subtle elements for depth */}
      <div className="absolute inset-0">
        {/* Subtle depth indicators - very minimal */}
        <div className="absolute top-1/4 left-1/4 w-px h-px bg-gray-800 rounded-full opacity-60" />
        <div className="absolute top-3/4 right-1/3 w-px h-px bg-gray-800 rounded-full opacity-40" />
        <div className="absolute bottom-1/4 left-2/3 w-px h-px bg-gray-800 rounded-full opacity-50" />
        
        {/* Ultra-subtle grid for professional depth */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Executive-level header design */}
        <motion.div 
          style={{ opacity: headerOpacity, y: headerY }}
          className="text-center mb-20"
        >
          {/* Professional department tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center mb-8"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-600 mr-4" />
            <span className="text-gray-400 text-sm font-medium tracking-[0.2em] uppercase">
              Leadership Team
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-600 ml-4" />
          </motion.div>
          
          {/* Sophisticated typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-light text-white mb-6 tracking-[-0.02em]"
          >
            Meet Our
            <span className="font-normal bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent ml-4">
              Experts
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed font-light"
          >
            The professionals driving innovation and excellence in every project
          </motion.p>
        </motion.div>

        {/* Minimal, professional navigation */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center space-x-8">
            {teamGroups.map((_, groupIndex) => (
              <div key={groupIndex} className="flex items-center space-x-3">
                <motion.button
                  onClick={() => switchGroup(groupIndex)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeGroup === groupIndex
                      ? 'bg-white shadow-lg shadow-white/25'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  disabled={isTransitioning}
                />
                {groupIndex < teamGroups.length - 1 && (
                  <div className="w-16 h-px bg-gradient-to-r from-gray-600 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Professional team cards - truly floating */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-3 gap-12"
            >
              {currentTeam.map((member, index) => (
                <motion.div
                  key={member.id}
                  variants={cardVariants}
                  className="group relative"
                  onHoverStart={() => setFocusedMember(member.id)}
                  onHoverEnd={() => setFocusedMember(null)}
                >
                  {/* Professional card container */}
                  <div className="relative">
                    {/* Subtle floating shadow */}
                    <div className="absolute inset-0 bg-black rounded-2xl transform translate-y-4 opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" />
                    
                    {/* Main card */}
                    <motion.div
                      className="relative bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-gray-700/70 transition-all duration-500"
                      whileHover={{ 
                        y: -8,
                        transition: { type: "spring", stiffness: 400, damping: 25 }
                      }}
                    >
                      {/* Subtle accent line */}
                      <div 
                        className="absolute top-0 left-8 right-8 h-px opacity-60"
                        style={{ backgroundColor: member.accentColor }}
                      />
                      
                      {/* Professional profile section */}
                      <div className="text-center mb-8">
                        {/* Minimalist profile placeholder */}
                        <motion.div 
                          className="relative w-24 h-24 mx-auto mb-6"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div 
                            className="w-full h-full rounded-full border-2 flex items-center justify-center relative overflow-hidden bg-gray-800/50"
                            style={{ borderColor: `${member.accentColor}30` }}
                          >
                            {/* Professional question mark */}
                            <span 
                              className="text-2xl font-light opacity-80"
                              style={{ color: member.accentColor }}
                            >
                              ?
                            </span>
                            
                            {/* Subtle rotating ring */}
                            <motion.div
                              className="absolute inset-0 rounded-full border border-transparent"
                              style={{ 
                                borderImage: `linear-gradient(45deg, ${member.accentColor}40, transparent, ${member.accentColor}20) 1`
                              }}
                              animate={{ rotate: 360 }}
                              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            />
                          </div>
                        </motion.div>

                        {/* Professional information hierarchy */}
                        <motion.div
                          animate={focusedMember === member.id ? { y: -2 } : { y: 0 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <h3 className="text-xl font-medium text-white mb-2 tracking-wide">
                            {member.name}
                          </h3>
                          <p 
                            className="text-sm font-medium mb-2 tracking-wider"
                            style={{ color: member.accentColor }}
                          >
                            {member.role}
                          </p>
                          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">
                            {member.department}
                          </p>
                        </motion.div>
                      </div>

                      {/* Contact information */}
                      <motion.div 
                        className="border-t border-gray-800/50 pt-6"
                        animate={focusedMember === member.id ? { opacity: 1 } : { opacity: 0.8 }}
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <div 
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: member.accentColor }}
                          />
                          <span className="text-gray-400 text-sm font-light">
                            {member.email}
                          </span>
                        </div>
                      </motion.div>

                      {/* Subtle hover glow */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        animate={focusedMember === member.id ? {
                          boxShadow: `0 0 40px ${member.accentColor}15`
                        } : {}}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Professional call-to-action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.button
            onClick={() => switchGroup(activeGroup === 0 ? 1 : 0)}
            className="inline-flex items-center space-x-3 px-6 py-3 border border-gray-700/50 text-gray-300 hover:text-white hover:border-gray-600/50 rounded-full transition-all duration-300 text-sm font-medium tracking-wide"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isTransitioning}
          >
            <span>{activeGroup === 0 ? 'View Team 2' : 'View Team 1'}</span>
            <motion.svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;