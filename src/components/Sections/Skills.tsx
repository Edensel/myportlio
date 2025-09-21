import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { portfolioData } from '@/data/portfolio';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { skills } = portfolioData;

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

  const SkillBar = ({ skill, index }: { skill: { name: string; level: number }; index: number }) => (
    <motion.div
      variants={itemVariants}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="skill-progress">
        <motion.div
          className="skill-progress-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ 
            duration: 1.5, 
            delay: index * 0.1,
            ease: "easeOut"
          }}
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="section-padding bg-surface/30">
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
              <span className="text-professional font-medium">Skills & Expertise</span>
            </div>
            <h2 className="text-display-md mb-6">
              Technical{' '}
              <span className="bg-gradient-to-r from-professional to-professional-light bg-clip-text text-transparent">
                Proficiency
              </span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and soft skills
              developed through years of hands-on experience and continuous learning.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <motion.div variants={itemVariants}>
              <Card className="card-elevated p-8 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg font-bold">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-heading-sm">Technical Skills</h3>
                    <p className="text-body-sm text-muted-foreground">
                      Core technologies and frameworks
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {skills.technical.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Soft Skills */}
            <motion.div variants={itemVariants}>
              <Card className="card-elevated p-8 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-glow rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg font-bold">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-heading-sm">Soft Skills</h3>
                    <p className="text-body-sm text-muted-foreground">
                      Leadership and communication abilities
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {skills.soft.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index + skills.technical.length} />
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Additional Skills Grid */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-heading-lg text-center mb-12">
              Technologies I Work With
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                'React', 'Node.js', 'Python', 'TypeScript', 'AWS', 'Docker',
                'Kubernetes', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'Next.js',
                'Terraform', 'Jenkins', 'Git', 'Linux', 'Nginx', 'Firebase'
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <Card className="card-elevated p-4 text-center group-hover:shadow-glow transition-all duration-300">
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      💻
                    </div>
                    <p className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      {tech}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Summary */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <Card className="card-elevated p-8 max-w-4xl mx-auto">
              <h3 className="text-heading-md mb-4">
                Always Learning, Always Growing
              </h3>
              <p className="text-body text-muted-foreground mb-6">
                Technology evolves rapidly, and I believe in continuous learning.
                I regularly update my skills through courses, certifications, and
                hands-on projects to stay current with industry best practices.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-medium">Continuous Learning</span>
                </div>
                <div className="bg-accent/10 px-4 py-2 rounded-full">
                  <span className="text-accent font-medium">Best Practices</span>
                </div>
                <div className="bg-professional/10 px-4 py-2 rounded-full">
                  <span className="text-professional font-medium">Industry Standards</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}