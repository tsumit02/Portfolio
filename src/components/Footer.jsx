import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p>&copy; {new Date().getFullYear()} Developer Portfolio. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
