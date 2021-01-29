import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login'
import Rigister from './screens/Rigister';
import Home from './screens/Home';
import AddChat from './screens/AddChat';
import Chat from './screens/Chat';

export default function App() {

  const Stack = createStackNavigator();

  const globalScreenOptions = {
    headerStyle: {backgroundColor: '#2C6BED'},
    headerTitleStyle: {color: 'white'},
    headerTintColor: 'white'
  }


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={globalScreenOptions}>
        <Stack.Screen options={{headerTitleAlign : 'center'}} name="Login" component={Login} />
        <Stack.Screen options={{headerTitleAlign : 'center'}} name="Register" component={Rigister} />
        <Stack.Screen options={{headerTitleAlign : 'center'}} name="Home" component={Home} />
        <Stack.Screen options={{headerTitleAlign : 'center'}} name="AddChat" component={AddChat} />
        <Stack.Screen options={{headerTitleAlign : 'center'}} name="Chat" component={Chat} />
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
