/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { Provider as RafaProvider, TextInput, Button, Switch, Chip, Surface } from 'react-native-paper';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const Section = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const saluda = (props) => {
  return <Text style={{ color: 'blue', fontSize: 25 }}>Hola {props}</Text>;
};
const saluda2 = () => {
  return (
    <View>
      {saluda('Rafa Raga')}
      {saluda('Alex pelotas')}
    </View>
  );
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const isOnePiece = true;

  return (
    <RafaProvider>
      {isOnePiece && saluda('Alex Pelotas')}
    </RafaProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  switch: {
    alignSelf: 'center'
  },
  chip1: {
    marginLeft: 20,
    width: 95,
    textAlign: 'center',
  },
  chip2: {
    width: 80,
    textAlign: 'center',
  },
  surface: {
    padding: 8,
    height: 80,
    width: 80,
    justifyContent: 'center',
  },
  butonet: {
    width: 370,
    height: 50,

  }
});

export default App;
