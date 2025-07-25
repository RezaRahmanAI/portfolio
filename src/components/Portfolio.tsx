import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { Filter, Grid, List } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Get unique technologies for filter
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  );
  
  // Filter projects based on selected technology
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter));

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-background via-background-alt to-background" ref={ref}>
      <div className="container-custom">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6"
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            Featured Work
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary text-transparent bg-clip-text"
          >
            Portfolio Projects
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-light max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Explore a curated selection of my recent projects that showcase technical expertise, 
            creative problem-solving, and modern development practices
          </motion.p>
        </div>
        
        {/* Enhanced Controls */}
        <motion.div 
          className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Filters */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-text-light">
              <Filter size={18} />
              <span className="font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === 'all' 
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg scale-105' 
                    : 'bg-background-alt hover:bg-primary/10 hover:text-primary border border-background-alt hover:border-primary/20'
                }`}
              >
                All Projects ({projects.length})
              </button>
              
              {allTechnologies.slice(0, 5).map(tech => (
                <button
                  key={tech}
                  onClick={() => setFilter(tech)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    filter === tech 
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg scale-105' 
                      : 'bg-background-alt hover:bg-primary/10 hover:text-primary border border-background-alt hover:border-primary/20'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
          
          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 bg-background-alt rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-all duration-300 ${
                viewMode === 'grid' 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-text-light hover:text-primary'
              }`}
              aria-label="Grid view"
            >
              <Grid size={18} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-all duration-300 ${
                viewMode === 'list' 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-text-light hover:text-primary'
              }`}
              aria-label="List view"
            >
              <List size={18} />
            </button>
          </div>
        </motion.div>
        
        {/* Projects Display */}
        <motion.div 
          className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8' 
              : 'flex flex-col gap-6'
          }`}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              viewMode={viewMode}
            />
          ))}
        </motion.div>
        
        {/* No Results State */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-background-alt rounded-full flex items-center justify-center">
              <Filter className="w-10 h-10 text-text-light" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-text-light mb-6">Try adjusting your filter to see more projects</p>
            <button
              onClick={() => setFilter('all')}
              className="btn-primary"
            >
              Show All Projects
            </button>
          </motion.div>
        )}
        
        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
            <p className="text-text-light mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on innovative projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <a 
              href="#contact" 
              className="btn-primary inline-flex items-center gap-2"
            >
              Start a Conversation
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;