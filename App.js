import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Home from './screens/Home'
import Search from './screens/Search';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import VideoPlayer from './screens/VideoPlayer';
import Explore from './screens/Explore';
import Subscribe from './screens/Subscribe';
import { MaterialIcons } from '@expo/vector-icons'; 
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducer} from './reducers/reducer'

const store=createStore(reducer)

const Stack=createStackNavigator();
const Tabs=createBottomTabNavigator();

const RootHome=()=>{
  return (
    <Tabs.Navigator
       screenOptions={({ route }) => ({
          tabBarIcon: ({color }) => {
            let iconName;

            if (route.name === 'home') {
              iconName ="home" ;
            } else if (route.name === 'explore') {
              iconName ="explore" ;
            } else if(route.name==='subscribe') {
              iconName="subscriptions";
            }
            return <MaterialIcons name={iconName} size={32} color={color} />;


            
          },
          })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: '#343a40',
        }}
    >
      <Tabs.Screen name="home" component={Home}/>
      <Tabs.Screen name="explore" component={Explore}/>
      <Tabs.Screen name="subscribe" component={Subscribe}/>
    </Tabs.Navigator>
  )
}

export default function App() {
 
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="rootname" component={RootHome} />
          <Stack.Screen name="search" component={Search} />
          <Stack.Screen name="videoplayer" component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    
  );
}

