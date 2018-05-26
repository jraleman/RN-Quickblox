# WebRTCQuickblox

Because there is a lack of Quickblox in the React  Native world. :(

## Setup

To download and install dependencies:

```
git clone https://github.com/jraleman/WebRTCQuickblox
cd WebRTCQuickblox
npm i
```

### Usage

To run the android version:

```
react-native run-android
```

TO run the ios version:

```
react-native run-ios
```

## Hacks

This is already done, but I am saving this as reference.

### cli

Install everything! :3

```
sudo npm install --global rn-nodeify

# Install all shims and run package-specific hacks.
rn-nodeify --install --hack
```

### package.json

Install `nodeify` locally:

```
npm install nodeify --save
```

Add to `package.json`:

```
{
  ...
  "scripts": {
    ...
    "post:install": "node_modules/.bin/rn-nodeify --install --hack"
  },
  ...
}
```

## TODO

- [x] Rename RN-WebRTCQuickBlox -> WebRTCQuickBlox
- [x] Install dependencies
- [] Setup connection and configuration
- [] First connection
- [] First message
- [] First video call
- [] Create documentation and usage
- [] Update README.md (make it fancy)
- [] Add usage/demo gif
- [] Setup demo tutorial
