import { NativeBaseProvider, StatusBar } from 'native-base';
import { Home } from './src/screens/Home';
import { Loading } from './src/components/Loading';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';
import { Routes } from './src/routes';
import { THEME } from './src/styles/theme'


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        showHideTransition='fade'
        animated={true}
        backgroundColor='transparent'
        barStyle='light-content'
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider >
  );
}
