import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Pokemon } from '../types/response';

const DetailsScreen = () => {
  const routes = useRoute();
  const pokemon = routes.params as Pokemon;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>{pokemon.name}</Text>
        <Image style={styles.image} source={{ uri: pokemon.sprites.front_default }} />
        <Text style={styles.text}>Habilidades: {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</Text>
        <Text style={styles.text}>Altura: {pokemon.height / 10} m</Text>
        <Text style={styles.text}>Peso: {pokemon.weight / 10} kg</Text>
        <Text style={styles.text}>Especie: {pokemon.species.name}</Text>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF", // Fundo branco
  },
  card: {
    backgroundColor: "#fff8b0", // Moldura amarelo claro
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 2,
    margin: 10,
    resizeMode: "contain",
  },
  text: {
    color: "#000000", // Texto preto
    margin: 10,
  },
});
