import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { Colors, Sizes } from '../../lib/theme';

import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';

const RootScrollView = styled.ScrollView({
  height: '5%',
  width: '100%',
  backgroundColor: 'red',
  // margin: 100,
});
export default function FarmField() {
  return (
    <RootScrollView>
      <Text>FarmField</Text>
    </RootScrollView>
  );
}
