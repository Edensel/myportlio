import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { 
  Building2, 
  GraduationCap, 
  Award, 
  Calendar,
  MapPin,
  Download,
  ExternalLink
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { portfolioData } from '@/data/portfolio';

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { experience, education, certifications, personal } = portfolioData;

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

  const TimelineItem = ({ 
    children, 
    isLast = false 
  }: { 
    children: React.ReactNode;
    isLast?: boolean;
  }) => (
    <div className="relative">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-6 top-12 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent" />
      )}
      
      {/* Timeline Dot */}
      <div className="absolute left-4 top-4 w-4 h-4 bg-gradient-to-br from-primary to-primary-glow rounded-full border-4 border-background shadow-medium" />
      
      {/* Content */}
      <div className="pl-16">
        {children}
      </div>
    </div>
  );

  return (
    <section id="resume" className="section-padding bg-surface/30">
      <div className="container-responsive">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-professional/10 border border-professional/20 rounded-full mb-6">
              <span className="text-professional font-medium">Career Journey</span>
            </div>
            <h2 className="text-display-md mb-6">
              Professional{' '}
              <span className="bg-gradient-to-r from-professional to-professional-light bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              A comprehensive overview of my career progression, education,
              and professional certifications that showcase my expertise.
            </p>
            
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Work Experience */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <Card className="card-elevated p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-heading-sm">Work Experience</h3>
                    <p className="text-body-sm text-muted-foreground">
                      Professional career highlights
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  {experience.map((job, index) => (
                    <TimelineItem key={job.company} isLast={index === experience.length - 1}>
                      <motion.div
                        variants={itemVariants}
                        className="space-y-4"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div>
                            <h4 className="text-heading-sm font-semibold">
                              {job.position}
                            </h4>
                            <p className="text-body font-medium text-primary">
                              {job.company}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>{job.duration}</span>
                          </div>
                        </div>

                        <p className="text-body-sm text-muted-foreground">
                          {job.description}
                        </p>

                        <div className="space-y-2">
                          <h5 className="font-medium text-foreground">Key Achievements:</h5>
                          <ul className="space-y-1 text-body-sm text-muted-foreground">
                            {job.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-start gap-2">
                                <span className="text-accent mt-1.5 text-xs">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </TimelineItem>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Education & Certifications */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Education */}
              <Card className="card-elevated p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-glow rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-heading-sm">Education</h3>
                  </div>
                </div>

                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={edu.institution}
                      variants={itemVariants}
                      className="space-y-2"
                    >
                      <h4 className="font-semibold text-foreground">
                        {edu.degree}
                      </h4>
                      <p className="text-body-sm text-primary font-medium">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>

                    </motion.div>
                  ))}
                </div>
              </Card>

              {/* Certifications */}
              <Card className="card-elevated p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-professional to-professional-light rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-heading-sm">Certifications</h3>
                  </div>
                </div>

                <div className="space-y-6">
                  {certifications.map((cert) => (
                    <motion.div
                      key={cert.id}
                      variants={itemVariants}
                      className="flex items-start justify-between group cursor-pointer"
                    >
                      <div className="space-y-1 flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {cert.name}
                        </h4>
                        <p className="text-body-sm text-muted-foreground">
                          {cert.issuer}
                        </p>

                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1 flex-shrink-0 ml-2" />
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-body-sm text-muted-foreground text-center">
                    Continuously pursuing new certifications to stay current
                    with industry standards and best practices.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}