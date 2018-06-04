import React from 'react';
import {
  Button,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import styles from './styles';

export default class QuickbloxManagerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  btnHandler() {
    alert("It works!");
  }
  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.button }>
          <TouchableOpacity
            onPress={ this.btnHandler }
            style={ styles.button }
          >
            <Text style={ styles.text }>
              { "Video Call" }
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};
