import { View, TextInput, Modal, StyleSheet,Button, TouchableOpacity, Alert } from 'react-native'
import { React, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'

const Form = (props) => {

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
        props.addtask(val)
        props.modalStatus(false)
    }
  }

  return (
    <View>
      <Modal visible={props.modal} style={styles.modal}>
          <View style={styles.modal}>
            <TextInput placeholder='Enter Task' style={styles.input} onChangeText={(e)=>setVal(e)}/>
            <View style={styles.button}>
              <Button title='ADD' color='rgb(131, 234, 58)' onPress={Newtask}/>
            </View>
            <TouchableOpacity style={styles.cross} onPress={()=>props.modalStatus(false)}>
              <FontAwesome name="remove" size={80} color='orchid' />
            </TouchableOpacity>
          </View>
        </Modal>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    add: {
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    modal: {
      marginTop: 'auto',
      marginLeft: 40,
      marginRight: 40,
      marginBottom: 'auto',
    },
    input: {
      backgroundColor: 'yellow',
      color: 'green',
      padding: 10,
      fontSize: 30,
      textAlign: 'center'
    },
    cross: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    button: {
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 5,
    }
  });