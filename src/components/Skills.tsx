import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/skills';
import SkillBar from './SkillBar';
import { Code, Server, Database, Settings } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('frontend');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  const categories = [
    { id: 'frontend', name: 'Frontend', icon: <Code size={20} /> },
    { id: 'backend', name: 'Backend', icon: <Server size={20} /> },
    { id: 'database', name: 'Database', icon: <Database size={20} /> },
    { id: 'tools', name: 'Tools', icon: <Settings size={20} /> },
  ];

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="container-custom">
        <div className="section-title">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 pb-4"
          >
            Technical Skills
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-light max-w-2xl mx-auto mb-12"
          >
            With a strong foundation in both frontend and backend technologies, I build complete, scalable solutions
          </motion.p>
        </div>
        
        {/* Category Selector */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-5 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-background-alt hover:bg-primary/10'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </motion.div>
        
        {/* Skills Display */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {filteredSkills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              years={skill.years}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;