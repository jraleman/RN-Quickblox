import React from 'react';
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';
import styles from './styles';

import QuickbloxManager from '../QuickbloxManager';

const CALL_ID = 1
const REAL_NAME = 'John Doe'
const AVATAR = 'https://cdn.intra.42.fr/users/anieto.jpg'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this._callSuccess = this.props.callSuccess;
    this.state = {
      userName: 'johndoe420',
      password: '42424242',
      user: 'null',
      users: []
    };
    this.quickbloxManager = new QuickbloxManager();
  }
  componentDidMount() {
    this.login();
    this.quickbloxManager.getUsers(users => {
      if (typeof (users) === 'string')
        this.setState({users: JSON.parse(users)})
      else if (typeof (users) === 'object' && Array.isArray(users))
        this.setState({users: users})
    });
  }
  login = () => {
    this.setState({waiting: true})
    this.quickbloxManager.login(this.state.userName, this.state.password, (qbId) => {
      this.setState({waiting: false, user: qbId})
    });
  }
  btnHandler () {
    alert("It works!");
    // this.quickbloxManager.callUsers([item.id], 1, 'Dat Tran', 'https://qph.ec.quoracdn.net/main-qimg-7ea75331d55c74f7e3c0815cca3e8b4a-c');
    // this.props.callSuccess();
  }
  renderListItem(item) {
    return (
      <TouchableOpacity
        onPress={ () => {
          alert("It works!");
          this.quickbloxManager.callUsers([item.id], CALL_ID, REAL_NAME, AVATAR);
          this._callSuccess();
        }}>
        <View style={{flexDirection: 'row', height: 44, alignItems: 'center'}}>
          <Text>{ item.id }</Text>
          <View style={{width: 40}}/>
          <Text>{ item.login }</Text>
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <View style={ styles.container }>

        <FlatList
          keyboardShouldPersistTaps='always'
          style={{ backgroundColor: 'white' }}
          data={ this.state.users }
          keyExtractor={ (item, index) => index }
          renderItem={ ({ item, index }) => this.renderListItem(item, index) }
        />
      </View>
    );
  }
};

const CallButton = (props, {item, index}) => {
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
