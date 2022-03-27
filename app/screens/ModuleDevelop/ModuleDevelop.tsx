import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components';
import { Colors, Sizes } from '../../lib/theme';

import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';

const styles = StyleSheet.create({
  container: {
    marginTop: Sizes.IOSSafeArea,
    paddingTop: '20%',
    paddingBottom: '30%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
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
const ModuleNameText = styled.Text({
  color: Colors.primaryTextColor,
  fontSize: Sizes.h3,
});
const CancelButton = styled.Button({
  color: Colors.primaryTextColor,
});
interface Props {
  module: {
    name: string;
  };
}
const ModuleDevelop: React.FC = ({
  module = { name: 'Engine Part' },
}: Props) => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());

  return (
    <View style={styles.container}>
      <TimeText>44:59</TimeText>
      {/* <View style={styles.midCircle}>
        <ModuleNameText>{module.name}</ModuleNameText>
      </View>
      <CancelButton
        icon="logout"
        mode="outlined"
        onPress={onLogout}
        title="Cancel"
      /> */}
    </View>
  );
};

export default ModuleDevelop;
