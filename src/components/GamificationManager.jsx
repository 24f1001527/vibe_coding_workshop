import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Character from './Character';
import TaskManager from './TaskManager';
import SkillTree from './SkillTree';
import DailyQuests from './DailyQuests';
import Achievements from './Achievements';
import BossBattle from './BossBattle';
import PowerUps from './PowerUps';
import LevelUpNotification from './LevelUpNotification';

const questList = [
  { id: 1, text: 'Complete 3 tasks', reward: 50 },
  { id: 2, text: 'Complete a Hard task', reward: 75 },
  { id: 3, text: 'Maintain a 3-day streak', reward: 100 },
  { id: 4, text: 'Spend 2 skill points', reward: 120 },
  { id: 5, text: 'Earn 100 gold', reward: 100 },
];

const achievementList = {
  level_5: { id: 'level_5', name: 'Level 5', description: 'Reach level 5', icon: '🏆', unlocked: false },
  streak_7: { id: 'streak_7', name: 'Week Long', description: 'Maintain a 7-day streak', icon: '🔥', unlocked: false },
  gold_500: { id: 'gold_500', name: 'Gold Hoarder', description: 'Earn 500 gold', icon: '💰', unlocked: false },
  epic_task: { id: 'epic_task', name: 'Epic Win', description: 'Complete an Epic task', icon: '⚔️', unlocked: false },
};

const bossList = [
  {
    id: 1,
    name: 'The Procrastination Dragon',
    maxHp: 500,
    hp: 500,
    subTasks: [
      { id: 1, text: 'Outline the project report', completed: false, damage: 100 },
      { id: 2, text: 'Write the first draft', completed: false, damage: 200 },
      { id: 3, text: 'Proofread and edit', completed: false, damage: 150 },
      { id: 4, text: 'Submit the final report', completed: false, damage: 50 },
    ],
    reward: { xp: 1000, gold: 200 },
  }
];

const powerUpList = {
  xp_boost: { id: 'xp_boost', name: 'XP Boost', icon: '🚀', count: 1, active: false, duration: 3600000 },
  hp_shield: { id: 'hp_shield', name: 'HP Shield', icon: '🛡️', count: 1, active: false, duration: 86400000 },
};


