import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from './state/storeConfig';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileListScreen } from './screens/ProfileListScreen';

const store = configureStore();
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="ProfileList" component={ProfileListScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    </Provider>
  );
};

export default App;
