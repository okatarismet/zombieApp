export interface Habit {
  _id: string;
  name: string;
  type: 'multiple' | 'single';
  frequency: number;
  combo: number;
  lastDateCompleted: Date;
}
