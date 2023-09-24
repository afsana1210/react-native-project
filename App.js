import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItem from './components/MenuItem';
import Test from './components/Test';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Test/> */}
      <Header />
      <WelcomeScreen/>
      {/* <MenuItem /> */}
      <Footer/>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
    // alignItems: 'center',
    // justifyContent: 'center',
  }
  
});
