import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'VectorX - Vector Database Security',
    description: 'VectorX ensures robust security for vector databases, vital for AI applications managing high-dimensional data. We safeguard sensitive embeddings with advanced encryption, AI-powered real-time anomaly detection, and role-based access control (RBAC) to prevent unauthorized access. Secure indexing through hashing protects against inference attacks while maintaining performance   .',
    image: './assets/vectorx.png',
    featured: true
  },
  {
    title: 'Ai Strategy And Solutions',
    description: 'Enterprise-scale data analytics solution with predictive modeling',
    image: './assets/ai.png'
  },
  {
    title: 'Data Science And Analytics',
    description: 'IoT-enabled manufacturing optimization using machine learning',
    image: './assets/customer.png'
  },
  {
    title: 'Digital Transformation',
    description: 'AI chatbot system for 24/7 customer support',
    image: './assets/smart.png'
  }
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Success Stories</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover how we've helped businesses achieve their digital transformation goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured Project - VectorX */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="col-span-1 md:col-span-2 group relative overflow-hidden rounded-xl shadow-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10"
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="relative h-64 md:h-full">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="text-blue-400" size={24} />
                  <span className="text-blue-400 font-semibold">Featured Product</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{projects[0].title}</h3>
                <p className="text-gray-300 mb-6">{projects[0].description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg w-fit">
                       <Link to={'/vector'} >
          Learn More
          </Link>
                 
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Other Projects */}
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white/10 backdrop-blur-lg"
            >
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;