import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import SectionListExample from './components/SectionListExample';
import LoginScreenWithPresableComp from './components/LoginScreenWithPressableComp';
import LoginScreenWithNavigation from './components/LoginScreenWithNavigation';
import DetailScreenwithNavigation from './components/DetailScreenwithNavigation';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
          <Header />
      <Stack.Navigator 
      initialRouteName='Login' 
      screenOptions={{
        headerStyle:{backgroundColor:'#333333'},
        headerTintColor:'#fff',
        headerTitleStyle:{
          fontWeight:'bold'
        }
      }}
      >
      <Stack.Screen
       options={{title:'Home'}}
       name='Welcome'
       component={WelcomeScreen}/>
      <Stack.Screen name='Login' component={LoginScreenWithNavigation}/>
      <Stack.Screen name='Menu' component={SectionListExample}/>
      <Stack.Screen name='Details' component={DetailScreenwithNavigation}/>
      </Stack.Navigator>
      </View>
      <View style={styles.footerContainer}>
          <Footer/>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer:{
    backgroundColor:'#333333'
  }
});