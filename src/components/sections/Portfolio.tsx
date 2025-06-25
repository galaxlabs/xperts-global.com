import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Portfolio: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A comprehensive e-commerce solution built with React and Node.js, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard. The platform handles thousands of transactions daily and includes advanced analytics.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
      year: '2024',
    },
    {
      id: 2,
      title: 'Healthcare Management System',
      description: 'A complete healthcare platform designed for modern medical practices. Features include patient management, appointment scheduling, medical records, telemedicine capabilities, and HIPAA-compliant data handling.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      year: '2024',
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      description: 'A secure mobile banking application with biometric authentication, real-time transactions, budget tracking, and investment portfolio management. Built with React Native for cross-platform compatibility.',
      image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['React Native', 'Firebase', 'Node.js', 'Plaid API'],
      liveUrl: '#',
      githubUrl: '#',
      year: '2023',
    },
    {
      id: 4,
      title: 'AI-Powered Analytics Dashboard',
      description: 'An intelligent business analytics platform that uses machine learning to provide predictive insights, automated reporting, and data visualization. Helps businesses make data-driven decisions with confidence.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['Python', 'TensorFlow', 'React', 'D3.js', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      year: '2023',
    },
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-background overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped businesses transform their digital presence
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const yOffset = useTransform(scrollYProgress, [0, 1], [0, -50 * (index + 1)]);
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {project.year}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Project #{String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-sm px-3 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-4 pt-4">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button asChild>
                          <a href={project.liveUrl} className="flex items-center gap-2">
                            <ExternalLink className="w-4 h-4" />
                            View Live
                          </a>
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" asChild>
                          <a href={project.githubUrl} className="flex items-center gap-2">
                            <Github className="w-4 h-4" />
                            Source Code
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </div>

                  {/* Image Card */}
                  <motion.div
                    style={{ y: yOffset }}
                    className={`relative ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                  >
                    <div className="relative group">
                      {/* Stacked Cards Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl transform rotate-3 scale-105 opacity-30 group-hover:rotate-6 transition-transform duration-500"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl transform -rotate-2 scale-102 opacity-40 group-hover:-rotate-4 transition-transform duration-500"></div>
                      
                      {/* Main Card */}
                      <motion.div
                        whileHover={{ y: -10, rotateY: 5 }}
                        transition={{ duration: 0.3 }}
                        className="relative bg-card rounded-2xl overflow-hidden shadow-2xl border"
                      >
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        
                        {/* Overlay Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                          <p className="text-sm opacity-90">Click to explore this project</p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-12 border border-primary/20">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your ideas and create something amazing together. Our team is ready to bring your vision to life.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-6 text-lg font-semibold"
              >
                Start Your Project
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;