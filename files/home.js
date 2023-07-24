import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons' 

export default function Home({ data,func }) {
  return (
        <View style={styles.data}>
          <TouchableOpacity onPress={()=>func(data.id)}>
            <MaterialIcons name='delete' size={30} color='black'/>
          </TouchableOpacity>
          <Text style={styles.text}>{data.work}</Text>
        </View>
  );
}

const styles = StyleSheet.create({
  data: {
    marginTop: 20,
    backgroundColor: 'rgb(165, 88, 207)',
    padding: 10,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row'
  },
  text: {
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 30,
    color: 'white',
    alignItems: 'center'
  }
});