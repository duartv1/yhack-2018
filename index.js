import React from 'react';
import {registerKeyboard} from 'react-360-keyboard';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  NativeModules
} from 'react-360';

var conferenceCode=0;

export default class yhack_2018 extends React.Component {
  onClickConfCode() {
    NativeModules.Keyboard.startInput({
      placeholder: 'Enter the conference code',
    }).then(input => conferenceCode = input);
    //console.log(conferenceCode);
  }
  onClickExplore() {
    
  }
  onClickUserId() {
    NativeModules.Keyboard.startInput({
      placeholder: 'Enter the conference code',
    }).then(input => conferenceCode = input);
  }
  render() {
    return (
      <View style={styles.panel}>
      <VrButton onClick={this.onClickConfCode}>
        <Text>Enter Conference Code</Text>
      </VrButton>
      <VrButton onClick={this.onClickExplore}>
        <Text>Explore</Text>
      </VrButton>

      <VrButton onClick={this.onClickUserId}>
        <Text>Enter User Id</Text>
      </VrButton>

        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to Conference 360
          </Text>
        </View>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});



AppRegistry.registerComponent('yhack_2018', () => yhack_2018);
AppRegistry.registerComponent(...registerKeyboard);