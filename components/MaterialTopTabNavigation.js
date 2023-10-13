import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./WelcomeScreen";
import LoginScreenWithNavigation from "./LoginScreenWithNavigation";
import MenuItem from "./MenuItem";

const Tab= createMaterialTopTabNavigator();

const MaterialTopTabNavigation=()=>{
   return(
      <NavigationContainer>
        <Tab.Navigator 
        screenOptions={{
            tabBarLabelStyle:{fontSize:12},
            tabBarItemStyle:{width:100},
            tabBarStyle:{backgroundColor:'#fff'}
        }}
        >
            <Tab.Screen name="Home" component={WelcomeScreen}/>
            <Tab.Screen name="Login" component={LoginScreenWithNavigation}/>
            <Tab.Screen name="Menu" component={MenuItem}/>
        </Tab.Navigator>
      </NavigationContainer>
   )
}

export default MaterialTopTabNavigation;