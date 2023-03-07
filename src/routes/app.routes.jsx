import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { RegisterLoginData } from '../screens/RegisterLoginData';
// import { SignIn } from '../screens/SignIn';
// import { Auth } from '../screens/Auth';

const {
  Navigator,
  Screen
} = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      {/* <Screen name="Auth" component={Auth} />
      <Screen name="SignIn" component={SignIn} /> */}
      <Screen name="Home" component={Home} />
      <Screen name="RegisterLoginData" component={RegisterLoginData} />
    </Navigator>
  );
}