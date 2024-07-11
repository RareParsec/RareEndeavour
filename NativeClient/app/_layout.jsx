import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, router, Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [appIsReady, setAppIsReady] = useState(true);

  useEffect(() => {
    const prepare = async () => {
      try {
        await SplashScreen.hideAsync();
      } catch (err) {
        console.warn(err);
      }
    };
    appIsReady && prepare();
  }, [appIsReady]);

  useEffect(() => {
    // setAppIsReady(true);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <Stack>
            <Stack.Screen name="(app)" options={{ headerShown: false }} />
            <Stack.Screen name="login" options={{ presentation: "modal" }} />
            <Stack.Screen name="register" options={{ presentation: "modal" }} />
            <Stack.Screen name="create" options={{ presentation: "modal" }} />
          </Stack>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default Layout;
