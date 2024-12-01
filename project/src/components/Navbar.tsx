import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavItem {
  label: string;
  path: string;
  subItems?: { label: string; path: string }[];
}

const navItems: NavItem[] = [
  {
    label: 'VectorX',
    path: '/vectorx',
  },
  {
    label: 'Services',
    path: '/services',
    subItems: [
      { label: 'AI Transformation', path: '/services/ai' },
      { label: 'Data Transformation', path: '/services/data' },
      { label: 'Digital Transformation', path: '/services/digital' },
    ],
  },
  {
    label: 'Case Studies',
    path: '/case-studies',
    subItems: [
      { label: 'Spotify for Books', path: '/case-studies/spotify-books' },
      { label: 'Social Reviews Platform', path: '/case-studies/social-reviews' },
      { label: 'Anomaly Detection', path: '/case-studies/anomaly-detection' },
    ],
  },
  {
    label: 'About Us',
    path: '/about',
    subItems: [
      { label: 'Team', path: '/about/team' },
      { label: 'Careers', path: '/about/careers' },
    ],
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r pt-12 from-blue-900/95 to-purple-900/95 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white text-2xl font-bold"
            >
              LaunchX Labs
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link to={item.path}>
                  <motion.span
                    whileHover={{ color: '#60A5FA' }}
                    className="text-white cursor-pointer flex items-center"
                  >
                    {item.label}
                    {item.label === 'VectorX' && (
                      <span className="ml-2 text-xs bg-yellow-400 text-black px-2 py-1 rounded-full">
                        Beta
                      </span>
                    )}
                  </motion.span>
                </Link>

                {item.subItems && hoveredItem === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 py-2 bg-gradient-to-r from-blue-900/95 to-purple-900/95 backdrop-blur-md rounded-lg min-w-[200px] border border-white/10"
                  >
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.path}
                        className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gradient-to-r from-blue-900/95 to-purple-900/95 backdrop-blur-md"
          >
            <div className="py-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.path}
                    className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                    {item.label === 'VectorX' && (
                      <span className="ml-2 text-xs bg-yellow-400 text-black px-2 py-1 rounded-full">
                        Beta
                      </span>
                    )}
                  </Link>
                  {item.subItems && (
                    <div className="pl-8">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.path}
                          className="block px-4 py-2 text-gray-300 hover:bg-white/10 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
