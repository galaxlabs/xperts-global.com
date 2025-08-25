import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logo from '@/assets/logo.png'; // ✅ correct path if using alias `@`


const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'Technologies', id: 'tech-stack' },
    { label: 'Specialized', id: 'specialized-services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section with better detection
      const sections = navItems.map(item => item.id);
      let currentSection = 'hero';

      // Get all section elements and their positions
      const sectionElements = sections.map(id => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id,
            top: rect.top + window.scrollY,
            bottom: rect.top + window.scrollY + rect.height,
            element
          };
        }
        return null;
      }).filter(Boolean);

      // Find the section that's currently most visible
      const scrollPosition = window.scrollY + window.innerHeight / 3; // Use top third of viewport

      for (let i = 0; i < sectionElements.length; i++) {
        const section = sectionElements[i];
        const nextSection = sectionElements[i + 1];
        
        if (section) {
          // If we're in the last section or before the next section starts
          if (!nextSection || scrollPosition < nextSection.top) {
            if (scrollPosition >= section.top) {
              currentSection = section.id;
              break;
            }
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  // Calculate individual section progress
  const getSectionProgress = (sectionIndex: number) => {
    const currentSectionIndex = navItems.findIndex(item => item.id === activeSection);
    
    if (sectionIndex < currentSectionIndex) {
      return 100; // Completed sections
    } else if (sectionIndex === currentSectionIndex) {
      // Current section progress
      const sectionElement = document.getElementById(activeSection);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionHeight = rect.height;
        const scrollInSection = Math.max(0, window.scrollY - sectionTop);
        const sectionProgress = Math.min(100, (scrollInSection / sectionHeight) * 100);
        return sectionProgress;
      }
      return 0;
    } else {
      return 0; // Future sections
    }
  };

  return (
    <>
      {/* Progress Bar - Fixed Position */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[90] hidden lg:block">
        <div className="relative">
          {/* Background Line */}
          <div className="w-1 h-96 bg-border/30 rounded-full"></div>
          
          {/* Section Progress Lines */}
          {navItems.map((item, index) => {
            const sectionHeight = 384 / navItems.length; // 384px = h-96
            const yPosition = index * sectionHeight;
            const progress = getSectionProgress(index);
            
            return (
              <motion.div
                key={`progress-${item.id}`}
                className="absolute left-0 w-1 bg-gradient-to-b from-primary via-blue-500 to-purple-500 rounded-full origin-top"
                style={{
                  top: `${yPosition}px`,
                  height: `${(progress / 100) * sectionHeight}px`,
                }}
                initial={{ height: 0 }}
                animate={{ height: `${(progress / 100) * sectionHeight}px` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            );
          })}
          
          {/* Section Indicators */}
          <div className="absolute -left-2 top-0 space-y-0 flex flex-col justify-between h-96">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "w-4 h-4 rounded-full border-2 transition-all duration-300 relative group",
                  activeSection === item.id
                    ? "bg-primary border-primary scale-125"
                    : "bg-background border-border/50 hover:border-primary/50"
                )}
                whileHover={{ scale: 1.2 }}
              >
                {/* Section Label - Only on Hover */}
                <div className={cn(
                  "absolute left-8 top-1/2 -translate-y-1/2 px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none bg-background border border-border text-foreground shadow-lg"
                )}>
                  {item.label}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] transition-all duration-300',
          isScrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
            : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              <img
                src={logo}
                alt="Xperts Global Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="text-xl font-bold text-foreground"></span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "text-muted-foreground hover:text-foreground transition-colors font-medium relative",
                    activeSection === item.id && "text-foreground"
                  )}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => scrollToSection('contact')}
                className="hidden sm:inline-flex"
              >
                Get Quote
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-md hover:bg-accent transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border"
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={cn(
                        "text-left text-muted-foreground hover:text-foreground transition-colors font-medium py-2",
                        activeSection === item.id && "text-foreground font-semibold"
                      )}
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button
                    onClick={() => scrollToSection('contact')}
                    className="mt-4 w-full sm:hidden"
                  >
                    Get Quote
                  </Button>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;