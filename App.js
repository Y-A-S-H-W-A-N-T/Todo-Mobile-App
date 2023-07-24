import { StyleSheet, View, FlatList, Modal, TouchableOpacity, TextInput, Button } from 'react-native'
import { useState } from 'react'
import Navbar from './files/navbar'
import Home from './files/home'
import Add from './files/add'
import { Ionicons } from '@expo/vector-icons'
import Form from './files/Modal'

export default function App() {
  const [todo,setTodo] = useState([
    { work : 'Wake up', id : '1'},
    { work : 'Brush', id : '2'},
    { work : 'Breakfast', id : '3'},
    { work : 'Play on PS5', id : '4'},
    { work : 'Play Valorant', id : '5'},
    { work : 'Code', id : '6'},
    { work : 'Lunch', id : '7'},
    { work : 'Gym', id : '8'},
    { work : 'Dinner', id : '9'},
    { work : 'Use mobile', id : '10'},
    { work : 'Gym', id : '11'},
    { work : 'Sleep', id : '12'}
  ])

  const [modal,modalStatus] = useState(false)

  const AddTask = (value)=>{
    setTodo((prevtodo)=>{
      return [
        { work : value, id : Math.random().toString() },
        ...prevtodo
      ]
    })
  }


  const deletework = (id)=>{
    setTodo((prevtodo)=>{
      return todo.filter(todo=>todo.id!=id)
    })
  }

  return (
    <View style={styles.container}>
      <View >
        <Navbar/>
      </View>
      <View style={styles.container}>
        <FlatList
        keyExtractor={(item)=>item.id}
          data={todo}
          renderItem={({ item })=>(
            <Home data={ item } func={ deletework }/>
          )}
        />
        <Add addtask={ AddTask }/>
        <Form modal={modal} modalStatus={modalStatus} addtask={ AddTask }/>
        <TouchableOpacity style={styles.add} onPress={()=>modalStatus(true)}>
          <Ionicons name="ios-add-circle-sharp" size={80} color='orchid'/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
