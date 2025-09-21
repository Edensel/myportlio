import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Mail, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { portfolioData } from '@/data/portfolio';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { personal } = portfolioData;

  const stats = [
    { number: '8+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '15+', label: 'Technologies' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
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
    <section id="about" className="section-padding bg-surface/30">
      <div className="container-responsive">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="text-primary font-medium">About Me</span>
            </div>
            <h2 className="text-display-md mb-6">
              Passionate Developer with a{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Vision
              </span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              I'm a dedicated full-stack developer and DevOps engineer who loves creating
              innovative solutions that make a difference. With a strong foundation in
              modern technologies and a passion for clean, efficient code.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-heading-lg">My Journey</h3>
                <p className="text-body text-muted-foreground">
                  {personal.bio}
                </p>
                <p className="text-body text-muted-foreground">
                  I believe in continuous learning and staying up-to-date with the latest
                  technologies. My approach combines technical expertise with strong
                  problem-solving skills to deliver solutions that not only work but
                  scale effectively.
                </p>
              </div>

              {/* Contact Info */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-sm">{personal.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm">{personal.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-sm">{personal.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Availability</p>
                    <p className="text-sm">Open to opportunities</p>
                  </div>
                </div>
              </div>

              <Button className="btn-primary">
                Let's Work Together
              </Button>
            </motion.div>

            {/* Stats Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="card-elevated p-6 text-center group-hover:shadow-glow transition-all duration-300">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2"
                    >
                      {stat.number}
                    </motion.div>
                    <p className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}