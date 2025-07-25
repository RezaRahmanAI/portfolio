import React from 'react';
import { Github as GitHub, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

const Footer: React.FC = () => {
  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <GitHub size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'twitter':
        return <Twitter size={20} />;
      case 'mail':
        return <Mail size={20} />;
      default:
        return null;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-background-alt py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          <a href="#home" className="text-2xl font-bold text-primary mb-6">Rizve.dev</a>
          
          <div className="flex space-x-6 mb-8">
            {socialLinks.map(link => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-light hover:text-primary transition-colors p-2 rounded-full hover:bg-background"
                aria-label={link.name}
              >
                {renderSocialIcon(link.icon)}
              </a>
            ))}
          </div>
          
          <div className="text-center text-text-light mb-8">
            <p className="mb-1">John Doe | Full-Stack Developer</p>
            <p>Building modern web experiences with passion and precision</p>
          </div>
          
          <div className="border-t border-text-light/20 w-full pt-6 flex justify-between items-center">
            <p className="text-sm text-text-light">
              © {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
            <button 
              onClick={scrollToTop}
              className="p-3 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;