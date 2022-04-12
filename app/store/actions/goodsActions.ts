/*
 * Reducer actions related with navigation
 */
import { Goods } from '../../lib/types';
import * as types from '../types';
import realm from '../../db';

export function syncGoods() {
  console.log('completeHabit');
  console.log('completeHabit');
  console.log('completeHabit');
  console.log('completeHabit');
  console.log('completeHabit');
  // realm.write(() =>
  //   realm.delete(realm.objects('Habit').filter(e => e._id === goods._id)),
  // );

  return {
    type: types.SYNC_GOODS,
    // goods,
  };
}
