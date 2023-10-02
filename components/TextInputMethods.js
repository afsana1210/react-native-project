import { useState } from "react"
import { Alert, ScrollView, StyleSheet, TextInput } from "react-native";

const TextInputMethods=()=>{
    const[Name,onChangeName]=useState('');
    return(
      <ScrollView style={style.container}>
        <Text style={style.headerText}>TextInput Methods</Text>
        <TextInput
         style={style.input}
         value={Name}
         onChangeText={onChangeName}
         placeholder="Name"
         onFocus={()=>Alert.alert("Email is focused")}
         onBlur={()=>Alert.alert("Email is now blur")}
         clearButtonMode={"always"}
        />
      </ScrollView>
    )
}

const style=StyleSheet.create({
    container:{
        flex:1
    },
    headerText:{
            padding:40,
            fontSize:30,
            color:"#EDEFEE",
            textAlign:"center"
    },
    input:{
        height:40,
        margin:12,
        boarderWidth:1,
        padding:10,
        fontSize:16,
        boarderColor:"#EDEFEE",
        backgroundColor: 'white',
        color:"EDEFEE",
    }
})