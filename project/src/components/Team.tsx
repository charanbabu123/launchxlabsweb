import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const team = [
  {
    name: "Vineet Dwivedi",
    role: "Chief executive officer",
    image: "./assets/vineeth.png",
    linkedin: "https://www.linkedin.com/in/vindwi/"
  },
  {
    name: "Anuraag Dubey",
    role: "chief operating officer",
    image: "./assets/anuraag1.png",
    linkedin: "https://www.linkedin.com/in/anuraagdubey/"
  },
  {
    name: "Gaurav Nigam",
    role: "chief Business officer",
    image: "./assets/gaurav.png",
    linkedin: "https://www.linkedin.com/in/gaurav-nigam-ab57a97/"
  },
  {
    name: "Hemant Sharma",
    role: "Lead ml engineering",
    image: "./assets/hemanth.png",
    linkedin: "https://www.linkedin.com/in/hemant-sharma-6ab4ba52/"
  }
];

const Team = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Our Team</h2>
          <p className="text-xl text-gray-300">Meet the experts behind our innovations</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-blue-500/20 to-purple-500/20 p-1">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin size={24} />
                  </motion.a>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;