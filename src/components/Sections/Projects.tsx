import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { portfolioData } from '@/data/portfolio';

const tabs = [
  { id: 'softwareEngineering', label: 'Software Engineering' },
  { id: 'devops', label: 'DevOps' },
  { id: 'devsecops', label: 'DevSecOps' },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('softwareEngineering');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { projects } = portfolioData;

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

  const currentProjects = projects[activeTab as keyof typeof projects];

  return (
    <section id="projects" className="section-padding">
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
              <span className="text-primary font-medium">Portfolio</span>
            </div>
            <h2 className="text-display-md mb-6">
              Featured{' '}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              A showcase of my work across different domains, demonstrating
              technical expertise and problem-solving abilities.
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 p-2 bg-surface/50 rounded-2xl border border-surface-border max-w-2xl mx-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabBackground"
                      className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow rounded-xl"
                      initial={false}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <span className="relative z-10 text-sm sm:text-base">{tab.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="card-elevated overflow-hidden h-full group-hover:shadow-glow transition-all duration-500">
                  {/* Project Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl opacity-50">💻</div>
                    </div>
                    
                    {/* Overlay with links */}
                    <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      {project.github && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-background/80 backdrop-blur-sm"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.live && (
                        <Button
                          size="sm"
                          className="btn-primary"
                          asChild
                        >
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-heading-sm mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-body-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-surface/50 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {project.github && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="p-2"
                            asChild
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4" />
                              <span className="sr-only">View source code</span>
                            </a>
                          </Button>
                        )}
                        {project.live && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="p-2"
                            asChild
                          >
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4" />
                              <span className="sr-only">View live demo</span>
                            </a>
                          </Button>
                        )}
                      </div>

                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}