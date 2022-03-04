import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useFonts, Lexend_700Bold, Lexend_400Regular, Lexend_300Light } from '@expo-google-fonts/lexend';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

import { Welcome } from '../screens/Welcome';

import theme from '../global/styles/theme';

export function Routes() {

    const [fontsLoaded] = useFonts({
        Lexend_700Bold,
        Lexend_400Regular,
        Lexend_300Light,
        Poppins_400Regular
    });

    if(!fontsLoaded){
     return <AppLoading />
    }

    return (
        <ThemeProvider theme={theme}>
            <Welcome text="cobrar.me" />
        </ThemeProvider>
    )
}