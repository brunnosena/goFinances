import "react-native-gesture-handler";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import React from 'react';
import { ThemeProvider } from 'styled-components'
import { StatusBar } from "react-native";
import AppLoading from 'expo-app-loading';
import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import theme from './src/global/styles/theme';
import { Routes } from "./src/routes";

export default function App() {
  const [areFontsLoaded, error] = useFonts({
		Poppins_400Regular,
		Poppins_500Medium,
		Poppins_700Bold,
	});
	// const { isLoadingStoragedUser } = useAuth();

	// if (!areFontsLoaded || isLoadingStoragedUser) {
	if (!areFontsLoaded) {
		if (error) console.error("Error loading fonts:", error);
		// if (isLoadingStoragedUser) console.info("Loading storaged user!");
		return <AppLoading />;
	}

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
				barStyle="light-content"
				backgroundColor={theme.colors.primary}
			/>
      <Routes />
    </ThemeProvider>
  );
}

