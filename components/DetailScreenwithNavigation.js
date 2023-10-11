import { StyleSheet, View ,Text} from "react-native"
import { Button } from "react-native"

const DetailScreenwithNavigation=({navigation})=>{
    return(
        <View style={style.container}>
            <Text>Detail screen </Text>
            <Button
             title="Go to Details....again"
             onPress={()=>navigation.push('Details')}
            ></Button>
            <Button title="Go to Home" onPress={()=>navigation.navigate('Welcome')}/>
            <Button title="Go back " onPress={()=>navigation.goBack()}/>
            <Button
            title="Go back to first screen in stack"
            onPress={() => navigation.popToTop()}
            />
        </View>
    )
}
const style=StyleSheet.create({
    container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
    }
})
export default DetailScreenwithNavigation;