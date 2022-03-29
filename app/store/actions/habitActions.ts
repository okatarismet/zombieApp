/*
 * Reducer actions related with navigation
 */
import Habit from '../../lib/types/Habit';
import * as types from './types';

export function addHabit(habit:Habit) {
  // console.log('habitActions.js, addHabit');
  return {
    type: types.ADD_HABIT,
    habit,
  };
}
