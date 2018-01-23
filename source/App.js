/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import ScaleSheet from 'react-native-scalesheet';

import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import  Home  from './screens/Home';
import  Business  from './screens/Business';
import  Technology  from './screens/Technology';
import  Fashion  from './screens/Fashion';
import Details from './screens/Details';




const App = StackNavigator({
    
  home : {screen: Home},
  business  : {screen: Business},
  fashion : {screen: Fashion},
  tech : {screen: Technology},
  details : {screen: Details}
},
{
initialRouteName: 'home',
})

export default App;
