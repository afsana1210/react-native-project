import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"
import WelcomeScreen from "./WelcomeScreen";
import LoginScreenWithPresableComp from "./LoginScreenWithPressableComp";

const Drawer=createDrawerNavigator();

const DrawerNavigation=()=>{
   return(
    <NavigationContainer>
        <Drawer.Navigator 
         screenOptions={{
            drawerActiveBackgroundColor:'Black',
            drawerPosition:'right',
            drawerActiveTintColor:"white"
         }}
        >
            <Drawer.Screen name="Home" component={WelcomeScreen}/>
            <Drawer.Screen name="Login" component={LoginScreenWithPresableComp}/>
        </Drawer.Navigator>
    </NavigationContainer>
   )
}

export default DrawerNavigation;