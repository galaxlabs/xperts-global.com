import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  company: z.string().optional(),
  requirements: z.string().min(10, 'Please describe your project requirements'),
  budget: z.string().min(1, 'Please select a budget range'),
  timeline: z.string().min(1, 'Please select a timeline'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', data);
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      setIsSubmitted(true);
      reset();
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'hello@devagency.com',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+1 (555) 123-4567',
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: '123 Tech Street, Silicon Valley, CA',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      info: 'Mon-Fri: 9AM-6PM PST',
      color: 'text-orange-600',
      bg: 'bg-orange-50',
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
          style={{
            backgroundImage: 'linear-gradient(45deg, currentColor 25%, transparent 25%), linear-gradient(-45deg, currentColor 25%, transparent 25%), linear-gradient(45deg, transparent 75%, currentColor 75%), linear-gradient(-45deg, transparent 75%, currentColor 75%)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
          }}
        />
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
            Let's <span className="text-primary">Work Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Get in touch and let's discuss your project requirements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      Message Sent Successfully!
                    </>
                  ) : (
                    'Send us a message'
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <p className="text-muted-foreground">
                      Thank you for your message! We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Input
                          placeholder="Your Name *"
                          {...register('name')}
                          className={errors.name ? 'border-red-500' : ''}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Email Address *"
                          {...register('email')}
                          className={errors.email ? 'border-red-500' : ''}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Input
                          placeholder="Phone Number *"
                          {...register('phone')}
                          className={errors.phone ? 'border-red-500' : ''}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                      <div>
                        <Input
                          placeholder="Company (Optional)"
                          {...register('company')}
                        />
                      </div>
                    </div>

                    <div>
                      <Textarea
                        placeholder="Project Requirements *"
                        rows={4}
                        {...register('requirements')}
                        className={errors.requirements ? 'border-red-500' : ''}
                      />
                      {errors.requirements && (
                        <p className="text-red-500 text-sm mt-1">{errors.requirements.message}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Select onValueChange={(value) => setValue('budget', value)}>
                          <SelectTrigger className={errors.budget ? 'border-red-500' : ''}>
                            <SelectValue placeholder="Budget Range *" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5k-15k">$5K - $15K</SelectItem>
                            <SelectItem value="15k-50k">$15K - $50K</SelectItem>
                            <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                            <SelectItem value="100k+">$100K+</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.budget && (
                          <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>
                        )}
                      </div>
                      <div>
                        <Select onValueChange={(value) => setValue('timeline', value)}>
                          <SelectTrigger className={errors.timeline ? 'border-red-500' : ''}>
                            <SelectValue placeholder="Timeline *" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">ASAP</SelectItem>
                            <SelectItem value="1-3months">1-3 Months</SelectItem>
                            <SelectItem value="3-6months">3-6 Months</SelectItem>
                            <SelectItem value="6months+">6+ Months</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.timeline && (
                          <p className="text-red-500 text-sm mt-1">{errors.timeline.message}</p>
                        )}
                      </div>
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-6 text-lg font-semibold"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </motion.div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We're here to help bring your ideas to life. Contact us through any of the channels below, 
                and our team will get back to you promptly.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border"
                  >
                    <div className={`p-3 rounded-lg ${item.bg} flex-shrink-0`}>
                      <IconComponent className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.info}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Additional CTA */}
            <motion.div 
              className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-xl p-8 border border-primary/20"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-xl font-bold text-foreground mb-4">
                Ready to Start Your Project?
              </h4>
              <p className="text-muted-foreground mb-6">
                Schedule a free consultation call to discuss your requirements and get a custom quote.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-primary hover:bg-primary/90">
                  Schedule Free Consultation
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;