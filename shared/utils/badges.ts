import { User, Task } from '../types/vibeSchema';
export const BADGES = [
  { id: 'earlybird', name: 'Early Bird', criteria: 'Complete a task before 8 AM' },
  { id: 'focusmaster', name: 'Focus Master', criteria: 'Complete 5 hard tasks in a week' },
  { id: 'streakking', name: 'Streak King', criteria: '7-day streak' },
];
export function checkBadgeUnlock(user: User, task: Task, history: Task[]): string[] {
  const unlocked: string[] = [];
  const today = new Date();
  if (
    task.completed &&
    today.getHours() < 8 &&
    !user.badges.includes('earlybird')
  ) unlocked.push('earlybird');
  const weekHard = history.filter(
    t => t.difficulty === 'hard' && t.completed &&
    (new Date().getTime() - new Date(t.completedAt!).getTime() < 7*24*60*60*1000)
  );
  if (weekHard.length >= 5 && !user.badges.includes('focusmaster'))
    unlocked.push('focusmaster');
  if (user.streak >= 7 && !user.badges.includes('streakking'))
    unlocked.push('streakking');
  return unlocked;
}