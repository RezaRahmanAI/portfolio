import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, BookOpen, Award, Star, ArrowRight, CheckCircle } from 'lucide-react';

const Mentorship: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: '20+', label: 'Students Mentored', icon: Users },
    { number: '100%', label: 'Success Rate', icon: Award },
    { number: '6', label: 'Months Average', icon: BookOpen },
    { number: '4.9/5', label: 'Rating', icon: Star },
  ];

  const programs = [
    {
      title: '.NET Core Mastery',
      description: 'Complete full-stack development with .NET Core API and MVC',
      duration: '6 months',
      level: 'Beginner to Advanced',
      topics: ['C# Fundamentals', 'ASP.NET Core', 'Entity Framework', 'API Development', 'Authentication & Security'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Frontend Excellence',
      description: 'Modern frontend development with Angular and React',
      duration: '4 months',
      level: 'Intermediate',
      topics: ['Angular/React', 'TypeScript', 'State Management', 'Testing', 'Performance Optimization'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Full-Stack Journey',
      description: 'End-to-end web development with modern technologies',
      duration: '8 months',
      level: 'Beginner to Expert',
      topics: ['Frontend & Backend', 'Database Design', 'DevOps Basics', 'Project Management', 'Industry Best Practices'],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Junior Developer at TechCorp',
      content: 'Rizve\'s mentorship transformed my career. His structured approach and real-world projects gave me the confidence to land my first developer job.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      name: 'Michael Chen',
      role: 'Full-Stack Developer',
      content: 'The .NET Core program was exceptional. Rizve\'s industry experience and teaching style made complex concepts easy to understand.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Software Engineer at StartupXYZ',
      content: 'Best investment in my career! The hands-on projects and personalized feedback helped me transition from marketing to development.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    }
  ];

  return (
    <section id="mentorship" className="py-20 bg-background" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-medium mb-6"
          >
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            Mentorship & Training
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary text-transparent bg-clip-text"
          >
            Empowering Future Developers
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-light max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Sharing knowledge and helping aspiring developers build successful careers in technology. 
            Join a community of learners who have transformed their professional lives through structured mentorship.
          </motion.p>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center bg-background-alt rounded-2xl p-6 border border-background-alt hover:border-primary/20 transition-all group"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-all">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-1">{stat.number}</h3>
              <p className="text-sm text-text-light">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Programs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Mentorship Programs</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                className="bg-background-alt rounded-2xl p-8 border border-background-alt hover:border-primary/20 transition-all group hover:shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${program.color} text-white mb-6 group-hover:scale-110 transition-transform`}>
                  <BookOpen size={24} />
                </div>
                
                <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {program.title}
                </h4>
                <p className="text-text-light mb-4 leading-relaxed">
                  {program.description}
                </p>
                
                <div className="flex justify-between items-center mb-4 text-sm">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {program.duration}
                  </span>
                  <span className="text-text-light">{program.level}</span>
                </div>
                
                <div className="space-y-2 mb-6">
                  {program.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={14} className="text-success" />
                      <span className="text-text-light">{topic}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full btn-outline group-hover:btn-primary transition-all flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">What Students Say</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-background-alt rounded-2xl p-6 border border-background-alt hover:border-primary/20 transition-all"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-text-light mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h5 className="font-semibold">{testimonial.name}</h5>
                    <p className="text-sm text-text-light">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-text-light mb-6 max-w-2xl mx-auto">
              Join the next cohort of successful developers. Limited spots available for personalized mentorship programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                Apply for Mentorship
              </a>
              <button className="btn-outline">
                Download Curriculum
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mentorship;