/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { Switch } from 'react-native-paper';
import { TextInput, Button } from 'react-native-paper';
import { Chip } from 'react-native-paper';
import { Surface } from 'react-native-paper';

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

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [text, setText] = useState("");
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section style={styles.sectionTitle} title='TextInput(email)'>

            <TextInput
              mode='outlined'
              placeholder='                                                                                   ' />
          </Section>
          <Section style={styles.sectionTitle} title='Button(amb text i icona)'>
            <View style={{ flexDirection: 'column', justifyContent:'center' }}>

              <Button icon="alien" uppercase={false} mode="contained" onPress={() => console.log('Pressed')}>
                Alien
              </Button>
              <Button icon="alien" mode="contained" labelStyle={{ color: 'black' }} onPress={() => console.log('Pressed')}>
                Alien
              </Button>
              <Button icon="alien" mode="text" labelStyle={{ color: 'blueviolet' }} onPress={() => console.log('Pressed')}>
                Alien
              </Button>
              <Button icon="alien" mode="text" labelStyle={{ color: 'blueviolet' }} onPress={() => console.log('Pressed')}>
                Alien
              </Button>
            </View>
          </Section>
          <Section style={styles.sectionTitle} title='Switch necesites un descans'>
            <Switch value={isSwitchOn} style={styles.switch} color='red' onValueChange={onToggleSwitch} />
          </Section>
          <Section style={styles.sectionTitle} title='Provant chips'>

            <View style={{ flexDirection: 'row' }}>
              <Chip icon="information" mode='outlines' style={styles.chip1} onPress={() => console.log('Pressed')}>Internet</Chip>
              <Chip icon="wifi" mode='outlines' style={styles.chip2} onPress={() => console.log('Pressed')}>WI-FI</Chip>
            </View>
          </Section>
          <Section style={styles.sectionTitle} title='Boto de un component Surface'>
            <Surface style={styles.surface} elevation={4}>
              <Button icon="alien" mode="contained" style={styles.butonet} onPress={() => console.log('Pressed')}>
                Press me
              </Button>
            </Surface>
          </Section>
        </View>
      </ScrollView >
    </View >
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
