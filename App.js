/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import type {Node} from 'react';

import data from './data/users.json';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Home from './screens/home/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MovieHome from './screens/MovieHome/MovieHome';
import MovieDetails from './screens/movieDetails/MovieDetails';
import MovieFinder from './screens/MovieFinder/MovieFinder';

const Stack = createStackNavigator();

const App = () => {
  const [users, setUsers] = useState([...data]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {props => <Home {...props} users={users} />}
        </Stack.Screen>
        <Stack.Screen name="Movies" component={MovieHome} />
        <Stack.Screen name="Details" component={MovieDetails} />
        <Stack.Screen name="Finder" component={MovieFinder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
