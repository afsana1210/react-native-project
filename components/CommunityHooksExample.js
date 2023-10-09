import {useKeyboard} from '@react-native-community/hooks'

const CommunityHooksExample=()=>{
    const keyboard = useKeyboard()
    return(
        <View style={{
            flex:1,
            backgroundColor:"#fff",
            marginTop:25,
            padding:24
        }}>
            <Text style={{
                fontSize:18,
                color:"black",
                textAlign:"center"
            }}>keyboard :{keyboard.keyboardShown}{keyboard.keyboardHeight} </Text>
        </View>
    )
}
export default CommunityHooksExample;


console.log('keyboard isKeyboardShow: ', keyboard.keyboardShown)
console.log('keyboard keyboardHeight: ', keyboard.keyboardHeight)