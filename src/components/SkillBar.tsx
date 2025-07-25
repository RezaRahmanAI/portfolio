import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillBarProps {
  name: string;
  level: number;
  years: number;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, years, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref} 
      className="mb-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-text-light">{years} {years === 1 ? 'year' : 'years'}</span>
      </div>

      <div className="h-3 w-full bg-background-alt rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary rounded-full relative"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: delay, ease: "easeOut" }}
        >
          {isHovered && (
            <motion.div 
              className="absolute -top-8 right-0 bg-primary text-white text-xs py-1 px-2 rounded transform -translate-x-1/2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
            >
              {level}%
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillBar;