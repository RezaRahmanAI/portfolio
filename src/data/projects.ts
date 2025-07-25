import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, shopping cart, and payment integration.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://example.com/demo1',
    repoUrl: 'https://github.com/username/ecommerce-platform',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'TailwindCSS'],
    challenge: 'Implementing a secure payment system while ensuring a smooth user experience across devices.',
    solution: 'Leveraged Stripe API with custom hooks for payment processing and developed responsive interfaces with TailwindCSS.'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://example.com/demo2',
    repoUrl: 'https://github.com/username/task-manager',
    technologies: ['Angular', '.NET Core', 'SQL', 'SignalR'],
    challenge: 'Creating a real-time collaboration system that maintains data integrity with multiple concurrent users.',
    solution: 'Implemented SignalR for real-time updates and designed a robust API with optimistic concurrency control.'
  },
  {
    id: 3,
    title: 'Healthcare Portal',
    description: 'A secure healthcare portal allowing patients to schedule appointments and access medical records.',
    image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://example.com/demo3',
    repoUrl: 'https://github.com/username/healthcare-portal',
    technologies: ['.NET Core', 'SQL', 'Angular', 'Bootstrap'],
    challenge: 'Ensuring HIPAA compliance while providing a user-friendly interface for medical record access.',
    solution: 'Implemented role-based access control, audit logging, and end-to-end encryption for sensitive data.'
  },
  {
    id: 4,
    title: 'Real Estate Marketplace',
    description: 'A platform connecting property sellers with potential buyers, featuring property listings and search filters.',
    image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://example.com/demo4',
    repoUrl: 'https://github.com/username/real-estate-marketplace',
    technologies: ['React', 'Node.js', 'MongoDB', 'Google Maps API'],
    challenge: 'Optimizing property search with location-based filtering and implementing a responsive image gallery.',
    solution: 'Integrated Google Maps API with custom markers and developed a lazy-loading image gallery for property photos.'
  },
  {
    id: 5,
    title: 'Financial Dashboard',
    description: 'An interactive dashboard for financial data visualization and analysis with real-time updates.',
    image: 'https://images.pexels.com/photos/7654586/pexels-photo-7654586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://example.com/demo5',
    repoUrl: 'https://github.com/username/financial-dashboard',
    technologies: ['React', 'D3.js', '.NET Core', 'SQL'],
    challenge: 'Rendering complex financial charts with large datasets while maintaining performance.',
    solution: 'Implemented data aggregation and caching strategies, with D3.js for efficient chart rendering.'
  },
  {
    id: 6,
    title: 'Social Media Analytics',
    description: 'A platform for brands to analyze their social media performance across different platforms.',
    image: 'https://images.pexels.com/photos/6393013/pexels-photo-6393013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://example.com/demo6',
    repoUrl: 'https://github.com/username/social-analytics',
    technologies: ['Angular', 'Node.js', 'MongoDB', 'TailwindCSS'],
    challenge: 'Integrating with multiple social media APIs and normalizing data for consistent analytics.',
    solution: 'Developed a unified data model and adapter pattern for different social media platforms with incremental data fetching.'
  }
];