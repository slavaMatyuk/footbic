import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BackButton} from '../components/BackButton';
import {HomeScreen} from '../screens/Home';
import {DetailScreen} from '../screens/Detail';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigation: FC = () => {
  const {Navigator, Screen} = Stack;

  return (
    <NavigationContainer>
      <Navigator initialRouteName='Home'>
        <Screen name='Home' component={HomeScreen} />
        <Screen
          name='Detail'
          component={DetailScreen}
          options={{
            headerLeft: BackButton,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};
