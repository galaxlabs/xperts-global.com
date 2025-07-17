import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/hooks/use-toast';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Newsletter subscription:', email);
      
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      
      setIsSubscribed(true);
      setEmail('');
      
      // Reset success state after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const quickLinks = [
    { label: 'About Us', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'Technologies', id: 'tech-stack' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  const services = [
    'Software Development',
    'SaaS Solutions',
    'Mobile Apps',
    'UI/UX Design',
    'DevOps',
    'Consulting',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="bg-background border-t border-border relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-2 mb-6">
                  <div className="p-2 bg-primary rounded-lg">
                    <Code2 className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="text-xl font-bold text-foreground">DevAgency</span>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Your trusted partner for digital transformation. We create innovative solutions 
                  that drive business growth and success.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        aria-label={social.label}
                      >
                        <IconComponent className="h-5 w-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <motion.button
                        onClick={() => scrollToSection(link.id)}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                        whileHover={{ x: 5 }}
                      >
                        {link.label}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-6">Services</h3>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index}>
                      <motion.span 
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        {service}
                      </motion.span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info & Newsletter */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-6">Contact</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">operations@xperts-global.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">+1 (813) 652-5614</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      123 Tech Street<br />Silicon Valley, CA
                    </span>
                  </div>
                </div>

                {/* Newsletter */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Newsletter</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Stay updated with our latest news and insights.
                  </p>
                  {isSubscribed ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center space-x-2 text-green-600"
                    >
                      <CheckCircle className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">Successfully subscribed!</span>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full"
                        required
                      />
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button 
                          type="submit" 
                          size="sm"
                          disabled={isSubmitting}
                          className="w-full"
                        >
                          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                        </Button>
                      </motion.div>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2025 DevAgency. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <motion.a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
              <motion.a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
              >
                Cookie Policy
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;