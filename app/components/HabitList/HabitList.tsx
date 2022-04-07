import React from 'react';
import { ScrollView, Text, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components';
import { Colors, Sizes } from '../../lib/theme';

import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import { completeHabit, deleteHabit } from 'app/store/actions/habitActions';
import { isHabitCompletedToday } from '../../utils/dateUtils';

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

export default function HabitList() {
  const habits = useSelector(state => state.habitReducer.habits);
  const dispatch = useDispatch();
  const completeTask = (habit: Habit) => {
    console.log('task with ', habit._id, ' completed');
    dispatch(completeHabit(habit));
    // o habiti tamamla
    // Gunluk cokca olanlar icin bir yontem dusun.
    // Gunluk goldu arttirman lazim.
    // Guzel bir animasyon eklemen lazim.
  };
  React.useEffect(() => console.log(habits));
  const longPress = (habit: Habit) => {
    Alert.alert('Delete Habit', 'Do you want to delete this habit?', [
      { text: 'Yes', onPress: () => dispatch(deleteHabit(habit)) },
      { text: 'No', onPress: () => console.log('No Pressed') },
    ]);
  };
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
              completeTask(e);
            }}
            onLongPress={() => longPress(e)}
            delayLongPress={1000}
            disabled={isHabitCompletedToday(e)}>
            <Text>{e.name}</Text>
            <ComboBox>
              <ComboBoxText>x {e.combo}</ComboBoxText>
            </ComboBox>
            {isHabitCompletedToday(e) && (
              <Text style={{ color: 'green', paddingRight: 30 }}>
                Completed
              </Text>
            )}
          </AddHabitButton>
        ))}
    </RootScrollView>
  );
}
