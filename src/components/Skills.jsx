import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiCplusplus, SiMysql, SiMongodb, SiPostman, SiExpress } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C", icon: <SiCplusplus /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Java", icon: <FaJava /> },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3 /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React.js", icon: <FaReact /> },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB Atlas", icon: <SiMongodb /> },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "VS Code", icon: <VscVscode /> },
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="glass-panel skill-category"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="category-title">{category.title}</h3>
            <motion.div
              className="skills-list"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {category.skills.map((skill, idx) => (
                <motion.div key={idx} className="skill-item" variants={item}>
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .skill-category {
          padding: 2rem;
          transition: transform 0.3s;
          border-top: 4px solid var(--primary);
        }
        .skill-category:hover {
          transform: translateY(-5px);
          border-color: var(--accent);
        }
        .category-title {
          font-size: 1.4rem;
          margin-bottom: 1.5rem;
          color: var(--text-main);
          text-align: center;
          font-weight: 600;
        }
        .skills-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
        }
        .skill-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.8rem;
        }
        .skill-icon {
          font-size: 3rem;
          color: var(--text-muted);
          transition: 0.3s;
        }
        .skill-item:hover .skill-icon {
          color: var(--secondary);
          transform: scale(1.1);
        }
        .skill-name {
          font-size: 0.9rem;
          color: var(--text-muted);
        }
      `}</style>
    </section>
  );
};

export default Skills;
