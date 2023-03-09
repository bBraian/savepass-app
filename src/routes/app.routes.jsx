import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { RegisterLoginData } from '../screens/RegisterLoginData';
import { UserAuth } from '../context/userAuth';
import { Auth } from '../screens/Auth';
import { Initial } from '../screens/Initial';
import { CreateAccount } from '../screens/CreateAccount';

const {
  Navigator,
  Screen
} = createStackNavigator();

export function AppRoutes() {
  const { user } = useContext(UserAuth);
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      { user.username ? 
        <Screen name="Auth" component={Auth} />  
      :
        <Screen name="Initial" component={Initial} /> 
      }
       
      <Screen name="CreateAccount" component={CreateAccount} /> 
      <Screen name="Home" component={Home} />
      <Screen name="RegisterLoginData" component={RegisterLoginData} />
    </Navigator>
  );
}