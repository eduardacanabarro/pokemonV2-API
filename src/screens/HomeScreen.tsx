import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator, TextInput } from 'react-native';
import React, { useEffect, useState } from "react";
import { Pokemon } from '../types/response';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const [data, setData] = useState<Pokemon>();
  const [input, setInput] = useState('');
  const url = "https://pokeapi.co/api/v2/pokemon/";


  const getData = async () => {
    try {
      const response = await axios.get<Pokemon>(`${url}/${input.toLowerCase()}`);
        setData(response.data)
        setInput('');
        } catch (error) {
          console.log(error)
        }
  }

  return (
    <View style={styles.container}>
      <View style={styles.centered}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do Pokémon"
          onChangeText={setInput}
          value={input}
          placeholderTextColor="#000"
        />
        <TouchableOpacity style={styles.button} onPress={getData}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
      </View>
      {data && (
        <TouchableOpacity onPress={() => navigation.navigate('Details',  data)}>
          <View style={styles.item}>
            <Text style={styles.title}>{data ? data.name : ""}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8b0', // Amarelo claro
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: 200,
    color: '#000', // Texto preto
  },
  button: {
    backgroundColor: '#fff', // Botão branco
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000', // Borda preta
  },
  buttonText: {
    color: '#000', // Texto preto
    fontWeight: 'bold',
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    color: '#000', // Texto preto
  },
});

export default HomeScreen;
