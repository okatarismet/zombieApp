import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import styled from 'styled-components';
import { Colors, Sizes } from '../../lib/theme';
import uuid from 'react-native-uuid';
import { Habit } from '../../lib/types/Habit';
import { useDispatch } from 'react-redux';

import SelectDropdown from 'react-native-select-dropdown';
import { addHabit } from 'app/store/actions/habitActions';

const ModalView = styled.View({
  backgroundColor: 'white',
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'space-around',
  padding: '200px 30px',
  width: 'auto',
  height: 'auto',
  margin: '50px 20px',
});

const InputField = styled.TextInput({
  borderColor: 'grey',
  borderWidth: '1px',
  borderRadius: 10,
  width: '50%',
  padding: 10,
});
const Button = styled.TouchableOpacity({
  flexDirection: 'row',
  justifyContent: 'center',
  display: 'flex',
  // flexGrow: 1,

  alignItems: 'center',
  width: 'auto',
  height: '70',
  borderRadius: '100',
  backgroundColor: Colors.color_5,
  margin: '2%',
});
const habitTypes = ['Daily', 'Recurrent'];

export default function AddHabitModule({ setModalVisible }) {
  const [name, onChangeName] = React.useState('Useless Text');
  const [habitType, changeHabitType] = React.useState('Daily');
  const [frequency, setFrequency] = React.useState(1);
  const dispatch = useDispatch();

  const AddHabit = () => {
    console.log('UUUIIIDD', uuid.v4());
    var yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    let habit: Habit = {
      _id: uuid.v4(),
      name,
      type: habitType === 'Recurrent' ? 'multiple' : 'single',
      frequency: frequency,
      lastDateCompleted: yesterdayDate,
    };
    dispatch(addHabit(habit));
    setModalVisible(false);
  };
  return (
    <ModalView>
      <Text>Add Habit Module</Text>
      <View>
        <Text>Name</Text>
        <InputField
          // style={styles.input}
          onChangeText={onChangeName}
          value={name}
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <SelectDropdown //!! CHANGE Picker i degistir ileride
          data={habitTypes}
          onSelect={(selectedItem, index) => {
            changeHabitType(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
        {habitType === 'Recurrent' && (
          <InputField
            style={{ width: 50 }}
            type="number"
            onChangeText={setFrequency}
          />
        )}
      </View>
      <Button onPress={() => AddHabit()}>
        <Text>Add Habit</Text>
      </Button>
    </ModalView>
  );
}
