
import { motion } from 'framer-motion';
import { Linkedin,  ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">LaunchX Labs</h3>
            <p className="text-gray-300">
              Transforming businesses through AI innovation and digital excellence.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <motion.li whileHover={{ x: 5 }}>AI Consulting</motion.li>
              <motion.li whileHover={{ x: 5 }}>Application Development</motion.li>
              <motion.li whileHover={{ x: 5 }}>Data Transformation</motion.li>
              <motion.li whileHover={{ x: 5 }}>Digital Innovation</motion.li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <motion.li whileHover={{ x: 5 }}>About Us</motion.li>
              <motion.li whileHover={{ x: 5 }}>Careers</motion.li>
              <motion.li whileHover={{ x: 5 }}>Contact</motion.li>
              <motion.li whileHover={{ x: 5 }}>Blog</motion.li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
    
              <motion.a
                whileHover={{ y: -5, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-300 hover:text-white transition-colors"
                href="https://www.linkedin.com/company/launchxin/"
              >
                <Linkedin size={24} />
              </motion.a>
            
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 mt-8 flex justify-between items-center"
        >
          <p className="text-gray-300">
            © 2024 LaunchX Labs. All rights reserved.
          </p>
          <motion.button
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-full"
          >
            <ArrowUp size={24} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;