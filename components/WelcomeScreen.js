import { View,Text, ScrollView } from "react-native";


export default function WelcomeScreen(){
return (
    <>
    {/* <View style={{flex:0.75}}> */}
        <ScrollView 
        indicatorStyle={"white"}
        style={{
            //  paddingHorizontal: 40,
            //  paddingVertical: 40,
             backgroundColor: "black",
            flex: 1
        }}>
        <Text style={{padding:40,fontSize:60,color:"white",textAlign:"center"}}>Welcome to Little Lemon</Text>
        <Text style={{padding:40, fontSize:40,color:"white",textAlign:"center",marginVertical:8}}>Little lemon is a charming neighborhood bistro the serves simple food and classic cocktail in a lively dfkldsjflkjfkljdskfdklf fndknfkdnf dnfalsknfmdnvj jfnjdnv mdnvejwfnvcc jfncnjfe kncdm lwjef jcndkhfliefnmv  jdnvkldjfiejnv dnckvdjligjndnv mdnckldjfiejnv dmvnldshfilehjnv mvndljfoiej dmnvjkdhfoeh dmnckjehfoihe cnlekfihe</Text>

        {/* <Text>some text <Text>Again Text</Text></Text> */}
        {/* <View>some text....</View> */}
        </ScrollView>
        
       
    {/* </View> */}
    </>
)
}