import React from 'react';
import { motion } from 'framer-motion';

interface GlowingButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const GlowingButton = ({ children, onClick }: GlowingButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
      onClick={onClick}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      <div className="relative px-8 py-4 bg-black rounded-full leading-none flex items-center">
        <div className="text-white text-lg font-semibold transition duration-200">
          {children}
        </div>
      </div>
    </motion.button>
  );
};

export default GlowingButton;