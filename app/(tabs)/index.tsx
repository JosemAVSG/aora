import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { Link, Slot } from 'expo-router'
import React from 'react'

const index = () => {
  return (
    <>
    <View className="flex-1 items-center justify-center bg-black">
        <Text>Aora</Text>
        <StatusBar barStyle="dark-content" />
        <Link href="./profile" style={{margin: 10, color: "#0a7ea4"}} >Profile</Link>
    </View>
    </>
  )
}

export default index

const styles = StyleSheet.create({
    container:{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
        padding: 10
    }
})