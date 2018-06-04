import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 0,
  },
  callDetails: {
    flex: 3,
    backgroundColor: '#6969'
  },
  userVideo: {
    position: 'absolute',
    bottom: 1,
    right: 0,
    width: 80,
    height: 120,
    backgroundColor: 'green',
    overflow: 'hidden'
  },
  callButtonContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  iconContainer: {
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  buttonContainer: {
    alignItems: 'center',
  },
  icon: {
    height: 30,
    width: 30
  },
  iconTitle: {
    alignItems: 'center',
    fontSize: 15,
    alignSelf: 'center'
  }
});