const GamificationManager = () => {
  const [xp, setXp] = useState(() => JSON.parse(localStorage.getItem('xp')) || 0);
  const [level, setLevel] = useState(() => JSON.parse(localStorage.getItem('level')) || 1);
  const [streak, setStreak] = useState(() => JSON.parse(localStorage.getItem('streak')) || 0);
  const [hp, setHp] = useState(() => JSON.parse(localStorage.getItem('hp')) || 100);
  const [gold, setGold] = useState(() => JSON.parse(localStorage.getItem('gold')) || 0);
  const [skillPoints, setSkillPoints] = useState(() => JSON.parse(localStorage.getItem('skillPoints')) || 0);
  const [skills, setSkills] = useState(() => JSON.parse(localStorage.getItem('skills')) || {});
  const [dailyQuests, setDailyQuests] = useState(() => JSON.parse(localStorage.getItem('dailyQuests')) || []);
  const [lastLoginDate, setLastLoginDate] = useState(() => localStorage.getItem('lastLoginDate') || null);
  const [achievements, setAchievements] = useState(() => {
    const saved = localStorage.getItem('achievements');
    return saved ? JSON.parse(saved) : achievementList;
  });
  const [currentBoss, setCurrentBoss] = useState(() => {
    const saved = localStorage.getItem('currentBoss');
    return saved ? JSON.parse(saved) : bossList[0];
  });
  const [powerUps, setPowerUps] = useState(() => {
    const saved = localStorage.getItem('powerUps');
    return saved ? JSON.parse(saved) : powerUpList;
  });
  const [showLevelUp, setShowLevelUp] = useState(false);

  useEffect(() => {
    localStorage.setItem('xp', JSON.stringify(xp));
    localStorage.setItem('level', JSON.stringify(level));
    localStorage.setItem('streak', JSON.stringify(streak));
    localStorage.setItem('hp', JSON.stringify(hp));
    localStorage.setItem('gold', JSON.stringify(gold));
    localStorage.setItem('skillPoints', JSON.stringify(skillPoints));
    localStorage.setItem('skills', JSON.stringify(skills));
    localStorage.setItem('dailyQuests', JSON.stringify(dailyQuests));
    localStorage.setItem('lastLoginDate', lastLoginDate);
    localStorage.setItem('achievements', JSON.stringify(achievements));
    localStorage.setItem('currentBoss', JSON.stringify(currentBoss));
    localStorage.setItem('powerUps', JSON.stringify(powerUps));
  }, [xp, level, streak, hp, gold, skillPoints, skills, dailyQuests, lastLoginDate, achievements, currentBoss, powerUps]);

  useEffect(() => {
    const today = new Date().toLocaleDateString();
    if (today !== lastLoginDate) {
      const newQuests = questList.sort(() => 0.5 - Math.random()).slice(0, 3).map(q => ({...q, completed: false}));
      setDailyQuests(newQuests);

      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      if (lastLoginDate !== yesterday.toLocaleDateString()) {
        setStreak(0);
      }
    }
    setLastLoginDate(today);
  }, []);

  useEffect(() => {
    checkAchievements();
  }, [level, streak, gold]);

  const checkAchievements = () => {
    let newAchievements = { ...achievements };
    if (level >= 5 && !newAchievements.level_5.unlocked) {
      newAchievements.level_5.unlocked = true;
    }
    if (streak >= 7 && !newAchievements.streak_7.unlocked) {
      newAchievements.streak_7.unlocked = true;
    }
    if (gold >= 500 && !newAchievements.gold_500.unlocked) {
      newAchievements.gold_500.unlocked = true;
    }
    setAchievements(newAchievements);
  };

  const difficultyMap = {
    Easy: { xp: 10, gold: 5 },
    Medium: { xp: 20, gold: 10 },
    Hard: { xp: 50, gold: 25 },
    Epic: { xp: 100, gold: 50 },
  };

  const completeTask = (difficulty) => {
    let { xp: xpGained, gold: goldGained } = difficultyMap[difficulty] || difficultyMap.Medium;
    if (powerUps.xp_boost.active) {
      xpGained *= 2;
    }
    const newXp = xp + xpGained;
    setXp(newXp);
    setGold(gold + goldGained);

    if (difficulty === 'Epic' && !achievements.epic_task.unlocked) {
      let newAchievements = { ...achievements };
      newAchievements.epic_task.unlocked = true;
      setAchievements(newAchievements);
    }

    if (newXp >= level * 100) {
      setLevel(level + 1);
      setShowLevelUp(true);
      setXp(newXp - level * 100);
      setHp(100);
      setSkillPoints(skillPoints + 1);
    }

    const today = new Date().toLocaleDateString();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (lastLoginDate === yesterday.toLocaleDateString()) {
      setStreak(streak + 1);
    } else if (lastLoginDate !== today) {
      setStreak(1);
    }
  };

  const missTask = () => {
    if (powerUps.hp_shield.active) {
      // Prevent HP loss but consume the shield
      setPowerUps({ ...powerUps, hp_shield: { ...powerUps.hp_shield, active: false } });
    } else {
      setHp(hp > 10 ? hp - 10 : 0);
    }
    setStreak(0);
  };

  const purchaseSkill = (skillId, cost) => {
    if (skillPoints >= cost && !skills[skillId]?.purchased) {
      setSkillPoints(skillPoints - cost);
      setSkills({ ...skills, [skillId]: { purchased: true } });
    }
  };

  const completeQuest = (questId) => {
    const quest = dailyQuests.find(q => q.id === questId);
    if (quest && !quest.completed) {
      setXp(xp + quest.reward);
      setDailyQuests(dailyQuests.map(q => q.id === questId ? { ...q, completed: true } : q));
    }
  };

  const completeSubTask = (subTaskId) => {
    const subTask = currentBoss.subTasks.find(st => st.id === subTaskId);
    if (subTask && !subTask.completed) {
      const newBossHp = currentBoss.hp - subTask.damage;
      const newSubTasks = currentBoss.subTasks.map(st => st.id === subTaskId ? { ...st, completed: true } : st);

      if (newBossHp <= 0) {
        // Boss defeated
        setXp(xp + currentBoss.reward.xp);
        setGold(gold + currentBoss.reward.gold);
        setCurrentBoss(null); // Or load next boss
      } else {
        setCurrentBoss({ ...currentBoss, hp: newBossHp, subTasks: newSubTasks });
      }
    }
  };

  const activatePowerUp = (powerUpId) => {
    const powerUp = powerUps[powerUpId];
    if (powerUp && powerUp.count > 0 && !powerUp.active) {
      const newPowerUps = {
        ...powerUps,
        [powerUpId]: { ...powerUp, active: true, count: powerUp.count - 1 },
      };
      setPowerUps(newPowerUps);

      setTimeout(() => {
        setPowerUps((currentPowerUps) => ({
          ...currentPowerUps,
          [powerUpId]: { ...currentPowerUps[powerUpId], active: false },
        }));
      }, powerUp.duration);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {showLevelUp && <LevelUpNotification level={level} onClose={() => setShowLevelUp(false)} />}
      <motion.div animate={{boxShadow: showLevelUp ? '0 0 20px #0ff' : 'none'}}>
        <Character xp={xp} level={level} hp={hp} gold={gold} />
      </motion.div>
      <PowerUps powerUps={powerUps} activatePowerUp={activatePowerUp} />
      <DailyQuests quests={dailyQuests} completeQuest={completeQuest} />
      <Achievements achievements={achievements} />
      {currentBoss && <BossBattle boss={currentBoss} completeSubTask={completeSubTask} />}
      <TaskManager completeTask={completeTask} missTask={missTask} />
      <SkillTree skillPoints={skillPoints} skills={skills} purchaseSkill={purchaseSkill} />
    </motion.div>
  );
};

export default GamificationManager;
