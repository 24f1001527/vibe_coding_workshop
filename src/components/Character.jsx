import React from 'react';

const Character = ({ xp, level, hp, gold }) => {
  const xpToNextLevel = level * 100;

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-4">
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">Character Stats</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <p className="text-lg font-bold text-yellow-400">Level</p>
          <p className="text-3xl font-bold">{level}</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-yellow-400">XP</p>
          <p className="text-3xl font-bold">{xp} / {xpToNextLevel}</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-red-500">HP</p>
          <p className="text-3xl font-bold">{hp}</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-yellow-500">Gold</p>
          <p className="text-3xl font-bold">{gold}</p>
        </div>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-4 mt-4">
        <div
          className="bg-yellow-400 h-4 rounded-full"
          style={{ width: `${(xp / xpToNextLevel) * 100}%` }}
        ></div>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-4 mt-4">
        <div
          className="bg-red-500 h-4 rounded-full"
          style={{ width: `${hp}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Character;
