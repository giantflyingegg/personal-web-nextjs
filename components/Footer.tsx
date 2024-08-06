import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-semibold text-center mb-4">Get in touch:</h3>
        <div className="flex justify-center space-x-6">
          <a href="mailto:abwaham@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://www.github.com/giantflyingegg" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/thepowerof23" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://t.me/@thepowerof23" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <i className="fab fa-telegram-plane"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;