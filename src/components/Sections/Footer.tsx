import { motion } from 'framer-motion';
import { ArrowUp, Heart, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/data/portfolio';

export default function Footer() {
  const { personal, social } = portfolioData;
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', url: social.linkedin, icon: 'LI' },
    { name: 'GitHub', url: social.github, icon: 'GH' },
    { name: 'Email', url: social.email, icon: 'EM' },
    { name: 'Twitter', url: social.twitter, icon: 'TW' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="relative overflow-hidden bg-surface/30 border-t border-surface-border">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-surface/50 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container-responsive section-padding relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-heading-lg font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-4">
                    {personal.name}
                  </h3>
                  <p className="text-body text-muted-foreground max-w-md">
                    {personal.title} passionate about creating innovative solutions
                    and building scalable applications that make a difference.
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-body-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Email:</span> {personal.email}
                  </p>
                  <p className="text-body-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Location:</span> {personal.location}
                  </p>
                  <p className="text-body-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Status:</span> 
                    <span className="text-accent"> Available for new opportunities</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-heading-sm font-semibold mb-6">Quick Links</h4>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </motion.div>

            {/* Connect */}
            <motion.div variants={itemVariants}>
              <h4 className="text-heading-sm font-semibold mb-6">Connect</h4>
              <div className="space-y-4">
                <p className="text-body-sm text-muted-foreground mb-4">
                  Let's stay connected and explore opportunities together.
                </p>
                
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-surface border border-surface-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
                      title={`Connect on ${social.name}`}
                    >
                      <span className="text-xs font-bold group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </span>
                    </motion.a>
                  ))}
                </div>

                <div className="pt-4">
                  <Button
                    onClick={() => {
                      const element = document.querySelector('#contact');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="btn-accent w-full"
                  >
                    Start a Conversation
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div variants={itemVariants}>
            <div className="pt-8 border-t border-surface-border">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Copyright */}
                <div className="flex items-center gap-2 text-body-sm text-muted-foreground">
                  <span>© {currentYear} {personal.name}.</span>
                </div>


              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}