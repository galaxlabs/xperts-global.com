import React from 'react';
import { motion } from 'framer-motion';
import {
  Database, Settings, Layers, Mail, Code, Shield,
  TrendingUp, Activity, UserCheck, Zap, Smartphone, Cloud,
} from 'lucide-react';
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SpecializedServices: React.FC = () => {
  const specializedServices = [
    {
      icon: Code,
      title: 'Custom Web Application Development',
      description: 'Build tailored web applications using modern stacks like Node.js, Python, and Vue.js to streamline processes and elevate user experience.',
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Shield,
      title: 'Secure API Development',
      description: 'Design and implement secure, scalable REST and GraphQL APIs for seamless integration between services and applications.',
      color: 'text-red-600',
      bg: 'bg-red-50',
      gradient: 'from-red-500 to-pink-500',
    },
    {
      icon: TrendingUp,
      title: 'Business Intelligence Dashboards',
      description: 'Create dynamic BI dashboards using tools like Metabase, Superset, and Frappe Charts for data-driven decision making.',
      color: 'text-yellow-600',
      bg: 'bg-yellow-50',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Cloud,
      title: 'Cloud Deployment & DevOps',
      description: 'Automate deployments using Docker, GitHub Actions, and CI/CD pipelines with hosting on AWS, DigitalOcean, or Render.',
      color: 'text-cyan-600',
      bg: 'bg-cyan-50',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Smartphone,
      title: 'Progressive Web Apps (PWA)',
      description: 'Develop fast, reliable, and installable web apps with offline access and push notifications using modern PWA standards.',
      color: 'text-teal-600',
      bg: 'bg-teal-50',
      gradient: 'from-teal-500 to-green-500',
    },
    {
      icon: Zap,
      title: 'Automation & Workflow Engineering',
      description: 'Design automated business workflows using tools like Zapier, Frappe Workflows, and custom Python scripts.',
      color: 'text-pink-600',
      bg: 'bg-pink-50',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: UserCheck,
      title: 'Role-Based Access Control (RBAC)',
      description: 'Implement secure RBAC systems for web and ERP applications with fine-grained permission management.',
      color: 'text-gray-700',
      bg: 'bg-gray-100',
      gradient: 'from-gray-500 to-slate-500',
    },
    {
      icon: Activity,
      title: 'Real-Time Systems & WebSockets',
      description: 'Enable real-time communication and event-driven architectures using Socket.IO and Frappe Realtime APIs.',
      color: 'text-lime-600',
      bg: 'bg-lime-50',
      gradient: 'from-lime-500 to-green-400',
    },
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
      title: 'Frappe Custom Solutions',
      description: 'ERPNext and custom Frappe framework development for comprehensive business management solutions tailored to your industry needs.',
      color: 'text-green-600',
      bg: 'bg-green-50',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: Mail,
      title: 'HTML Email Design',
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
 
    <section id="specialized-services" className="py-24 bg-white relative">
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
        <span className="text-primary">Specialized</span> Solutions
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        Expert implementation and customization of industry-leading platforms and frameworks
      </p>
    </motion.div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 m-8">
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
              {/* Gradient Hover Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              <CardHeader className="pb-6 relative z-10">
                <div
                  className={`w-20 h-20 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-md`}
                >
                  <IconComponent className={`h-10 w-10 ${service.color}`} />
                </div>
                <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0 relative z-10 flex flex-col justify-between">
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
