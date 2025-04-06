import { motion } from 'framer-motion';

const About = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section
      id="about"
      className="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2 variants={itemVariants}>About Me</motion.h2>
      <div className="about-content">
        <motion.div className="about-text" variants={itemVariants}>
          <motion.p variants={itemVariants}>
            I'm a passionate and detail-oriented Full-Stack Developer with a strong foundation in both front-end and back-end technologies. I've worked on various personal projects that showcase my ability to build responsive and user-friendly web applications from the ground up.
          </motion.p>
          <motion.p variants={itemVariants}>
            I enjoy solving real-world problems through code and continuously learning new technologies. My toolkit includes HTML, CSS, JavaScript, React, Java, Spring Boot, and MySQL. I'm particularly experienced in creating modern web interfaces and implementing robust backend solutions.
          </motion.p>
          <motion.p variants={itemVariants}>
            Currently seeking opportunities to contribute to impactful projects and grow as a developer while working with talented teams.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
