// @flow

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import AR from './src/AR';
// import Scan from './src/Scan';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        {/* <Button title="Go to Scan" onPress={() => this.props.navigation.navigate('Scan')} /> */}
        <Button title="Go to AR" onPress={() => this.props.navigation.navigate('AR')} />
      </View>
    );
  }
}

export default StackNavigator({
  Home: {
    screen: HomeScreen
  },
  // Scan: {
  //   screen: Scan
  // },
  AR: {
    screen: AR
  }
});
