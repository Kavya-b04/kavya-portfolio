import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar-container">
      <div className="glass-panel navbar">
        <a href="#home" className="logo">Kavya B.</a>

        <div className="desktop-menu">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">{link.name}</a>
          ))}
        </div>

        <div className="mobile-toggle" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu glass-panel"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={toggleMenu} className="mobile-link">
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar-container {
          position: fixed;
          top: 2rem;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 1200px;
          z-index: 1000;
        }
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          border-radius: 50px; /* Pill shape */
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-main);
          letter-spacing: 1px;
        }
        .desktop-menu {
          display: flex;
          gap: 2rem;
        }
        .nav-link {
          font-weight: 500;
          color: var(--text-muted);
          position: relative;
        }
        .nav-link:hover {
          color: var(--secondary);
        }
        .mobile-toggle {
          display: none;
          flex-direction: column;
          gap: 6px;
          cursor: pointer;
        }
        .bar {
          width: 25px;
          height: 2px;
          background: white;
          transition: 0.3s;
        }
        .bar.open:nth-child(1) { transform: rotate(45deg) translate(5px, 6px); }
        .bar.open:nth-child(2) { opacity: 0; }
        .bar.open:nth-child(3) { transform: rotate(-45deg) translate(5px, -6px); }

        .mobile-menu {
          position: absolute;
          top: 110%; /* Below navbar */
          left: 0;
          width: 100%;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          text-align: center;
        }

        @media (max-width: 768px) {
          .desktop-menu { display: none; }
          .mobile-toggle { display: flex; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
