import React from 'react';
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HomeScreen from './HomeScreen';

export default class App extends React.Component {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <HomeScreen />
      </View>
    );
  }
}
