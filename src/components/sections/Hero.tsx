import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-dots-pattern opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-8 sm:px-10 lg:px-12 relative z-10 lg:pl-24">
        <div className="max-w-5xl mx-auto lg:mx-0 text-left">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 mt-32 leading-tight">
              Your Partner for{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Business Solutions
              </span>
            </h1>
          </motion.div>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl leading-relaxed"
          >
            We transform your ideas into powerful digital solutions. From custom
            software development to comprehensive business automation, we
            deliver excellence at every step.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="group px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("services")}
                className="group px-8 py-6 text-lg font-semibold border-2 hover:bg-accent transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Explore Services
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-20 mb-24 pt-12 border-t border-border/50"
          >
            {[
              { label: "Projects Completed", value: "500+" },
              { label: "Happy Clients", value: "200+" },
              { label: "Years Experience", value: "10+" },
              { label: "Team Members", value: "50+" },
            ].map((stat, index) => (
              <div key={index} className="text-left">
                <motion.div
                  className="inline-block transform-gpu"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="text-3xl sm:text-4xl font-bold text-primary mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
