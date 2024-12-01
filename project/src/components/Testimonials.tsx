import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechVision Inc",
    content: "LaunchX Labs' VectorX solution transformed our vector database security. Their expertise in AI security is unmatched.",
    image: "./assets/test1.png"
  },
  {
    name: "Michael Rodriguez",
    role: "Head of AI, DataFlow Systems",
    content: "The team's deep understanding of AI security helped us implement robust protection for our vector databases.",
    image: "./assets/test2.png"
  },
  {
    name: "Emily Watson",
    role: "Director of Innovation, AI Solutions Co",
    content: "VectorX has become an integral part of our security infrastructure. It's both powerful and user-friendly.",
    image: "./assets/test3.png"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-300">What our clients say about our solutions</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="mx-16 md:mx-20">
            <div className="h-[300px] md:h-[250px] relative overflow-hidden">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                  className="absolute w-full"
                >
                  <div className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-xl relative border border-white/20 group hover:bg-white/20 transition-all duration-300">
                    <Quote className="absolute top-4 right-4 text-blue-400 opacity-20 group-hover:opacity-40 transition-opacity" size={40} />
                    <div className="flex items-center mb-6">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-12 h-12 rounded-full mr-4 border-2 border-blue-400 object-cover"
                      />
                      <div>
                        <h4 className="text-white font-semibold">{testimonials[currentIndex].name}</h4>
                        <p className="text-gray-300 text-sm">{testimonials[currentIndex].role}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-base md:text-lg relative z-10 leading-relaxed">
                      {testimonials[currentIndex].content}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-blue-400' : 'bg-white/30'
                }`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-lg border border-white/20"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft size={24} className="text-white" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-lg border border-white/20"
            onClick={() => paginate(1)}
          >
            <ChevronRight size={24} className="text-white" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;