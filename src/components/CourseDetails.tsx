import React from 'react';
import { BookOpen, TrendingUp, Users } from 'lucide-react';

const CourseDetails = () => {
  return (
    <section id="course" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Course Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <BookOpen className="h-12 w-12 mx-auto mb-4 text-purple-600" />
            <h3 className="text-xl font-semibold mb-2">Comprehensive Curriculum</h3>
            <p className="text-gray-600">Learn Pocket Options and Forex trading strategies from beginner to advanced levels</p>
          </div>
          <div className="text-center">
            <TrendingUp className="h-12 w-12 mx-auto mb-4 text-purple-600" />
            <h3 className="text-xl font-semibold mb-2">Real-world Applications</h3>
            <p className="text-gray-600">Practice with real market scenarios and live trading sessions</p>
          </div>
          <div className="text-center">
            <Users className="h-12 w-12 mx-auto mb-4 text-purple-600" />
            <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
            <p className="text-gray-600">Learn from experienced traders with proven track records</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;