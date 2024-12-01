import React from 'react';
import { motion } from 'framer-motion';
import { Book, BarChart, Users } from 'lucide-react';
import Footer from '../../components/Footer';

const SpotifyBooks = () => {
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
              Spotify for Books: AI-Powered Book Discovery Platform
            </motion.h1>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-12 border border-white/20"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">Challenge</h2>
              <p className="text-gray-300 mb-6">
                A leading publishing house needed a sophisticated recommendation system to help readers discover books based on their preferences and reading history.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">Solution</h2>
              <p className="text-gray-300 mb-6">
                We developed an AI-powered recommendation engine that analyzes reading patterns, book metadata, and user behavior to provide personalized book suggestions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex flex-col items-center text-center">
                  <Book className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-white font-semibold mb-2">1M+ Books</h3>
                  <p className="text-gray-300">In recommendation system</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Users className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-white font-semibold mb-2">500K+ Users</h3>
                  <p className="text-gray-300">Active monthly users</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <BarChart className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-white font-semibold mb-2">40% Increase</h3>
                  <p className="text-gray-300">In user engagement</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-white mb-4">Results</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>40% increase in user engagement</li>
                <li>25% improvement in book discovery</li>
                <li>35% increase in reading completion rates</li>
                <li>Successful integration with major e-reader platforms</li>
              </ul>
            </motion.div>
          </div>
        </div>
        <Footer />
      </motion.div>
    </div>
  );
};

export default SpotifyBooks;