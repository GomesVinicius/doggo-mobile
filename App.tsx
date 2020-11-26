import React from 'react';

import { AppLoading } from 'expo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { StatusBar } from 'react-native';

import Routes from './src/routes/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  
  //const nav = useNavigation();

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <Routes />
      </>
    );
  }
}
