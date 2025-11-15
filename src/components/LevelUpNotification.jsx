import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LevelUpNotification = ({ level, onClose }) => {
  return (
    <AnimatePresence>
      {level > 1 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.5, rotate: 15 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <div className="bg-gray-800 border-4 border-yellow-400 rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-5xl font-bold text-yellow-400 mb-4 animate-bounce">LEVEL UP!</h2>
            <p className="text-3xl text-white">You've reached level <span className="font-bold text-cyan-400">{level}</span>!</p>
            <p className="text-xl text-gray-400 mt-2">New skill point acquired!</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LevelUpNotification;
