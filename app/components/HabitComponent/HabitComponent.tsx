import React from 'react';
import { ScrollView, Text, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components';
import { Colors, Sizes } from '../../lib/theme';
import { Habit } from '../../lib/types';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import { completeHabit, deleteHabit } from 'app/store/actions/habitActions';
import { isHabitCompletedToday } from '../../utils/dateUtils';

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

const MultipleCompleteBox = styled.View({
  height: 50,
  width: 50,
  backgroundColor: Colors.color_2,
  borderRadius: 100,
  marginRight: 'auto',
  justifyContent: 'center',
  alignItems: 'center',
});

const ComboBoxText = styled.Text({
  color: 'white',
});
interface Props {
  habit: Habit;
  key: number;
}

export default function HabitComponent({ habit, key }: Props) {
  const dispatch = useDispatch();
  const completeTask = (habit: Habit) => {
    dispatch(completeHabit(habit));
  };
  const longPress = (habit: Habit) => {
    Alert.alert('Delete Habit', 'Do you want to delete this habit?', [
      { text: 'Yes', onPress: () => dispatch(deleteHabit(habit)) },
      { text: 'No', onPress: () => console.log('No Pressed') },
    ]);
  };
  return (
    <AddHabitButton
      key={key}
      onPress={() => {
        completeTask(habit);
      }}
      onLongPress={() => longPress(habit)}
      delayLongPress={1000}
      disabled={isHabitCompletedToday(habit)}>
      {habit.variant === 'single' ? (
        <>
          <Text>{habit.name}</Text>
          <ComboBox>
            <ComboBoxText>x {habit.combo}</ComboBoxText>
          </ComboBox>
          {isHabitCompletedToday(habit) && (
            <Text style={{ color: 'green', paddingRight: 30 }}>Completed</Text>
          )}
        </>
      ) : (
        <>
          <Text>{habit.name}</Text>
          <ComboBox>
            <ComboBoxText>x {habit.combo}</ComboBoxText>
          </ComboBox>
          <MultipleCompleteBox>
            <ComboBoxText>
              {habit.multiple_completed_today} / {habit.multiple_goal}
            </ComboBoxText>
          </MultipleCompleteBox>
          {isHabitCompletedToday(habit) && (
            <Text style={{ color: 'green', paddingRight: 30 }}>Completed</Text>
          )}
        </>
      )}
    </AddHabitButton>
  );
}
