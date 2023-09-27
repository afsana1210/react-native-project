import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,ActivityIndicator} from 'react-native';

export default function LoaderIcons() {
  return (
    <View style={[styles.container, styles.horizontal]}>
     <ActivityIndicator/>
     <ActivityIndicator size="large"  animating={false}/>
     <ActivityIndicator size="small" color="#0000ff" />
     <ActivityIndicator size="large" color="green" hidesWhenStopped={true} />
      {/* <Text style={{fontSize:"24px"}}>Open up App.js to start working on your app!</Text>
      <Image style={styles.stretch} source={require('./assets/delivery.png')}></Image> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stretch :{
    width: 180,
    height: 200,
    // resizeMode: 'stretch',
  },
  horizontal:{
    flexDirection: "row",
    justifyContent:"space-around",
    padding:10
  }
});
