import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { Search } from "../components/Search";
import Result from '../components/Result';
import About from '../components/About';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export function TabNavigation() {
    return (
        <NavigationContainer>
            <Tabs.Navigator
                screenOptions= {({route}) => ({
                tabBarIcon: ({focused,color,size}) => {
                    let iconName;
    
                    if (route.name === 'SearchScreen') {
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
                tabBarInactiveBackgroundColor: '#A2273C',
                headerShown: false
            })}
            >
                <Tabs.Screen name="SearchScreen" component={SearchNavigator} />
                <Tabs.Screen name="About" component={About} />
            </Tabs.Navigator>
      </NavigationContainer>
    )
}

export function SearchNavigator() {
    return (
        <Stack.Navigator initialRouteName="Search">
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Result" component={Result} />
        </Stack.Navigator>
    );
}
