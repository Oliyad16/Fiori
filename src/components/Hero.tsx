import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-pink-400 to-purple-500 text-white py-20 blur-in blur-in-delay-1">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Mastering the Art of Trading with Fiori</h1>
        <p className="text-xl mb-8">Unlock your financial potential with our expert-led Forex and Pocket Option courses</p>
        <a href="#courses" className="bg-white text-pink-500 py-3 px-8 rounded-full font-semibold hover:bg-pink-100 transition-colors text-lg">
          Explore Our Courses
        </a>
      </div>
    </section>
  );
};

export default Hero;