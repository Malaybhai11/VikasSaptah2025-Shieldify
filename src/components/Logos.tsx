'use client';

import { motion } from 'framer-motion';

const logos = [
  { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' },
  { name: 'Microsoft Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg' },
  { name: 'DigitalOcean', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Digital_Ocean_logo.svg' },
  { name: 'Netlify', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Netlify_logo.svg' },
];

const Logos = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-lg text-gray-600 mb-8">Trusted by leading cloud platforms</p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-200"
            >
              <img
                src={logo.logo}
                alt={logo.name}
                className="h-8 w-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;
