import { Image, StyleSheet, Text, View } from "react-native"

const ImageComp=()=>{
    return(
        <View style={style.container}>
            <Image style={style.logo} source={require("../Img/LittleLemonLogo.PNG")}></Image>
            <Text style={style.title}>Little Lemon Logo</Text>
        </View>
    )
}
const style=StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        marginTop:25,
        backgroundColor:"#fff"
    },
    logo:{
      height:100,
      width:300,
      resizeMode:'contain'
    },
    title:{
        marginTop:16,
        paddingVertical:10,
        color:"#333333",
        textAlign:"center",
        fontSize:20,
        fontWeight:"bold"
    }

});
export default ImageComp;