# Æternity identity Cordova

## Requirements

### Cordova

Cordova needs to be installed on your system:

``` bash
npm install -g cordova
```

### Generating icons and splash screens

In order to generate the resources, you need to have ImageMagick installed on your computer. On Mac this can be done using `brew install imagemagick`, for further instructions please view the [cordova-splash](https://github.com/AlexDisler/cordova-splash#requirements) repository.

## Build Setup

In order to run the app as a native cordova app, the vue app needs to be built first. This is automatically done in the setup, so after the setup steps in the `README.md` file, you can do the following:

``` bash
# generate icons and splash screens (see requirements above)
npm run gen:cordova-resources

# build android app
npm run build:android

# build ios app
npm run build:ios
```

After building the app you can open the generated projects in the `platforms` directory in either Android Studio or XCode to test it on your device.

## Native plugins

As a proof of concept, 2 extra plugins have been added to this project:

[cordova-plugin-splashscreen](https://github.com/apache/cordova-plugin-splashscreen)
[phonegap-plugin-barcodescanner](https://github.com/phonegap/phonegap-plugin-barcodescanner)

## TODO

### Device Ready

Cordova emits a [deviceready](https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready) event once all the native APIs are available. This should be handled in the app and only allow calling of plugins once the device is ready.

### Splash screen

Right now the splash screen is shown for 2 seconds (configurable in the `config.xml` file). Ideally the splash screen should be hidden as soon as the app finished loading. This can be done in the vue.js app by calling `navigator.splashscreen.hide();`.

### Possible plugins

https://github.com/dbaq/cordova-plugin-contacts-phone-numbers
The official cordova contacts plugin is deprecated, this seems to be the best alternative.

https://github.com/apache/cordova-plugin-device
To check what kind of device the user is using (Android / iOS).

https://github.com/apache/cordova-plugin-inappbrowser
To open a website within the app (overlay).

https://github.com/apache/cordova-plugin-network-information
To check network connection status.

https://github.com/apache/cordova-plugin-statusbar
Control color and appearance of status bar.
