import { useState } from "react";
import { Pressable, SectionList, StyleSheet, Text, View } from "react-native"
const menuItemsToDisplay = [
    {
      title: 'Appetizers',
      data: [
        'Hummus',
        'Moutabal',
        'Falafel',
        'Marinated Olives',
        'Kofta',
        'Eggplant Salad',
      ],
    },
    {
      title: 'Main Dishes',
      data: ['Lentil Burger', 'Smoked Salmon', 'Kofta Burger', 'Turkish Kebab'],
    },
    {
      title: 'Sides',
      data: [
        'Fries',
        'Buttered Rice',
        'Bread Sticks',
        'Pita Pocket',
        'Lentil Soup',
        'Greek Salad',
        'Rice Pilaf',
      ],
    },
    {
      title: 'Desserts',
      data: ['Baklava', 'Tartufo', 'Tiramisu', 'Panna Cotta'],
    },
  ];

  const Separator=()=><View style={style.separator}/>
  const Item=({name})=>(
     <View style={style.innerContainer}>
        <Text style={style.itemText}>{name}</Text>
     </View>
  )
  const renderSectionHeader=({section:{title}})=><Text style={style.sectionHeader}>{title}</Text>
  const Footer = () => (
    <Text style={style.footerText}>
      All Rights Reserved by Little Lemon 2022
    </Text>
  );

const PressableComp=()=>{
    const [showMenu,setShowMenu]=useState(false)
    const renderItem=({item})=><Item name={item.name}/>
    return(
        <View style={style.container}>
        {!showMenu && (
          <Text style={style.infoSection}>
            Little Lemon is a charming neighborhood bistro that serves simple food
            and classic cocktails in a lively but casual environment. View our
            menu to explore our cuisine with daily specials!
          </Text>
        )}
        <Pressable
          style={style.button}
          onPress={() => {
            setShowMenu(!showMenu);
          }}>
          <Text style={style.buttonText}>
            {showMenu ? 'Home' : 'View Menu'}
          </Text>
        </Pressable>
        {showMenu && (
          <SectionList
            keyExtractor={(item, index) => item + index}
            sections={menuItemsToDisplay}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            ListFooterComponent={Footer}
            ItemSeparatorComponent={Separator}></SectionList>
        )}
      </View>
    )
}

const style=StyleSheet.create({
    container:{
        flex:1
    },
    innerContainer:{
        paddingHorizontal:40,
        paddingVertical:20,
        backgroundColor:"black"
    },
    sectionHeader: {
        backgroundColor: '#fbdabb',
        color: '#333333',
        fontSize: 34,
        flexWrap: 'wrap',
        textAlign: 'center',
      },
      itemText: {
        color: '#F4CE14',
        fontSize: 32,
      },
      separator: {
        borderBottomWidth: 1,
        borderColor: '#EDEFEE',
      },
      footerText: {
        color: '#EDEFEE',
        fontSize: 20,
        flexWrap: 'wrap',
        textAlign: 'center',
      },
      button:{
        fontSize:22,
        padding:10,
        marginVertical:8,
        margin:8,
        backgroundColor:"#EDEFEE",
        borderColor:"#EDEFEE",
        borderWidth:2,
        borderRadius:12
      },
      buttonText:{
        fontSize:12,
        color:"#333333",
        textAlign:"center"
      }
})

export default PressableComp;