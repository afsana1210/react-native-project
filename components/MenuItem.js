import { ScrollView, View ,Text, StyleSheet} from "react-native";
const green="#495E57";
const yellow="#F4CE14";

const menuItemsToDisplay =[
    'Hummus \n Chicken \n Egg \n Kofta \n Biryani \n Pulao \n jeera rice \n chicken stick \n chicken kababa \n Rajma \n Mutton biryani \n Mutton Pulao \n Afgan zaika \n Tandoori \n Kheema \n Paya',
]
const MenuItem =() =>{
    return(
        <View style={{flex: 0.75 }}>
          <ScrollView
          indicatorStyle={"white"}
          style={{
            paddingHorizontal: 40,
            paddingVertical: 40,
            backgroundColor: "black",
          }}
          >
          <Text style={{ fontSize : 40, flexWrap:"wrap", color: 'white'}}>View Menu</Text>
          <Text style={{color:"#F4CE14" ,fontSize: 50}}>{menuItemsToDisplay[0]}</Text>
          </ScrollView>
        </View>
    )
}

export default MenuItem;

const MenuItemStyle=StyleSheet.create({
    container:{
        flex:0.75
    },
    headerText:{
        fontSize : 40, 
        flexWrap:"wrap", 
        color: 'white' 
    },
    itemText:{
        color:"#F4CE14" ,
        fontSize: 50
    }
})