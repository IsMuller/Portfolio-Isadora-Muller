import React from 'react';
import Header from './components/header';
import Hero from './pages/hero';           
import Images from './pages/Images';       

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header /> 
      <main>
        <Hero />
        <Images />
      </main>
    </div>
  );
}

export default App;