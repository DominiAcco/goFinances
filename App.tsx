import React from 'react';
import { Dashboard } from './src/screens/Dashboard';

import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins'


export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_900Black,
  })
if (!fontsLoaded){
  return <AppLoading/>
}

  return (
    <ThemeProvider theme={theme}
    >
       <Dashboard />
    </ThemeProvider>
   
  );
}

