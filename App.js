import React from 'react';
import About from './components/About';
import  Search  from './components/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tabs = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions= {({route}) => ({
            tabBarIcon: ({focused,color,size}) => {
                let iconName;

                if (route.name === 'Search') {
                    iconName = focused
                        ? 'ios-information-circle'
                        : 'ios-information-circle-outline';
                } else if (route.name === 'About') {
                    iconName = focused ? 'ios-business' : 'ios-business-outline';
                }
                return <Ionicons name={iconName} size={size} color={color}/>;
            },
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: 'lightgray',
            tabBarActiveBackgroundColor: '#3F101C',
            tabBarInactiveBackgroundColor: '#A2273C'
        })}
      >
        <Tabs.Screen name="Search" component={Search} />
        <Tabs.Screen name="About" component={About} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

