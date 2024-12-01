import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const AwardBanner = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 fixed top-0 w-full z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-2">
          <Trophy className="animate-bounce" size={20} />
          <p className="text-sm md:text-base font-medium">
            VectorX has won the Deeptech Nasscom Emerge 50 Awards 2024 for Vector Database Security Innovation
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AwardBanner;
