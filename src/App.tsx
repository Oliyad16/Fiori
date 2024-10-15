import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PreCourseSection from './components/PreCourseSection';
import CourseOfferings from './components/CourseOfferings';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 smooth-scroll">
      <Header />
      <main>
        <Hero />
        <PreCourseSection />
        <CourseOfferings />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;