
import React from 'react';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-veljuu-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold">Veljuu</a>
            <p className="text-gray-400 mt-2">Product Management Expertise</p>
          </div>

          <div className="flex flex-col mb-6 md:mb-0 items-center md:items-start">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              <a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/stefanie-de-kerpel/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:steffie@veljuu.com" 
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Veljuu. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center text-gray-400 hover:text-white transition-colors"
          >
            Back to top <ArrowUp className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
