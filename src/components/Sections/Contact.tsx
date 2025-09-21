import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { portfolioData } from '@/data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { personal } = portfolioData;

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission - In real implementation, you would integrate with EmailJS or Formspree
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you within 24 hours.",
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      description: 'Send me an email anytime'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone}`,
      description: 'Call during business hours'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personal.location,
      href: `https://maps.google.com/?q=${encodeURIComponent(personal.location)}`,
      description: 'Based in Nairobi, Kenya'
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: '< 24 hours',
      href: null,
      description: 'Typical response time'
    }
  ];

  return (
    <section id="contact" className="section-padding">
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
              <span className="text-accent font-medium">Get In Touch</span>
            </div>
            <h2 className="text-display-md mb-6">
              Let's Work{' '}
              <span className="bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your ideas to life? I'd love to hear about your project
              and discuss how we can create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-heading-lg mb-6">Get In Touch</h3>
                <p className="text-body text-muted-foreground mb-8">
                  I'm always interested in new opportunities, whether it's a 
                  full-time role, freelance project, or just a chat about technology.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={info.label}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      className="group"
                    >
                      <Card className="card-elevated p-4 group-hover:shadow-glow transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-glow rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-foreground">
                              {info.label}
                            </p>
                            {info.href ? (
                              <a
                                href={info.href}
                                className="text-primary hover:text-primary-glow transition-colors duration-300"
                                target={info.href.startsWith('http') ? '_blank' : undefined}
                                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-primary">{info.value}</p>
                            )}
                            <p className="text-body-sm text-muted-foreground">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              {/* Availability Status */}
              <motion.div variants={itemVariants}>
                <Card className="card-elevated p-6 bg-gradient-to-r from-accent/5 to-accent-glow/5 border border-accent/20">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <h4 className="font-semibold text-foreground">
                      Currently Available
                    </h4>
                  </div>
                  <p className="text-body-sm text-muted-foreground">
                    I'm currently open to new opportunities and interesting projects.
                    Let's discuss how I can help bring your vision to life.
                  </p>
                </Card>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <Card className="card-elevated p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-heading-sm">Send Message</h3>
                    <p className="text-body-sm text-muted-foreground">
                      Fill out the form below and I'll get back to you soon
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="bg-surface/50 border-surface-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-surface/50 border-surface-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="bg-surface/50 border-surface-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                      rows={6}
                      required
                      className="bg-surface/50 border-surface-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-body-sm text-muted-foreground text-center">
                    By sending this message, you agree that I may contact you regarding
                    your inquiry. I respect your privacy and won't spam you.
                  </p>
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}