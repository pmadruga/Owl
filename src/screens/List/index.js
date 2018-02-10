import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Button } from 'react-native';
import { RkText, RkTheme, RkStyleSheet } from 'react-native-ui-kitten';
import {
  getLocaleOfTranslation,
  getGeneralDescriptionData,
  getDetailedDescriptionData
} from './helpers';
import data from '../../data';

export default class List extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      title: 'List',
      headerRight: (
        <Button
          title="Show"
          onPress={() => navigation.navigate('AR', getDetailedDescriptionData(params))}
        />
      )
    };
  };

  render() {
    const data = this.props.navigation.state.params;
    let title = `RESULTS (language: ${getLocaleOfTranslation(data)}) `;
    return (
      <View style={styles.container}>
        <RkText rkType="primary header">{title}</RkText>
        <FlatList
          data={getGeneralDescriptionData(data)}
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
