import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, TextInput } from 'react-native';

import Constansts from 'expo-constants';

export default function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  function handleAddTodo() {
    setTodoList([...todoList, todo]);
  }
  function handleDeleteTodo(key) {
    todoList.splice(key, 1);
    setTodoList([...todoList]);
  }

  return (
    <>
      <View style={styles.statusBar}/>
      <StatusBar barStyle='white-content' hidden = {false} backgroundColor = "#df4723" translucent/>

      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headetTitle}>TODO List</Text>
        </View>

        <ScrollView style={styles.list}>
          {todoList.map((item, key) => (
            <View key={key} style={styles.todo}>
              <Text style={styles.todoText}>• {item}</Text>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteTodo(key)}
              >
                <Text style={styles.buttonText}>Deletar</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View style={styles.addContainer}>
            <TextInput
              style={styles.input}
              placeholder="Digite um tarefa"
              placeholderTextColor="#999"
              onChangeText={setTodo}
              value={todo}
            />
            <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
              <Text style={styles.buttonText}>Adicionar +</Text>
            </TouchableOpacity>
        </View>

      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#df4723',
  },
  headetTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  statusBar: {
    backgroundColor: '#df4723',
    height: Constansts.statusBarHeight,
  },
  list: {
    padding: 15,
  },
  todo: {
    paddingLeft: 15,
    flexDirection: 'row',
    height: 40,
  },
  todoText: {
    fontSize: 18,
  },
  deleteButton:{
    marginLeft: 'auto',
    height: 25,
    padding: 5,
    justifyContent: 'center',
    backgroundColor: '#df4723',
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  addContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,
  },
  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#df4723',
    borderRadius: 4,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
