import { SectionList, StyleSheet, Text, View } from "react-native";

const menuItemsToDisplay = [
    {
      title: 'Appetizers',
      data: [
        { name: 'Hummus', price: '$5.00' },
        { name: 'Moutabal', price: '$5.00' },
        { name: 'Falafel', price: '$7.50' },
        { name: 'Marinated Olives', price: '$5.00' },
        { name: 'Kofta', price: '$5.00' },
        { name: 'Eggplant Salad', price: '$8.50' },
      ],
    },
    {
      title: 'Main Dishes',
      data: [
        { name: 'Lentil Burger', price: '$10.00' },
        { name: 'Smoked Salmon', price: '$14.00' },
        { name: 'Kofta Burger', price: '$11.00' },
        { name: 'Turkish Kebab', price: '$15.50' },
      ],
    },
    {
      title: 'Sides',
      data: [
        { name: 'Fries', price: '$3.00', id: '11K' },
        { name: 'Buttered Rice', price: '$3.00' },
        { name: 'Bread Sticks', price: '$3.00' },
        { name: 'Pita Pocket', price: '$3.00' },
        { name: 'Lentil Soup', price: '$3.75' },
        { name: 'Greek Salad', price: '$6.00' },
        { name: 'Rice Pilaf', price: '$4.00' },
      ],
    },
    {
      title: 'Desserts',
      data: [
        { name: 'Baklava', price: '$3.00' },
        { name: 'Tartufo', price: '$3.00' },
        { name: 'Tiramisu', price: '$5.00' },
        { name: 'Panna Cotta', price: '$5.00' },
      ],
    },
  ];

  const Item=({name,price})=>(
    <View style={sectionListStyle.innerContainer}>
        <Text style={sectionListStyle.itemText}>{name}</Text>
        <Text style={sectionListStyle.itemText}>{price}</Text>
    </View>
  )


  const SectionListExample1=()=>{

    const renderItem=({item})=><Item name={item.name} price={item.price}/>
    const renderSectionHeader = ({ section: { title } }) => (
      <View style={sectionListStyle.headerStyle}>
        <Text style={sectionListStyle.sectionHeader}>{title}</Text>
      </View>
    );
    const Footer=()=><View style={sectionListStyle.footerText}/>
    return(
        <View style={sectionListStyle.container}>
            <SectionList
             sections={menuItemsToDisplay} 
             keyExtractor={(item, index) => item + index}
             renderItem={renderItem}
             renderSectionHeader={renderSectionHeader}
             renderSectionFooter={Footer}
            //  ItemSeparatorComponent={Separator}

             />
        </View>
    )
  }

  const sectionListStyle=StyleSheet.create({
    container: {
        flex: 0.75,
      },
      innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        display:"flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      itemText: {
        color: '#F4CE14',
        fontSize: 20,
      },
      headerStyle: {
        backgroundColor: '#F4CE14',
      },
      sectionHeader: {
        color: 'black',
        fontSize: 26,
        flexWrap: 'wrap',
        textAlign: 'center',
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
  })

  export default SectionListExample1;