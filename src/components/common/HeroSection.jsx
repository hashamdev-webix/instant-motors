import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  overlay = true,
  className = '',
}) => {
  return (
    <section className={`relative min-h-[600px] flex items-center overflow-hidden ${className}`}>
      {/* Background */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${overlay ? 'bg-black/50' : ''}`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/90 text-lg md:text-xl mt-4 max-w-2xl"
            >
              {subtitle}
            </motion.p>
          )}
          
          {(primaryButtonText || secondaryButtonText) && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              {primaryButtonText && (
                <Button
                  as="link"
                  to={primaryButtonLink || '#'}
                  variant="primary"
                  size="lg"
                >
                  {primaryButtonText}
                </Button>
              )}
              {secondaryButtonText && (
                <Button
                  as="link"
                  to={secondaryButtonLink || '#'}
                  variant="secondary"
                  size="lg"
                  className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                >
                  {secondaryButtonText}
                </Button>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 bottom-0 w-1/2 h-full hidden lg:block pointer-events-none">
        <div className="absolute right-20 top-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute right-40 bottom-40 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>
    </section>
  );
};

export default HeroSection;