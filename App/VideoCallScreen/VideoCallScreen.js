import React from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from './styles';

export default class VideoCallScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {}
  }
  render () {
    return (
      <View>
        <Text>{ "VideoCallScreen" }</Text>
      </View>
    );
  }
}
