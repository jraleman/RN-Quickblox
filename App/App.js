import React from 'react';
import {
  PermissionsAndroid,
  Platform,
  View
} from 'react-native';

import QuickbloxManager from './QuickbloxManager'

import HomeScreen from './HomeScreen';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      calling: false
    }
    this.quickbloxManager = new QuickbloxManager();
    this.quickbloxManager.init();
    this.quickbloxManager.addSubscriber(this);
    Platform.OS === 'android' && requestPermissions();
  }
  receiveCall() {
    this.quickbloxManager.acceptCall()
    this.setState({calling: true})
  }
  render () {
    return (
      <View style={{ flex: 1 }}>
         <HomeScreen />
      </View>
    );
  }
}

function requestPermissions() {
  try {
    return PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.PROCESS_OUTGOING_CALLS,
      PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
      PermissionsAndroid.PERMISSIONS.CALL_PHONE]
    )
  } catch (err) {
    alert(err);
  }
}
