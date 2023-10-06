import { Image, ScrollView, StyleSheet, Text, useColorScheme } from "react-native"

const UseColorHookExample=()=>{
    const colorScheme = useColorScheme();
    return(
        <ScrollView style={[
            style.container,
            colorScheme === 'light' 
            ? {backgroundColor:"#fff"}
            : {backgroundColor : "#333333"}]}>
                {''}
            <Image
            style={style.logo}
              source={require("../Img/LittleLemonLogo.PNG")}
              resizeMode="center"
              accessible={true}
              accessibilityLabel="Logo"
            />
            <Text style={[
                style.regularText,
                colorScheme === 'light'
              ? { color: '#333333' }
              : { color: '#EDEFEE' },
                ]}>Color Scheme : {colorScheme}</Text>{''}
        </ScrollView>
    )
}
const style=StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        marginTop:25
    },
    logo:{
        height:100,
        width:300
    },
    regularText:{
        textAlign:"center",
        fontSize:18
    }
})

export default UseColorHookExample;