'use client';

import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import MovingTextAnimation from './Movingtext';

// Animation variants for scroll + load
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Hero = () => {
  return (
    <motion.div
      // Fade whole hero on mount
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-[85vh] w-full bg-black flex align-middle justify-center"
    >
      {/* ==== LEFT CONTENT ==== */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="leftdiv h-[75vh] w-[55vw] border-b border-gray-600 rounded-bl-[50px]"
      >
        <div className="flex flex-col justify-center h-full px-6 z-20">
          {/* Title lines with stagger */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-white font-extrabold text-4xl md:text-6xl lg:text-5xl drop-shadow-lg mb-3"
          >
            <span className="font-exo2 text-5xl block">The</span>
            <span className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-800 bg-clip-text text-transparent font-exo2">
              AI-powered
            </span>
          </motion.h1>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.1 }}
            className="text-white font-exo2 font-extrabold text-4xl md:text-6xl lg:text-4xl leading-tight drop-shadow-lg mb-1 z-20"
          >
            Web Application
          </motion.h1>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2 }}
            className="relative inline-block text-white font-black text-5xl leading-tight mt-2 tracking-tight drop-shadow-2xl"
          >
            <span className="relative z-10 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-600 bg-clip-text text-transparent font-audiowide">
              Firewall
            </span>

            {/* Animated underline */}
            <motion.svg
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1 }}
              className="absolute left-0 bottom-[-0.25rem] w-[55%] h-6"
              viewBox="0 0 320 40"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M5 30 Q90 5 160 28 T315 25"
                stroke="currentColor"
                strokeWidth="6"
                className="text-blue-500"
              />
            </motion.svg>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.3 }}
            className="text-gray-300 text-sm mt-4 max-w-lg font-exo2"
          >
            Shieldify – The AI-Powered Web Appilcation Firewall
            Always-on protection for your servers.
            Real-time AI threat detection. Zero friction.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.4 }}
            className="btncontainer"
          >
            <button className="mt-6 px-7 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 font-exo2 text-white hover:scale-105 transition-transform duration-300">
              Get API Key
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* ==== RIGHT 3D SECTION ==== */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.2 }}
        className="rightdiv relative h-[75vh] w-[70vw] p-6 rounded-br-[50px] flex items-center justify-center overflow-hidden hover:cursor-pointer border-b border-gray-700 font-exo2 font-extrabold"
      >
        {/* Spline 3D scene with smooth scale on scroll */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-full"
        >
          <Spline
            scene="https://prod.spline.design/vl3A6gvfbzycit9g/scene.splinecode"
            className="rounded-[40px] h-full w-[70vw] z-10 transition-transform duration-500"
          />
        </motion.div>

        {/* Floating text box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="divtxt3 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] absolute bottom-8 right-5 text-white z-20 bg-transparent p-4 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 hover:scale-[1.05] transition-transform duration-500"
        >
          <h5>Bunkerweb on steroids</h5>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
