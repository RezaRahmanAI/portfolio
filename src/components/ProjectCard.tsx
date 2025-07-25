import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div 
      className="bg-background border border-background-alt rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="relative overflow-hidden h-56 group">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-4">
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-primary hover:bg-gray-100 transition-colors"
              aria-label="View Demo"
            >
              <ExternalLink size={20} />
            </a>
            <a 
              href={project.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-primary hover:bg-gray-100 transition-colors"
              aria-label="View Code"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-text-light mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map(tech => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-background-alt rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <button 
          onClick={toggleExpand}
          className="flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
          aria-expanded={isExpanded}
          aria-controls={`project-details-${project.id}`}
        >
          {isExpanded ? 'Hide Details' : 'View Details'}
          {isExpanded ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
        </button>
        
        {isExpanded && (
          <motion.div 
            id={`project-details-${project.id}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 pt-4 border-t"
          >
            <div className="mb-3">
              <h4 className="font-semibold text-primary mb-1">Challenge:</h4>
              <p className="text-sm">{project.challenge}</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-1">Solution:</h4>
              <p className="text-sm">{project.solution}</p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;