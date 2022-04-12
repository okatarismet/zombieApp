/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './app/Entrypoint';
import { name as appName } from './app.json';
import { enableScreens } from 'react-native-screens';
import realm from './app/db';
enableScreens();
//TODO goods initialization i reafactor edip best practice i uygula
let goods = realm.objects('Goods');
if (goods.length < 1) {
  console.log('CREATING GOODS ENTRY....');
  realm.write(() => {
    realm.create('Goods', {
      _id: '001',
      gold: 0,
      food: 0,
      population: 1,
      habitFoodConstant: 50,
    });
  });
}

AppRegistry.registerComponent(appName, () => App);
