import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="glass-panel footer-content">
        <p>&copy; {new Date().getFullYear()} Kavya B. Crafted with creativity & code. (v1.2)</p>
      </div>
      <style>{`
        .footer {
          padding: 2rem;
          text-align: center;
          margin-top: 4rem;
        }
        .footer-content {
          display: inline-block;
          padding: 1rem 3rem;
          color: var(--text-muted);
          font-size: 0.9rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
