import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code, 
  Cloud, 
  Shield, 
  Server, 
  Zap, 
  Headphones,
  ArrowRight,
  Check
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/data/portfolio';

const iconMap = {
  Code,
  Cloud,
  Shield,
  Server,
  Zap,
  Headphones,
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { services } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="section-padding">
      <div className="container-responsive">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <span className="text-accent font-medium">Services</span>
            </div>
            <h2 className="text-display-md mb-6">
              What I{' '}
              <span className="bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
                Offer
              </span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive development and infrastructure services to help your
              business grow and scale efficiently.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Card className="card-elevated h-full p-8 group-hover:shadow-glow transition-all duration-500 relative overflow-hidden">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-glow"
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </motion.div>

                      {/* Content */}
                      <h3 className="text-heading-sm mb-4 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-body-sm text-muted-foreground mb-6">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ delay: (index * 0.1) + (featureIndex * 0.1) }}
                            className="flex items-center gap-3 text-sm text-muted-foreground"
                          >
                            <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                              <Check className="w-3 h-3 text-accent" />
                            </div>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <Button
                        variant="ghost"
                        className="group/btn p-0 h-auto text-primary hover:text-primary-glow font-medium"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>


        </motion.div>
      </div>
    </section>
  );
}