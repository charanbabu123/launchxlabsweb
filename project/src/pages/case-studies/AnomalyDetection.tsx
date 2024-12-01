import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Clock, LineChart } from 'lucide-react';
import Footer from '../../components/Footer';

const AnomalyDetection = () => {
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
              Real-time Anomaly Detection System
            </motion.h1>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-12 border border-white/20"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">Challenge</h2>
              <p className="text-gray-300 mb-6">
                A financial institution needed a robust system to detect fraudulent transactions and unusual patterns in real-time across millions of daily transactions.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">Solution</h2>
              <p className="text-gray-300 mb-6">
                We developed an AI-powered anomaly detection system that processes transactions in real-time, using advanced machine learning algorithms to identify suspicious patterns.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex flex-col items-center text-center">
                  <AlertCircle className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-white font-semibold mb-2">99.9% Accuracy</h3>
                  <p className="text-gray-300">In fraud detection</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Clock className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-white font-semibold mb-2">&lt;100ms</h3>
                  <p className="text-gray-300">Response time</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <LineChart className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-white font-semibold mb-2">85% Reduction</h3>
                  <p className="text-gray-300">In false positives</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-white mb-4">Results</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>95% reduction in fraudulent transactions</li>
                <li>85% reduction in false positives</li>
                <li>$50M+ in prevented fraud losses</li>
                <li>Real-time monitoring of 10M+ daily transactions</li>
              </ul>
            </motion.div>
          </div>
        </div>
        <Footer />
      </motion.div>
    </div>
  );
};

export default AnomalyDetection;