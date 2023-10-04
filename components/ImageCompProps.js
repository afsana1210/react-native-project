import { Image, ScrollView, StyleSheet ,Text} from "react-native"

const ImageCompProps=()=>{
    return(
        <ScrollView style={style.container}>
            <Image 
             style={style.logo}
             source={require("../Img/LittleLemonLogo.PNG")}
             resizeMode="conatin"
             accessible={true}
             accessibilityLabel="Little lemon Logo"
            />
            <Text style={style.title}>Welcome Little Lemon</Text>
            <Image
             style={style.img}
             source={require("../Img/f1.png")}
             resizeMode="cover"
             accessible={true}
             accessibilityLabel="Image 1"
            />
            <Image
             style={style.img}
             source={require("../Img/f1.png")}
             resizeMode="repeat"
             accessible={true}
             accessibilityLabel="Image 1"
            />
            <Image
             style={style.img}
             source={require("../Img/f2.png")}
             resizeMode="center"
             accessible={true}
             accessibilityLabel="Image 2"
            />
            <Image
             style={style.img}
             source={require("../Img/f3.png")}
             resizeMode="cover"
             accessible={true}
             accessibilityLabel="Image 3"
            />
            <Image
             style={style.img}
             source={require("../Img/f6.png")}
             resizeMode="stretch"
             accessible={true}
             accessibilityLabel="Image 4"
            />
        </ScrollView>
    )
}
const style=StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
        padding:24,
        backgroundColor:"#fff"
    },
    img:{
        height:250,
        width:450,
        borderRadius:10,
    },
    logo:{
        height:100,
        width:300
    },
    title:{
        marginTop:16,
        paddingVertical:10,
        textAlign:"center",
        color:"#333333",
        fontSize:20,
        fontWeight:"bold"
    }
})

export default ImageCompProps;