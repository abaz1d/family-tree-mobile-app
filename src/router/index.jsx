import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Acara, Bagan, Beranda, Pencarian, Pengaturan, Splash} from '../pages';
import {BottomNavBox} from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomNavBox {...props} />}
      ScreenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: [{display: 'flex'}, null],
      }}>
      <Tab.Screen
        name="Beranda"
        component={Beranda}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Pencarian"
        component={Pencarian}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Bagan"
        component={Bagan}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Acara"
        component={Acara}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Pengaturan"
        component={Pengaturan}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default Router;
