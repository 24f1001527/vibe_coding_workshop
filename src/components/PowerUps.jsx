import React from 'react';

const PowerUps = ({ powerUps, activatePowerUp }) => {
  if (!powerUps) {
    return null;
  }

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 mt-4">
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">Power-ups</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.values(powerUps).map((powerUp) => (
          <div key={powerUp.id} className="text-center">
            <button
              onClick={() => activatePowerUp(powerUp.id)}
              disabled={powerUp.active || powerUp.count === 0}
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <p className="text-2xl">{powerUp.icon}</p>
              <p>{powerUp.name}</p>
              <p className="text-sm">x{powerUp.count}</p>
              {powerUp.active && <p className="text-xs text-yellow-400">Active</p>}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PowerUps;
