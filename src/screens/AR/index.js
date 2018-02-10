import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { ARKit } from 'react-native-arkit';

export default class AR extends Component {
  static navigationOptions = {
    title: 'Show'
  };

  render() {
    const data = this.props.navigation.state.params;
    console.warn(data);
    return (
      <View style={{ flex: 1 }}>
        <ARKit
          style={{ flex: 1 }}
          debug
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
              position={value.position}
              // position={{ x: 0, y: 0, z: 0 }}
              font={{ size: 0.15, depth: 0.02 }}
            />
          ))}
          {
            <ARKit.Text
              text="ARKit is Cool!"
              position={{ x: 0.2, y: 0.6, z: 0 }}
              font={{ size: 0.15, depth: 0.05 }}
            />
          }
        </ARKit>
      </View>
    );
  }
}
