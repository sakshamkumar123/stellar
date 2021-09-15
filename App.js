import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/homeScreen'
import DailyPics from './screens/dailyPic'
import SpaceCrafts from './screens/spaceCrafts'
import StarMap from './screens/starMap'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()
export default function App() {

 return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home" screenOptions={{headerShown:false}}>
          <Stack.Screen name='home' component={HomeScreen}/>
          <Stack.Screen name='spaceCrafts' component={SpaceCrafts}/>
          <Stack.Screen name='dailyPic' component={DailyPics}/>
          <Stack.Screen name='starMap' component={StarMap}/>
        </Stack.Navigator>
      </NavigationContainer>    
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
