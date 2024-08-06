import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-center space-x-6">
          <li><Link href="/" className="text-gray-800 hover:text-blue-600">Home</Link></li>
          <li><Link href="#about" className="text-gray-800 hover:text-blue-600">About Me</Link></li>
          <li><Link href="#www3ws" className="text-gray-800 hover:text-blue-600">WW3WS</Link></li>
          <li><Link href="#footer" className="text-gray-800 hover:text-blue-600">Contact Me</Link></li>
          <li><a href="http://portfolio.giantflyingegg.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600">Portfolio</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;