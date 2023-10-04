import * as React from 'react';
import { ScrollView, Text, StyleSheet, ImageBackground } from 'react-native';

export default function BackGroundImageComp() {
  return (
    <ScrollView indicatorStyle="white" style={styles.container}>
      <ImageBackground style={styles.img} source={require("../Img/LittleLemonLogo.png")} resizeMode="contain">
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
      </ImageBackground>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:25,
    marginTop:25,
    backgroundColor:"#fff"
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: 'black',
    textAlign: 'center',
  },
  img:{
    flex:1,
    justifyContent:"center"
  }
});
