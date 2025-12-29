import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "ConnectX",
      description: "A Real-Time Chat Application facilitating instant messaging and user connection.",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com/kavyabalamurugan",
      demo: "#",
      color: "linear-gradient(135deg, #FF6B6B, #556270)"
    },
    {
      title: "Product Store",
      description: "A full-fledged E-commerce application with product listing, cart functionality, and checkout.",
      tags: ["MERN Stack", "Redux", "Stripe"],
      github: "https://github.com/kavyabalamurugan",
      demo: "#",
      color: "linear-gradient(135deg, #4AC29A, #BDFFF3)"
    },
    {
      title: "MindScribe",
      description: "A Note Management Application to organize thoughts, tasks, and ideas efficiently.",
      tags: ["React", "Express", "MongoDB"],
      github: "https://github.com/kavyabalamurugan",
      demo: "#",
      color: "linear-gradient(135deg, #8E2DE2, #4A00E0)"
    }
  ];

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 }
    }
  };

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="glass-panel project-card"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ y: -10 }}
          >
            <div className="card-gradient" style={{ background: project.color }}></div>
            <div className="card-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-btn github">GitHub</a>
                {/* <a href={project.demo} className="link-btn demo">Live Demo</a> */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
        }
        .project-card {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          border: 1px solid rgba(255,255,255,0.05);
          transition: 0.3s;
        }
        .project-card:hover {
          border-color: var(--secondary);
          box-shadow: 0 10px 40px -10px rgba(0,198,255,0.3);
        }
        .card-gradient {
          height: 10px;
          width: 100%;
        }
        .card-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .project-title {
          font-size: 1.8rem;
          color: var(--text-main);
          margin-bottom: 1rem;
          font-weight: 700;
        }
        .project-desc {
          color: var(--text-muted);
          margin-bottom: 2rem;
          flex-grow: 1;
          font-size: 1rem;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-bottom: 2rem;
        }
        .tag {
          background: rgba(255, 255, 255, 0.1);
          color: var(--secondary);
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
        }
        .project-links {
          display: flex;
          gap: 1rem;
        }
        .link-btn {
          padding: 0.6rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.9rem;
          text-align: center;
          flex: 1;
        }
        .github {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }
        .github:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Projects;
