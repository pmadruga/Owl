// @flow
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import AR from './src/screens/AR/';
import Scan from './src/screens/Scan/';
import List from './src/screens/List/';

export default StackNavigator(
  {
    Scan: {
      screen: Scan
    },
    AR: {
      screen: AR
    },
    List: {
      screen: List
    }
  },
  {
    initialRouteName: 'Scan'
  }
);
