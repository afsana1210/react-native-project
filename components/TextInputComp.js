import { useState } from "react"
import { ScrollView, StyleSheet, TextInput ,Text} from "react-native"

const  TextInputComp=()=>{
    const [firstName,onChangeFirstName]=useState('')
    const [lastName,onChangeLastName]=useState('')
    const [Message,onChangeMessage]=useState('')
    const [PhoneNumber,onChangePhoneNumber]=useState('');

    return(
        <ScrollView style={style.conatainer}>
            <Text style={style.headingSection}>How was your visit to Little Lemon? </Text>
            <Text style={style.infoSection}> Little Lemon is a charming neighborhood bistro that serves simple food 
                and classic cocktails in a lively but casual environment. We would love 
                to hear your experience with us! </Text>
            <TextInput
             style={style.input}
             value={firstName}
             onChangeText={onChangeFirstName}
            />
            <TextInput
             style={style.input}
             value={lastName}
             onChangeText={onChangeLastName}
            />
            <TextInput
             style={style.messageInput}
             value={Message}
             onChangeText={onChangeMessage}
            />

        </ScrollView>
    )
}
const style=StyleSheet.create({
    conatainer:{
        flex:1
    },
    input:{
        height: 40, 
        margin: 12, 
        borderWidth: 1, 
        padding: 10, 
        fontSize: 16, 
        borderColor: 'EDEFEE', 
        backgroundColor: '#F4CE14', 
    },
    messageInput: { 
            height: 100, 
            margin: 12, 
            borderWidth: 1, 
            padding: 10, 
            fontSize: 16, 
            backgroundColor: '#F4CE14', 
         }, 
         infoSection: { 
            fontSize: 24, 
            padding: 20, 
            marginVertical: 8, 
            color: '#EDEFEE', 
            textAlign: 'center', 
            backgroundColor: '#495E57', 
        }, 
        headingSection: { 
            fontSize: 28, 
            padding: 20, 
            marginVertical: 8, 
            color: '#EDEFEE', 
            textAlign: 'center', 
            backgroundColor: '#495E57', 
        }, 
        
});

export default TextInputComp;