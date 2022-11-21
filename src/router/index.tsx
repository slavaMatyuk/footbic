import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dashboard} from '@screens/Dashboard';
import {Details} from '@screens/Details';
import {BackButton} from '@components/BackButton';
import {RootStackParamList} from './types';
import {THEME} from '@styles/theme';

export enum AppRoutes {
  DASHBOARD = 'Dashboard',
  DETAILS = 'Details',
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigation: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={AppRoutes.DASHBOARD}
        screenOptions={() => ({
          headerTitleAlign: 'center',
        })}>
        <Stack.Screen
          name={AppRoutes.DASHBOARD}
          component={Dashboard}
          options={{
            headerStyle: {backgroundColor: THEME.SECONDARY},
            headerTintColor: THEME.PRIMARY_ALT,
          }}
        />
        <Stack.Screen
          name={AppRoutes.DETAILS}
          component={Details}
          options={{
            headerLeft: BackButton,
            headerStyle: {backgroundColor: THEME.SECONDARY},
            headerTintColor: THEME.PRIMARY_ALT,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
