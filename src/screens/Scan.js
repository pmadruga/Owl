import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import DocumentScanner from 'react-native-document-scanner';
import Loading from '../components/Loading';
export default class Scan extends Component {
  static navigationOptions = {
    title: 'Scan'
  };

  state = {
    isLoading: false
  };

  fetchData = data => {
    console.warn(data);
  };

  onPictureTaken = data =>
    this.setState(
      {
        isLoading: true,
        image: data.croppedImage,
        initialImage: data.initialImage,
        rectangleCoordinates: data.rectangleCoordinates
      },
      () => {
        this.fetchData(data);
      }
    );
  render() {
    const { navigation } = this.props;
    {
      return this.state.isLoading ? (
        <Loading />
      ) : (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <DocumentScanner
            style={{ flex: 1 }}
            useBase64
            onPictureTaken={this.onPictureTaken}
            overlayColor="rgba(255,130,0, 0.7)"
            enableTorch
            brightness={0.3}
            saturation={1}
            contrast={1.1}
            quality={0.5}
            onRectangleDetect={
              ({ stableCounter, lastDetectionType }) => {}
              // this.setState({ stableCounter, lastDetectionType })
              // console.warn(stableCounter)
            }
            detectionCountBeforeCapture={2}
            detectionRefreshRateInMS={50}
          />
        </View>
      );
    }
  }
}
