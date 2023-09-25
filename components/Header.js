import { Text, View } from "react-native"

export default  function Header(){
return (
    <View style={{ flex: 0.1, backgroundColor: '#EE9972' }}>
    <Text
      style={{
        padding: 60,
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
      }}>
      Little Lemon
    </Text>
  </View>
)
}