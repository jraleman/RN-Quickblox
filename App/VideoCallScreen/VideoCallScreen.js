import React from 'react';
import {
  Text,
  TextInput,
  View,
  LayoutAnimation,
  TouchableHighlight,
  Image,
  Platform
} from 'react-native';
import {
  QuickbloxLocalVideoView,
  QuickbloxRemoteVideoView
} from 'react-native-video-quickblox';
import styles from './styles';

export default class VideoCallScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      bottom: 1
    }
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.iconTitle}>{ setTime(this.props.callingTime) }</Text>
        <QuickbloxRemoteVideoView style={styles.callDetails}>
          {Platform.OS === 'android' ? <QuickbloxLocalVideoView
              style={[styles.userVideo, {bottom: this.state.bottom}]}
              onRendered={() => this.setState({bottom: 0})}/>
            : <QuickbloxLocalVideoView style={styles.userVideo}/>
          }
        </QuickbloxRemoteVideoView>
        <View style={styles.callButtonContainer}>
          <TouchableHighlight
            onPress={() => { alert('End call')}}
            underlayColor={'transparent'}>
            <View style={styles.buttonContainer}>
              <Text style={styles.iconTitle}>Decline</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

function setTime(totalSeconds) {
  let sec = pad(totalSeconds % 60);
  let min = pad(parseInt(totalSeconds / 60));
  return min + ' : ' + sec
}

function pad(val) {
  let valString = val + '';
  if (valString.length < 2) {
    return '0' + valString;
  }
  else {
    return valString;
  }
}
