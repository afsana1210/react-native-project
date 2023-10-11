import { useState } from "react"
import { Pressable, ScrollView, StyleSheet, TextInput ,Text} from "react-native"

const LoginScreenWithNavigation=({navigation})=>{
    const[email,onChangeEmail]=useState('');
    const[password,onChangePassword]=useState('');
    return(
        <ScrollView style={style.container}>
            <Text style={style.headerText}>Welcome to Little Lemon</Text>
            <Text style={style.regularText}>Login to Continue</Text>
            <TextInput
            style={style.inputBox}
             value={email}
             onChangeText={onChangeEmail}
             placeholder="Email"
             keyboardType={'email-address'} 
            />
            <TextInput
             style={style.inputBox}
             value={password}
             onChangeText={onChangePassword}
             placeholder="Password"
             keyboardType={'default'}
             secureTextEntry={true}
            />
            <Pressable onPress={()=>navigation.navigate('Welcome')} style={style.button}>
                <Text style={style.buttonText}>Log In</Text>
            </Pressable>
        </ScrollView>
    )
}

const style=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"black"
      },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
      },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
      },
    inputBox:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: 'EDEFEE',
        backgroundColor: '#EDEFEE',
    },
    button: {
        fontSize: 22,
        padding: 10,
        marginVertical: 8,
        margin: 100,
        backgroundColor: '#EE9972',
        borderColor: '#EE9972',
        borderWidth: 2,
        borderRadius: 50,
      },
      buttonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 25,
      },
})
export default LoginScreenWithNavigation;