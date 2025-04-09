import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    { title: 'Home', to: 'home' },
    { title: 'Projects', to: 'projects' },
    { title: 'Skills', to: 'skills' },
    { title: 'About', to: 'about' },
    { title: 'Contact', to: 'contact' },
    { title: 'Testimonials', to: 'testimonials' }
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav 
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logo">
        <Link 
          to="home" 
          spy={true} 
          smooth={true} 
          offset={-70} 
          duration={500}
          onClick={handleLinkClick}
        >
          Sumit.dev
        </Link>
      </div>

      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        {menuItems.map((item) => (
          <motion.div
            key={item.to}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleLinkClick}
            >
              {item.title}
            </Link>
          </motion.div>
        ))}
      </div>

      <button 
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </motion.nav>
  );
};

export default Navbar;
