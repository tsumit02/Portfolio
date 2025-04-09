import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaJava, FaGithub, FaLinkedin } from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';
import { FaLinkedinIn } from 'react-icons/fa6';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const floatingIcons = [
    { icon: <FaReact />, style: { top: '20%', left: '10%' } },
    { icon: <FaJs />, style: { top: '60%', left: '5%' } },
    { icon: <FaHtml5 />, style: { top: '30%', right: '15%' } },
    { icon: <FaCss3Alt />, style: { top: '70%', right: '10%' } },
    { icon: <TbBrandReactNative />, style: { top: '40%', left: '20%' } },
    { icon: <FaJava />, style: { top: '30%', right: '35%' } },
    { icon: <FaGithub/>, style: { top: '10%', right: '40%' } },
    { icon: <FaLinkedinIn />, style: { top: '50%', right: '20%' } },
  ];

  return (
    <motion.section
      id="home"
      className="hero"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="floating-icons">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="floating-icon"
            style={item.style}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.2,
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className="hero-content">
        <motion.div 
          className="profile-picture"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/dp.jpg" alt="Sumit Tiwari" />
        </motion.div>
        <motion.p variants={itemVariants} className="greeting">
          Hello 👋, I'm
        </motion.p>
        <motion.h1 variants={itemVariants}>
          <span className="highlight">Sumit Tiwari</span>
        </motion.h1>
        <motion.p variants={itemVariants} className="role">
          Full Stack Developer
        </motion.p>
      </div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img src="/developer.svg" alt="Developer Illustration" />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
