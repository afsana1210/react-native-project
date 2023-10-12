import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import WelcomeScreen from './WelcomeScreen';
import LoginScreenWithNavigation from './LoginScreenWithNavigation';

const Tab = createMaterialBottomTabNavigator();

const MaterialBottonTabNavigation=()=>{
   return(
    <NavigationContainer>
        <Tab.Navigator 
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#f0f8ff"
        barStyle={{ backgroundColor: '#00ff7f' }}
        >
            <Tab.Screen name='Home' component={WelcomeScreen}/>
            <Tab.Screen name='Login' component={LoginScreenWithNavigation}/>
        </Tab.Navigator>
    </NavigationContainer>
   )
}
export default MaterialBottonTabNavigation;