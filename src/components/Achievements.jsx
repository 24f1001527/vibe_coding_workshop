import React from 'react';
import { motion } from 'framer-motion';

const Achievements = ({ achievements }) => {
  if (!achievements) {
    return null;
  }

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 mt-4">
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">Achievements</h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.values(achievements).map((ach) => (
          <motion.li
            key={ach.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`p-4 rounded-lg text-center ${
              ach.unlocked ? 'bg-yellow-500' : 'bg-gray-700'
            }`}
          >
            <p className="text-4xl">{ach.icon}</p>
            <p className={`font-bold mt-2 ${ach.unlocked ? 'text-gray-900' : 'text-white'}`}>
              {ach.name}
            </p>
            {ach.unlocked && (
              <p className="text-sm text-gray-800">{ach.description}</p>
            )}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
