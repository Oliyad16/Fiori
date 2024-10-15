import React from 'react';
import { TrendingUp } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm blur-in">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <TrendingUp className="h-8 w-8 text-pink-500" />
          <span className="text-2xl font-bold text-gray-800">TradeMaster</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#pre-course" className="text-gray-600 hover:text-pink-500 transition-colors">Why Trade?</a></li>
            <li><a href="#courses" className="text-gray-600 hover:text-pink-500 transition-colors">Courses</a></li>
            <li><a href="#testimonials" className="text-gray-600 hover:text-pink-500 transition-colors">Testimonials</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-pink-500 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;