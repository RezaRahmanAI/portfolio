import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp, Calendar, Users, Star } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  viewMode?: 'grid' | 'list';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, viewMode = 'grid' }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  if (viewMode === 'list') {
    return (
      <motion.div 
        className="bg-background border border-background-alt rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="relative lg:w-1/3 h-64 lg:h-auto overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-primary hover:bg-white transition-colors"
                aria-label="View Demo"
              >
                <ExternalLink size={16} />
              </a>
              <a 
                href={project.repoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-primary hover:bg-white transition-colors"
                aria-label="View Code"
              >
                <Github size={16} />
              </a>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="flex-1 p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-light leading-relaxed">{project.description}</p>
              </div>
              <div className="flex items-center gap-1 text-accent">
                <Star size={16} className="fill-current" />
                <span className="text-sm font-medium">Featured</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map(tech => (
                <span 
                  key={tech} 
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex items-center justify-between">
              <button 
                onClick={toggleExpand}
                className="flex items-center text-primary font-medium hover:text-primary-dark transition-colors group/btn"
                aria-expanded={isExpanded}
              >
                {isExpanded ? 'Hide Details' : 'View Details'}
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-1"
                >
                  <ChevronDown size={16} />
                </motion.div>
              </button>
              
              <div className="flex gap-3">
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary text-sm px-4 py-2"
                >
                  Live Demo
                </a>
                <a 
                  href={project.repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline text-sm px-4 py-2"
                >
                  View Code
                </a>
              </div>
            </div>
            
            {isExpanded && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 pt-6 border-t border-background-alt"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 bg-error rounded-full"></div>
                      Challenge
                    </h4>
                    <p className="text-sm text-text-light leading-relaxed">{project.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      Solution
                    </h4>
                    <p className="text-sm text-text-light leading-relaxed">{project.solution}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="group relative bg-background border border-background-alt rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Featured Badge */}
      <div className="absolute top-4 left-4 z-10">
        <div className="flex items-center gap-1 px-3 py-1 bg-accent/90 backdrop-blur-sm text-white rounded-full text-xs font-medium">
          <Star size={12} className="fill-current" />
          Featured
        </div>
      </div>
      
      {/* Image Section with Enhanced Overlay */}
      <div className="relative overflow-hidden h-64">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Action Buttons */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ scale: 0.8 }}
          animate={{ scale: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <motion.a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-white/90 backdrop-blur-sm rounded-full text-primary hover:bg-white hover:scale-110 transition-all shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="View Demo"
          >
            <ExternalLink size={20} />
          </motion.a>
          <motion.a 
            href={project.repoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-white/90 backdrop-blur-sm rounded-full text-primary hover:bg-white hover:scale-110 transition-all shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="View Code"
          >
            <Github size={20} />
          </motion.a>
        </motion.div>
        
        {/* Tech Stack Preview */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 3).map(tech => (
              <span 
                key={tech} 
                className="px-2 py-1 bg-white/90 backdrop-blur-sm text-primary rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-primary rounded text-xs font-medium">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <motion.div
            animate={{ rotate: isHovered ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-primary"
          >
            <ExternalLink size={18} />
          </motion.div>
        </div>
        
        <p className="text-text-light mb-4 leading-relaxed line-clamp-2">
          {project.description}
        </p>
        
        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map(tech => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-background-alt rounded-full text-sm font-medium border border-background-alt group-hover:border-primary/20 group-hover:bg-primary/5 transition-all"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Expand Button */}
        <button 
          onClick={toggleExpand}
          className="flex items-center text-primary font-medium hover:text-primary-dark transition-colors w-full justify-center py-2 border-t border-background-alt group-hover:border-primary/20"
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Hide Details' : 'View Details'}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="ml-1"
          >
            <ChevronDown size={16} />
          </motion.div>
        </button>
        
        {/* Expanded Content */}
        {isExpanded && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 pt-4 border-t border-background-alt space-y-4"
          >
            <div>
              <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-error rounded-full"></div>
                Challenge
              </h4>
              <p className="text-sm text-text-light leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                Solution
              </h4>
              <p className="text-sm text-text-light leading-relaxed">{project.solution}</p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary flex-1 text-center text-sm py-2"
              >
                Live Demo
              </a>
              <a 
                href={project.repoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline flex-1 text-center text-sm py-2"
              >
                View Code
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;