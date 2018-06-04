import React from 'react';
import {
  Button,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import styles from './styles';

export default class HomeScreen extends React.Component {
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
        <CallButton onPress={ this.btnHandler }/>
      </View>
    );
  }
};

const CallButton = props => {
  return (
    <View style={ styles.button }>
      <TouchableOpacity
        onPress={ props.onPress }
        style={ styles.button }
      >
        <Text style={ styles.text }>
          { "Video Call" }
        </Text>
      </TouchableOpacity>
    </View>
  );
}
