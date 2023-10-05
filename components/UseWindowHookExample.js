import { Image, ScrollView, StyleSheet, Text, useWindowDimensions } from "react-native"

const UseWindowHookExample=()=>{
    const window=useWindowDimensions();
    return(
        <ScrollView style={style.container}>
            <Image
            style={style.logo}
            source={require("../Img/LittleLemonLogo.PNG")}
            resizeMode="center"
            accessible={true}
            accessibilityLabel="Little lemon Logo"
            />
            <Text style={style.regularText}>Window Dimension</Text>
            <Text style={style.regularText}>Window Height : {window.height}</Text>
            <Text style={style.regularText}>Window Width : {window.width}</Text>
            <Text style={style.regularText}>Window fontScale : {window.fontScale}</Text>
        </ScrollView>
    )
}
const style=StyleSheet.create({
    container:{
        flex:1,
        marginTop:25,
        padding:24,
        backgroundColor:"#fff"
    },
    logo:{
        height:100,
        width:300,
        resizeMode:"contain"
    },
    regularText:{
        marginTop: 16,
        paddingVertical: 10,
        color: '#333333',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
  },
})

export default UseWindowHookExample;