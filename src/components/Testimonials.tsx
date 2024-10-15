import React from 'react';

const testimonials = [
  {
    name: 'Sarah J.',
    quote: "The Forex Trading Mastery course transformed my approach to trading. I'm now consistently profitable.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&q=80'
  },
  {
    name: 'Michael T.',
    quote: 'Pocket Option Pro Trader opened my eyes to the potential of binary options. The strategies are game-changing.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&q=80'
  },
  {
    name: 'Emily R.',
    quote: 'The personal mentoring in the Forex course was invaluable. It fast-tracked my learning and results.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&q=80'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-pink-50 blur-in blur-in-delay-3">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold text-pink-500">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;