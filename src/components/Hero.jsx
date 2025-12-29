import React from 'react';
import { motion } from 'framer-motion';
import avatar from '../assets/sft.png';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="greeting">Hello, I'm</span>
          <h1 className="name">Kavya B</h1>
          <h2 className="role">
            <span className="gradient-text">Full Stack Developer</span>
          </h2>
          <p className="summary">
            Building digital experiences with code and creativity.
            Focused on the MERN stack and modern web technologies.
          </p>
          <div className="cta-container">
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Work
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="image-wrapper glass-panel">
            <img src={avatar} alt="Kavya B Avatar" />
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6rem 2rem 2rem; /* Add top padding for fixed navbar */
        }
        .hero-container {
          max-width: 1200px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4rem;
        }
        .hero-text {
          flex: 1;
        }
        .greeting {
          color: var(--secondary);
          font-size: 1.5rem;
          font-weight: 600;
          display: block;
          margin-bottom: 0.5rem;
        }
        .name {
          font-size: 5rem;
          line-height: 1.1;
          margin-bottom: 1rem;
          font-weight: 800;
        }
        .gradient-text {
          background: linear-gradient(to right, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .role {
          font-size: 2.5rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }
        .summary {
          font-size: 1.1rem;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
          max-width: 500px;
        }
        .cta-container {
          display: flex;
          gap: 1.5rem;
        }
        .btn {
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
        }
        .btn-primary {
          background: linear-gradient(90deg, var(--primary), var(--accent));
          color: white;
          border: none;
          box-shadow: 0 5px 15px rgba(112, 0, 255, 0.4);
        }
        .btn-outline {
          background: transparent;
          border: 2px solid var(--secondary);
          color: var(--secondary);
        }

        .hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
        }
        .image-wrapper {
          padding: 10px;
          border-radius: 50%;
          width: 400px;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.05);
        }
        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid rgba(255,255,255,0.1);
        }

        @media (max-width: 968px) {
          .hero-container {
            flex-direction: column-reverse;
            text-align: center;
            gap: 3rem;
          }
          .hero-text {
            align-items: center;
            display: flex;
            flex-direction: column;
          }
          .cta-container {
            justify-content: center;
          }
           .name { font-size: 3.5rem; }
           .role { font-size: 1.8rem; }
           .image-wrapper { width: 280px; height: 280px; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
