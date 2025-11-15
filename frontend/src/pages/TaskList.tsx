import React from "react";
import { motion } from "framer-motion";
import { useTasks } from "../store";
import TaskCard from "../components/TaskCard";
import AddTaskButton from "../components/AddTaskButton";
export default function TaskList() {
  const { tasks } = useTasks();
  return (
    <motion.div className="min-h-screen bg-gradient-to-tr from-blue-700 via-purple-700 to-pink-700 p-6" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
      <h2 className="text-2xl font-bold text-white mb-4">📝 Your Tasks</h2>
      <div className="flex flex-col gap-4">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
      <AddTaskButton />
    </motion.div>
  );
}