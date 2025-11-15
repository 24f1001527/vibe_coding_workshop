import React from "react";
import { motion } from "framer-motion";
import { useStore } from "../store";
import XPBar from "../components/XPBar";
import StreakCard from "../components/StreakCard";
import TasksListPreview from "../components/TasksListPreview";
export default function HomeDashboard() {
  const { user } = useStore();
  return (
    <motion.div className="min-h-screen bg-gradient-to-tr from-purple-900 via-pink-800 to-blue-800 p-6 flex flex-col gap-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <div className="rounded-2xl bg-black bg-opacity-40 p-6 flex flex-col items-center shadow-lg">
        <img src={user.avatarUrl} alt="" className="rounded-full w-24 h-24 mb-2 border-4 border-pink-400" />
        <h1 className="text-3xl font-bold text-white">{user.displayName}</h1>
        <XPBar xp={user.xp} level={user.level} />
        <StreakCard streak={user.streak} />
        <div className="mt-4 w-full">
          <TasksListPreview />
        </div>
      </div>
    </motion.div>
  );
}