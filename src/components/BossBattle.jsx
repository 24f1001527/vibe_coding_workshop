import React from 'react';
import { motion } from 'framer-motion';

const BossBattle = ({ boss, completeSubTask }) => {
  if (!boss) {
    return null;
  }

  const hpPercentage = (boss.hp / boss.maxHp) * 100;

  return (
    <div className="bg-red-900 rounded-lg shadow-lg p-6 mt-4 text-white">
      <h2 className="text-3xl font-bold text-center text-yellow-400 mb-4">
        BOSS BATTLE: {boss.name}
      </h2>
      <div className="w-full bg-gray-700 rounded-full h-8 border-2 border-yellow-400">
        <motion.div
          className="bg-red-500 h-full rounded-full text-center font-bold"
          style={{ width: `${hpPercentage}%` }}
          initial={{ width: '100%' }}
          animate={{ width: `${hpPercentage}%` }}
        >
          {boss.hp} / {boss.maxHp}
        </motion.div>
      </div>
      <h3 className="text-xl font-bold text-yellow-400 mt-4">Sub-Tasks:</h3>
      <ul>
        {boss.subTasks.map((subTask) => (
          <li
            key={subTask.id}
            className={`p-3 rounded-lg mb-2 flex justify-between items-center ${
              subTask.completed ? 'bg-gray-600' : 'bg-gray-700'
            }`}
          >
            <span className={subTask.completed ? 'line-through' : ''}>
              {subTask.text}
            </span>
            {!subTask.completed && (
              <button
                onClick={() => completeSubTask(subTask.id)}
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-1 px-2 rounded-lg transition-colors"
              >
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BossBattle;
