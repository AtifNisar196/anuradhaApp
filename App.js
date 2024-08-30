/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import NavigationStack from './src/Navigation/NavigationStack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/Store';
import Toast from 'react-native-toast-message';
import BootSplash from 'react-native-bootsplash';
const App = () => {

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <NavigationStack />
            <Toast />
          </View>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
