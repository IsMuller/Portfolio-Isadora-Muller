import React from 'react';
import Header from './components/header';
import Hero from './pages/hero';           
import Images from './pages/Images';       
import Instagram from './pages/Instagram';
import ResearchHP from './pages/HarryPotter';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header /> 
      <main>
        <Hero />
        <Images />
        <Instagram/>
        <ResearchHP/>
      </main>
    </div>
  );
}

export default App;