
import { motion } from 'framer-motion';
import { MessageSquare, TrendingUp, Shield } from 'lucide-react';


const SocialReviews = () => {
  return (
    <div className="pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900"
      >
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              AI-Powered Social Reviews Platform
            </motion.h1>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-12 border border-white/20"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">Challenge</h2>
              <p className="text-gray-300 mb-6">
                A major e-commerce platform needed to improve their review system by detecting fake reviews and providing better insights from customer feedback.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">Solution</h2>
              <p className="text-gray-300 mb-6">
                We implemented an AI system that analyzes review authenticity, sentiment, and key insights while providing automated moderation and trend analysis.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex flex-col items-center text-center">
                  <MessageSquare className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-white font-semibold mb-2">10M+ Reviews</h3>
                  <p className="text-gray-300">Processed monthly</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Shield className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-white font-semibold mb-2">99% Accuracy</h3>
                  <p className="text-gray-300">In fake review detection</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <TrendingUp className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-white font-semibold mb-2">45% Increase</h3>
                  <p className="text-gray-300">In customer trust</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-white mb-4">Results</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>90% reduction in fake reviews</li>
                <li>45% increase in customer trust</li>
                <li>30% improvement in review quality</li>
                <li>Automated moderation saving 1000+ hours monthly</li>
              </ul>
            </motion.div>
          </div>
        </div>
      
      </motion.div>
    </div>
  );
};

export default SocialReviews;