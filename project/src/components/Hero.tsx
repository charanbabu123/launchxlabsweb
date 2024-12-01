
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AnimatedBackground from './hero/AnimatedBackground';
import AnimatedText from './hero/AnimatedText';
import FloatingIcons from './hero/FloatingIcons';
import GlowingButton from './hero/GlowingButton';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <AnimatedBackground />
      <FloatingIcons />
      
      <div className="relative container mx-auto px-4 h-screen flex flex-col justify-center items-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          className="text-center"
        >
          <AnimatedText
            text="Transforming Future"
            className="text-5xl md:text-7xl font-bold mb-2"
            delay={0.5}
          />
          <AnimatedText
            text="Through AI Innovation"
            className="text-4xl md:text-6xl font-bold text-blue-400 mb-6"
            delay={1}
          />
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-xl md:text-2xl text-center mb-12 max-w-2xl text-gray-300"
        >
          Accelerate your digital transformation with our cutting-edge AI solutions and expert consulting services.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >

          <Link to={'/contact'} >
          <GlowingButton>Get Started</GlowingButton>
          </Link>
        </motion.div>

        <motion.div 
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
          className="absolute bottom-8"
        >
          <ChevronDown size={32} className="text-white" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;