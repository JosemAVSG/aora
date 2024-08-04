import { StyleSheet, Text, View } from 'react-native'
import { Slot, SplashScreen, Stack } from 'expo-router'
import React, { useEffect } from 'react'
import {useFonts} from 'expo-font'

const _layout = () => {
    const [fontsLoaded, error] = useFonts({
      "Poppins": require("../../assets/fonts/Poppins-Medium.ttf"),
      "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
      "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
      "Poppins-Black": require("../../assets/fonts/Poppins-Black.ttf"),
      "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
      "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
      "Poppins-Light": require("../../assets/fonts/Poppins-Light.ttf"),
      "Poppins-Thin": require("../../assets/fonts/Poppins-Thin.ttf"),
      "Poppins-ExtraLight": require("../../assets/fonts/Poppins-ExtraLight.ttf"),
      "Poppins-ExtraBold": require("../../assets/fonts/Poppins-ExtraBold.ttf"),
    })

    useEffect(() => {
      if(error) throw error;

      if(fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded,error])

    if(!fontsLoaded) return null
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />
    
    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
        padding: 10
    }
})