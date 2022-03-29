/* eslint-disable @typescript-eslint/no-unused-vars */
/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

import { IHabitState } from 'app/models/reducers/habit';

import { IAddHabitState } from 'app/models/actions/habit';
const initialState: IHabitState = {
  habits: [],
};

export const habitReducer = createReducer(initialState, {
  [types.ADD_HABIT](state: IHabitState, action: IAddHabitState) {
    // console.log('habitReducer.js addHabit', action);
    return {
      ...state,
      habits: [...state.habits, action.habit],
    };
  },
});
