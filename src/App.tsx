import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedListings from './components/FeaturedListings';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <FeaturedListings />
      </main>
    </div>
  );
}

export default App;