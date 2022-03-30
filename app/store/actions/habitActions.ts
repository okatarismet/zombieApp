/*
 * Reducer actions related with navigation
 */
import Habit from '../../lib/types/Habit';
import * as types from './types';
import realm from '../../db';

export function addHabit(habit: Habit) {
  console.log('habitActions.js, addHabit');
  realm.write(() => {
    const newHabit = realm.create('Habit', {
      _id: habit._id,
      name: habit.name,
      type: habit.type,
      frequency: habit.frequency,
      combo: 0,
      lastDateCompleted: habit.lastDateCompleted,
    });
  });

  return {
    type: types.ADD_HABIT,
    habit,
  };
}
export function completeHabit(habit: Habit) {
  var habits = realm.objects('Habit').filtered('_id == $0', habit._id);
  realm.write(() => {
    habits[0].lastDateCompleted = new Date();
  });

  return {
    type: types.COMPLETE_HABIT,
    habit,
  };
}
