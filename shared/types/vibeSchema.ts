export interface User {
  uid: string;
  displayName: string;
  avatarUrl: string;
  xp: number;
  level: number;
  streak: number;
  badges: string[];
  tasksCompleted: number;
  dailyGoal: number;
  friends: string[];
  created: Date;
  lastActive: Date;
  streakHistory: { date: string; count: number }[];
}

export interface Task {
  id: string;
  userId: string;
  title: string;
  description?: string;
  points: number;
  category: string;
  dueDate: Date;
  difficulty: 'easy' | 'medium' | 'hard';
  completed: boolean;
  completedAt?: Date;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  criteria: string;
}

export interface Challenge {
  id: string;
  name: string;
  goal: number;
  period: 'weekly' | 'monthly';
  xpReward: number;
  participants: string[];
  completedBy: string[];
}

export interface Notification {
  id: string;
  userId: string;
  type: 'reminder' | 'reward' | 'streak';
  message: string;
  createdAt: Date;
  read: boolean;
}

export interface LeaderboardEntry {
  id: string;
  userId: string;
  xp: number;
  tasksCompleted: number;
  streak: number;
}