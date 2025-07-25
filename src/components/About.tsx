import React from 'react';
import { motion } from 'framer-motion';
import { Download, Code, Server, Database, LayoutGrid } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="bg-background-alt py-20" ref={sectionRef}>
      <div className="container-custom">
        <div className="section-title">
          <motion.h2 
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            className="text-3xl md:text-4xl font-bold mb-4 pb-4"
          >
            About Me
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image column */}
          <motion.div 
            className="max-w-md mx-auto lg:max-w-lg rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="about.jpg" 
                alt="John Doe - Full Stack Developer" 
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
          
          {/* Text content */}
          <div>
            <motion.h3 
              className="text-2xl font-bold mb-4 text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Full-Stack Developer & Problem Solver
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              With over 5 years of experience in full-stack development, I specialize in building robust, scalable applications that solve real-world problems. My passion lies in creating seamless user experiences backed by clean, efficient code.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-6"
            >
              I thrive in collaborative environments where I can leverage my technical expertise alongside effective communication skills to deliver exceptional results. My approach combines technical excellence with a focus on business goals.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="flex items-center">
                <Code size={20} className="text-primary mr-2" />
                <span>Frontend Development</span>
              </div>
              <div className="flex items-center">
                <Server size={20} className="text-primary mr-2" />
                <span>Backend Architecture</span>
              </div>
              <div className="flex items-center">
                <Database size={20} className="text-primary mr-2" />
                <span>Database Design</span>
              </div>
              <div className="flex items-center">
                <LayoutGrid size={20} className="text-primary mr-2" />
                <span>Responsive Interfaces</span>
              </div>
            </motion.div>
            
            <motion.a 
              href="/resume.pdf" 
              className="btn-primary mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              download
            >
              <Download size={18} className="mr-2" />
              Download Resume
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;