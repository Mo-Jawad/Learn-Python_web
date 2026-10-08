import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import GoalsSection from './components/GoalsSection';
import WorkflowSection from './components/WorkflowSection';
import CourseGrid from './components/CourseGrid';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

/**
 * App — page layout: Navbar → Hero → Stats → Goals → Workflow → Modules → Contact → Footer.
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
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

