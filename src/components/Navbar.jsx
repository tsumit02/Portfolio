import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const menuItems = [
    { title: 'Home', to: 'home' },
    { title: 'Projects', to: 'projects' },
    { title: 'Skills', to: 'skills' },
    { title: 'About', to: 'about' },
    { title: 'Contact', to: 'contact' }
  ];

  return (
    <motion.nav 
      className="navbar"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <motion.div 
        className="logo"
        whileHover={{ scale: 1.1 }}
      >
        <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
          Sumit.dev
        </Link>
      </motion.div>

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
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="hamburger" 
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
