import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github as GitHub, Linkedin, Twitter, Mail, MapPin, Phone, Clock, Send } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <GitHub size={24} />;
      case 'linkedin':
        return <Linkedin size={24} />;
      case 'twitter':
        return <Twitter size={24} />;
      case 'mail':
        return <Mail size={24} />;
      default:
        return null;
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rizve.rahman@example.com',
      href: 'mailto:rizve.rahman@example.com',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'New York, NY',
      href: '#',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Clock,
      label: 'Availability',
      value: 'Open to opportunities',
      href: '#',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background via-background-alt to-background" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6"
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            Let's Connect
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary text-transparent bg-clip-text"
          >
            Get In Touch
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-light max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Ready to bring your next project to life? I'm always excited to discuss new opportunities, 
            collaborate on innovative ideas, or simply connect with fellow developers and entrepreneurs.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="group relative bg-background border border-background-alt rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20 hover:-translate-y-1"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon size={20} />
                  </div>
                  <h3 className="font-semibold text-primary mb-1 group-hover:text-primary-dark transition-colors">
                    {info.label}
                  </h3>
                  <p className="text-text-light text-sm group-hover:text-text transition-colors">
                    {info.value}
                  </p>
                </motion.a>
              ))}
            </div>
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-background border border-background-alt rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Send className="w-4 h-4 text-white" />
                </div>
                Connect With Me
              </h3>
              
              <p className="text-text-light mb-6 leading-relaxed">
                Follow my journey, see my latest projects, and connect with me on social media. 
                I love sharing insights about development and connecting with the tech community.
              </p>
              
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-4 bg-background-alt rounded-xl hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    aria-label={link.name}
                  >
                    {renderSocialIcon(link.icon)}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      {link.name}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            {/* Quick Response Promise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-6 border border-primary/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-success" />
                </div>
                <h4 className="font-semibold text-primary">Quick Response Guarantee</h4>
              </div>
              <p className="text-text-light text-sm leading-relaxed">
                I typically respond to all inquiries within 24 hours. For urgent matters, 
                feel free to reach out via phone or LinkedIn for faster communication.
              </p>
            </motion.div>
          </motion.div>
          
          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Map Container */}
            <div className="bg-background border border-background-alt rounded-2xl overflow-hidden shadow-lg">
              <div className="p-6 border-b border-background-alt">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  My Location
                </h3>
                <p className="text-text-light">
                  Based in New York, NY - Available for remote work worldwide
                </p>
              </div>
              
              <div className="aspect-video relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986573739211!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1619826381657!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Location Map"
                  className="rounded-b-2xl"
                />
                
                {/* Map Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>
            
            {/* Availability Status */}
            <div className="bg-background border border-background-alt rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-primary">Current Availability</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="text-success text-sm font-medium">Available</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-background-alt last:border-b-0">
                  <span className="text-text-light">Freelance Projects</span>
                  <span className="text-success font-medium">Open</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-background-alt last:border-b-0">
                  <span className="text-text-light">Full-time Opportunities</span>
                  <span className="text-success font-medium">Considering</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-background-alt last:border-b-0">
                  <span className="text-text-light">Consulting</span>
                  <span className="text-success font-medium">Available</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-text-light">Mentoring</span>
                  <span className="text-success font-medium">Limited Slots</span>
                </div>
              </div>
            </div>
            
            {/* Time Zone Info */}
            <div className="bg-background border border-background-alt rounded-2xl p-6">
              <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Working Hours
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-light">Time Zone</span>
                  <span className="font-medium">EST (UTC-5)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-light">Preferred Hours</span>
                  <span className="font-medium">9 AM - 6 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-light">Response Time</span>
                  <span className="font-medium">Within 24 hours</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;