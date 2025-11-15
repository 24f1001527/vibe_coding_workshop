export const XP_DIFFICULTY = { easy: 5, medium: 10, hard: 25 };
export const XP_BASE = 10;
export const XP_STREAK_BONUS = 3;

export function calculateTaskXP(difficulty: 'easy'|'medium'|'hard', streak: number): number {
  return XP_BASE + XP_DIFFICULTY[difficulty] + (streak > 1 ? XP_STREAK_BONUS * streak : 0);
}