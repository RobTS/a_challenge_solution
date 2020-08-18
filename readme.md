<img src="docs/images/screenshot.png" width="200">

# Challenge project

This project is the solution to a code challenge.

It is set up as a monorepo consisting of two sub-projects, a Node.js backend and a React Native mobile app.

### Project structure

The project structure is equivalent to lerna-based monorepos with a `packages` directory, but due to metro's incompatibility with lerna/yarn workspaces, and no need for its other capabilities here, the tool itself is not used.

## Backend

The backend consists of a single file that servers content through an express server.

To run the application, go to the `packages/backend` directory and execute the following two commands:

```
yarn install
yarn run start
```

Your Challenge backend should now be operational and listening on port 3000. You should see sample data when clicking [here](http://localhost:3000).

## Mobile App

The Mobile App is a standard React Native project, derived from the current `react-native-template-typescript`. To run it, you will need to have the Android and/or iOS SDKs set up, as [described here (section "React Native CLI Quickstart")](https://reactnative.dev/docs/environment-setup).

Once this is completed, go to the `./packages/app` folder and you should be able to run the application using one of the following two commands, depending on your platform:

```
npx react-native run-android
npx react-native run-ios
```

The iOS simulator will be able to access the server through the host specified in `./packages/app/src/config.ts`. 

For Android, you might need to adapt it to match your local IP or run `adb reverse tcp:3000 tcp:3000`.

Once the app starts up, you should be able to see the images and names of people provided in the sample data set.

## Unit tests

The client application comes with a set of tests to ensure correct rendering of the UI elements, correct operation of the redux store and correct linking of the UI to the store. For the sake of simplicity, snapshots were used for the UI components instead of selectors, but a ToDo for this has been added.

To execute them and ensure correctness, go to the `./packages/app` directory and run `yarn run test`. 

## ToDos:

* Replace React Test Renderer with Enzyme and add more sophisticated checks for component fields (e.g. explicit names instead of just snapshot).
