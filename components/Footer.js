import { View ,Text} from "react-native";

export default function Footer(){
    return(
      <View style={{ flex:0.15 ,left: 0,
              bottom: 0,
              width: "100%",backgroundColor:'#EE9972',position:"fixed"}}>
        <Text style={{
                // padding:40,
                fontSize: 30,
                color: 'black',
                textAlign: 'center',  
                fontStyle:"italic"
            }}>
        All rights reserved by Little Lemon, 2022
        </Text>
      </View>
    )
}

// style={{flex:0.15,backgroundColor:'#F4CE14',position: "fixed",
//       left: 0,
//       bottom: 0,
//       width: "100%"}}