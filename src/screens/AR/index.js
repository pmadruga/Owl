import React, { Component } from 'react';
import { AppRegistry, View, Slider } from 'react-native';
import { ARKit } from 'react-native-arkit';
import mockedData from '../../data';
import { getDetailedDescriptionData } from '../List/helpers';

export default class AR extends Component {
  static navigationOptions = {
    title: 'Show'
  };

  state = {
    size: 0.15,
    z: 0
  };

  render() {
    const data = this.props.navigation.state.params;
    // const data = data;

    // const data = getDetailedDescriptionData(mockedData);

    return (
      <View style={{ flex: 1 }}>
        <Slider
          maximumValue={0.3}
          minimumValue={0.01}
          value={0.15}
          onValueChange={value => this.setState({ size: value })}
        />
        <Slider
          maximumValue={1}
          minimumValue={0.1}
          value={0}
          onValueChange={value => this.setState({ z: value })}
        />

        <ARKit
          style={{ flex: 1 }}
          // debug
          planeDetection
          // enable light estimation (defaults to true)
          lightEstimationEnabled
          // get the current lightEstimation (if enabled)
          // it fires rapidly, so better poll it from outside with
          // ARKit.getCurrentLightEstimation()
          //   onLightEstimation={e => console.log(e.nativeEvent)}
          //   onPlaneDetected={console.log} // event listener for plane detection
          //   onPlaneUpdate={console.log} // event listener for plane update
          //   onPlaneRemoved={console.log} // arkit sometimes removes detected planes
        >
          {data.map((value, index) => (
            <ARKit.Text
              key={`${index}-annotation`}
              text={value.text}
              position={{ x: value.position.x, y: value.position.y, z: this.state.z }}
              font={{ size: this.state.size, depth: 0.02 }}
            />
          ))}
          {/*<ARKit.Text
              text="ARKit is Cool!"
              position={{ x: 0, y: 0.6, z: 0 }}
              font={{ size: 0.15, depth: 0.05 }}
            />*/}
        </ARKit>
      </View>
    );
  }
}
