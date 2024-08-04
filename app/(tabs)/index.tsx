import { StatusBar,  Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const index = () => {
  return (

    <View className='flex items-center justify-center h-screen'>
        <Text>Aora</Text>
        <StatusBar barStyle="default" />
        <Link href="./profile" className="text-2xl text-blue" >Profile</Link>
    </View>
  
  )
}

export default index;

// const styles = StyleSheet.create({
//     container:{
//         display: "flex",
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#F5FCFF",
//         padding: 10
//     }
// })