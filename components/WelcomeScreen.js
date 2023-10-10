import { View,Text, ScrollView ,Pressable, StyleSheet} from "react-native";


export default function WelcomeScreen({navigation}){
return (
    <>
        <ScrollView 
        indicatorStyle={"white"}
        style={{
             backgroundColor: "black",
            flex: 1
        }}>
        <Text style={{padding:40,fontSize:60,color:"white",textAlign:"center"}}>Welcome to Little Lemon</Text>
        <Text style={{padding:40, fontSize:40,color:"white",textAlign:"center",marginVertical:8}}>Little lemon is a charming neighborhood bistro the serves simple food and classic cocktail in a lively </Text>

        <Pressable onPress={() => navigation.navigate('Menu')}> 
       <Text style={styles.buttonText}>View Menu</Text> 
       </Pressable> 
        </ScrollView>
    </>
)
}

const styles=StyleSheet.create({
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 25,
      },
})