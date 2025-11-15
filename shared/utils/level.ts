export function getLevel(xp: number): number {
  return Math.floor(0.05 * Math.sqrt(xp));
}

export function xpForNextLevel(level: number): number {
  return Math.ceil(Math.pow((level + 1) / 0.05, 2));
}