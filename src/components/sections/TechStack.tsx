import React from 'react';
import { motion } from 'framer-motion';

const TechStack: React.FC = () => {
  const technologies = [
    { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  ];

  return (
    <section id="tech-stack" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Floating Background Shapes (faint, minimal) */}
    
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 lg:pl-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Technology Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work with cutting-edge technologies to deliver robust and scalable solutions
          </p>
        </motion.div>

        {/* Desktop Scrolling Animation */}
        <div className="hidden lg:block relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -100 * technologies.length] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex space-x-12 whitespace-nowrap"
            style={{ width: `${technologies.length * 220}px` }}
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex-shrink-0 flex flex-col items-center space-y-3 
                           bg-white border rounded-2xl px-10 py-6 shadow-md 
                           hover:shadow-xl transition-all duration-300 min-w-[180px]"
              >
                <div className="w-14 h-14 flex items-center justify-center">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-12 h-12 object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="font-semibold text-gray-800 text-center text-lg">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile/Tablet Grid */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex flex-col items-center space-y-3 
                         bg-white border rounded-2xl px-8 py-6 
                         shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                />
              </div>
              <span className="font-semibold text-gray-800 text-center text-sm">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
