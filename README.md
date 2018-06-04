# RN-Quickblox

Because there is a lack of Quickblox in the React Native world. :(

## Setup

To download and install dependencies:

```
git clone https://github.com/jraleman/RN-Quickblox
cd RN-Quickblox
npm i
```

## Install

### Automatic

Install `react-native-video-quickblox`:

```
npm install --save react-native-video-quickblox
react-native link react-native-video-quickblox
```

Install `react-native-spinkit`:

```
npm install --save react-native-spinkit
react-native link `react-native-spinkit`
```

...That should work. If not, brave yourself :(

### Manual

If the automatic way (linking) doesn't work for some reason...
``*cough* f'ing react *cough*``, you can set it up manually:

- [Instructions for Android](resources/steps-android.md)
- [Instructions for iOS](resources/steps-ios.md)

## Usage

To run the android version:

```
react-native run-android
```

To run the ios version:

```
react-native run-ios
```

## TODO

- [x] Rename RN-WebRTCQuickBlox -> WebRTCQuickBlox
- [x] Install dependencies
- [x] Give up on WebRTC
- [x] Rename WebRTCQuickBlox -> RN-QuickbloxVideo
- [x] Create documentation and usage
- [x] Install Quickblox Android SDK
- [x] Install Quickblox iOS SDK
- [x] Integrate QuickbloxManager
- [ ] Replace default Quickblox user
- [ ] Add usage/demo gif
- [ ] Setup demo tutorial
