import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, shopping cart, and payment integration.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://example.com/demo1',
    repoUrl: 'https://github.com/username/ecommerce-platform',
    technologies: ['React', '.Net Core API', 'SQL Server', 'TailwindCSS'],
    challenge: 'Implementing a secure payment system while ensuring a smooth user experience across devices.',
    solution: 'Leveraged Stripe API with custom hooks for payment processing and developed responsive interfaces with TailwindCSS.'
  },
  
  {
    id: 2,
    title: 'Healthcare Portal',
    description: 'A secure healthcare portal allowing patients to schedule appointments and access medical records.',
    image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://example.com/demo3',
    repoUrl: 'https://github.com/username/healthcare-portal',
    technologies: ['.NET MVC', 'SQL', 'Bootstrap'],
    challenge: 'Ensuring HIPAA compliance while providing a user-friendly interface for medical record access.',
    solution: 'Implemented role-based access control, audit logging, and end-to-end encryption for sensitive data.'
  },
  {
    id: 3,
    title: 'Real Estate Marketplace',
    description: 'A platform connecting property sellers with potential buyers, featuring property listings and search filters.',
    image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://example.com/demo4',
    repoUrl: 'https://github.com/username/real-estate-marketplace',
    technologies: ['Angular', '.Net Core API', 'SQL Server', 'TailwindCSS'],
    challenge: 'Optimizing property search with location-based filtering and implementing a responsive image gallery.',
    solution: 'Integrated Google Maps API with custom markers and developed a lazy-loading image gallery for property photos.'
  },
  
];