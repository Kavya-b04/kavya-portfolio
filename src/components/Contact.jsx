import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting me! This is a demo form.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3>Let's Connect</h3>
          <p>I am currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>

          <div className="info-item">
            <div className="icon-box"><FaEnvelope /></div>
            <a href="mailto:kavyabalamurugan04@gmail.com">kavyabalamurugan04@gmail.com</a>
          </div>
          <div className="info-item">
            <div className="icon-box"><FaPhoneAlt /></div>
            <span>+91 XXXXX XXXXX</span>
          </div>
          <div className="info-item">
            <div className="icon-box"><FaMapMarkerAlt /></div>
            <span>Bengaluru, India</span>
          </div>

          <div className="social-links">
            <motion.a
              href="https://github.com/Kavya-b04"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: "#00c6ff" }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/kavya-balamurugan-56a86b2a7"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: "#00c6ff" }}
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </motion.div>

        <motion.form
          className="glass-panel contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
      <style>{`
        .contact-container {
          display: flex;
          flex-wrap: wrap;
          gap: 4rem;
          justify-content: center;
        }
        .contact-info {
          flex: 1;
          min-width: 300px;
        }
        .contact-info h3 {
          font-size: 2rem;
          color: var(--text-main);
          margin-bottom: 1rem;
        }
        .contact-info p {
          color: var(--text-muted);
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }
        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          color: var(--text-main);
        }
        .icon-box {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--secondary);
        }
        .social-links {
          display: flex;
          gap: 1.5rem;
          margin-top: 3rem;
        }
        .social-links a {
          font-size: 2rem;
          color: var(--text-muted);
        }
        
        .contact-form {
          flex: 1;
          min-width: 300px;
          padding: 2.5rem;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        .form-group input, .form-group textarea {
          width: 100%;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: var(--text-main);
          font-family: inherit;
          transition: 0.3s;
        }
        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          background: rgba(0, 0, 0, 0.4);
        }
        .submit-btn {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(90deg, var(--secondary), var(--primary));
          color: white;
          font-weight: 700;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      `}</style>
    </section>
  );
};

export default Contact;
