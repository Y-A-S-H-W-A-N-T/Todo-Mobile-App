import { StyleSheet, View, TextInput, Button, Alert,TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState } from 'react';

export default function Add({ addtask }) {
    const [val,setVal] = useState('')

    const Newtask = ()=>{
        if(val.length<4)
        {
            Alert.alert("SORRY","TASK IS TOO SMALL",[
                {text:"OKAY!!!"}
            ])
        }
        else
        {
            addtask(val)
        }
    }

    return (
      <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View>
                <View>
                    <TextInput
                        style={styles.data}
                        placeholder='Add Task'
                        onChangeText={(e)=>setVal(e)}
                    />
                </View>
                <View style={styles.button}>
                    <Button title='ADD' color='rgb(131, 234, 58)' onPress={Newtask}/>
                </View>
            </View>
      </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    data: {
        backgroundColor: 'rgb(176, 235, 134)',
        padding: 10,
        width: '80%',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 30,
        color: 'white',
        marginTop: 20,
        borderRadius: 5
    },
    button: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 5,
    }
  });