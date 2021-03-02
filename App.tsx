import React from 'react';
import { Provider } from 'react-redux';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, Button, Image, TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import PostListView from "./src/components/PostListView";
import store from "./src/store/store";

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
      <Provider store={store}>
          <SafeAreaView>
            <Text style={styles.sectionTitle}>Posts</Text>
            <View style={styles.sectionContainer}>
              <PostListView/>
            </View>
          </SafeAreaView>
      </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
    paddingLeft: 24,
    paddingVertical: 10,
    backgroundColor: Colors.primary,
    elevation: 10
  },
});

export default App;
