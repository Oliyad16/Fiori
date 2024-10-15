import React from 'react';
import { TrendingUp, DollarSign, BarChart2 } from 'lucide-react';

const AnimatedIcon = ({ icon: Icon, delay }) => (
  <div className={`float-animation blur-in blur-in-delay-${delay}`}>
    <Icon className="h-16 w-16 text-pink-500 mb-4" />
  </div>
);

const PreCourseSection = () => {
  return (
    <section id="pre-course" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Learn Trading?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <AnimatedIcon icon={TrendingUp} delay={1} />
            <h3 className="text-xl font-semibold mb-2">Financial Growth</h3>
            <p className="text-gray-600">Develop skills to grow your wealth and secure your financial future</p>
          </div>
          <div className="text-center">
            <AnimatedIcon icon={DollarSign} delay={2} />
            <h3 className="text-xl font-semibold mb-2">Income Potential</h3>
            <p className="text-gray-600">Create additional income streams through smart trading strategies</p>
          </div>
          <div className="text-center">
            <AnimatedIcon icon={BarChart2} delay={3} />
            <h3 className="text-xl font-semibold mb-2">Market Understanding</h3>
            <p className="text-gray-600">Gain valuable insights into global markets and economic trends</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreCourseSection;