import { useCallback } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { fadeIn, textVariant } from '../utils/animations';
import { ArrowDown, Sparkles, Code, Laptop, Cpu, Globe, Cloud } from 'lucide-react';
import SocialIcons from './SocialIcons';
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

const Hero = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-background-alt"
    >
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            color: {
              value: "#6366f1",
            },
            links: {
              color: "#6366f1",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
            },
            number: {
              value: 50,
            },
            opacity: {
              value: 0.3,
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
        }}
        className="absolute inset-0"
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-secondary/20 to-primary/20 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Icons */}
      {[Code, Laptop, Cpu, Globe, Cloud].map((Icon, index) => (
        <motion.div
          key={index}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, index % 2 ? 10 : -10, 0],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
          className={`absolute ${
            index % 2 ? 'text-primary/30' : 'text-accent/30'
          }`}
          style={{
            top: `${20 + (index * 15)}%`,
            left: index % 2 ? `${20 + (index * 10)}%` : `${60 + (index * 5)}%`,
          }}
        >
          <Icon size={30 + (index * 5)} />
        </motion.div>
      ))}

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center text-center"
        >
          {/* Profile Image with Enhanced Glow Effect */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.5
            }}
            className="relative group"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-full blur-xl opacity-50 group-hover:opacity-75"
            />
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary via-accent to-secondary p-1 relative z-10 transform group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                <img
                  src="about.jpg"
                  alt="Rizve Rahman Reza"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </motion.div>

          {/* Name and Title with Enhanced Animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <motion.div
              animate={{
                y: [-4, 4, -4],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex items-center justify-center gap-2 text-xl text-accent mb-4"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>
              <span>Hello World!</span>
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-primary via-accent to-secondary text-transparent bg-clip-text hover:scale-105 transition-transform duration-300 inline-block"
              >
                Rizve Rahman Reza
              </motion.span>
            </h1>

            <div className="h-20">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer 💻',
                  2000,
                  '.NET Core Expert 🚀',
                  2000,
                  'Angular Developer ⚡',
                  2000,
                  'React Enthusiast 🎯',
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                repeat={Infinity}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-text"
              />
            </div>
          </motion.div>

          {/* Description with Gradient Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-text-light max-w-xl mb-8 text-lg bg-gradient-to-r from-text via-text-light to-text bg-clip-text"
          >
            Crafting digital experiences with modern technologies and creative solutions
          </motion.p>

          {/* Enhanced Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-12"
          >
            <SocialIcons />
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20"
      >
        <Link to="about" smooth={true} duration={800} offset={-70}>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
          >
            <ArrowDown className="w-6 h-6 text-primary hover:text-accent transition-colors" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;