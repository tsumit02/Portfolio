import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Simon Says Game',
      description: 'An interactive memory game built with React and modern animations.',
      image: '/Simon.jpg',
      github: 'https://github.com/tsumit02/Simon-game',
      demo: 'https://tsumit02.github.io/Simon-game/'
    },
    {
      title: 'Ankur AI Chatbot',
      description: 'AI-powered chatbot built with modern technologies and natural language processing.',
      image: '/Ankur.jpg',
      github: 'https://github.com/tsumit02/Ai-chatbot',
      demo: 'https://tsumit02.github.io/Ai-chatbot/'
    }
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section
      id="projects"
      className="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2 variants={cardVariants}>My Projects</motion.h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={cardVariants}
            whileHover={{ y: -10 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <motion.a
                href={project.github}
                className="project-link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub /> GitHub
              </motion.a>
              <motion.a
                href={project.demo}
                className="project-link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt /> Live Demo
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
