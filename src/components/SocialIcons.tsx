import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { socialLinks } from '../data/socialLinks';

const SocialIcons = () => {
  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'github':
        return <Github className="w-6 h-6" />;
      case 'linkedin':
        return <Linkedin className="w-6 h-6" />;
      case 'twitter':
        return <Twitter className="w-6 h-6" />;
      case 'mail':
        return <Mail className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex space-x-4">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-dark-200 rounded-full hover:bg-primary-500 hover:text-light-100 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + index * 0.1 }}
        >
          {renderIcon(social.icon)}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;