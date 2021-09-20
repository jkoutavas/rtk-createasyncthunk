# rtk-createasyncthunk

*Readme last updated September 20th, 2021*

A React Native Typescript app that explores using `createAsyncThunk` from the [Redux Toolkit](https://redux-toolkit.js.org) (RTK).

You can read about this new API on redux-toolkit's [v1.4 release notes](https://github.com/reduxjs/redux-toolkit/releases/tag/v1.4.0).

This repo has proven to run on node v14.17.3, Cocopods v1.10.1, and Xcode 12.5.1

After cloning this repo, do the following to see the app in action:

```
$ cd {clone-repo}/myTSReduxApp
$ yarn install
$ cd ios
$ pod install
$ cd ..
$ npx react-native run-ios

```

Then press the "Get Employees" button and you'll see this displayed:


![](ScreenShot.png)

## How this app was generated

(You don't need to execute these steps)

```
$ npx react-native init myRTKApp --template react-native-template-typescript
$ yarn add @reduxjs/toolkit react-redux @types/react-redux axios
```
