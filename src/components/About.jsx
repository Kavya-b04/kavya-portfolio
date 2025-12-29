import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="section-title">About Me</h2>
                <div className="glass-panel about-content">
                    <p>
                        I am a passionate <strong>Software Engineering aspirant</strong> graduating from REVA University
                        with a GPA of <span className="highlight">9.0</span>. I have a strong foundation in computer science principles and
                        hands-on experience with modern web technologies.
                    </p>
                    <br />
                    <p>
                        My objective is to leverage my skills in the <strong>MERN stack</strong> (MongoDB, Express, React, Node.js)
                        to solve real-world problems. I pride myself on writing clean, maintainable code and am always eager to
                        learn new technologies.
                    </p>
                </div>
            </motion.div>

            <style>{`
        .about-content {
          padding: 3rem;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          font-size: 1.2rem;
          color: var(--text-muted);
          line-height: 1.8;
          border-left: 5px solid var(--primary);
        }
        .about-content strong {
          color: var(--text-main);
          font-weight: 600;
        }
        .highlight {
          color: var(--secondary);
          font-weight: 700;
        }
      `}</style>
        </section>
    );
};

export default About;
