import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { Colors } from '../../lib/theme';
import { useNavigation } from '@react-navigation/native';

const screens = [
  {
    name: 'Farm',
    action: () => {
      console.log('clicked');
    },
  },
  { name: 'item2' },
  { name: 'item3' },
  { name: 'item4' },
  { name: 'item5' },
];

const RootView = styled.View({
  height: 75,
  width: '100%',
  justifyContent: 'space-between',
  backgroundColor: Colors.color_1,

  flexDirection: 'row',
});
const NavigationBoxView = styled.TouchableOpacity({
  height: 75,
  width: '20%',
  // backgroundColor: Colors.color_5,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 20,
  // borderWidth: '1px',
  // borderColor: 'black',
});

export default function BottomNavigation({}) {
  const navigation = useNavigation();

  return (
    <RootView>
      {screens.map((e, i) => {
        return (
          <NavigationBoxView
            onPress={() => {
              navigation.navigate(e.name);
            }}
            key={i}>
            <Text style={{ color: 'white' }}>{e.name}</Text>
          </NavigationBoxView>
        );
      })}
    </RootView>
  );
}
