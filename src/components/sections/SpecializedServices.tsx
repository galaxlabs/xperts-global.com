import React from 'react';
import { motion } from 'framer-motion';
import { Database, Settings, Layers, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SpecializedServices: React.FC = () => {
  const specializedServices = [
    {
      icon: Database,
      title: 'Salesforce Integration',
      description: 'Complete Salesforce implementation, customization, and integration services to optimize your customer relationship management and sales processes.',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Settings,
      title: 'Odoo Implementation',
      description: 'Full-scale Odoo ERP implementation and customization for streamlined business operations, inventory management, and financial tracking.',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Layers,
      title: 'Frappe Solutions',
      description: 'ERPNext and custom Frappe framework development for comprehensive business management solutions tailored to your industry needs.',
      color: 'text-green-600',
      bg: 'bg-green-50',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: Mail,
      title: 'Email HTML Design',
      description: 'Professional email template design and development with responsive layouts, cross-client compatibility, and high conversion rates.',
      color: 'text-orange-600',
      bg: 'bg-orange-50',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">Specialized</span> Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert implementation and customization of industry-leading platforms and frameworks
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {specializedServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <Card className="h-full group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-card/80 backdrop-blur-sm overflow-hidden relative">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <CardHeader className="pb-6 relative z-10">
                    <div className={`w-20 h-20 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-md`}>
                      <IconComponent className={`h-10 w-10 ${service.color}`} />
                    </div>
                    <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 relative z-10">
                    <CardDescription className="text-muted-foreground mb-8 leading-relaxed text-base">
                      {service.description}
                    </CardDescription>
                    <Button
                      onClick={scrollToContact}
                      className={`bg-gradient-to-r ${service.gradient} hover:shadow-lg transition-all duration-300 text-white border-0 group-hover:scale-105`}
                    >
                      Contact Us
                    </Button>
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

export default SpecializedServices;