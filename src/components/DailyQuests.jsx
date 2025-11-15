import React from 'react';
import { motion } from 'framer-motion';

const DailyQuests = ({ quests, completeQuest }) => {
  if (!quests || quests.length === 0) {
    return null;
  }

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 mt-4">
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">Daily Quests</h2>
      <ul>
        {quests.map((quest) => (
          <motion.li
            key={quest.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`p-3 rounded-lg mb-2 flex justify-between items-center ${
              quest.completed ? 'bg-green-500' : 'bg-gray-700'
            }`}
          >
            <div>
              <p className={`font-bold ${quest.completed ? 'line-through' : ''}`}>{quest.text}</p>
              <p className="text-sm text-gray-400">Reward: {quest.reward} XP</p>
            </div>
            {!quest.completed && (
              <button
                onClick={() => completeQuest(quest.id)}
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-1 px-2 rounded-lg transition-colors"
              >
                Complete
              </button>
            )}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default DailyQuests;
