import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MenuItem from './MenuItem'
import WelcomeScreen from './WelcomeScreen';
import {Ionicons} from "@expo/vector-icons"
import LoginScreenWithNavigation from './LoginScreenWithNavigation';


const Tab = createBottomTabNavigator();
const TabNavigation=()=>{
    return(
       <NavigationContainer>
        <Tab.Navigator
         screenOptions={({route})=>({
             tabBarIcon:({focused,color,size})=>{
                let iconName;
                if(route.name==='Welcome'){
                    iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                } else if(route.name === 'Menu'){
                    iconName='ios-list'
                } else if(route.name === "Login"){
                    iconName ='ios-enter'
                }
                return <Ionicons name={iconName} size={size} color={color}/>
            },
            tabBarActiveTintColor:'tomato',
            tabBarInactiveTintColor:'gray'
         })}
        >
            <Tab.Screen name="Welcome" component={WelcomeScreen}/>
            <Tab.Screen name="Menu" component={MenuItem}/>
            <Tab.Screen name='Login' component={LoginScreenWithNavigation}/>
        </Tab.Navigator>
       </NavigationContainer>
    )
}
export default TabNavigation;