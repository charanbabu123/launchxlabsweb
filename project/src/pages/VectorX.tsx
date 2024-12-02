import { motion } from 'framer-motion';
import { Shield, Zap, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'High precision & recall',
    description: 'VectorX DB performs better, or on-par in precision and recall benchmark tests against leading vector DBs such as Pinecone.'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'No performance degradation',
    description: 'Search on encrypted vector data without requiring decryption. Hence data is secure at-rest and in-memory.'
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Fast ANN Searches',
    description: 'Searching inside encryption combined with superfast decryption on client-side ensures faster vector search performance.'
  }
];

const VectorX = () => {
  return (
    <div className="pt-20">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen relative overflow-hidden"
      >
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 backdrop-blur-lg py-20">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="  text-center max-w-4xl mx-auto "
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              World's Most Secure Vector Database
            </h1>
            <p className="text-xl text-white mb-12">
              Up to 70% of your data in Vector DBs can be recovered by Vector Inversion Attacks. 
              VectorX secures it with industry-leading encryption techniques.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
               <Link to={'../contact'}>
               Get Early Access
               </Link>
            </motion.button>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 backdrop-blur-lg py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.2 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-blue-400 mb-6"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default VectorX;