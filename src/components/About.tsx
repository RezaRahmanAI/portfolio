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
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 rounded-full"></div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-dark-100 dark:text-light-100 pl-4 bg-gradient-to-r from-primary-400 to-accent-400 text-transparent bg-clip-text">
              Full Stack Developer with expertise in .NET Core and Modern Web Technologies
            </h3>
            
            <div className="space-y-6 pl-4">
              <p className="text-dark-300 dark:text-light-300">
                Currently working as a Junior Developer at Object Canvas Technology, where I specialize 
                in building robust web applications using .NET Core and modern frontend technologies. 
                My journey in software development has been marked by continuous learning and hands-on 
                experience with cutting-edge technologies.
              </p>
              
              <div className="space-y-4 bg-light-200 dark:bg-dark-300 p-6 rounded-xl">
                <h4 className="font-semibold text-lg text-primary-500">Professional Experience</h4>
                
                <div className="space-y-4">
                  <div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-primary-500 before:rounded-full">
                    <h5 className="font-medium text-dark-100 dark:text-light-100">Junior Developer & Technical Trainer</h5>
                    <p className="text-primary-500 text-sm">Object Canvas Technology | Jan 2024 - Present</p>
                    <p className="text-dark-300 dark:text-light-300 mt-1">
                      Working on full-stack development with .NET Core API applications and MVC projects.
                      Contributed to more than 10 projects focusing on scalable and maintainable solutions.
                      Currently serving as a technical trainer, having successfully mentored 20+ students in .NET development.
                    </p>
                  </div>
                  
                  <div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-accent-500 before:rounded-full">
                    <h5 className="font-medium text-dark-100 dark:text-light-100">Software Development Intern</h5>
                    <p className="text-accent-500 text-sm">Object Canvas Technology | June 2023 - Dec 2023</p>
                    <p className="text-dark-300 dark:text-light-300 mt-1">
                      Gained hands-on experience with .NET MVC and API development.
                      Collaborated with senior developers on various client projects.
                    </p>
                  </div>
                  
                  <div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-secondary-500 before:rounded-full">
                    <h5 className="font-medium text-dark-100 dark:text-light-100">Machine Learning Intern</h5>
                    <p className="text-secondary-500 text-sm">Head Blocks | July 2023 - Oct 2023</p>
                    <p className="text-dark-300 dark:text-light-300 mt-1">
                      Part-time internship focused on machine learning applications.
                      Worked on implementing ML algorithms and data analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12 pl-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-light-200 dark:bg-dark-300 p-6 rounded-xl text-center group hover:bg-primary-500 transition-colors duration-300"
              >
                <h4 className="text-3xl font-bold text-primary-500 group-hover:text-white mb-2">10+</h4>
                <p className="text-dark-300 dark:text-light-300 group-hover:text-white text-sm">Projects Done</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-light-200 dark:bg-dark-300 p-6 rounded-xl text-center group hover:bg-primary-500 transition-colors duration-300"
              >
                <h4 className="text-3xl font-bold text-primary-500 group-hover:text-white mb-2">1+</h4>
                <p className="text-dark-300 dark:text-light-300 group-hover:text-white text-sm">Years Experience</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-light-200 dark:bg-dark-300 p-6 rounded-xl text-center group hover:bg-primary-500 transition-colors duration-300"
              >
                <h4 className="text-3xl font-bold text-primary-500 group-hover:text-white mb-2">20+</h4>
                <p className="text-dark-300 dark:text-light-300 group-hover:text-white text-sm">Students Trained</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-light-200 dark:bg-dark-300 p-6 rounded-xl text-center group hover:bg-primary-500 transition-colors duration-300"
              >
                <h4 className="text-3xl font-bold text-primary-500 group-hover:text-white mb-2">24/7</h4>
                <p className="text-dark-300 dark:text-light-300 group-hover:text-white text-sm">Support</p>
              </motion.div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="pl-4"
            >
              <a
                href="/resume.pdf"
                download
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-500 text-white font-medium transition-all overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-600 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <Download size={18} className="relative z-10" />
                <span className="relative z-10">Download Resume</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;