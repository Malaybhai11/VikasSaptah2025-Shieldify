'use client';

import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Malay Raval',
    role: 'Lead Developer',
    image: '/images/team/malay.jpg',
  },
  {
    name: 'Bhagirathsinh Rana',
    role: 'Security Specialist',
    image: '/images/team/bhagirathsinh.jpg',
  },
  {
    name: 'Vivek Pankhaniya',
    role: 'AI/ML Engineer',
    image: '/images/team/vivek.jpg',
  },
  {
    name: 'Dev Patel',
    role: 'Frontend Developer',
    image: '/images/team/dev.jpg',
  },
  {
    name: 'Tisha Daudra',
    role: 'UI/UX Designer',
    image: '/images/team/tisha.jpg',
  },
  {
    name: 'Khushi Bosamiya',
    role: 'Project Manager',
    image: '/images/team/khushi.jpg',
  },
];

const TeamSection = () => {
  return (
    <>
      <section className="py-20 bg-gray-50" id="developer-team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Team</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Development Team
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              A dedicated team of experts building the future of AI-powered server protection.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  <div className="aspect-w-1 aspect-h-1 mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                  <p className="mt-2 text-base text-gray-600">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;
