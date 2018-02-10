import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import DocumentScanner from 'react-native-document-scanner';
import Loading from '../../components/Loading';
import { getTextRequestBody, getURL } from './integration';

export default class Scan extends Component {
  static navigationOptions = {
    title: 'Scan'
  };

  state = {
    isLoading: false
    // image: null
  };

  onSuccessResponse = result => {
    const { navigation } = this.props;
    this.setState({
      isLoading: false
    });
    if (!result.responses[0].textAnnotations) return console.warn('No result found', result);
    navigation.navigate('List', result.responses);
  };

  onErrorResponse = error => navigation.navigate('Scan', error);

  /**
   * Request text detection from
   * Google Cloud Vision API.
   */
  fetchData = data => {
    const { image } = this.state;
    const { navigation } = this.props;

    fetch(getURL, getTextRequestBody(image))
      .then(res => res.json())
      .then(result => this.onSuccessResponse(result))
      .catch(error => this.onErrorResponse(result));
  };

  /**
   * Get base64 encoded image
   */
  onPictureTaken = data =>
    this.setState(
      {
        isLoading: true,
        image: data.croppedImage,
        initialImage: data.initialImage
        // rectangleCoordinates: data.rectangleCoordinates
      },
      () => {
        this.fetchData(data);
      }
    );

  render() {
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
