import React from 'react';

const Dashboard = ({ xp, level, streak }) => {
  const xpToNextLevel = level * 100;

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-4">
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Your Progress</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-lg font-bold text-cyan-400">Level</p>
          <p className="text-3xl font-bold">{level}</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-cyan-400">XP</p>
          <p className="text-3xl font-bold">{xp} / {xpToNextLevel}</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-cyan-400">Streak</p>
          <p className="text-3xl font-bold">{streak} 🔥</p>
        </div>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-4 mt-4">
        <div
          className="bg-cyan-400 h-4 rounded-full"
          style={{ width: `${(xp / xpToNextLevel) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Dashboard;
