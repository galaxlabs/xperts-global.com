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
    <section id="services" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Animated Background Lines */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-border/30"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive technology solutions to help your business thrive in the digital age
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="h-full group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 shadow-md bg-card/80 backdrop-blur-sm overflow-hidden relative">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <CardHeader className="pb-4 relative z-10">
                    <motion.div 
                      className={`w-16 h-16 rounded-xl ${service.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <IconComponent className={`h-8 w-8 ${service.color}`} />
                    </motion.div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 relative z-10">
                    <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button
                        variant="ghost"
                        onClick={scrollToContact}
                        className="p-0 h-auto font-semibold text-primary hover:text-primary/80 hover:bg-transparent"
                      >
                        Learn More →
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;