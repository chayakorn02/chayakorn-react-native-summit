import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import EventsScreen from '../screens/Events'
import EventScreen from '../screens/Event'
import MapScreen from '../screens/Map'



const Events = createStackNavigator({
  EventsScreen,
  EventScreen
})

const Map = createStackNavigator({
  MapScreen
})


const TabNavigator = createBottomTabNavigator({
  Events,
  Map
})

export default createAppContainer(TabNavigator)