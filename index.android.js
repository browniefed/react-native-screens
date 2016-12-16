import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import LoginScreen from "./screens/login/index";
import SignupScreen from "./screens/signup/index";

export default class screens extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SignupScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('screens', () => screens);
