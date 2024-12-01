import { motion } from 'framer-motion';
import { Brain, Code, Database, LineChart, Cpu, Globe, Shield, Users } from 'lucide-react';

const services = [
  {
    icon: <Brain size={32} />,
    title: 'AI Consulting',
    description: 'Strategic guidance for implementing AI solutions tailored to your business needs.'
  },
  {
    icon: <Code size={32} />,
    title: 'Application Development',
    description: 'Custom AI-powered applications built with cutting-edge technology.'
  },
  {
    icon: <Database size={32} />,
    title: 'Data Transformation',
    description: 'Turn your raw data into actionable insights with our advanced analytics.'
  },
  {
    icon: <LineChart size={32} />,
    title: 'Digital Innovation',
    description: 'Future-proof your business with our digital transformation strategies.'
  },
  {
    icon: <Cpu size={32} />,
    title: 'Machine Learning',
    description: 'Advanced ML models and algorithms for complex problem-solving.'
  },
  {
    icon: <Globe size={32} />,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure optimized for AI workloads.'
  },
  {
    icon: <Shield size={32} />,
    title: 'AI Security',
    description: 'Robust security measures for your AI implementations.'
  },
  {
    icon: <Users size={32} />,
    title: 'Team Training',
    description: 'Comprehensive AI training programs for your workforce.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive AI solutions to drive your business forward
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)"
              }}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <motion.div 
                className="text-blue-400 mb-4 transform-gpu"
              >
                {service.icon}
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold mb-3 text-white"
                whileHover={{ x: 5 }}
              >
                {service.title}
              </motion.h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;