import React from 'react';
import { TrendingUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-purple-800 text-white py-12 blur-in blur-in-delay-3">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <TrendingUp className="h-8 w-8 text-pink-400 mr-2" />
              <span className="text-xl font-bold">TradeMaster</span>
            </div>
            <p className="text-purple-200">Empowering traders worldwide with expert knowledge and proven strategies.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-purple-200 hover:text-pink-400 transition-colors">About Us</a></li>
              <li><a href="#courses" className="text-purple-200 hover:text-pink-400 transition-colors">Our Courses</a></li>
              <li><a href="#" className="text-purple-200 hover:text-pink-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-purple-200 hover:text-pink-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-purple-200 mb-2">Email: info@trademaster.com</p>
            <p className="text-purple-200 mb-2">Phone: +1 (555) 123-4567</p>
            <p className="text-purple-200">Address: 123 Trading St, Financial District, NY 10001</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-purple-700 text-center text-purple-200">
          &copy; {new Date().getFullYear()} TradeMaster. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;