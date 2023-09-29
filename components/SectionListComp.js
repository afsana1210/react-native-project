
import { FlatList, Text, View,StyleSheet, SectionList } from "react-native"

const Data=[
 {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },]

const SectionListComp=()=>{
    return(
        <View>
            <SectionList 
            sections={Data}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => (
           <View style={SectionListStyle.item}>
           <Text style={SectionListStyle.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={SectionListStyle.header}>{title}</Text>
      )}
            />
        </View>
    )
}

const SectionListStyle=StyleSheet.create({
    container:{
        flex:0.75
    },
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        backgroundColor: 'black',
      },
      headerText: {
        color: 'white',
        fontSize: 40,
        flexWrap: 'wrap',
        textAlign: 'center',
      },
      itemText: {
        color: '#F4CE14',
        fontSize: 36,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
      },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
      },
      header: {
        fontSize: 32,
        backgroundColor: '#fff',
      },
      title: {
        fontSize: 24,
      },
})

export default SectionListComp;