import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import ProfileScreen from './screens/profile'; 
import DetalleScreen from './screens/detalle'; 

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Perfil" 
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen 
        name="Perfil" 
        component={ProfileScreen} 
        options={{ title: 'Profile' }}
      />
      <Stack.Screen 
        name="Detalle" 
        component={DetalleScreen} 
        options={{ title: 'Detalle' }}
      />
    </Stack.Navigator>
  );
}