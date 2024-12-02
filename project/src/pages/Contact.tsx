import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_API_KEY
      );
      console.log('Email sent:', result.text);
      setSuccessMessage('Your message has been sent successfully!');
      setIsMessageSent(true); // Trigger success animation
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset the form visibility after 5 seconds
      setTimeout(() => {
        setIsMessageSent(false);
        setSuccessMessage('');
      }, 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setSuccessMessage('Failed to send your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-300">Let's discuss how we can help transform your business</p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex items-center space-x-4">
                  <Mail className="text-blue-400 w-6 h-6" />
                  <div>
                    <h3 className="text-white font-semibold">Contact Us</h3>
                    <p className="text-gray-300">vineet@proshort.ai</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex items-center space-x-4">
                  <Phone className="text-blue-400 w-6 h-6" />
                  <div>
                    <h3 className="text-white font-semibold">Call Us</h3>
                    <p className="text-gray-300"> +91 96322 99860</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex items-center space-x-4">
                  <MapPin className="text-blue-400 w-6 h-6" />
                  <div>
                    <h3 className="text-white font-semibold">Visit Us</h3>
                    <p className="text-gray-300">1st floor, Vajram Esteva, Devarabisanahalli, Bengaluru, Karnataka, India-560103</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {!isMessageSent && (
              <motion.form
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                onSubmit={handleSubmit}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 space-y-6"
              >
                {successMessage && (
                  <div className="text-center text-white font-semibold mb-4">
                    {successMessage}
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400"
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 ${
                    loading && 'opacity-50 cursor-not-allowed'
                  }`}
                >
                  <span>{loading ? 'Sending...' : 'Send Message'}</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </motion.form>
            )}

            {isMessageSent && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center h-full text-white text-lg font-semibold"
              >
                Thank you for reaching out! We'll get back to you shortly.
              </motion.div>
            )}
          </div>
        </div>
  
      </motion.div>
    </div>
  );
};

export default Contact;
