import * as React from 'react';
import { useContext } from "react";
import { AccountContext } from "./AccountContext";
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './Login/LoginScreen';
import SignUpScreen from './Login/SignUpScreen';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const Stack = createNativeStackNavigator();

const useAuth = () => {
  const { user } = useContext(AccountContext);
  return user && user.loggedIn;
};

export default function Views() {
  const isAuth = useAuth();

  return (
    <Stack.Navigator initialRouteName="Login">
        {/* <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} /> */}

        {!isAuth ? (
        <Stack.Group>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Group>
      )}
        
      </Stack.Navigator>
  )
}