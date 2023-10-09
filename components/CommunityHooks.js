import { View ,Text} from "react-native"
import {useDevicOrientaion} from '@react-native-community/hooks'

const CommunityHooks=()=>{
    const orientation = useDevicOrientaion();
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
            }}>orientation :{orientation.landscap} </Text>
        </View>
    )
}
export default CommunityHooks;