import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <motion.section
      id="contact"
      className="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2 variants={itemVariants}>Get in Touch</motion.h2>
      <div className="contact-container">
        <motion.form 
          className="contact-form"
          onSubmit={handleSubmit}
          variants={itemVariants}
        >
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Name" 
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              placeholder="Email" 
              required 
            />
          </div>
          <div className="form-group">
            <textarea 
              placeholder="Message" 
              required 
              rows={5}
            />
          </div>
          <motion.button
            type="submit"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        <motion.div className="contact-info" variants={itemVariants}>
          <div className="contact-item">
            <FaEnvelope />
            <p>tsumit859@gmail.com</p>
          </div>
          <div className="contact-item">
            <FaPhone />
            <p>+91 7408533840</p>
          </div>
          <div className="social-links">
            <motion.a
              href="www.linkedin.com/in/sumit-tiwari-710362252"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/tsumit02"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
            >
              <FaGithub />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
