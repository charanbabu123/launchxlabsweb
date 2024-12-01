import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Globe } from 'lucide-react';
import Footer from '../components/Footer';

const serviceCategories = [
  {
    title: 'AI Transformation',
    icon: <Brain className="w-12 h-12" />,
    description: 'Leverage cutting-edge AI solutions to revolutionize your business processes and decision-making.',
    features: [
      'Custom AI Model Development',
      'AI Strategy Consulting',
      'Machine Learning Integration',
      'AI-Powered Analytics'
    ]
  },
  {
    title: 'Data Transformation',
    icon: <Database className="w-12 h-12" />,
    description: 'Transform raw data into actionable insights with our comprehensive data solutions.',
    features: [
      'Data Architecture Design',
      'ETL Pipeline Development',
      'Real-time Analytics',
      'Data Governance'
    ]
  },
  {
    title: 'Digital Transformation',
    icon: <Globe className="w-12 h-12" />,
    description: 'Modernize your business with end-to-end digital transformation solutions.',
    features: [
      'Cloud Migration',
      'Process Automation',
      'Digital Strategy',
      'Technology Modernization'
    ]
  }
];

const Services = () => {
  return (
    <div className="pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900"
      >
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions to accelerate your digital transformation journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-blue-400 mb-6"
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {category.description}
                </p>
                <ul className="space-y-3">
                  {category.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                      className="flex items-center text-gray-300"
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Services;