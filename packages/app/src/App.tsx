import React from 'react';
import { SafeAreaView, StatusBar, } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from './state/storeConfig';

const store = configureStore();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
        <SafeAreaView>
        </SafeAreaView>
      </Provider>
    </>
  );
};

export default App;
