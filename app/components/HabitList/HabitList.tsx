import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { Colors, Sizes } from '../../lib/theme';

import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';

const RootScrollView = styled.ScrollView({
  height: '5%',
  width: '100%',
  backgroundColor: 'white',
  // margin: 100,
});
const AddHabitButton = styled.TouchableOpacity({
  flexDirection: 'row',
  justifyContent: 'space-between',
  display: 'flex',
  flexGrow: 1,
  alignItems: 'center',
  width: 'auto',
  height: '70',
  borderRadius: '100',
  backgroundColor: Colors.color_5,
  margin: '2%',
  paddingLeft: '8%',
});

const ComboBox = styled.View({
  height: 50,
  width: 50,
  backgroundColor: Colors.color_4,
  borderRadius: 100,
  marginRight: 'auto',
  justifyContent: 'center',
  alignItems: 'center',
});

const ComboBoxText = styled.Text({
  color: 'white',
});

interface Habit {
  id: number;
  name: string;
  type: 'multiple' | 'single';
  frequency: string;
  combo: number;
  lastDateCompleted: string;
}
const Habits: Habit[] = [
  {
    id: 1,
    name: 'Morning Abs',
    type: 'single',
    frequency: 'daily', // Daily oldugunda numara oluyor
    combo: 1,
    lastDateCompleted: '',
  },
  {
    id: 2,
    name: 'Water Drinking',
    type: 'multiple',
    frequency: '8',
    combo: 1,
    lastDateCompleted: '',
  },
];
const completeTask = (id: number) => {
  console.log('task with ', id, ' completed');
  // o habiti tamamla
  // Gunluk cokca olanlar icin bir yontem dusun.
  // Gunluk goldu arttirman lazim.
  // Guzel bir animasyon eklemen lazim.
};
export default function HabitList() {
  const habits = useSelector(state => state.habitReducer.habits);
  React.useEffect(() => console.log(habits));
  return (
    <RootScrollView>
      {/* <AddHabitButton
        onPress={() => {
          console.log(habits);
        }}></AddHabitButton> */}
      {habits &&
        habits.length > 0 &&
        habits.map((e, i) => (
          <AddHabitButton
            onPress={() => {
              console.log(habits);
              completeTask(e.id);
            }}>
            <Text>{e.name}</Text>
            <ComboBox>
              <ComboBoxText>x {e.combo}</ComboBoxText>
            </ComboBox>
          </AddHabitButton>
        ))}
    </RootScrollView>
  );
}
