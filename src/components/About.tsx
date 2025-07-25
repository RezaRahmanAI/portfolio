import React from 'react';
import { motion } from 'framer-motion';
import { Download, Code, Users, Award, Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { fadeIn, textVariant } from '../utils/animations';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    { number: '10+', label: 'Projects Completed', icon: Code },
    { number: '20+', label: 'Students Trained', icon: Users },
    { number: '1+', label: 'Years Experience', icon: Calendar },
    { number: '100%', label: 'Client Satisfaction', icon: Award },
  ];

  const experiences = [
    {
      title: 'Junior Developer & Technical Trainer',
      company: 'Object Canvas Technology',
      period: 'Jan 2024 - Present',
      location: 'Full-time',
      description: 'Leading full-stack development with .NET Core API applications and MVC projects. Successfully mentored 20+ students in .NET development while contributing to 10+ scalable projects.',
      color: 'from-primary to-primary-light',
      icon: Briefcase,
    },
    {
      title: 'Software Development Intern',
      company: 'Object Canvas Technology',
      period: 'June 2023 - Dec 2023',
      location: 'Internship',
      description: 'Gained hands-on experience with .NET MVC and API development. Collaborated with senior developers on various client projects and learned industry best practices.',
      color: 'from-accent to-secondary',
      icon: Code,
    },
    {
      title: 'Machine Learning Intern',
      company: 'Head Blocks',
      period: 'July 2023 - Oct 2023',
      location: 'Part-time',
      description: 'Focused on machine learning applications, implementing ML algorithms and conducting data analysis to solve real-world problems.',
      color: 'from-secondary to-accent',
      icon: GraduationCap,
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-background-alt">
      <div className="container-custom">
        {/* Section Header */}
        <div className="section-title">
          <motion.h2
            variants={textVariant(0.2)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="text-3xl md:text-4xl font-bold mb-4 pb-4"
          >
            About Me
          </motion.h2>
          
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="text-text-light max-w-2xl mx-auto mb-16"
          >
            Passionate full-stack developer with expertise in modern web technologies and a commitment to creating exceptional digital experiences
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Profile & Description */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-8"
          >
            {/* Profile Card */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-background-alt">
              <div className="flex items-start gap-6 mb-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-accent p-1">
                    <div className="w-full h-full rounded-xl bg-background flex items-center justify-center overflow-hidden">
                      <img
                        src="about.jpg"
                        alt="Rizve Rahman Reza"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full border-4 border-background flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
                    Rizve Rahman Reza
                  </h3>
                  <p className="text-text-light mb-2">Full-Stack Developer</p>
                  <div className="flex items-center text-sm text-text-light">
                    <MapPin size={14} className="mr-1" />
                    Available for opportunities
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-text leading-relaxed">
                  Currently working as a Junior Developer at Object Canvas Technology, where I specialize in building robust web applications using .NET Core and modern frontend technologies. My journey in software development has been marked by continuous learning and hands-on experience with cutting-edge technologies.
                </p>
                
                <p className="text-text leading-relaxed">
                  Beyond development, I'm passionate about sharing knowledge and have successfully mentored 20+ students in .NET development, helping them build strong foundations in software engineering.
                </p>
              </div>

              {/* Download Resume Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6"
              >
                <a
                  href="/resume.pdf"
                  download
                  className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium transition-all overflow-hidden shadow-lg hover:shadow-xl"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-dark to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <Download size={18} className="relative z-10" />
                  <span className="relative z-10">Download Resume</span>
                </a>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={fadeIn("up", 0.5 + index * 0.1)}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-background rounded-xl p-6 text-center shadow-md border border-background-alt group hover:border-primary/20 transition-all"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 mb-3 group-hover:from-primary/20 group-hover:to-accent/20 transition-all">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary mb-1">{stat.number}</h4>
                  <p className="text-sm text-text-light">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Experience Timeline */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-6"
          >
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-background-alt">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
                Professional Journey
              </h3>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary"></div>

                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn("up", 0.6 + index * 0.2)}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    className="relative flex gap-6 pb-8 last:pb-0"
                  >
                    {/* Timeline Dot */}
                    <div className={`relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg`}>
                      <exp.icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-background-alt rounded-xl p-6 shadow-sm border border-background-alt hover:border-primary/20 transition-all group">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                          {exp.title}
                        </h4>
                        <span className="text-sm text-text-light bg-background px-3 py-1 rounded-full">
                          {exp.location}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-medium text-primary">{exp.company}</span>
                        <span className="text-text-light">•</span>
                        <span className="text-text-light text-sm">{exp.period}</span>
                      </div>
                      
                      <p className="text-text-light leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;