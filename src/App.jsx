import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import CourseGrid from './components/CourseGrid';
import GoalsSection from './components/GoalsSection';
import WorkflowSection from './components/WorkflowSection';
import Footer from './components/Footer';

/**
 * App — page layout: Navbar → Hero → Stats → Modules → Footer.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-ink flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <StatsSection />
        <GoalsSection />
        <WorkflowSection />
        <CourseGrid />
      </main>
      <Footer />
    </div>
  );
}

