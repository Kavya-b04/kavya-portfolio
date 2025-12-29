import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certs = [
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco",
      date: "2024"
    },
    {
      name: "Web Development",
      issuer: "Info Solution",
      date: "2023"
    },
    {
      name: "MySQL",
      issuer: "SimpliLearn",
      date: "2023"
    }
  ];

  return (
    <section id="certifications" className="section">
      <h2 className="section-title">Certifications</h2>
      <div className="certs-container">
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            className="glass-panel cert-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div>
              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-issuer">Issued by: <span>{cert.issuer}</span></p>
            </div>
            {/* <span className="cert-date">{cert.date}</span> */}
          </motion.div>
        ))}
      </div>
      <style>{`
        .certs-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 800px;
          margin: 0 auto;
        }
        .cert-item {
          padding: 2rem;
          border-left: 4px solid var(--secondary);
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: 0.3s;
        }
        .cert-item:hover {
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 20px rgba(0, 198, 255, 0.2);
        }
        .cert-name {
          font-size: 1.3rem;
          color: var(--text-main);
          margin-bottom: 0.5rem;
        }
        .cert-issuer {
          color: var(--text-muted);
        }
        .cert-issuer span {
          color: var(--secondary);
          font-weight: 500;
        }
        @media (max-width: 600px) {
          .cert-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Certifications;
