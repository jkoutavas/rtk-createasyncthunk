# rtk-createasyncthunk

*Readme last updated July 7th, 2022*

A React Native Typescript app that explores using `createAsyncThunk` from the [Redux Toolkit](https://redux-toolkit.js.org) (RTK).

You can read about this new API on redux-toolkit's [v1.4 release notes](https://github.com/reduxjs/redux-toolkit/releases/tag/v1.4.0).

This repo has proven to run on node v14.17.3, Cocopods v1.10.1, and Xcode 12.5.1

## Redux Toolkit v1.6 update:

A new version of my `rtk-creteasyncthunk` repo, [rtk-createapi](https://github.com/jkoutavas/rtk-createapi) explores [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview). It's `createApi` API simplifies what we're doing with `createSyncThunk` in this repo.

## setup

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
