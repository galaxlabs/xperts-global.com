import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Cloud,
  Palette,
  Settings,
  Server,
  Layers,
  Smartphone,
  Wrench,
  Shield,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code2,
      title: 'Software Solutions',
      description: 'Custom software development tailored to your business needs with modern technologies.',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Cloud,
      title: 'SaaS Development',
      description: 'Scalable Software-as-a-Service platforms with robust architecture and security.',
      color: 'text-green-600',
      bg: 'bg-green-50',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: Palette,
      title: 'Design Services',
      description: 'Logo design, UI/UX development, and comprehensive brand identity solutions.',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Settings,
      title: 'CRM Customizations',
      description: 'Tailored CRM solutions to streamline your customer relationship management.',
      color: 'text-orange-600',
      bg: 'bg-orange-50',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Server,
      title: 'DevOps & Infrastructure',
      description: 'Cloud infrastructure, CI/CD pipelines, and automated deployment solutions.',
      color: 'text-teal-600',
      bg: 'bg-teal-50',
      gradient: 'from-teal-500 to-blue-500',
    },
    {
      icon: Layers,
      title: 'Full-stack Development',
      description: 'End-to-end web application development with modern frameworks and databases.',
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      color: 'text-pink-600',
      bg: 'bg-pink-50',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Wrench,
      title: 'Custom Software',
      description: 'Bespoke software solutions designed specifically for your unique requirements.',
      color: 'text-cyan-600',
      bg: 'bg-cyan-50',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Shield,
      title: 'Security Services',
      description: 'Comprehensive security audits, penetration testing, and secure development practices.',
      color: 'text-red-600',
      bg: 'bg-red-50',
      gradient: 'from-red-500 to-pink-500',
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // <section id="services" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
<section id="services" className="py-24 bg-white">
  <div className="container mx-auto px-6 lg:px-8 rounded-3xl py-16 lg:py-24 shadow-lg">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Our <span className="text-primary">Services</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        We offer comprehensive technology solutions to help your business thrive in the digital age
      </p>
    </motion.div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className={`rounded-2xl shadow-md p-6 hover:shadow-xl transition-all ${service.bg}`}
          >
            {/* Icon */}
            <div className={`w-14 h-14 flex items-center justify-center rounded-xl ${service.bg} mb-5`}>
              <Icon className={`w-7 h-7 ${service.color}`} />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-3 text-gray-900">{service.title}</h3>

            {/* Description */}
            <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>

            {/* Learn More */}
            <Button
              variant="ghost"
              onClick={scrollToContact}
              className="p-0 h-auto font-semibold text-primary hover:text-primary/80"
            >
              Learn More →
            </Button>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>


  );
};

export default Services;
