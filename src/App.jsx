import React from 'react';
import GamificationManager from './components/GamificationManager';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <div className="container mx-auto p-4">
        <header className="text-center py-8">
          <h1 className="text-5xl font-bold text-cyan-400" style={{ textShadow: '0 0 10px #0ff' }}>
            Vibe Productivity
          </h1>
          <p className="text-lg text-gray-400 mt-2">Level up your life, one task at a time.</p>
        </header>

        <main>
          <GamificationManager />
        </main>
      </div>
    </div>
  );
}

export default App;
