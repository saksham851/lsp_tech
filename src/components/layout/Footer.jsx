import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-12 text-center mt-20">
      <div className="container-max flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-white/50 text-sm">
          &copy; {currentYear} [Name]. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Twitter</a>
          <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">GitHub</a>
          <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
