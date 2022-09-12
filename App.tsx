import { NativeBaseProvider, StatusBar } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { THEME } from './src/Styles/theme'
import { Routes } from './src/routes/';
import { Details } from './src/screens/Details';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent />
      <Routes />
    </NativeBaseProvider>
  );
}