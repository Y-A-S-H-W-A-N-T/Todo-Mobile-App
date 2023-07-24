import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Navbar() {
  return (
    <View style={styles.data}>
      <Text style={styles.head}>TO DO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  data: {
    backgroundColor : 'orchid',
    padding : 10,
    marginTop: 40
  },
  head: {
    fontWeight : 'bold',
    fontSize : 40,
    textAlign : 'center',
    marginTop: 10
  }
});