import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dashboard} from '@screens/Dashboard';
import {Details} from '@screens/Details';
import {BackButton} from '@components/BackButton';
import {RootStackParamList} from './types';
import {THEME} from '@styles/theme';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigation: FC = () => {
  const {Navigator, Screen} = Stack;

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName='Dashboard'
        screenOptions={() => ({
          headerTitleAlign: 'center',
        })}>
        <Screen
          name='Dashboard'
          component={Dashboard}
          options={{
            headerStyle: {backgroundColor: THEME.SECONDARY},
            headerTintColor: THEME.PRIMARY_ALT,
          }}
        />
        <Screen
          name='Details'
          component={Details}
          options={{
            headerLeft: BackButton,
            headerStyle: {backgroundColor: THEME.SECONDARY},
            headerTintColor: THEME.PRIMARY_ALT,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};
