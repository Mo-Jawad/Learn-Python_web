import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import CourseGrid from './components/CourseGrid';
import Footer from './components/Footer';

/**
 * =============================================================================
 * App Root Component - Py-Learn-HTML
 * =============================================================================
 * Main application layout combining:
 * 1. Navbar with branding and fast navigation
 * 2. Contrasting Hero with Pythonic gradient, tagline & live Terminal
 * 3. Architecture & stats section
 * 4. Course grid with interactive animated cards & "Open" button (target="_blank")
 * 5. Footer with social hyperlinks & creator attribution ("Md Jaoyad SWE")
 */
export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col selection:bg-yellow-400 selection:text-slate-900 bg-grid-pattern relative">
      
      {/* Top Navbar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* Contrasting Hero Section with interactive Python Terminal */}
        <Hero />

        {/* Platform Architecture & Stats */}
        <StatsSection />

        {/* Animated Course Card Grid */}
        <CourseGrid />
      </main>

      {/* Footer with creator attribution and social handles */}
      <Footer />

    </div>
  );
}
