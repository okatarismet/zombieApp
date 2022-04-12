/*
 * Reducer actions related with navigation
 */
import { Habit } from '../../lib/types/Habit';
import * as types from '../types';
import realm from '../../db';

export function addHabit(habit: Habit) {
  console.log('habitActions.js, addHabit');
  console.log(habit);
  let newHabit: Habit;

  realm.write(() => {
    newHabit = realm.create('Habit', {
      _id: habit._id,
      name: habit.name,
      variant: habit.variant,
      multiple_goal: habit.multiple_goal,
      multiple_completed_today: 0,
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
  let combo_applicable = false;
  let habitFound: Habit = realm
    .objects('Habit')
    .filtered('_id == $0', habit._id)[0];
  //<MULTIPLE MODULE>
  if (habitFound.variant === 'multiple') {
    realm.write(() => {
      habitFound.multiple_completed_today += 1;
    });
    if (habitFound.multiple_goal !== habitFound.multiple_completed_today) {
      return {
        type: types.COMPLETE_HABIT,
        habit: habitFound,
      };
    } // Tamamlanmis ise yani bugunku hedef, devam et ve combolari duzenle.
  }
  // </MULTIPLE MODULE>
  // <COMBO MODULES>
  let habitFoundDate = new Date(habitFound.lastDateCompleted);
  let yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  if (habitFoundDate.setHours(0, 0, 0, 0) == yesterday.setHours(0, 0, 0, 0)) {
    combo_applicable = true;
  }
  // </ COMBO MODULES>
  realm.write(() => {
    habitFound.lastDateCompleted = new Date();
    habitFound.combo = combo_applicable ? habitFound.combo + 1 : 0;
  });

  return {
    type: types.COMPLETE_HABIT,
    habit: habitFound,
  };
}
export function deleteHabit(habit: Habit) {
  realm.write(() =>
    realm.delete(realm.objects('Habit').filter(e => e._id === habit._id)),
  );

  return {
    type: types.DELETE_HABIT,
    habit,
  };
}
