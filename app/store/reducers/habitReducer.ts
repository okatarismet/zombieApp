/* eslint-disable @typescript-eslint/no-unused-vars */
/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from '../types';

import { IHabitState } from 'app/models/reducers/habit';

import { IAddHabitState } from 'app/models/actions/habit';
import realm from '../../db';
const syncHabits = () => {
  return realm.objects('Habit');
};
const initialState: IHabitState = {
  habits: [],
};

export const habitReducer = createReducer(initialState, {
  [types.ADD_HABIT](state: IHabitState, action: IAddHabitState) {
    // console.log('habitReducer.js addHabit', action);
    return {
      // ...state,
      habits: syncHabits(),
    };
  },
  [types.COMPLETE_HABIT](state: IHabitState, action: IAddHabitState) {
    // console.log('habitReducer.js addHabit', action);
    return {
      ...state,
      habits: syncHabits(),
    };
  },
  [types.DELETE_HABIT](state: IHabitState, action: IAddHabitState) {
    // console.log('habitReducer.js addHabit', action);
    return {
      ...state,
      habits: syncHabits(),
    };
  },
});
