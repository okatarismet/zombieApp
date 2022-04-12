import React from 'react';
import { ScrollView, Text, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components';
import { Colors, Sizes } from '../../lib/theme';
import { Habit } from '../../lib/types';
import HabitComponent from '../HabitComponent';
import { useDispatch, useSelector } from 'react-redux';

const RootScrollView = styled.ScrollView({
  height: '5%',
  width: '100%',
  // backgroundColor: 'white',
  // margin: 100,
});

export default function HabitList() {
  const habits = useSelector(state => state.habitReducer.habits);

  return (
    <RootScrollView>
      {habits &&
        habits.length > 0 &&
        habits.map((habit: Habit, i) => (
          <HabitComponent habit={habit} key={i} />
        ))}
    </RootScrollView>
  );
}
