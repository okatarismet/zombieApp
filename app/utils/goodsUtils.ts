import { Habit, Goods } from '../lib/types';
import realm from '../db';
import { completeHabit } from '../store/actions/goodsActions';
import { useDispatch, useSelector } from 'react-redux';

export const habitCompleted = (habit: Habit) => {
  let goods: Goods = realm.objects('Goods')[0];

  let habitFound: Habit = realm
    .objects('Habit')
    .filtered('_id == $0', habit._id)[0];
  //   let todaysFood = habitFound.combo * goods.habitFoodConstant;
  let todaysFood = goods.habitFoodConstant;
  if (habit.variant === 'multiple') {
    todaysFood = todaysFood / habitFound.multiple_goal;
  }
  console.log('ASDFASFASFASF');
  console.log(todaysFood);
  console.log(goods.food);
  realm.write(() => {
    goods.food += todaysFood;
  });

  return false;
};
