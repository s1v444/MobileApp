import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import * as Font from "expo-font";
import { Slot } from 'expo-router';

export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
        "Roboto-Black-Italic": require("../assets/fonts/Roboto-BlackItalic.ttf"),
        "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
        "Roboto-Bold-Italic": require("../assets/fonts/Roboto-BoldItalic.ttf"),
        "Roboto-Italic": require("../assets/fonts/Roboto-Italic.ttf"),
        "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
        "Roboto-Light-Italic": require("../assets/fonts/Roboto-LightItalic.ttf"),
        "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
        "Roboto-Medium-Italic": require("../assets/fonts/Roboto-MediumItalic.ttf"),
        "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
        "Roboto-Thin-Italic": require("../assets/fonts/Roboto-ThinItalic.ttf"),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Slot />;
}
