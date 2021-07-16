import React from 'react';
import {StatusBar} from 'react-native';
import RootNavigation from './navigation/RootNavigation';
import {Provider} from 'react-redux';
import {store} from './redux';
function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="light-content" />
        <RootNavigation />
      </Provider>
    </>
  );
}

export default App;
