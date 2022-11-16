# Footbic

## Description

A test mobile application based on football-API which provides with the list of football teams with crest pictures. When you press on each of them you'll see the second screen with detail information about chosen team: Crest, name, the list of players, the list of ten upcoming matches.

## Project Structure

**`Technologies`**: React-native, Typescript, React-native-navigation, Redux, Redux-saga, Typesafe-actions, Reselect. Eslint and import aliases are set.

The project structure looks like the following:

```text
footbic/src
    ├─ assets
    ├─ components
    ├─ constants
    ├─ router
    ├─ models
    ├─ scenes
    │   ├─ Dashboard
    |   └─ Details
    ├─ services
    ├─ store
    │   ├─ actions
    │   ├─ reducers
    │   ├─ sagas
    │   ├─ selectors
    |   └─ index.ts
    ├─ styles
    └─ utils
```

## Demo screenshot

![](./src/assets/demo.gif)

## Scripts

### `npm install`

To install all the project dependencies.

### `npm start`

To run the application in development mode (Metro bundler).

### `npm android`

To launch the app on Android device or emulator.
