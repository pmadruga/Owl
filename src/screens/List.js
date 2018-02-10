import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { RkText, RkTheme, RkStyleSheet } from 'react-native-ui-kitten';
import { getLocaleOfTranslation, getGeneralDescriptionData } from '../helpers';
import data from '../data';

export default class List extends Component {
  static navigationOptions = {
    title: 'List'
  };

  state = {
    data
  };
  render() {
    let title = `RESULTS (language: ${getLocaleOfTranslation(this.state.data)}) `;
    return (
      <View style={styles.container}>
        <RkText rkType="primary header">{title}</RkText>
        <FlatList
          data={getGeneralDescriptionData(this.state.data)}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text style={styles.item}>
                <RkText rkType="header">{item.key}</RkText>
              </Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = RkStyleSheet.create(theme => ({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',

    backgroundColor: theme.colors.screen.base,
    paddingTop: 20
  },
  item: {
    color: '#efefef',
    paddingVertical: 24
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 17.5,
    alignItems: 'center'
  }
}));
