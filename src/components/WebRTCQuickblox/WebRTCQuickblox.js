import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  RTCView,
  MediaStream,
  MediaStreamTrack,
  getUserMedia
} from 'react-native-webrtc';


export default class WebRTCQuickblox extends React.Component {
  constructor (props) {
    super(props);
    this._configuration = this.props.config;
    this._peerConnection = this.props.pc;
    this.state = {};
    return ;
  }
  render () {
    return (
      <View>
        <Text>{ "WebRTCQuickblox Component" }</Text>
        <Text>{ this._configuration }</Text>
        <Text>{ this._peerConnection }</Text>
      </View>
    );
  }
}
