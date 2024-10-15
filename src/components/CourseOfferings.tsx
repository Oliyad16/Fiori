import React from 'react';
import { DollarSign, Zap } from 'lucide-react';

const CourseCard = ({ title, price, description, benefits, icon: Icon }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
    <Icon className="h-12 w-12 text-pink-500 mb-4" />
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-3xl font-bold text-pink-500 mb-4">${price}</p>
    <p className="text-gray-600 mb-6">{description}</p>
    <ul className="space-y-2 mb-6">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-start">
          <span className="text-green-500 mr-2">✓</span>
          {benefit}
        </li>
      ))}
    </ul>
    <a
      href="#contact"
      className="block w-full text-center bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition-colors"
    >
      Enroll Now
    </a>
  </div>
);

const CourseOfferings = () => {
  return (
    <section id="courses" className="py-16 bg-purple-50 blur-in blur-in-delay-2">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Premium Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CourseCard
            title="Forex Trading Mastery"
            price="2,250"
            description="Master the foreign exchange market and learn to trade currencies like a pro."
            benefits={[
              "Comprehensive technical and fundamental analysis",
              "Risk management strategies",
              "Live trading sessions",
              "Personal mentoring"
            ]}
            icon={DollarSign}
          />
          <CourseCard
            title="Pocket Option Pro Trader"
            price="3,325"
            description="Become an expert in binary options trading with our advanced Pocket Option course."
            benefits={[
              "Advanced option strategies",
              "Market psychology insights",
              "Automated trading techniques",
              "Exclusive trading tools and indicators"
            ]}
            icon={Zap}
          />
        </div>
      </div>
    </section>
  );
};

export default CourseOfferings;