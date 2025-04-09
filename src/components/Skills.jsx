import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaJava, FaGithub, FaNodeJs, FaDatabase , FaCode} from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';

const Skills = () => {
  const skills = {
    Frontend: [
      { name: 'React', icon: <FaReact /> },
      { name: 'React Native', icon: <TbBrandReactNative /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> }
    ],
    Backend: [
      { name: 'Java', icon: <FaJava /> },
      { name: 'Node.js', icon:<FaNodeJs/> },
      { name: 'Express.js', icon: null }
    ],
    Tools: [
      { name: 'GitHub', icon: <FaGithub/> },
      { name: 'VS Code', icon: <FaCode/> },
      { name: 'MongoDB', icon: <FaDatabase/> }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.section
      id="skills"
      className="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2 variants={categoryVariants}>Skills</motion.h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, skillList]) => (
          <motion.div
            key={category}
            className="skill-category"
            variants={categoryVariants}
          >
            <h3>{category}</h3>
            <ul>
              {skillList.map((skill, index) => (
                <motion.li
                  key={skill.name}
                  variants={skillVariants}
                  whileHover={{ x: 10 }}
                  className="skill-item"
                >
                  {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                  {skill.name}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
