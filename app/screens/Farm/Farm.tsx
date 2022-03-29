import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import styled from 'styled-components';
import { Colors, Sizes } from '../../lib/theme';

import { HabitList, FarmField, AddHabitModule } from '../../components';

import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import Icon from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
  container: {
    marginTop: Sizes.IOSSafeArea,
    // paddingTop: '10%',
    paddingBottom: '30%',
    backgroundColor: Colors.color_2,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    position: 'relative',
  },
  midCircle: {
    position: 'relative',
    // backgroundColor: 'red',
    alignItems: 'center',
    width: '100%',
    height: '60%',
  },
});

const TimeText = styled.Text({
  color: Colors.primaryTextColor,
  fontSize: Sizes.h1,
});
const TopResourceBar = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '10%',
});
const ResourceText = styled.Text({
  color: Colors.primaryTextColor,
  fontSize: Sizes.h4,
});
const UtilityBar = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  // padding: '10%',
});
const AddHabitButton = styled.TouchableOpacity({
  flexDirection: 'row',
  justifyContent: 'center',
  display: 'flex',
  flexGrow: 1,

  alignItems: 'center',
  width: 'auto',
  height: '70',
  borderRadius: '100',
  backgroundColor: Colors.color_5,
  margin: '2%',
});
const AddHabitText = styled.Text({
  color: Colors.primaryTextColor,
  fontSize: Sizes.h5,
});
const ModalView = styled.View({
  backgroundColor: 'white',
  display: 'flex',
  flexGrow: 1,
  width: 'auto',
  height: 'auto',
  margin: '50px 20px',
});
interface Props {
  module: {
    name: string;
  };
}
const Farm: React.FC = ({ module = { name: 'Engine Part' } }: Props) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <AddHabitModule setModalVisible={setModalVisible} />
      </Modal>
      <TopResourceBar>
        <ResourceText>Gold 200</ResourceText>
        <ResourceText>Food 400</ResourceText>
      </TopResourceBar>
      <UtilityBar>
        <AddHabitButton onPress={() => setModalVisible(true)}>
          <Icon
            name={'plus'}
            size={30}
            color={'white'}
            style={{ marginRight: 20 }}
          />
          <AddHabitText>Add Habit</AddHabitText>
        </AddHabitButton>
        <AddHabitButton>
          <AddHabitText>Development</AddHabitText>
        </AddHabitButton>
      </UtilityBar>
      <HabitList />
      <FarmField />
    </View>
  );
};

export default Farm;
