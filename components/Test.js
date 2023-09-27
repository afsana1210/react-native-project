import { Text, View } from "react-native";

export default function Test(){
    return(
        // <View
        // style={{
        //     flexDirection:"row",
        //     height:200,
        //     padding:20
        // }}>
        //     <View style={{backgroundColor:"blue" , flex: 0.5}}></View>
        //     <View style={{backgroundColor:"red" , flex: 0.3}}></View>
        // </View>
        <Text style={{fontWeight:"bold"}}>I am bold<Text style={{color:"red"}}>and red </Text></Text>
    )
}