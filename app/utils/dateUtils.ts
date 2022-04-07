import { Habit } from '../lib/types';

export const isHabitCompletedToday = (habit: Habit) => {
  var inputDate = new Date(habit.lastDateCompleted);
  var todaysDate = new Date();
  if (inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0)) {
    return true;
  }
  return false;
};
