import { StyleSheet, AppRegistry } from 'react-native';
AppRegistry.registerComponent('jaguarescsgoapp', () => App);

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Route from './app/Routes/Route';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  CrimsonText_600SemiBold,
} from '@expo-google-fonts/crimson-text';
import Login from './app/Screens/Login';

export default function App() {

  let [fontsLoaded] = useFonts({
    CrimsonText_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  else {

    return (
      <>
        <StatusBar style="dark" backgroundColor="#f5f9f9" translucent={false} />
        <Route />
      </>
    );
  }
}
