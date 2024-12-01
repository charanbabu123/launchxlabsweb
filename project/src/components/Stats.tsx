import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Building2, CheckCircle, HeadphonesIcon } from 'lucide-react';

const stats = [
  { value: '98%', label: 'Client Satisfaction', icon: CheckCircle },
  { value: '50+', label: 'Enterprise Clients', icon: Building2 },
  { value: '200+', label: 'AI Projects Delivered', icon: Users },
  { value: '24/7', label: 'Support Available', icon: HeadphonesIcon }
];

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 group hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ type: "spring", stiffness: 100, delay: index * 0.2 + 0.3 }}
                  className="text-4xl font-bold text-white text-center mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-300 text-center">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;