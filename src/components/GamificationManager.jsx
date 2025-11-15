import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Dashboard from './Dashboard';
import TaskManager from './TaskManager';

const GamificationManager = () => {
  const [xp, setXp] = useState(() => {
    const savedXp = localStorage.getItem('xp');
    return savedXp ? JSON.parse(savedXp) : 0;
  });
  const [level, setLevel] = useState(() => {
    const savedLevel = localStorage.getItem('level');
    return savedLevel ? JSON.parse(savedLevel) : 1;
  });
  const [streak, setStreak] = useState(() => {
    const savedStreak = localStorage.getItem('streak');
    return savedStreak ? JSON.parse(savedStreak) : 0;
  });

  useEffect(() => {
    localStorage.setItem('xp', JSON.stringify(xp));
    localStorage.setItem('level', JSON.stringify(level));
    localStorage.setItem('streak', JSON.stringify(streak));
  }, [xp, level, streak]);

  const completeTask = () => {
    const newXp = xp + 10;
    setXp(newXp);

    if (newXp >= level * 100) {
      setLevel(level + 1);
      setXp(0);
    }
    // For simplicity, we'll increment the streak every time a task is completed.
    // A more robust implementation would check the date.
    setStreak(streak + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Dashboard xp={xp} level={level} streak={streak} />
      <TaskManager completeTask={completeTask} />
    </motion.div>
  );
};

export default GamificationManager;
