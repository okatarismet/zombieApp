/* eslint-disable @typescript-eslint/no-unused-vars */
/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from '../types';

// import { IHabitState } from 'app/models/reducers/habit';

// import { IAddHabitState } from 'app/models/actions/habit';
import realm from '../../db';
const syncGoods = () => {
  console.log('SYNCING!!!');
  console.log('SYNCING!!!');
  console.log('SYNCING!!!');
  console.log('SYNCING!!!');
  return realm.objects('Goods')[0];
};
const initialState = {
  goods: { _id: '', gold: 0, food: 0, population: 0, habitFoodConstant: 50 },
};

export const goodsReducer = createReducer(initialState, {
  [types.SYNC_GOODS](state, action) {
    console.log('goodReducer.js addHabit', action);
    return {
      // ...state,
      goods: syncGoods(),
    };
  },
});
