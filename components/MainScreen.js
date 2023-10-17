import { Button, Image, Pressable } from "react-native"
import { StyleSheet, View , Text } from "react-native"

const MainScreen=({navigation})=>{
    return(
        <View style={style.container}> 
            <View style={style.contentContainer}>
              <Image  style={style.logo} source={require('../Img/LittleLemonBackgroundImg.png')}/>
            </View>
           <Text style={style.title}>Little Lemon,your local Mediterranean Bistro</Text>
           <Button onPress={()=>navigation.navigate("Subscibe")}>
            NewSletter
           </Button>
        </View>
       
    )
}
const style= StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor:'white',
       
    },
    contentContainer:{
        // flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        height:200,
        width:300,
        resizeMode:'contain'
    },
    title:{
        // marginTop: 16,
        paddingVertical: 10,
        color:"#333333",
        textAlign:"center",
        fontSize:20,
        fontWeight:"bold"
    }
    
});
export default MainScreen;