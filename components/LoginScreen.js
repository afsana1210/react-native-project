import { useState } from "react";
import { ScrollView, StyleSheet, TextInput,Text } from "react-native";

export default function LoginScreen(){
    const[Email,onChangeEmail]=useState('');
    const[Password,onChangePassword]=useState('');
    return(
        <ScrollView style={style.container}>
            <Text style={style.headerText}>Welcome to Little lemon</Text>
            <Text style={style.regularText}>Login to Continue</Text>
            <TextInput
            style={style.input}
            value={Email}
            onChangeText={onChangeEmail}
            keyboardType={'email-address'}
            placeholder="Email"
            />
            <TextInput
            style={style.input}
            value={Password}
            onChange={onChangePassword}
            keyboardType={'default'}
            secureTextEntry={true}
            placeholder="Password"
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
    regularText:{
        fontSize:24,
        padding:20,
        marginVertical:9,
        color:"#EDEFEE",
        textAlign:'center'
    },
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: '#EDEFEE',
        backgroundColor: 'white',
        color:"EDEFEE",
        textAlign:"center"
    }
});

