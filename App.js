import React from 'react';
import About from './components/About';
import  Search  from './components/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tabs = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Search" component={Search} />
        <Tabs.Screen name="About" component={About} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

