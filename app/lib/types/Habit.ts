export interface Habit {
  _id: string;
  name: string;
  type: string;
  multiple_goal: number;
  multiple_completed_today: number;
  combo: number;
  lastDateCompleted: Date;
}
