import React from 'react';
import { ScrollView, Text } from 'react-native';
import styled from 'styled-components';
import { Colors, Sizes } from '../../lib/theme';

import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';

const RootScrollView = styled.ScrollView({
  height: '30%',
  width: '100%',
  backgroundColor: 'white',
});

// interface Habit {
//   name: string;
//   type: 'multiple' | 'single';
//   combo: ''
// }

const Habits = [{}];

export default function HabitList() {
  return (
    <RootScrollView>
      <Text>HabitList</Text>
    </RootScrollView>
  );
}
