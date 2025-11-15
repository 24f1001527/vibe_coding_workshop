import React from "react";
import { motion } from "framer-motion";
interface Props {
  level: number;
  onClose: () => void;
}
export default function LevelUpPopup({ level, onClose }: Props) {
  return (
    <motion.div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ type: "spring", stiffness: 200, damping: 25 }} onClick={onClose}>
      <motion.div className="bg-gradient-to-tr from-yellow-400 via-pink-400 to-purple-500 rounded-2xl shadow-2xl p-8 flex flex-col items-center animate-pulse" initial={{ rotate: -20 }} animate={{ rotate: 0 }} transition={{ type: "spring", stiffness: 100 }}>
        <div className="text-5xl font-extrabold text-white mb-3">🎉 Level Up!</div>
        <div className="text-3xl text-white mb-1">You reached Level {level}!</div>
        <div className="text-xl text-white">Keep up the vibe!</div>
        <button className="mt-6 px-6 py-2 bg-black text-white rounded-xl text-lg shadow-md" onClick={onClose}>Close</button>
      </motion.div>
    </motion.div>
  );
}